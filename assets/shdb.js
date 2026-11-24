/* StudyHub data client: a small stand-in for the Supabase table client.
   Login stays with Supabase; all personal data lives on our Swiss server (study-hub.ch/api/db.php, MariaDB).
   Usage (same shape as supabase-js):  db.from('progress').select('page,done').eq('page', p).maybeSingle().then(r => r.data / r.error)
   Create with SHDB.client(sb) where sb is the Supabase client (only used to read the current login token). */
(function (root) {
  var API = (root.SH_DB_URL || 'https://study-hub.ch/api/db.php');

  function call(getToken, body) {
    return Promise.resolve(getToken ? getToken() : null).then(function (token) {
      var h = { 'Content-Type': 'application/json' };
      if (token) h.Authorization = 'Bearer ' + token;
      return fetch(API, { method: 'POST', headers: h, body: JSON.stringify(body), credentials: 'omit' });
    }).then(function (res) {
      return res.json().catch(function () { return { data: null, error: { message: 'Server error (' + res.status + ').' } }; });
    }).then(function (j) {
      return { data: j && 'data' in j ? j.data : null, error: j && j.error ? j.error : null };
    }, function (e) {
      return { data: null, error: { message: (e && e.message) || 'Network error.' } };
    });
  }

  function Query(getToken, table) {
    this._t = getToken; this.q = { t: table, op: 'select', f: [] };
  }
  Query.prototype = {
    select: function (cols) {
      if (this.q.op === 'select') this.q.cols = cols || '*'; else this.q.ret = true;
      return this;
    },
    insert: function (v) { this.q.op = 'insert'; this.q.v = v; return this; },
    upsert: function (v) { this.q.op = 'upsert'; this.q.v = v; return this; },
    update: function (v) { this.q.op = 'update'; this.q.v = v; return this; },
    delete: function () { this.q.op = 'delete'; return this; },
    eq: function (c, v) { this.q.f.push([c, 'eq', v]); return this; },
    neq: function (c, v) { this.q.f.push([c, 'neq', v]); return this; },
    gt: function (c, v) { this.q.f.push([c, 'gt', v]); return this; },
    gte: function (c, v) { this.q.f.push([c, 'gte', v]); return this; },
    lt: function (c, v) { this.q.f.push([c, 'lt', v]); return this; },
    lte: function (c, v) { this.q.f.push([c, 'lte', v]); return this; },
    in: function (c, v) { this.q.f.push([c, 'in', v]); return this; },
    is: function (c) { this.q.f.push([c, 'is', null]); return this; },
    not: function (c, op, v) {
      if (op === 'is' && v === null) this.q.f.push([c, 'not_is', null]);
      else if (op === 'eq') this.q.f.push([c, 'neq', v]);
      else throw new Error('shdb: unsupported not(' + op + ')');
      return this;
    },
    order: function (c, o) { (this.q.order = this.q.order || []).push([c, !(o && o.ascending === false)]); return this; },
    limit: function (n) { this.q.limit = n; return this; },
    single: function () { this.q.one = 'single'; return this; },
    maybeSingle: function () { this.q.one = 'maybe'; return this; },
    then: function (ok, bad) { return call(this._t, this.q).then(ok, bad); },
    catch: function (bad) { return this.then(null, bad); }
  };

  function client(sbOrGetToken) {
    var getToken = typeof sbOrGetToken === 'function' ? sbOrGetToken : function () {
      if (!sbOrGetToken || !sbOrGetToken.auth) return null;
      return sbOrGetToken.auth.getSession().then(function (r) { return r && r.data && r.data.session ? r.data.session.access_token : null; });
    };
    return {
      from: function (t) { return new Query(getToken, t); },
      rpc: function (name, args) { return { then: function (ok, bad) { return call(getToken, { rpc: name, a: args || {} }).then(ok, bad); },
                                            catch: function (bad) { return this.then(null, bad); } }; }
    };
  }
  // wrap(sb): the Supabase client with .from() and .rpc() sent to our server instead. Everything else
  // (sb.auth for login, sb.storage for the Exam Dive question bank) still goes to Supabase.
  // Only 'delete_my_account' stays a Supabase rpc (it removes the login); before it, our server deletes all data.
  function wrap(sb) {
    if (!sb || sb.__shdb) return sb;
    var db = client(sb), w = Object.create(sb);
    w.__shdb = true; w.db = db; w.raw = sb;
    w.from = function (t) { return db.from(t); };
    w.rpc = function (name, args) {
      if (name !== 'delete_my_account') return db.rpc(name, args);
      return db.rpc('delete_my_data').then(function (r) { return r.error ? r : sb.rpc('delete_my_account', args); });
    };
    return w;
  }
  root.SHDB = { client: client, wrap: wrap };
})(typeof window !== 'undefined' ? window : globalThis);
