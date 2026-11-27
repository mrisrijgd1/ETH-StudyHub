/* StudyHub focus trail: a calm hiking window above the study planner.
   A small hiker walks through an endless, changing mountain landscape. The hiker walks briskly while the
   focus timer runs, sits down to rest during breaks and strolls slowly otherwise.
   Everything is made here: the landscape is drawn in code on a canvas and the nature sounds are
   generated with the Web Audio API. No images, no audio files, no fonts, no network requests.
   Settings (look of the hiker, timer, volumes, trail journal) stay in this browser: localStorage key
   "sh-focus-hike". Nothing is sent to a server. */
(function(){
"use strict";
const host=document.getElementById("focus-hike");
if(!host||host.dataset.ready)return;
host.dataset.ready="1";

/* ---------------- settings, kept in this browser only ---------------- */
const KEY="sh-focus-hike";
const RM=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:false};
const PRESETS=[[25,5],[50,10],[90,20]];
const DEF={look:{skin:1,hair:1,style:1,hat:1,jacket:0,pack:2,pants:0,stick:1,dog:1,name:""},
  pos:1800,focusPx:0,sessions:0,days:{},places:[],seen:{},
  snd:{birds:.7,wind:.45,water:.6,rain:.5,vol:.7,follow:true},
  timer:{preset:0,mode:"focus",running:false,endAt:0,left:25*60000,chime:true},
  collapsed:false,sky:"clock"};
function merge(d,o){const r=Array.isArray(d)?d.slice():Object.assign({},d);if(!o||typeof o!=="object")return r;
  for(const k in o){if(d&&d[k]&&typeof d[k]==="object"&&!Array.isArray(d[k]))r[k]=merge(d[k],o[k]);else r[k]=o[k];}return r;}
let S=DEF;
try{S=merge(DEF,JSON.parse(localStorage.getItem(KEY)||"null"));}catch(e){S=merge(DEF,null);}
if(!isFinite(S.pos))S.pos=DEF.pos;
let saveT=0;
function save(){clearTimeout(saveT);saveT=0;try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function saveSoon(){if(!saveT)saveT=setTimeout(save,2500);}
addEventListener("pagehide",save);

/* ---------------- small maths ---------------- */
function h1(i){let n=Math.imul((i|0)^0x9e3779b9,0x85ebca6b);n^=n>>>13;n=Math.imul(n,0xc2b2ae35);n^=n>>>16;return (n>>>0)/4294967296;}
function h2(a,b){return h1(Math.imul(a|0,73856093)^Math.imul(b|0,19349663));}
function noise(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return h1(i)*(1-u)+h1(i+1)*u;}
function fbm(x){return noise(x)*.58+noise(x*2.13+17.3)*.28+noise(x*4.71+71.1)*.14;}
const clamp=(v,a,b)=>v<a?a:v>b?b:v, lerp=(a,b,t)=>a+(b-a)*t, sm=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
function mixc(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
function hex(h){h=h.replace("#","");return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function rgb(c,a){return a==null||a>=1?"rgb("+(c[0]|0)+","+(c[1]|0)+","+(c[2]|0)+")":"rgba("+(c[0]|0)+","+(c[1]|0)+","+(c[2]|0)+","+a.toFixed(3)+")";}

/* ---------------- the trail: landscapes along the way ---------------- */
const BIO={
 meadow:{grass:[150,196,92],field:[128,180,86],hill:[106,160,84],path:[218,196,146],trees:.28,front:0,water:0,pond:0,stream:0,rock:.06,elev:.1,flowers:1,cows:0,mush:0,con:.25},
 lake:  {grass:[138,188,92],field:[120,172,88],hill:[96,150,86],path:[216,196,150],trees:.36,front:0,water:1,pond:0,stream:0,rock:.12,elev:.16,flowers:.5,cows:0,mush:0,con:.5},
 forest:{grass:[96,146,72],field:[68,114,62],hill:[58,104,64],path:[184,154,110],trees:1,front:1,water:0,pond:0,stream:0,rock:.1,elev:.26,flowers:.12,cows:0,mush:1,con:.8},
 pond:  {grass:[128,180,90],field:[112,166,86],hill:[94,148,82],path:[210,190,142],trees:.45,front:.1,water:0,pond:1,stream:0,rock:.05,elev:.08,flowers:.7,cows:0,mush:.2,con:.3},
 brook: {grass:[120,174,86],field:[104,158,82],hill:[90,140,80],path:[208,186,138],trees:.55,front:.25,water:0,pond:0,stream:1,rock:.25,elev:.32,flowers:.5,cows:0,mush:.4,con:.6},
 alpine:{grass:[160,198,100],field:[148,190,98],hill:[126,166,98],path:[204,188,152],trees:.07,front:0,water:0,pond:0,stream:.35,rock:.45,elev:.72,flowers:1,cows:1,mush:0,con:1},
 rocky: {grass:[170,168,144],field:[152,152,138],hill:[130,134,130],path:[192,186,170],trees:.03,front:0,water:0,pond:0,stream:0,rock:1,elev:1,flowers:.2,cows:0,mush:0,con:1}
};
const ORDER=["meadow","lake","forest","pond","brook","alpine","rocky","alpine","forest","lake"];
const SEG=7000,TR=1500;
const NAMES={meadow:["Buttercup Meadow","Clover Slope","Sunny Pasture","Hayfield Bend"],lake:["Mirror Lake","Blue Tarn","Stillwater","Reed Bay"],
 forest:["Pine Hollow","Mossy Wood","Old Spruce Forest","Fern Glen"],pond:["Lily Pond","Frog Pond","Reed Pool","Dragonfly Pond"],
 brook:["Willow Brook","Pebble Creek","Alder Stream","Little Falls"],alpine:["Gentian Alp","High Pasture","Cowbell Alp","Marmot Meadow"],
 rocky:["Eagle Ridge","Granite Path","Ibex Crags","Windy Saddle"]};
const LABEL={meadow:"a flower meadow",lake:"the shore of a mountain lake",forest:"a dense forest",pond:"a pond",brook:"a brook valley",alpine:"an alpine pasture",rocky:"a rocky mountainside"};
const NUMK=["trees","front","water","pond","stream","rock","elev","flowers","cows","mush","con"];
function bioAt(i){i=((i%ORDER.length)+ORDER.length)%ORDER.length;return ORDER[i];}
function segOf(wx){return Math.floor(wx/SEG);}
function placeName(i){const b=bioAt(i),l=NAMES[b];return l[Math.floor(h1(i*7+3)*l.length)];}
function P(wx){
  const i=segOf(wx),f=wx-i*SEG;let a=BIO[bioAt(i)],b=a,k=0;
  if(f<TR/2){b=BIO[bioAt(i-1)];k=sm(.5-f/TR);} else if(f>SEG-TR/2){b=BIO[bioAt(i+1)];k=sm(.5-(SEG-f)/TR);}
  if(k<=0)return a;
  const r={};for(const n of NUMK)r[n]=a[n]+(b[n]-a[n])*k;
  r.grass=mixc(a.grass,b.grass,k);r.field=mixc(a.field,b.field,k);r.hill=mixc(a.hill,b.hill,k);r.path=mixc(a.path,b.path,k);return r;
}

/* ---------------- looks ---------------- */
const SKIN=["#f7dcc8","#ecc3a2","#d49d74","#b0764f","#8a5537","#5e3a25"];
const HAIR=["#2a201b","#5b3a24","#9b6a3a","#dcb56c","#b4462a","#8f8f8f","#ece6da"];
const STYLE=["Short","Ponytail","Long","Bun","Curly"];
const HAT=["None","Beanie","Cap","Sun hat"];
const JACKET=["#d9534f","#2f7dd1","#f0a830","#3e9a6a","#7a5cc4","#e07aa5","#2e3a4a","#ece4cf"];
const PACK=["#3b4a5a","#8a5a2b","#c0392b","#2a7f62","#e0b820","#6c5ce7"];
const PANTS=["#3d4a5c","#5a4632","#2e2e2e","#6b7b4b","#9a8d72"];
const DOG=["No companion","Golden dog","Spotted dog"];

/* ---------------- spotting game ---------------- */
const SPOT=[["deer","Deer"],["fox","Fox"],["cow","Alpine cow"],["marmot","Marmot"],["ibex","Ibex"],["eagle","Golden eagle"],["ducks","Ducks"],["fish","Jumping fish"],
 ["frog","Frog"],["heron","Heron"],["butterfly","Butterfly"],["dragonfly","Dragonfly"],["balloon","Hot-air balloon"],["paraglider","Paraglider"],["rainbow","Rainbow"],["star","Shooting star"],["fireflies","Fireflies"],["squirrel","Squirrel"]];
let toastMsg="",toastUntil=0;
function spot(k,sx){if(sx!=null&&(sx<8||sx>VW-8))return;if(S.seen[k])return;S.seen[k]=new Date().toISOString().slice(0,10);
  const n=SPOT.find(s=>s[0]===k);toast("New in your trail journal: "+(n?n[1]:k));saveSoon();renderJournal();}

/* ---------------- DOM ---------------- */
const IC={
 snd:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5c1.2 1 1.8 2.2 1.8 3.5s-.6 2.5-1.8 3.5M18.5 6c2 1.6 3 3.6 3 6s-1 4.4-3 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
 mute:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 9.5l5 5m0-5l-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
 play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>',
 pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg>',
 reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12a7 7 0 1 0 2.1-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 4v4.5h4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 more:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 hiker:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13" cy="4.5" r="2.2" fill="currentColor"/><path d="M12 8l-2 6 3 2 1 6M10 14l-2 7M12 8l3 4 3 1M10.5 9.5L8 8.5 6.5 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5v13c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 6v13" stroke="currentColor" stroke-width="1.8"/></svg>',
 min:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 max:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};
host.className="fh";
host.setAttribute("role","region");
host.setAttribute("aria-label","Focus trail: focus timer and nature sounds");
host.innerHTML=
 '<div class="fh-bar">'+
  '<span class="fh-dots" aria-hidden="true"><i></i><i></i><i></i></span>'+
  '<span class="fh-title"><b id="fh-place">Trail</b><span id="fh-km"></span></span>'+
  '<span class="fh-mini" id="fh-mini" hidden></span>'+
  '<button type="button" class="fh-ib" data-a="journal" aria-haspopup="dialog" title="Trail journal">'+IC.book+'<span class="fh-sr">Trail journal</span></button>'+
  '<button type="button" class="fh-ib" data-a="look" aria-haspopup="dialog" title="Personalise your hiker">'+IC.hiker+'<span class="fh-sr">Personalise your hiker</span></button>'+
  '<button type="button" class="fh-ib" data-a="collapse" aria-expanded="true" title="Hide the landscape">'+IC.min+'<span class="fh-sr">Hide the landscape</span></button>'+
 '</div>'+
 '<div class="fh-scene" id="fh-scene">'+
  '<canvas id="fh-cv" role="img" aria-label="A small hiker on a mountain trail"></canvas>'+
  '<div class="fh-toast" id="fh-toast" aria-live="polite"></div>'+
  '<div class="fh-ctl fh-l">'+
   '<button type="button" class="fh-pill" id="fh-snd" aria-pressed="false">'+IC.mute+'<span>Nature sounds</span></button>'+
   '<button type="button" class="fh-pill fh-sq" data-a="mixer" aria-haspopup="dialog" title="Sound mixer">'+IC.more+'<span class="fh-sr">Sound mixer</span></button>'+
  '</div>'+
  '<div class="fh-ctl fh-r">'+
   '<button type="button" class="fh-pill fh-time" data-a="timerset" aria-haspopup="dialog" title="Timer settings"><small id="fh-mode">Focus</small><b id="fh-clock">25:00</b></button>'+
   '<button type="button" class="fh-pill fh-sq fh-go" id="fh-go" title="Start focus">'+IC.play+'<span class="fh-sr">Start</span></button>'+
   '<button type="button" class="fh-pill fh-sq" id="fh-reset" title="Reset timer">'+IC.reset+'<span class="fh-sr">Reset timer</span></button>'+
  '</div>'+
 '</div>'+
 '<div class="fh-pop" id="fh-pop" role="dialog" aria-modal="false" hidden></div>';
const $=id=>document.getElementById(id);
const scene=$("fh-scene"),cv=$("fh-cv"),pop=$("fh-pop");
let cx=cv.getContext("2d");

/* ---------------- canvas size: scene units are 220 high ---------------- */
const VH=220;let VW=800,CW=800,CH=220,DPR=1,HX=240;
function resize(){
  const r=scene.getBoundingClientRect();if(!r.width)return;
  CW=r.width;CH=r.height||200;DPR=Math.min(2,window.devicePixelRatio||1);
  cv.width=Math.round(CW*DPR);cv.height=Math.round(CH*DPR);
  VW=CW*VH/CH;HX=Math.min(VW*.3,320);
  draw(performance.now());
}
if(window.ResizeObserver)new ResizeObserver(resize).observe(scene);else addEventListener("resize",resize);

/* ---------------- time of day, weather ---------------- */
let T0=performance.now();
function hourNow(){if(S.sky==="day")return 12.5;const d=new Date();return d.getHours()+d.getMinutes()/60;}
const W={cloud:.3,rain:0,fog:.1,tc:.3,tr:0,tf:.1,next:0,rainHi:-1e9,bow:0};
const WOPT=[["clear",.08,0,0,3],["fair",.35,0,.05,4],["cloudy",.68,0,.1,2],["drizzle",.78,.35,.15,1.4],["rain",.88,.75,.1,1],["mist",.5,0,.75,1.2]];
function pickWeather(first){
  let tot=0;for(const o of WOPT)tot+=o[4];let r=Math.random()*tot,o=WOPT[0];for(const q of WOPT){r-=q[4];if(r<=0){o=q;break;}}
  if(first&&o[2]>0.5)o=WOPT[1];
  W.tc=o[1];W.tr=o[2];W.tf=o[3];W.name=o[0];W.next=nowS()+150+Math.random()*240;
  if(first){W.cloud=W.tc;W.rain=W.tr*.5;W.fog=W.tf;}
}
function nowS(){return performance.now()/1000;}
pickWeather(true);
function weatherStep(dt){
  if(nowS()>W.next)pickWeather(false);
  const k=1-Math.exp(-dt/35);W.cloud+=(W.tc-W.cloud)*k;W.rain+=(W.tr-W.rain)*k;W.fog+=(W.tf-W.fog)*k;
  if(W.rain>.35)W.rainHi=nowS();
  const sinceRain=nowS()-W.rainHi;
  const want=(W.rain<.15&&sinceRain<100&&sinceRain>4)?1:0;W.bow+=(want-W.bow)*(1-Math.exp(-dt/8));
}
function weatherLabel(){const p=elevNow>.6&&W.rain>.2?"snow flurries":W.rain>.5?"rain":W.rain>.15?"drizzle":W.fog>.45?"mist":W.cloud>.6?"clouds":W.cloud>.25?"a few clouds":"clear sky";return p;}

/* ---------------- sky colours ---------------- */
const C={dayT:hex("7db6e2"),dayB:hex("dcf0f2"),duskT:hex("6c78b6"),duskB:hex("f5b58c"),nightT:hex("0e1734"),nightB:hex("2b375f"),ovT:hex("98a6b3"),ovB:hex("ccd3d7"),
  nightTint:[22,30,58]};
let sky={top:C.dayT,bot:C.dayB,day:1,dusk:0,night:0,sunA:.5,h:12};
function skyCalc(){
  const h=hourNow(),alt=Math.sin(Math.PI*(h-6.5)/13.5);
  const day=sm(alt*3+.35),dusk=Math.exp(-(alt*alt)/.03)*(h>4&&h<22?1:0);
  let t=mixc(C.nightT,C.dayT,day),b=mixc(C.nightB,C.dayB,day);
  t=mixc(t,C.duskT,dusk*.55);b=mixc(b,C.duskB,dusk*.75);
  const ov=clamp(W.cloud*.55+W.rain*.35,0,.85)*(.35+.65*day);
  t=mixc(t,mixc(C.nightT,C.ovT,day),ov);b=mixc(b,mixc(C.nightB,C.ovB,day),ov);
  sky={top:t,bot:b,day,dusk,night:1-day,alt,h};
}
/* every landscape colour goes through here: distance haze, night, grey weather */
function col(c,haze,a){
  let r=haze?mixc(c,sky.bot,haze):c;
  r=mixc(r,C.nightTint,sky.night*.62);
  const g=(r[0]+r[1]+r[2])/3;r=mixc(r,[g,g,g],clamp(W.cloud*.18+W.rain*.2,0,.35));
  if(sky.dusk>.05)r=mixc(r,[255,170,120],sky.dusk*.12*(1-sky.night));
  return rgb(r,a);
}

/* ---------------- hiker state ---------------- */
let mode="idle",walkPh=0,sitK=0,elevNow=.1,lastSeg=segOf(S.pos);
const SPEED={focus:30,idle:11,rest:0};
function hikerMode(){const t=S.timer;return t.running?(t.mode==="focus"?"focus":"rest"):"idle";}

/* ---------------- drawing helpers ---------------- */
function poly(pts){cx.beginPath();cx.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)cx.lineTo(pts[i],pts[i+1]);cx.closePath();}
function circ(x,y,r){cx.beginPath();cx.arc(x,y,r,0,Math.PI*2);cx.fill();}
function ell(x,y,rx,ry,rot){cx.beginPath();cx.ellipse(x,y,rx,ry,rot||0,0,Math.PI*2);cx.fill();}
function lx(sx,p,pos){return pos*p+(sx-HX);}         // layer coordinate of a screen column
function sxOf(L,p,pos){return L-pos*p+HX;}             // screen column of a layer coordinate
function wxOf(L,p){return L/p;}                       // trail position whose landscape a layer point shows
/* ridge drawn as a filled band from a top line down to the bottom */
function band(p,pos,step,yf,fill){
  cx.beginPath();cx.moveTo(-2,VH+2);
  for(let sx=-4;sx<=VW+step;sx+=step){cx.lineTo(sx,yf(lx(sx,p,pos),sx));}
  cx.lineTo(VW+4,VH+2);cx.closePath();cx.fillStyle=fill;cx.fill();
}

function conifer(x,y,h,base,light,haze){
  const w=h*.42;
  cx.fillStyle=col([90,66,48],haze);cx.fillRect(x-h*.035,y-h*.16,h*.07,h*.16);
  for(let k=0;k<3;k++){const yb=y-h*.12-k*h*.25,ht=h*.42,ww=w*(1-k*.22);
    cx.fillStyle=col(base,haze);poly([x-ww,yb,x,yb-ht,x+ww,yb]);cx.fill();
    cx.fillStyle=col(light,haze);poly([x,yb-ht,x+ww,yb,x+ww*.15,yb]);cx.fill();}
}
function leafy(x,y,h,base,light,haze){
  cx.fillStyle=col([108,80,56],haze);cx.fillRect(x-h*.04,y-h*.45,h*.08,h*.45);
  cx.fillStyle=col(base,haze);circ(x-h*.18,y-h*.55,h*.24);circ(x+h*.18,y-h*.56,h*.22);circ(x,y-h*.75,h*.27);
  cx.fillStyle=col(light,haze);circ(x+h*.08,y-h*.8,h*.15);circ(x+h*.22,y-h*.6,h*.11);
}
function birch(x,y,h,base,light,haze){
  cx.fillStyle=col([236,232,222],haze);cx.fillRect(x-h*.025,y-h*.6,h*.05,h*.6);
  cx.fillStyle=col([60,60,60],haze);for(let k=1;k<5;k++)cx.fillRect(x-h*.025,y-h*.12*k,h*.03,h*.012);
  cx.fillStyle=col(mixc(base,[180,200,90],.35),haze);ell(x,y-h*.72,h*.17,h*.26);
  cx.fillStyle=col(light,haze);ell(x+h*.05,y-h*.8,h*.09,h*.14);
}
function boulder(x,y,w,h,seed,haze){
  const a=h1(seed),b=h1(seed+1);
  const pts=[x-w*.5,y,x-w*(.45+a*.1),y-h*.55,x-w*.15,y-h*(.95+b*.05),x+w*.25,y-h,x+w*.5,y-h*.45,x+w*.52,y];
  cx.fillStyle=col([142,142,136],haze);poly(pts);cx.fill();
  cx.fillStyle=col([178,176,168],haze);poly([x-w*(.45+a*.1),y-h*.55,x-w*.15,y-h*(.95+b*.05),x+w*.25,y-h,x+w*.05,y-h*.55]);cx.fill();
  cx.fillStyle=col([112,112,108],haze);poly([x+w*.25,y-h,x+w*.5,y-h*.45,x+w*.52,y,x+w*.2,y]);cx.fill();
}

/* ---------------- creatures ---------------- */
function bird(x,y,s,ph,c){cx.strokeStyle=c;cx.lineWidth=1.1*s;cx.lineCap="round";const f=Math.sin(ph)*2.4*s;
  cx.beginPath();cx.moveTo(x-4*s,y-f*.3);cx.quadraticCurveTo(x-2*s,y-f-1*s,x,y);cx.quadraticCurveTo(x+2*s,y-f-1*s,x+4*s,y-f*.3);cx.stroke();}
function deer(x,y,s,t,seed,fox){
  const graze=fox?0:(Math.sin(t*.4+seed*9)>.3?1:0),hd=graze?5*s:0;
  const body=fox?[204,110,48]:[150,98,60];
  cx.fillStyle=col(body,.05);
  ell(x,y-9*s,fox?6*s:7*s,fox?2.6*s:3.4*s);
  cx.strokeStyle=col(fox?[60,40,30]:[110,72,44],.05);cx.lineWidth=1.2*s;cx.beginPath();
  const ly=fox?6.5*s:6*s;
  for(const dx of [-4.5,-3,3,4.5]){cx.moveTo(x+dx*s,y-8*s);cx.lineTo(x+dx*s+(dx>0?.5:-.5)*s*Math.sin(seed),y-8*s+ly);}cx.stroke();
  if(fox){cx.fillStyle=col(body,.05);ell(x-8*s,y-9*s,4.5*s,1.8*s,-.25);cx.fillStyle=col([245,240,230],.05);circ(x-11.5*s,y-8.4*s,1.3*s);
    cx.fillStyle=col(body,.05);poly([x+5*s,y-10*s,x+10*s,y-9.5*s,x+8*s,y-12.5*s]);cx.fill();poly([x+6.5*s,y-11.5*s,x+7.5*s,y-14*s,x+8.4*s,y-11.6*s]);cx.fill();
    return;}
  cx.fillStyle=col(body,.05);poly([x+4*s,y-10*s,x+7*s,y-15*s+hd,x+9*s,y-14*s+hd,x+6.5*s,y-8.5*s]);cx.fill();
  ell(x+8.5*s,y-15*s+hd,2.6*s,1.5*s,.3);
  cx.fillStyle=col([245,240,230],.05);ell(x-6.8*s,y-10*s,1.2*s,1.4*s);
  if(h1(seed)>.5){cx.strokeStyle=col([120,90,60],.05);cx.lineWidth=.8*s;cx.beginPath();cx.moveTo(x+7.5*s,y-16*s+hd);cx.lineTo(x+6.5*s,y-20*s+hd);cx.lineTo(x+5*s,y-21*s+hd);cx.moveTo(x+6.8*s,y-18.5*s+hd);cx.lineTo(x+8.5*s,y-20*s+hd);cx.stroke();}
}
function cow(x,y,s,t,seed){
  const graze=Math.sin(t*.3+seed*7)>-.2?1:0;
  cx.fillStyle=col([246,243,236],.04);ell(x,y-9*s,8*s,4*s);
  cx.fillStyle=col([140,84,50],.04);ell(x-3*s,y-10*s,2.6*s,2*s);ell(x+3*s,y-8*s,2*s,1.6*s);
  cx.strokeStyle=col([90,70,60],.04);cx.lineWidth=1.5*s;cx.beginPath();for(const dx of [-5.5,-3.5,4,6]){cx.moveTo(x+dx*s,y-6*s);cx.lineTo(x+dx*s,y);}cx.stroke();
  const hy=graze?y-4*s:y-11*s;cx.fillStyle=col([140,84,50],.04);ell(x+9.5*s,hy,2.8*s,2.2*s);
  cx.fillStyle=col([232,190,60],.04);circ(x+8*s,hy+3*s,1*s);
}
function marmot(x,y,s,t,seed){
  const up=sm((Math.sin(t*.5+seed*11)+.2)*3);if(up<.05)return;
  cx.fillStyle=col([150,112,74],.03);ell(x,y-4*s*up,2.6*s,4.5*s*up);circ(x+.6*s,y-8.6*s*up,1.9*s);
  cx.fillStyle=col([60,45,35],.03);circ(x+1.6*s,y-9*s*up,.45*s);
}
function ibex(x,y,s,seed){
  cx.fillStyle=col([118,104,88],.08);ell(x,y-8*s,6*s,3*s);
  cx.strokeStyle=col([96,84,72],.08);cx.lineWidth=1.3*s;cx.beginPath();for(const dx of [-4,-2.5,3,4.5]){cx.moveTo(x+dx*s,y-7*s);cx.lineTo(x+dx*s,y);}cx.stroke();
  cx.fillStyle=col([118,104,88],.08);poly([x+4*s,y-9*s,x+7*s,y-13*s,x+9*s,y-12*s,x+6*s,y-7.5*s]);cx.fill();
  cx.strokeStyle=col([150,136,112],.08);cx.lineWidth=1.2*s;cx.beginPath();cx.moveTo(x+7*s,y-13*s);cx.quadraticCurveTo(x+4*s,y-19*s,x+1.5*s,y-15*s);cx.stroke();
}
function duck(x,y,s,c){cx.fillStyle=c||col([120,96,70]);ell(x,y,3.6*s,1.7*s);circ(x+3*s,y-2*s,1.4*s);
  cx.fillStyle=col([230,170,60]);poly([x+4.2*s,y-2.1*s,x+5.8*s,y-1.7*s,x+4.2*s,y-1.4*s]);cx.fill();}
function butterfly(x,y,t,c){const f=Math.abs(Math.sin(t*14))*1.8+.4;cx.fillStyle=c;ell(x-1.4,y,f,2.2,-.5);ell(x+1.4,y,f,2.2,.5);cx.fillStyle="rgba(40,30,30,.8)";cx.fillRect(x-.3,y-1.8,.6,3.4);}

/* ---------------- the hiker ---------------- */
function limb(x,y,a1,l1,a2,l2,w,c){
  const kx=x+Math.sin(a1)*l1,ky=y+Math.cos(a1)*l1,fx=kx+Math.sin(a2)*l2,fy=ky+Math.cos(a2)*l2;
  cx.strokeStyle=c;cx.lineWidth=w;cx.lineCap="round";cx.lineJoin="round";cx.beginPath();cx.moveTo(x,y);cx.lineTo(kx,ky);cx.lineTo(fx,fy);cx.stroke();return [fx,fy];
}
function drawHiker(x,y,s,L,ph,sit,haze,night){
  const c=(h)=>col(hex(h),haze),skin=c(SKIN[L.skin]||SKIN[1]),hair=c(HAIR[L.hair]||HAIR[1]),jacket=hex(JACKET[L.jacket]||JACKET[0]);
  const pack=hex(PACK[L.pack]||PACK[0]),pants=c(PANTS[L.pants]||PANTS[0]),boot=col([58,44,36],haze);
  cx.save();cx.translate(x,y);cx.scale(s,s);
  /* shadow */
  cx.fillStyle="rgba(0,0,0,.13)";ell(0,0,8,1.6);
  const walk=(1-sit),bob=walk*Math.abs(Math.sin(ph))*.9,lean=walk*.07;
  const hipY=lerp(-13.5,-6.5,sit)-bob*.6,hipX=lerp(0,-2.5,sit);
  if(sit>.5){cx.fillStyle=col([150,148,140],haze);poly([-8,0,-7,-5.5,-2,-7,3,-6,4,0]);cx.fill();}
  /* legs */
  const sw=Math.sin(ph)*.48*walk;
  const back=[hipX,hipY,lerp(-sw,-1.35,sit),7,lerp(-sw-Math.max(0,Math.cos(ph))*.55*walk,0,sit),7];
  const front=[hipX,hipY,lerp(sw,-1.45,sit),7,lerp(sw-Math.max(0,-Math.cos(ph))*.55*walk,-.1,sit),7];
  const bf=limb(back[0]-.6,back[1],back[2],back[3],back[4],back[5],3.1,col(mixc(hex(PANTS[L.pants]||PANTS[0]),[0,0,0],.18),haze));
  cx.fillStyle=boot;ell(bf[0]+1,bf[1]-.6,2.1,1.3);
  /* back arm */
  const asw=-Math.sin(ph)*.5*walk;
  limb(hipX+.6,hipY-9.2,lerp(asw,-1.2,sit),4.6,lerp(asw-.35,-2,sit),4.2,2.3,col(mixc(jacket,[0,0,0],.25),haze));
  /* backpack */
  cx.save();cx.translate(hipX,hipY);cx.rotate(lean);
  cx.fillStyle=col(pack,haze);cx.beginPath();cx.roundRect(-7.6,-11,5.2,9.6,1.8);cx.fill();
  cx.fillStyle=col(mixc(pack,[0,0,0],.25),haze);cx.fillRect(-7.6,-6.2,5.2,1.2);
  cx.fillStyle=col([196,160,96],haze);cx.beginPath();cx.roundRect(-7.8,-13.2,5.6,2.4,1.2);cx.fill();
  /* torso */
  cx.fillStyle=col(jacket,haze);cx.beginPath();cx.roundRect(-3,-11.5,6,12,2.4);cx.fill();
  cx.fillStyle=col(mixc(jacket,[255,255,255],.22),haze);cx.fillRect(.9,-10.5,1.3,9.5);
  cx.restore();
  /* head */
  const hx=hipX+lean*13+.9,hy=hipY-14.2-bob*.2;
  const st=L.style|0;
  if(st===2||st===4){cx.fillStyle=hair;cx.beginPath();cx.roundRect(hx-4.1,hy-2,4,st===4?6:7.5,2);cx.fill();}
  if(st===1){cx.strokeStyle=hair;cx.lineWidth=1.8;cx.lineCap="round";const sway=Math.sin(ph+.6)*.8*walk;cx.beginPath();cx.moveTo(hx-3,hy-1);cx.quadraticCurveTo(hx-6,hy+1,hx-6.2+sway,hy+4.5);cx.stroke();}
  cx.fillStyle=skin;circ(hx,hy,3.6);
  cx.fillStyle=hair;cx.beginPath();cx.arc(hx-.3,hy-.4,3.75,Math.PI*.98,Math.PI*1.95);cx.closePath();cx.fill();
  if(st===4){circ(hx-2.6,hy-2.2,1.6);circ(hx-.2,hy-3.4,1.6);circ(hx-3.6,hy,1.4);}
  if(st===3){circ(hx-2.2,hy-3.8,1.7);}
  cx.fillStyle="rgba(40,30,30,.85)";circ(hx+2.1,hy-.2,.42);
  cx.fillStyle="rgba(230,120,110,.35)";circ(hx+1.6,hy+1.2,.8);
  const hat=L.hat|0;
  if(hat===1){cx.fillStyle=col(mixc(jacket,[255,255,255],.1),haze);cx.beginPath();cx.arc(hx-.2,hy-1,3.9,Math.PI,0);cx.fill();cx.fillRect(hx-4.1,hy-1.6,7.8,1.5);
    cx.fillStyle=col([250,246,236],haze);circ(hx-.4,hy-5,1.3);}
  else if(hat===2){cx.fillStyle=col(pack,haze);cx.beginPath();cx.arc(hx-.2,hy-1.2,3.8,Math.PI,0);cx.fill();cx.fillRect(hx+1,hy-1.9,4.6,1.1);}
  else if(hat===3){cx.fillStyle=col([226,204,150],haze);ell(hx-.2,hy-1.9,6.6,1.15);cx.beginPath();cx.arc(hx-.2,hy-2.2,3.3,Math.PI,0);cx.fill();
    cx.fillStyle=col(jacket,haze);cx.fillRect(hx-3.4,hy-2.9,6.4,.8);}
  /* front leg */
  const ff=limb(front[0]+.4,front[1],front[2],front[3],front[4],front[5],3.2,pants);
  cx.fillStyle=boot;ell(ff[0]+1,ff[1]-.6,2.2,1.35);
  /* front arm + stick */
  const sx0=hipX+lean*10+.8,sy0=hipY-9.6;
  const hand=limb(sx0,sy0,lerp(-asw*.8+.25,-1.1,sit),4.6,lerp(-asw*.8-.2,-1.9,sit),4.2,2.4,col(jacket,haze));
  cx.fillStyle=skin;circ(hand[0],hand[1],1.05);
  if(L.stick&&sit<.5){cx.strokeStyle=col([120,86,52],haze);cx.lineWidth=1.1;cx.beginPath();cx.moveTo(hand[0]+.3,hand[1]-3);cx.lineTo(hand[0]+3.2+Math.sin(ph)*1.5*walk,0);cx.stroke();}
  if(sit>.5){/* thermos with steam */cx.fillStyle=col([200,70,60],haze);cx.fillRect(hand[0]-.6,hand[1]-3.6,1.8,3.4);
    if(!RM.matches){cx.strokeStyle="rgba(255,255,255,.45)";cx.lineWidth=.6;const tt=performance.now()/600;cx.beginPath();cx.moveTo(hand[0]+.3,hand[1]-4);cx.quadraticCurveTo(hand[0]+1.6+Math.sin(tt),hand[1]-6.5,hand[0]+.2,hand[1]-8.5);cx.stroke();}}
  /* head lamp at night */
  if(night>.45){cx.fillStyle="rgba(255,244,190,.95)";circ(hx+2.4,hy-2.6,.9);}
  cx.restore();
  return [x+(hx+2.4)*s,y+(hy-2.6)*s];
}
function drawDog(x,y,s,ph,kind,sit,haze){
  if(!kind)return;const base=kind===1?[214,164,92]:[248,246,240],spot=kind===1?[178,124,64]:[50,46,46];
  cx.save();cx.translate(x,y);cx.scale(s,s);cx.fillStyle="rgba(0,0,0,.12)";ell(0,0,6,1.2);
  const w=1-sit,sw=Math.sin(ph*1.4)*.6*w;
  cx.strokeStyle=col(mixc(base,[0,0,0],.15),haze);cx.lineWidth=1.5;cx.lineCap="round";cx.beginPath();
  if(sit>.5){cx.moveTo(-3,-3);cx.lineTo(-3.5,0);cx.moveTo(3,-4);cx.lineTo(3.2,0);}
  else for(const [dx,k] of [[-3.5,1],[-2.3,-1],[2.5,-1],[3.6,1]]){cx.moveTo(dx,-4);cx.lineTo(dx+Math.sin(sw*k)*3,-.3);}
  cx.stroke();
  cx.fillStyle=col(base,haze);cx.save();if(sit>.5){cx.translate(-1,-1);cx.rotate(-.35);}ell(0,-5,5.2,2.6);cx.restore();
  cx.fillStyle=col(spot,haze);ell(-1.2,-5.6,1.8,1.3);
  cx.fillStyle=col(base,haze);ell(5.2,-8,2.5,2.1);ell(7.3,-7.4,1.5,1);
  cx.fillStyle=col(spot,haze);ell(4.4,-8.4,1,2,.4);
  cx.fillStyle="rgba(30,25,25,.9)";circ(8.5,-7.6,.5);circ(5.9,-8.4,.35);
  cx.strokeStyle=col(base,haze);cx.lineWidth=1.3;cx.beginPath();cx.moveTo(-5,-6);const wag=Math.sin(performance.now()/(sit>.5?400:150))*1.6;cx.quadraticCurveTo(-7,-8,-7.5+wag*.3,-10+wag*.4);cx.stroke();
  cx.restore();
}

/* ---------------- moving things in the sky ---------------- */
let flocks=[],nextFlock=nowS()+4,shoot=null,nextShoot=nowS()+40,fishJ=null,nextFish=nowS()+8;
function spawnFlock(){const n=3+Math.floor(Math.random()*5),dir=Math.random()<.5?1:-1;
  flocks.push({x:dir>0?-30:VW+30,y:25+Math.random()*50,vx:dir*(16+Math.random()*12),n,ph:Math.random()*6,s:.7+Math.random()*.4});}

/* ---------------- main draw ---------------- */
let lastLabel=0;
function draw(now){
  if(!CW)return;
  const t=(now-T0)/1000,pos=S.pos;
  skyCalc();
  cx.setTransform(DPR*CH/VH,0,0,DPR*CH/VH,0,0);
  const here=P(pos);elevNow+=(here.elev-elevNow)*.05;if(RM.matches)elevNow=here.elev;
  const e=elevNow;
  /* sky */
  const g=cx.createLinearGradient(0,0,0,150);g.addColorStop(0,rgb(sky.top));g.addColorStop(1,rgb(sky.bot));
  cx.fillStyle=g;cx.fillRect(0,0,VW,VH);
  /* stars, moon, sun */
  const clear=1-clamp(W.cloud*1.1,0,1);
  if(sky.night>.25){for(let i=0;i<70;i++){const a=sky.night*clear*(.35+.65*h1(i+400))*(RM.matches?1:.75+.25*Math.sin(t*1.3+i));
    cx.fillStyle="rgba(255,252,235,"+a.toFixed(3)+")";cx.fillRect(h1(i)*VW,h1(i+90)*110,h1(i+200)>.85?1.6:1,h1(i+200)>.85?1.6:1);}}
  if(sky.alt>-.25){const sx=VW*(.08+.84*clamp((sky.h-6.5)/13.5,0,1)),sy=118-sky.alt*92,a=clamp(1-W.cloud*.9,0,1)*clamp(sky.alt*4+1,0,1);
    const sg=cx.createRadialGradient(sx,sy,0,sx,sy,46);sg.addColorStop(0,"rgba(255,246,214,"+(.55*a).toFixed(3)+")");sg.addColorStop(1,"rgba(255,246,214,0)");cx.fillStyle=sg;cx.fillRect(sx-50,sy-50,100,100);
    cx.fillStyle=rgb(mixc([255,248,222],[255,196,130],sky.dusk),a);circ(sx,sy,9);}
  if(sky.night>.3){const mh=((sky.h+12)%24),mx=VW*(.1+.8*clamp((mh-6.5)/13.5,0,1)),my=40+Math.abs(mh-13)*5;
    cx.fillStyle=rgb([246,240,214],sky.night*clamp(1-W.cloud*.8,0,1));circ(mx,my,7.5);cx.fillStyle=rgb(sky.top,sky.night*.9);circ(mx+3.6,my-2,6.6);}
  if(shoot){const k=(t-shoot.t)/.9;if(k>1)shoot=null;else{cx.strokeStyle="rgba(255,250,230,"+(1-k).toFixed(2)+")";cx.lineWidth=1.2;cx.beginPath();
    cx.moveTo(shoot.x+k*90,shoot.y+k*34);cx.lineTo(shoot.x+k*90-22,shoot.y+k*34-8);cx.stroke();spot("star");}}
  /* far ranges */
  const snowC=[244,246,250];
  for(const [p,base,amp,hz,c,c2] of [[.018,100,62,.42,[150,176,208],[200,214,234]],[.045,114,50,.22,[112,142,178],[156,180,208]]]){
    const yf=(L)=>base+e*10-(amp*fbm(L/120)+amp*.55*Math.pow(1-Math.abs(2*noise(L/64+5.3)-1),2));
    cx.save();
    cx.beginPath();cx.moveTo(-2,VH);for(let sx=-4;sx<=VW+6;sx+=5)cx.lineTo(sx,yf(lx(sx,p,pos)));cx.lineTo(VW+4,VH);cx.closePath();
    const mg=cx.createLinearGradient(0,base-amp*1.4,0,base+10);mg.addColorStop(0,col(c2,hz));mg.addColorStop(1,col(c,hz));
    cx.fillStyle=mg;cx.fill();cx.clip();
    /* snow caps */
    cx.beginPath();cx.moveTo(-2,0);for(let sx=-4;sx<=VW+6;sx+=5){const L=lx(sx,p,pos);cx.lineTo(sx,base+e*10-amp*1.0+6*noise(L/14)+4*noise(L/5));}cx.lineTo(VW+4,0);cx.closePath();
    cx.fillStyle=col(snowC,hz*.6);cx.fill();
    cx.restore();
  }
  /* rainbow */
  if(W.bow>.02&&sky.day>.5){const rx=VW*.72,ry=150,cols=["255,90,90","255,170,70","255,235,90","110,210,110","90,150,255","150,100,220"];
    cx.lineWidth=2.4;for(let i=0;i<6;i++){cx.strokeStyle="rgba("+cols[i]+","+(W.bow*.32).toFixed(3)+")";cx.beginPath();cx.arc(rx,ry,118-i*2.4,Math.PI*1.08,Math.PI*1.92);cx.stroke();}
    if(W.bow>.3)spot("rainbow");}
  /* clouds */
  drawClouds(t,pos);
  /* hot-air balloon (rare, calm clear days) */
  {const p=.05,slot=2600;const L0=lx(-40,p,pos),i0=Math.floor(L0/slot);
   for(let i=i0;i<=i0+Math.ceil((VW+80)/slot)+1;i++){if(h1(i*13+5)>.2||sky.day<.6||W.rain>.3)continue;
     const sx=sxOf(i*slot+h1(i)*slot,p,pos),sy=48+h1(i+9)*20+(RM.matches?0:Math.sin(t*.25+i)*4);if(sx<-30||sx>VW+30)continue;
     const bc=[[214,84,72],[240,180,70],[80,140,200]][i%3];
     cx.fillStyle=col(bc,.15);cx.beginPath();cx.arc(sx,sy,8,Math.PI*.85,Math.PI*2.15);cx.lineTo(sx+2.6,sy+11);cx.lineTo(sx-2.6,sy+11);cx.closePath();cx.fill();
     cx.fillStyle=col([250,240,220],.15);cx.fillRect(sx-1,sy-8,2,18.5);
     cx.strokeStyle=col([90,70,50],.15);cx.lineWidth=.4;cx.beginPath();cx.moveTo(sx-2.6,sy+11);cx.lineTo(sx-1.6,sy+14);cx.moveTo(sx+2.6,sy+11);cx.lineTo(sx+1.6,sy+14);cx.stroke();
     cx.fillStyle=col([120,86,52],.15);cx.fillRect(sx-1.8,sy+14,3.6,2.6);spot("balloon",sx);}}
  /* mid hills */
  {const p=.14,base=132+e*34;
   band(p,pos,5,L=>base-46*fbm(L/70)-10*P(wxOf(L,p)).rock*Math.abs(noise(L/9)-.5),col([98,138,112],.3));
   /* tiny far trees */
   const step=7;for(let sx=-4;sx<=VW+4;sx+=step){const L=Math.floor(lx(sx,p,pos)/step)*step,q=P(wxOf(L,p));if(h1(L)>q.trees*.75)continue;
     const x=sxOf(L,p,pos),y=base-46*fbm(L/70)+4+h1(L+1)*22;cx.fillStyle=col([58,92,72],.3);poly([x-2.2,y,x,y-6-h1(L+2)*3,x+2.2,y]);cx.fill();}
   /* paraglider over the mountains */
   if(sky.day>.5&&W.rain<.3){const slot=1400,L0=lx(-40,p,pos),i0=Math.floor(L0/slot);
     for(let i=i0;i<=i0+Math.ceil(VW/slot/p)+2;i++){const Lc=i*slot+h1(i+40)*slot,q=P(wxOf(Lc,p));if(q.elev<.55||h1(i*3+1)>.5)continue;
       const x=sxOf(Lc,p,pos)+(RM.matches?0:Math.sin(t*.12+i)*30),y=58+h1(i)*25+(RM.matches?0:Math.sin(t*.3+i)*3);if(x<-20||x>VW+20)continue;
       cx.strokeStyle=col([230,90,80],.2);cx.lineWidth=2.2;cx.beginPath();cx.arc(x,y+6,8,Math.PI*1.15,Math.PI*1.85);cx.stroke();
       cx.strokeStyle=col([80,80,80],.25);cx.lineWidth=.3;cx.beginPath();cx.moveTo(x-6.5,y+1.5);cx.lineTo(x,y+9);cx.lineTo(x+6.5,y+1.5);cx.stroke();
       cx.fillStyle=col([60,70,90],.2);circ(x,y+9.6,1);spot("paraglider",x);}}
  }
  if(e>.45){const vy=134+e*34-6;cx.fillStyle=col(mixc(sky.bot,[90,140,180],.45),.25,clamp((e-.45)*3,0,1));
    for(let k=0;k<2;k++){const L=Math.floor(lx(0,.14,pos)/900)*900+k*900+h1(k+Math.floor(lx(0,.14,pos)/900))*300,x=sxOf(L,.14,pos);ell(x,vy+12,70,4);}}
  /* eagle circling high above the rocks */
  if(e>.55&&sky.day>.4&&W.rain<.5){const a=RM.matches?1:t*.22,x=VW*.62+Math.cos(a)*48,y=52+Math.sin(a)*14;
    cx.strokeStyle=col([60,46,36],.1);cx.lineWidth=1.6;cx.lineCap="round";cx.beginPath();cx.moveTo(x-8,y-1.5+Math.sin(a)*.8);cx.quadraticCurveTo(x-4,y-3,x,y);cx.quadraticCurveTo(x+4,y-3,x+8,y-1.5-Math.sin(a)*.8);cx.stroke();
    spot("eagle",x);}
  /* bird flocks */
  for(const f of flocks){for(let k=0;k<f.n;k++){const dx=-Math.sign(f.vx)*(k%2?1:-1)*Math.ceil(k/2)*0+(-Math.sign(f.vx))*Math.ceil(k/2)*7,dy=(k%2?-1:1)*Math.ceil(k/2)*4;
    bird(f.x+dx,f.y+dy+Math.sin(t*.8+k)*1.2,f.s,f.ph+t*9+k,col([58,58,66],.05));}}
  /* hills */
  const hp=.3,hb=142+e*44;
  const hy=L=>{const q=P(wxOf(L,hp));return hb-24*fbm(L/46)-q.rock*(8+22*Math.pow(Math.abs(noise(L/13)-.5)*2,2));};
  cx.beginPath();cx.moveTo(-2,VH);for(let sx=-4;sx<=VW+6;sx+=4){cx.lineTo(sx,hy(lx(sx,hp,pos)));}cx.lineTo(VW+4,VH);cx.closePath();
  {const gg=cx.createLinearGradient(0,0,VW,0),n=6;for(let k=0;k<=n;k++){const L=lx(VW*k/n,hp,pos);gg.addColorStop(k/n,col(P(wxOf(L,hp)).hill,.2));}cx.fillStyle=gg;cx.fill();}
  {const step=6;for(let sx=-8;sx<=VW+8;sx+=step){const L=Math.floor(lx(sx,hp,pos)/step)*step,q=P(wxOf(L,hp));if(h1(L+7)>q.trees*.9)continue;
    const x=sxOf(L,hp,pos),y=hy(L)+3+h1(L+3)*6,hh=8+h1(L+5)*6;conifer(x,y,hh,mixc(q.hill,[20,60,40],.45),mixc(q.hill,[120,170,90],.25),.2);}}
  /* a fog layer in the valleys */
  if(W.fog>.03){const fg=cx.createLinearGradient(0,120+e*30,0,185+e*20);fg.addColorStop(0,"rgba(236,240,242,0)");fg.addColorStop(.5,rgb(mixc([236,240,242],C.nightTint,sky.night*.6),W.fog*.75));fg.addColorStop(1,"rgba(236,240,242,0)");
    cx.fillStyle=fg;cx.fillRect(0,100,VW,110);}
  /* lake */
  const lp=.42,ltop=148+e*28;
  {let started=false;cx.beginPath();
   for(let sx=-4;sx<=VW+6;sx+=4){const w=P(wxOf(lx(sx,lp,pos),lp)).water;if(w>.02){if(!started){cx.moveTo(sx,VH);started=true;}cx.lineTo(sx,ltop);}else if(started){cx.lineTo(sx,ltop);cx.lineTo(sx,VH);cx.closePath();started=false;}}
   if(started){cx.lineTo(VW+6,ltop);cx.lineTo(VW+6,VH);cx.closePath();}
   const wg=cx.createLinearGradient(0,ltop,0,ltop+40);wg.addColorStop(0,col(mixc(sky.bot,[70,130,170],.35)));wg.addColorStop(1,col(mixc(sky.top,[40,90,140],.5)));cx.fillStyle=wg;cx.fill();
   /* shimmer + ducks + jumping fish */
   for(let k=0;k<26;k++){const L=lx(0,lp,pos)+h1(k)*VW*1.2,sx=(sxOf(L,lp,pos)+(RM.matches?0:t*3*(h1(k+5)-.5)))%(VW+20);if(P(wxOf(lx(sx,lp,pos),lp)).water<.5)continue;
     cx.fillStyle="rgba(255,255,255,"+(.25+.2*Math.sin(t*1.5+k)).toFixed(2)+")";cx.fillRect(sx,ltop+3+h1(k+30)*22,4+h1(k+60)*8,.7);}
   const slot=150,L0=lx(-20,lp,pos),i0=Math.floor(L0/slot);
   for(let i=i0;i<=i0+Math.ceil(VW/slot)+2;i++){if(h1(i*5+2)>.3)continue;const L=i*slot+h1(i)*slot+(RM.matches?0:Math.sin(t*.05+i)*12),q=P(wxOf(L,lp));if(q.water<.7)continue;
     const sx=sxOf(L,lp,pos),y=ltop+6+h1(i+3)*10+(RM.matches?0:Math.sin(t*1.6+i)*.4);
     duck(sx,y,.9,col([122,98,72]));duck(sx+9,y+2,.75,col([90,110,80]));spot("ducks",sx);}
   if(fishJ){const k=(t-fishJ.t)/1.1;if(k>1.6)fishJ=null;else{const x=fishJ.x,y=fishJ.y;
     if(k<1){const fx=x+k*10,fy=y-Math.sin(k*Math.PI)*9;cx.fillStyle=col([150,160,170]);ell(fx,fy,2.6,1,Math.cos(k*Math.PI)*-.9);}
     cx.strokeStyle="rgba(255,255,255,"+(.6*(1-k/1.6)).toFixed(2)+")";cx.lineWidth=.6;cx.beginPath();cx.ellipse(x+(k>1?10:0),y,2+k*5,.6+k*1.2,0,0,Math.PI*2);cx.stroke();spot("fish",x);}}
  }
  /* field with trees and animals */
  const fp=.6;
  const fy=L=>{const q=P(wxOf(L,fp));return 157+e*16+q.water*28+4*fbm(L/32)-q.rock*3*noise(L/5);};
  cx.beginPath();cx.moveTo(-2,VH);for(let sx=-4;sx<=VW+6;sx+=4)cx.lineTo(sx,fy(lx(sx,fp,pos)));cx.lineTo(VW+4,VH);cx.closePath();
  {const gg=cx.createLinearGradient(0,0,VW,0),n=8;for(let k=0;k<=n;k++){const L=lx(VW*k/n,fp,pos);gg.addColorStop(k/n,col(P(wxOf(L,fp)).field,.07));}cx.fillStyle=gg;cx.fill();}
  {const step=9,list=[];
   for(let sx=-30;sx<=VW+30;sx+=step){const L=Math.floor(lx(sx,fp,pos)/step)*step,q=P(wxOf(L,fp));const r=h1(L*3+1);
     if(q.water>.5)continue;
     if(r<q.trees*.8){list.push([L,q,0]);} else if(r<q.trees*.8+q.rock*.1){list.push([L,q,1]);}}
   for(const [L,q,kind] of list){const x=sxOf(L,fp,pos),y=fy(L)+2;
     if(kind===1){const big=q.rock>.7&&h1(L+5)<.35?2.6:1;boulder(x,y,(10+h1(L)*12)*big,(6+h1(L+1)*8)*big,L,.06);continue;}
     const big=q.front>.5?1.35:1,hh=(18+h1(L+4)*16)*big,r2=h1(L+8);
     const base=mixc(q.field,[16,62,40],.55),light=mixc(q.field,[150,200,110],.25);
     if(r2<q.con)conifer(x,y,hh,base,light,.06);else if(r2<q.con+.25)birch(x,y,hh,base,light,.06);else leafy(x,y,hh*.9,mixc(q.field,[30,90,40],.45),light,.06);}
   /* animals in slots */
   const slot=230,L0=lx(-40,fp,pos),i0=Math.floor(L0/slot);
   for(let i=i0;i<=i0+Math.ceil((VW+80)/slot)+1;i++){const L=i*slot+h1(i*7)*slot*.6,q=P(wxOf(L,fp)),r=h1(i*11+4),x=sxOf(L,fp,pos);if(x<-30||x>VW+30||q.water>.4)continue;
     const y=fy(L)+3;
     if(q.cows>.5&&r<.45){cow(x,y,.85,t,i);spot("cow",x);}
     else if(q.elev>.5&&r<.7&&r>.45){boulder(x-2,y+1,12,7,i,.05);marmot(x+3,y-6,.9,RM.matches?3:t,i);if(Math.sin(t*.5+i*11)>-.1)spot("marmot",x);}
     else if(q.rock>.8&&r<.35){boulder(x,y+1,18,12,i+3,.05);ibex(x+1,y-11,.85,i);spot("ibex",x);}
     else if(q.trees>.25&&q.rock<.5&&r<.2){deer(x,y,.85,t,i,false);spot("deer",x);}
     else if(q.trees>.25&&q.rock<.5&&r>.93){deer(x,y,.85,t,i,true);spot("fox",x);}
     else if(q.front>.5&&r>.2&&r<.28){/* squirrel on a stump */cx.fillStyle=col([110,80,56],.05);cx.fillRect(x-4,y-5,8,5);cx.fillStyle=col([186,92,46],.05);ell(x,y-7.5,1.8,2.4);
       cx.beginPath();cx.ellipse(x-2.6,y-9,1.7,3.4,-.3,0,Math.PI*2);cx.fill();circ(x+1,y-10,1.3);spot("squirrel",x);}}
  }
  /* light rays in the forest */
  if(here.front>.5&&sky.day>.6&&W.cloud<.55){cx.save();cx.globalCompositeOperation="lighter";
    for(let k=0;k<4;k++){const x=((k*VW/3.3+60-(pos*.6)%(VW/3.3))%(VW+120))-60;cx.fillStyle="rgba(255,240,190,"+(.05*here.front*(1-W.cloud)).toFixed(3)+")";poly([x,0,x+18,0,x+70,VH,x+40,VH]);cx.fill();}cx.restore();}
  /* the path */
  const gy=L=>182+5*fbm(L/140)+(h1(1)-.5);
  {const q0=P(pos);
   cx.beginPath();cx.moveTo(-2,VH);for(let sx=-4;sx<=VW+6;sx+=4)cx.lineTo(sx,gy(lx(sx,1,pos))-1.5);cx.lineTo(VW+4,VH);cx.closePath();
   const gg=cx.createLinearGradient(0,0,VW,0),n=8;for(let k=0;k<=n;k++){const L=lx(VW*k/n,1,pos);gg.addColorStop(k/n,col(P(L).grass));}cx.fillStyle=gg;cx.fill();
   cx.beginPath();for(let sx=-4;sx<=VW+6;sx+=4)cx.lineTo(sx,gy(lx(sx,1,pos))+.5);for(let sx=VW+6;sx>=-4;sx-=4)cx.lineTo(sx,gy(lx(sx,1,pos))+5.5);cx.closePath();
   const pg=cx.createLinearGradient(0,0,VW,0);for(let k=0;k<=n;k++){const L=lx(VW*k/n,1,pos);pg.addColorStop(k/n,col(P(L).path));}cx.fillStyle=pg;cx.fill();
   /* lower ground darkens to the front */
   const dg=cx.createLinearGradient(0,186,0,VH);dg.addColorStop(0,"rgba(30,50,20,0)");dg.addColorStop(1,"rgba(30,50,20,.18)");cx.fillStyle=dg;cx.fillRect(0,186,VW,VH-186);
   /* path details */
   const step=11;for(let sx=-10;sx<=VW+10;sx+=step){const L=Math.floor(lx(sx,1,pos)/step)*step,q=P(L),r=h1(L*7+3),x=sxOf(L,1,pos),y=gy(L);
     if(r<q.flowers*.35){const fc=[[70,96,220],[250,250,244],[246,206,60],[232,110,150],[200,60,60]][Math.floor(h1(L+1)*5)];
       cx.strokeStyle=col([70,120,50]);cx.lineWidth=.6;cx.beginPath();cx.moveTo(x,y-.5);cx.lineTo(x,y-4);cx.stroke();cx.fillStyle=col(fc);circ(x,y-4.3,1.2);}
     else if(r<q.flowers*.35+q.mush*.08){cx.fillStyle=col([240,232,214]);cx.fillRect(x-.5,y-3,1,3);cx.fillStyle=col([206,58,48]);cx.beginPath();cx.arc(x,y-3,2.3,Math.PI,0);cx.fill();cx.fillStyle="rgba(255,255,255,.85)";circ(x-.8,y-4,.35);circ(x+.8,y-3.6,.35);}
     else if(r>.9){cx.fillStyle=col(mixc(q.path,[90,90,90],.45));ell(x,y+2.5,1.6+h1(L+2)*1.6,.9);}
     else if(r>.84-q.rock*.2&&r<=.9&&q.rock>.4){boulder(x,y+1,6+h1(L)*5,4+h1(L+1)*4,L,0);}}
   /* signposts, benches, cairns */
   const slot=1900,L0=lx(-30,1,pos),i0=Math.floor(L0/slot);
   for(let i=i0;i<=i0+Math.ceil(VW/slot)+1;i++){const L=i*slot+h1(i+77)*slot*.7,x=sxOf(L,1,pos),y=gy(L)-1,q=P(L),r=h1(i*9+1);if(x<-20||x>VW+20)continue;
     if(r<.45){cx.fillStyle=col([120,90,60]);cx.fillRect(x-.8,y-17,1.6,17);cx.fillStyle=col([244,196,48]);poly([x-6,y-17,x+6,y-17,x+9,y-14.5,x+6,y-12,x-6,y-12]);cx.fill();
       cx.fillStyle=col([90,70,40]);cx.fillRect(x-4.5,y-15.2,6,.7);cx.fillRect(x-4.5,y-13.6,4,.7);cx.fillStyle=col([250,250,250]);cx.fillRect(x-1.5,y-10,3,2.4);cx.fillStyle=col([210,50,50]);cx.fillRect(x-1.5,y-9.2,3,.8);}
     else if(r<.7&&q.rock<.6){cx.fillStyle=col([140,100,66]);cx.fillRect(x-7,y-5,14,1.6);cx.fillRect(x-7,y-9,14,1.3);cx.fillRect(x-6,y-5,1.3,5);cx.fillRect(x+4.7,y-5,1.3,5);cx.fillRect(x-6,y-9,1,4);cx.fillRect(x+5,y-9,1,4);}
     else if(q.rock>.5){cx.fillStyle=col([150,148,140]);ell(x,y-1.5,5,2);ell(x,y-4.5,3.8,1.7);ell(x+.3,y-7,2.6,1.4);ell(x,y-9,1.6,1.1);}}
   /* butterflies */
   if(sky.day>.55&&W.rain<.25){const bs=260,B0=lx(-20,1,pos),b0=Math.floor(B0/bs);
     for(let i=b0;i<=b0+Math.ceil(VW/bs)+1;i++){const L=i*bs+h1(i+3)*bs,q=P(L);if(h1(i*17)>q.flowers*.55)continue;
       const ox=RM.matches?0:Math.sin(t*.7+i)*14+Math.sin(t*1.9+i*2)*5,oy=RM.matches?0:Math.sin(t*1.3+i*3)*5;
       const x=sxOf(L,1,pos)+ox,y=gy(L)-14+oy;if(x<-10||x>VW+10)continue;
       butterfly(x,y,t+i,rgb([[250,200,60],[246,246,246],[120,170,250],[250,140,90]][i&3]));spot("butterfly",x);}}
  }
  /* hiker + dog */
  const hm=mode;sitK+=((hm==="rest"?1:0)-sitK)*(RM.matches?1:.08);
  const hyy=gy(pos)+1.5;
  drawDog(HX-22,gy(pos-22)+1.5,1.05,walkPh+1.4,S.look.dog|0,sitK,0);
  const lamp=drawHiker(HX,hyy,1.15,S.look,RM.matches?0:walkPh,sitK,0,sky.night);
  /* water in front: pond and brook */
  {const wp=1.15;let started=false;const wt=L=>{const q=P(wxOf(L,wp));return Math.max(q.pond,q.stream);};
   const top=L=>199-2*noise(L/30);
   cx.beginPath();
   for(let sx=-4;sx<=VW+6;sx+=4){const L=lx(sx,wp,pos),w=wt(L);if(w>.25){if(!started){cx.moveTo(sx,VH);started=true;}cx.lineTo(sx,top(L)+(1-sm((w-.25)/.4))*16);}else if(started){cx.lineTo(sx,VH);cx.closePath();started=false;}}
   if(started){cx.lineTo(VW+6,VH);cx.closePath();}
   const wg=cx.createLinearGradient(0,198,0,VH);wg.addColorStop(0,col(mixc(sky.bot,[80,140,170],.4)));wg.addColorStop(1,col([46,96,120]));cx.fillStyle=wg;cx.fill();
   /* sparkles flowing in the brook, lily pads in the pond */
   for(let k=0;k<34;k++){const sx=((h1(k)*(VW+40)+(RM.matches?0:t*22))%(VW+40))-20,L=lx(sx,wp,pos),q=P(wxOf(L,wp));
     if(q.stream<.55)continue;cx.fillStyle="rgba(255,255,255,"+(.35+.3*Math.sin(t*3+k)).toFixed(2)+")";cx.fillRect(sx,205+h1(k+9)*13,3+h1(k+3)*5,.8);}
   const ps=70,P0=lx(-20,wp,pos),p0=Math.floor(P0/ps);
   for(let i=p0;i<=p0+Math.ceil(VW/ps)+2;i++){const L=i*ps+h1(i)*ps,q=P(wxOf(L,wp));if(q.pond<.75)continue;const x=sxOf(L,wp,pos),y=207+h1(i+1)*9;
     if(h1(i+2)<.6){cx.fillStyle=col([74,140,70]);cx.beginPath();cx.ellipse(x,y,5,1.8,0,.25,Math.PI*2-.05);cx.lineTo(x,y);cx.fill();
       if(h1(i+3)<.3){cx.fillStyle=col([246,170,200]);circ(x+1,y-1,1.4);cx.fillStyle=col([255,230,240]);circ(x+1,y-1.4,.7);}
       else if(h1(i+3)>.85){cx.fillStyle=col([96,160,70]);ell(x-.5,y-1.6,2.2,1.4);cx.fillStyle="rgba(20,20,20,.8)";circ(x+.6,y-2.6,.4);spot("frog",x);}}
     else if(h1(i+2)>.93){/* heron */cx.strokeStyle=col([120,128,136]);cx.lineWidth=.7;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x,y-7);cx.moveTo(x+1,y);cx.lineTo(x+1,y-7);cx.stroke();
       cx.fillStyle=col([170,178,186]);ell(x,y-10,3.6,2.4,-.3);cx.strokeStyle=col([170,178,186]);cx.lineWidth=1.2;cx.beginPath();cx.moveTo(x+2,y-11);cx.quadraticCurveTo(x+4.5,y-13,x+3,y-16);cx.stroke();
       cx.fillStyle=col([170,178,186]);circ(x+3.4,y-16.4,1.2);cx.fillStyle=col([230,190,60]);poly([x+4.4,y-16.8,x+8,y-16.2,x+4.4,y-15.8]);cx.fill();spot("heron",x);}
     /* reeds */
     cx.strokeStyle=col([96,130,64]);cx.lineWidth=.7;cx.beginPath();for(let r=0;r<4;r++){const rx=x+12+r*1.6;cx.moveTo(rx,201);cx.lineTo(rx+(RM.matches?0:Math.sin(t+i+r)*.6),190-h1(i+r)*6);}cx.stroke();}
   /* dragonfly */
   if(here.pond>.6&&sky.day>.5&&W.rain<.3){const x=HX+60+(RM.matches?0:Math.sin(t*.9)*40+Math.sin(t*2.7)*8),y=196+(RM.matches?0:Math.sin(t*1.7)*4);
     cx.fillStyle="rgba(60,150,170,.9)";cx.fillRect(x-4,y-.4,6,.8);cx.fillStyle="rgba(220,240,255,.6)";const f=RM.matches?1:Math.abs(Math.sin(t*30));ell(x,y-1,2.6,.8*f+.2,-.2);ell(x,y+1,2.6,.8*f+.2,.2);spot("dragonfly",x);}
  }
  /* foreground: grass, ferns and big trunks */
  {const p=1.45;const step=16;
   for(let sx=-20;sx<=VW+20;sx+=step){const L=Math.floor(lx(sx,p,pos)/step)*step,q=P(wxOf(L,p)),r=h1(L*5+9),x=sxOf(L,p,pos);
     if(Math.max(q.pond,q.stream)>.5&&r<.7)continue;
     if(r<.55){const gc=mixc(q.grass,[30,70,30],.35);cx.strokeStyle=col(gc);cx.lineWidth=1.3;cx.lineCap="round";cx.beginPath();
       const sway=RM.matches?0:Math.sin(t*1.4+L)*1.2*(1+W.rain);for(let b=0;b<5;b++){const bx=x+b*2.2-4;cx.moveTo(bx,VH+2);cx.quadraticCurveTo(bx+sway*.5,VH-6,bx+sway+(b-2)*1.4,VH-10-h1(L+b)*8);}cx.stroke();}
     else if(r<.62&&q.front>.3){cx.fillStyle=col(mixc(q.grass,[20,70,30],.5));for(let f=0;f<5;f++){const a=-1.2+f*.6;cx.save();cx.translate(x,VH+2);cx.rotate(a*.5);ell(0,-10,2.4,11);cx.restore();}}}
   const ts=150,T0s=lx(-60,p,pos),ti=Math.floor(T0s/ts);
   for(let i=ti;i<=ti+Math.ceil(VW/ts)+2;i++){const L=i*ts+h1(i+50)*ts*.6,q=P(wxOf(L,p));if(q.front<.4||h1(i*31+7)>q.front*.5)continue;const x=sxOf(L,p,pos),w=14+h1(i)*10;
     if(x<-40||x>VW+40)continue;cx.fillStyle=col([58,44,36]);cx.fillRect(x-w/2,-2,w,VH+4);cx.fillStyle=col([86,66,50]);cx.fillRect(x-w/2+w*.62,-2,w*.18,VH+4);
     cx.fillStyle=col([40,70,40]);for(let k=0;k<3;k++){ell(x+(k-1)*10,8+k*7,22,9);}cx.fillStyle=col([96,150,80],undefined,.9);ell(x+w*.2,VH-24,w*.5,2);
     if(q.mush>.5&&h1(i+9)<.5){cx.fillStyle=col([240,232,214]);cx.fillRect(x+w/2,VH-6,1.5,5);cx.fillStyle=col([206,58,48]);cx.beginPath();cx.arc(x+w/2+.7,VH-6,3,Math.PI,0);cx.fill();}}
  }
  /* rain or snow */
  if(W.rain>.04){const snow=e>.6,n=Math.round(W.rain*(snow?90:160));cx.strokeStyle="rgba(220,230,240,"+(.35+W.rain*.25).toFixed(2)+")";cx.fillStyle="rgba(255,255,255,.85)";cx.lineWidth=.7;cx.beginPath();
    for(let i=0;i<n;i++){if(snow){const x=((h1(i)*VW*1.3+(RM.matches?0:t*(8+h1(i+3)*8)+Math.sin(t+i)*6))%(VW+20))-10,y=((h1(i+50)*VH+(RM.matches?0:t*(14+h1(i+9)*10)))%VH);cx.moveTo(x+1,y);cx.arc(x,y,.9,0,Math.PI*2);}
      else{const x=((h1(i)*VW*1.3-(RM.matches?0:t*70))%(VW+40)+VW+40)%(VW+40)-20,y=(h1(i+50)*VH+(RM.matches?0:t*330))%(VH+20)-10;cx.moveTo(x,y);cx.lineTo(x-2,y+7);}}
    if(snow)cx.fill();else cx.stroke();}
  /* night lights: head lamp and fireflies */
  if(sky.night>.45){cx.save();cx.globalCompositeOperation="lighter";const a=(sky.night-.45)*1.6;
    const lg=cx.createRadialGradient(lamp[0],lamp[1],0,lamp[0],lamp[1],60);lg.addColorStop(0,"rgba(255,236,170,"+(.22*a).toFixed(3)+")");lg.addColorStop(1,"rgba(255,236,170,0)");
    cx.fillStyle=lg;poly([lamp[0],lamp[1]-1,lamp[0]+70,lamp[1]+4,lamp[0]+60,lamp[1]+26]);cx.fill();
    if((here.flowers>.4||here.front>.4||here.pond>.4)&&W.rain<.3){for(let k=0;k<14;k++){const x=(h1(k)*VW+(RM.matches?0:Math.sin(t*.4+k)*20))%VW,y=150+h1(k+20)*45+(RM.matches?0:Math.sin(t*.9+k*2)*6);
      const fa=(RM.matches?.7:.5+.5*Math.sin(t*2.2+k*1.7))*a;const fg=cx.createRadialGradient(x,y,0,x,y,4);fg.addColorStop(0,"rgba(230,255,140,"+fa.toFixed(3)+")");fg.addColorStop(1,"rgba(230,255,140,0)");cx.fillStyle=fg;cx.fillRect(x-4,y-4,8,8);}
      spot("fireflies");}
    cx.restore();}
  /* toast */
  if(now-lastLabel>8000){lastLabel=now;updateLabel();}
}
function drawClouds(t,pos){
  const span=VW+260;
  for(let i=0;i<11;i++){if(h1(i+500)>W.cloud*1.05+.12)continue;
    const sp=3+h1(i+1)*5,x=((h1(i+2)*span-(RM.matches?0:t*sp)-pos*.055)%span+span)%span-130,y=18+h1(i+3)*62,s=.6+h1(i+4)*.8;
    const light=mixc(mixc([255,255,255],[255,214,190],sky.dusk*.7),[70,78,100],sky.night*.75),dark=mixc(light,[110,120,135],.25+W.rain*.45);
    const lightR=mixc(light,[150,156,164],W.rain*.55);
    cx.fillStyle=rgb(dark,.9);for(let k=0;k<5;k++)ell(x+(k-2)*9*s,y+3*s,(10+h1(i*7+k)*6)*s,(5+h1(i*9+k)*3)*s);
    cx.fillStyle=rgb(lightR,.95);for(let k=0;k<5;k++)ell(x+(k-2)*9*s-1,y-(h1(i*5+k)*4)*s,(9+h1(i*7+k)*6)*s,(5.5+h1(i*3+k)*4)*s);
  }
}
function updateLabel(){
  const b=bioAt(segOf(S.pos)),who=S.look.name?S.look.name:"Your hiker";
  const act=mode==="rest"?"is resting":mode==="focus"?"is walking briskly":"is strolling";
  const tod=sky.night>.6?"at night":sky.dusk>.4?"in the evening light":"in daylight";
  cv.setAttribute("aria-label",who+" "+act+" through "+LABEL[b]+", "+weatherLabel()+", "+tod+".");
}

/* ---------------- animation loop ---------------- */
let visible=true,lastF=0,rafId=0,lastStep=performance.now();
function step(now){
  const dt=Math.min(7200,(now-lastStep)/1000);lastStep=now;
  mode=hikerMode();
  const sp=SPEED[mode]||0;
  if(sp>0){S.pos+=sp*dt;walkPh+=dt*(mode==="focus"?7.2:4.6);if(mode==="focus")S.focusPx+=sp*dt;saveSoon();}
  const sg=segOf(S.pos);if(sg!==lastSeg){lastSeg=sg;const nm=placeName(sg);if(!S.places.length||S.places[S.places.length-1]!==nm){S.places.push(nm);if(S.places.length>40)S.places.shift();}
    toast("You reached "+nm+".");updateTitle();saveSoon();renderJournal();}
  weatherStep(Math.min(dt,5));
  const tt=nowS();
  if(!RM.matches){
    if(tt>nextFlock){if(sky.day>.35&&W.rain<.5&&flocks.length<3)spawnFlock();nextFlock=tt+14+Math.random()*30;}
    for(const f of flocks)f.x+=f.vx*Math.min(dt,.1);flocks=flocks.filter(f=>f.x>-60&&f.x<VW+60);
    if(tt>nextShoot){if(sky.night>.7&&W.cloud<.5)shoot={t:(performance.now()-T0)/1000,x:Math.random()*VW*.6,y:10+Math.random()*30};nextShoot=tt+25+Math.random()*60;}
    if(tt>nextFish){const sx=HX+40+Math.random()*(VW-HX-80);if(P(wxOf(lx(sx,.42,S.pos),.42)).water>.8)fishJ={t:(performance.now()-T0)/1000,x:sx,y:148+elevNow*28+10+Math.random()*14};nextFish=tt+9+Math.random()*16;}
  }
}
function frame(now){
  rafId=0;if(!visible||S.collapsed)return;
  if(now-lastF>=32){lastF=now;step(now);draw(now);}
  schedule();
}
function schedule(){if(!rafId&&!RM.matches&&visible&&!S.collapsed)rafId=requestAnimationFrame(frame);}
/* reduced motion: a still picture, refreshed now and then */
setInterval(()=>{if(RM.matches&&visible&&!S.collapsed){const n=performance.now();step(n);draw(n);}},15000);
if(window.IntersectionObserver)new IntersectionObserver(es=>{visible=es[0].isIntersecting&&!document.hidden;if(visible){lastStep=performance.now()-Math.min(performance.now()-lastStep,0);schedule();}}).observe(host);
document.addEventListener("visibilitychange",()=>{visible=!document.hidden;if(visible){schedule();if(RM.matches)draw(performance.now());}});
if(RM.addEventListener)RM.addEventListener("change",()=>{schedule();draw(performance.now());});

/* ---------------- toast ---------------- */
const toastEl=$("fh-toast");let toastT=0;
function toast(m){toastEl.textContent=m;toastEl.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>toastEl.classList.remove("on"),5200);}

/* ---------------- title bar ---------------- */
function km(px){return (px*.04/1000);}
function updateTitle(){
  $("fh-place").textContent=placeName(segOf(S.pos));
  $("fh-km").textContent=" · "+km(S.focusPx).toFixed(1)+" km walked in focus";
}

/* ---------------- focus timer ---------------- */
const goBtn=$("fh-go"),clockEl=$("fh-clock"),modeEl=$("fh-mode"),miniEl=$("fh-mini");
const baseTitle=document.title;
function presetMs(m){const p=PRESETS[S.timer.preset]||PRESETS[0];return (m==="break"?p[1]:p[0])*60000;}
function leftMs(){const t=S.timer;return t.running?Math.max(0,t.endAt-Date.now()):t.left;}
function fmt(ms){const s=Math.ceil(ms/1000);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function today(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function timerUI(){
  const t=S.timer,l=leftMs();
  clockEl.textContent=fmt(l);modeEl.textContent=t.mode==="break"?"Break":"Focus";
  host.classList.toggle("fh-onbreak",t.mode==="break");host.classList.toggle("fh-running",t.running);
  goBtn.innerHTML=(t.running?IC.pause:IC.play)+'<span class="fh-sr">'+(t.running?"Pause":"Start")+'</span>';
  goBtn.title=t.running?"Pause":(t.mode==="break"?"Start break":"Start focus");
  miniEl.textContent=(t.mode==="break"?"Break ":"Focus ")+fmt(l);miniEl.hidden=!S.collapsed;
  document.title=t.running?fmt(l)+" "+(t.mode==="break"?"break":"focus")+" · "+baseTitle:baseTitle;
}
function finish(){
  const t=S.timer;
  if(t.mode==="focus"){const p=PRESETS[t.preset]||PRESETS[0];S.sessions++;S.days[today()]=(S.days[today()]||0)+p[0];
    const keys=Object.keys(S.days).sort();while(keys.length>60)delete S.days[keys.shift()];
    t.mode="break";t.left=presetMs("break");t.running=true;t.endAt=Date.now()+t.left;
    chime(2);toast("Well done: "+p[0]+" minutes of focus. Time for a break: stand up, drink some water, look into the distance.");}
  else{t.mode="focus";t.left=presetMs("focus");t.running=false;chime(1);toast("Break is over. Start the next focus block when you are ready.");}
  save();timerUI();renderJournal();
}
goBtn.addEventListener("click",()=>{
  const t=S.timer;audioWake();
  if(t.running){t.left=Math.max(0,t.endAt-Date.now());t.running=false;}
  else{if(t.left<=0)t.left=presetMs(t.mode);t.endAt=Date.now()+t.left;t.running=true;}
  lastStep=performance.now();save();timerUI();schedule();
});
$("fh-reset").addEventListener("click",()=>{const t=S.timer;t.running=false;t.mode="focus";t.left=presetMs("focus");save();timerUI();});
setInterval(()=>{if(S.timer.running&&Date.now()>=S.timer.endAt)finish();timerUI();},1000);
timerUI();

/* ---------------- nature sounds, generated live ---------------- */
let A=null;
function audioWake(){
  if(!A){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
    const ctx=new AC(),master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);
    const len=ctx.sampleRate*4,wb=ctx.createBuffer(2,len,ctx.sampleRate),bb=ctx.createBuffer(2,len,ctx.sampleRate);
    for(let ch=0;ch<2;ch++){const w=wb.getChannelData(ch),b=bb.getChannelData(ch);let last=0;
      for(let i=0;i<len;i++){const r=Math.random()*2-1;w[i]=r;last=(last+.02*r)/1.02;b[i]=last*3.5;}}
    const src=(buf)=>{const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.loopStart=Math.random();s.start(0,Math.random()*3);return s;};
    const gain=(v)=>{const g=ctx.createGain();g.gain.value=v;return g;};
    const filt=(type,f,q)=>{const b=ctx.createBiquadFilter();b.type=type;b.frequency.value=f;b.Q.value=q||.7;return b;};
    const ch={birds:gain(0),wind:gain(0),water:gain(0),rain:gain(0)};for(const k in ch)ch[k].connect(master);
    /* wind: brown noise through a moving low-pass */
    const wl=filt("lowpass",420,.6);src(bb).connect(wl);wl.connect(ch.wind);
    /* water: band-passed noise with a soft flutter, plus small bubbles */
    const wbp=filt("bandpass",1100,.5),whp=filt("highpass",300),flut=gain(.7),lfo=ctx.createOscillator(),lfoG=gain(.3);
    lfo.frequency.value=4.3;lfo.connect(lfoG);lfoG.connect(flut.gain);lfo.start();
    src(wb).connect(wbp);wbp.connect(whp);whp.connect(flut);flut.connect(ch.water);
    const wlow=filt("lowpass",500),wlowG=gain(.5);src(bb).connect(wlow);wlow.connect(wlowG);wlowG.connect(ch.water);
    /* rain: bright noise */
    const rh=filt("highpass",1400),rl=filt("lowpass",8000),rg=gain(.55);src(wb).connect(rh);rh.connect(rl);rl.connect(rg);rg.connect(ch.rain);
    const chimeG=gain(.5);chimeG.connect(ctx.destination);
    A={ctx,master,ch,wl,chimeG,on:false,nextBird:0,nextPlip:0,nextGust:0};
  }
  if(A.ctx.state==="suspended")A.ctx.resume();
  return A;
}
function env(){/* what the landscape sounds like right here */
  const q=P(S.pos),day=sky.day,rain=W.rain;
  return {birds:clamp(day*(1-rain*.7)*(.35+q.trees*.55+q.flowers*.2-q.rock*.25),0,1),
    wind:clamp(.3+q.elev*.6+W.cloud*.15+rain*.2,0,1),
    water:clamp(Math.max(q.stream,q.pond*.55,q.water*.5,.06),0,1),
    rain:clamp(rain*1.2,0,1),night:sky.night};
}
function soundTick(){
  if(!A||!A.on)return;
  const c=A.ctx,n=c.currentTime,e=env(),f=S.snd.follow;
  A.master.gain.setTargetAtTime(S.snd.vol*.9,n,.4);
  for(const k of ["birds","wind","water","rain"]){const v=S.snd[k]*(f?e[k]:(k==="rain"?e.rain:1))*(k==="water"?.9:k==="wind"?.55:k==="rain"?.7:1);A.ch[k].gain.setTargetAtTime(v,n,1.2);}
  if(n>A.nextGust){A.wl.frequency.setTargetAtTime(250+Math.random()*700*(.5+e.wind),n,2.5);A.nextGust=n+2+Math.random()*4;}
  if(n>A.nextBird){const busy=S.snd.birds*(f?e.birds:1);
    if(e.night>.65){if(Math.random()<.35)owl(n+.1);A.nextBird=n+6+Math.random()*10;}
    else{if(busy>.03)birdCall(n+.05,Math.floor(Math.random()*4));A.nextBird=n+(1.2+Math.random()*4.5)/(.4+busy);}}
  if(n>A.nextPlip){if(S.snd.water*(f?e.water:1)>.2)plip(n+.02);A.nextPlip=n+.12+Math.random()*.7;}
}
function voice(t0,dest,pan){const c=A.ctx,o=c.createOscillator(),g=c.createGain();g.gain.value=0;o.connect(g);
  if(c.createStereoPanner){const p=c.createStereoPanner();p.pan.value=pan;g.connect(p);p.connect(dest);}else g.connect(dest);return [o,g];}
function birdCall(t0,type){
  const pan=Math.random()*1.6-.8,base=2400+Math.random()*1400;
  if(type===0){const n=3+Math.floor(Math.random()*4);for(let i=0;i<n;i++){const [o,g]=voice(t0,A.ch.birds,pan),s=t0+i*.17,d=.09+Math.random()*.04,up=Math.random()<.5;
    o.type="sine";o.frequency.setValueAtTime(base*(up?.85:1.15),s);o.frequency.exponentialRampToValueAtTime(base*(up?1.2:.8),s+d);
    g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.09,s+.015);g.gain.exponentialRampToValueAtTime(.0005,s+d);o.start(s);o.stop(s+d+.02);}}
  else if(type===1){const [o,g]=voice(t0,A.ch.birds,pan),d=.55+Math.random()*.4;o.type="sine";o.frequency.setValueAtTime(base*1.4,t0);o.frequency.linearRampToValueAtTime(base*1.25,t0+d);
    for(let k=0;k<d/.04;k++){const s=t0+k*.04;g.gain.setValueAtTime(.05,s);g.gain.setValueAtTime(.004,s+.022);}g.gain.setValueAtTime(0,t0+d);o.start(t0);o.stop(t0+d+.05);}
  else if(type===2){const [o,g]=voice(t0,A.ch.birds,pan),m=A.ctx.createOscillator(),mg=A.ctx.createGain(),d=.45+Math.random()*.3;m.frequency.value=16+Math.random()*10;mg.gain.value=380;m.connect(mg);mg.connect(o.frequency);
    o.type="sine";o.frequency.setValueAtTime(base,t0);o.frequency.linearRampToValueAtTime(base*1.15,t0+d);g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.06,t0+.05);g.gain.linearRampToValueAtTime(.05,t0+d-.08);g.gain.linearRampToValueAtTime(0,t0+d);
    o.start(t0);m.start(t0);o.stop(t0+d+.05);m.stop(t0+d+.05);}
  else{/* a soft two-note call from further away */const f0=620+Math.random()*120;for(let i=0;i<2;i++){const [o,g]=voice(t0,A.ch.birds,pan*.5),s=t0+i*.36;o.type="triangle";o.frequency.setValueAtTime(i?f0*.8:f0,s);
    g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.035,s+.04);g.gain.linearRampToValueAtTime(0,s+.26);o.start(s);o.stop(s+.3);}}
}
function owl(t0){for(let i=0;i<2;i++){const [o,g]=voice(t0,A.ch.birds,-.3),s=t0+i*.9,d=i?.6:.35;o.type="sine";o.frequency.setValueAtTime(400,s);o.frequency.linearRampToValueAtTime(370,s+d);
  g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.07,s+.06);g.gain.linearRampToValueAtTime(0,s+d);o.start(s);o.stop(s+d+.05);}}
function plip(t0){const [o,g]=voice(t0,A.ch.water,Math.random()*.8-.4),f=500+Math.random()*900,d=.05+Math.random()*.04;o.type="sine";o.frequency.setValueAtTime(f,t0);o.frequency.exponentialRampToValueAtTime(f*1.9,t0+d);
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.025,t0+.008);g.gain.exponentialRampToValueAtTime(.0003,t0+d);o.start(t0);o.stop(t0+d+.02);}
function chime(n){
  if(!S.timer.chime)return;const a=audioWake();if(!a)return;const c=a.ctx,t0=c.currentTime+.05;
  for(let r=0;r<n;r++)for(const [f,v] of [[659,.22],[988,.12],[1318,.06]]){const o=c.createOscillator(),g=c.createGain(),s=t0+r*.7;o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.01);g.gain.exponentialRampToValueAtTime(.0004,s+2.6);o.connect(g);g.connect(a.chimeG);o.start(s);o.stop(s+2.7);}
}
setInterval(soundTick,400);
const sndBtn=$("fh-snd");
function soundUI(){const on=!!(A&&A.on);sndBtn.setAttribute("aria-pressed",String(on));sndBtn.innerHTML=(on?IC.snd:IC.mute)+"<span>"+(on?"Sounds on":"Nature sounds")+"</span>";}
sndBtn.addEventListener("click",()=>{const a=audioWake();if(!a)return;a.on=!a.on;if(!a.on){a.master.gain.setTargetAtTime(0,a.ctx.currentTime,.3);}else{a.nextBird=0;soundTick();}soundUI();});
soundUI();

/* ---------------- pop-up panels ---------------- */
let popKind="",popReturn=null;
function openPop(kind,btn){
  if(popKind===kind){closePop();return;}
  popKind=kind;popReturn=btn||null;pop.hidden=false;pop.className="fh-pop fh-pop-"+kind;
  if(kind==="mixer")renderMixer();else if(kind==="timerset")renderTimerSet();else if(kind==="look")renderLook();else if(kind==="journal")renderJournal();
  const f=pop.querySelector("button,input,select");if(f)f.focus({preventScroll:true});
}
function closePop(){if(!popKind)return;popKind="";pop.hidden=true;pop.innerHTML="";if(popReturn)popReturn.focus({preventScroll:true});stopPreview();}
function head(title){return '<div class="fh-ph"><b>'+title+'</b><button type="button" class="fh-ib" data-a="close" title="Close">'+IC.x+'<span class="fh-sr">Close</span></button></div>';}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderMixer(){
  pop.setAttribute("aria-label","Sound mixer");
  const row=(k,l)=>'<label class="fh-sl"><span>'+l+'</span><input type="range" min="0" max="1" step="0.05" data-k="'+k+'" value="'+S.snd[k]+'"></label>';
  pop.innerHTML=head("Nature sounds")+row("vol","Volume")+row("birds","Birds")+row("wind","Wind")+row("water","Stream and lake")+row("rain","Rain")+
   '<label class="fh-ck"><input type="checkbox" data-k="follow"'+(S.snd.follow?" checked":"")+'> Follow the landscape (birds in the forest, water by the brook, wind on the ridge)</label>'+
   '<p class="fh-note">All sounds are generated live in your browser. Nothing is downloaded or recorded.</p>';
}
function renderTimerSet(){
  pop.setAttribute("aria-label","Timer settings");
  const today_=S.days[today()]||0;
  pop.innerHTML=head("Focus timer")+'<div class="fh-chips" role="radiogroup" aria-label="Focus and break length">'+
   PRESETS.map((p,i)=>'<button type="button" role="radio" class="fh-chip" data-preset="'+i+'" aria-checked="'+(S.timer.preset===i)+'">'+p[0]+' / '+p[1]+' min</button>').join("")+'</div>'+
   '<p class="fh-note">Focus / break. 25/5 is a classic start; 50/10 fits a lecture-length block; 90/20 is one long deep-work block. While you focus, your hiker walks on; in the break they rest.</p>'+
   '<label class="fh-ck"><input type="checkbox" data-k="chime"'+(S.timer.chime?" checked":"")+'> Soft bell when a block ends</label>'+
   '<p class="fh-stat">Today: <b>'+today_+' min</b> of focus · all sessions: <b>'+S.sessions+'</b></p>';
}
let prevRaf=0;
function stopPreview(){if(prevRaf)cancelAnimationFrame(prevRaf);prevRaf=0;}
function renderLook(){
  pop.setAttribute("aria-label","Personalise your hiker");
  const L=S.look;
  const sw=(k,arr,label)=>'<div class="fh-opt"><span>'+label+'</span><div class="fh-sw" role="radiogroup" aria-label="'+label+'">'+arr.map((c,i)=>'<button type="button" role="radio" aria-checked="'+((L[k]|0)===i)+'" data-look="'+k+'" data-v="'+i+'" style="--c:'+c+';background-color:'+c+'" title="'+label+' '+(i+1)+'"><span class="fh-sr">'+label+' '+(i+1)+'</span></button>').join("")+'</div></div>';
  const tx=(k,arr,label)=>'<div class="fh-opt"><span>'+label+'</span><div class="fh-chips" role="radiogroup" aria-label="'+label+'">'+arr.map((c,i)=>'<button type="button" role="radio" class="fh-chip" aria-checked="'+((L[k]|0)===i)+'" data-look="'+k+'" data-v="'+i+'">'+c+'</button>').join("")+'</div></div>';
  pop.innerHTML=head("Your hiker")+'<div class="fh-look"><canvas id="fh-prev" width="240" height="260" aria-hidden="true"></canvas><div class="fh-opts">'+
   '<label class="fh-opt"><span>Name</span><input type="text" maxlength="20" data-k="name" value="'+esc(L.name||"")+'" placeholder="optional"></label>'+
   sw("skin",SKIN,"Skin")+sw("hair",HAIR,"Hair")+tx("style",STYLE,"Hairstyle")+tx("hat",HAT,"Hat")+sw("jacket",JACKET,"Jacket")+sw("pack",PACK,"Backpack")+sw("pants",PANTS,"Trousers")+
   tx("stick",["No stick","Walking stick"],"Stick")+tx("dog",DOG,"Companion")+'</div></div><p class="fh-note">Saved only in this browser.</p>';
  const pc=$("fh-prev"),pctx=pc.getContext("2d");
  const loop=(n)=>{prevRaf=0;if(popKind!=="look")return;
    const ph=RM.matches?0:n/140;
    pctx.setTransform(1,0,0,1,0,0);pctx.clearRect(0,0,240,260);
    const gg=pctx.createLinearGradient(0,0,0,260);gg.addColorStop(0,"#cfe6f2");gg.addColorStop(1,"#eef6ea");pctx.fillStyle=gg;pctx.fillRect(0,0,240,260);
    pctx.fillStyle="#a7cf7c";pctx.fillRect(0,214,240,46);pctx.fillStyle="#dcc597";pctx.fillRect(0,214,240,8);
    withCtx(pctx,()=>{drawDog(70,216,2.6,ph+1.4,S.look.dog|0,0,0);drawHiker(140,216,5.6,S.look,ph,0,0,0);});
    if(!RM.matches)prevRaf=requestAnimationFrame(loop);};
  prevRaf=requestAnimationFrame(loop);
}
/* draw the hiker into another canvas with neutral daylight colours */
function withCtx(other,fn){const keepCx=cx,keepSky=sky,keepW={cloud:W.cloud,rain:W.rain};
  cx=other;sky={top:C.dayT,bot:C.dayB,day:1,dusk:0,night:0,alt:.8,h:12};W.cloud=0;W.rain=0;
  try{fn();}finally{cx=keepCx;sky=keepSky;W.cloud=keepW.cloud;W.rain=keepW.rain;}}
function renderJournal(){
  if(popKind!=="journal")return;
  pop.setAttribute("aria-label","Trail journal");
  const seen=SPOT.filter(s=>S.seen[s[0]]).length;
  const days=Object.keys(S.days).sort().slice(-7);
  pop.innerHTML=head("Trail journal")+
   '<p class="fh-stat"><b>'+km(S.focusPx).toFixed(1)+' km</b> walked in focus · <b>'+S.sessions+'</b> focus sessions · today <b>'+(S.days[today()]||0)+' min</b></p>'+
   (days.length?'<div class="fh-days" aria-label="Focus minutes, last days">'+days.map(d=>'<span title="'+d+': '+S.days[d]+' min"><i style="height:'+Math.min(100,S.days[d]/2.4)+'%"></i><small>'+d.slice(8)+'.'+d.slice(5,7)+'.</small></span>').join("")+'</div>':"")+
   '<h4>Spotted along the trail: '+seen+' of '+SPOT.length+'</h4><ul class="fh-spot">'+SPOT.map(s=>S.seen[s[0]]?'<li class="on">'+s[1]+'</li>':'<li>?</li>').join("")+'</ul>'+
   '<p class="fh-note">Keep an eye on the landscape: some things only show up in certain places, weather or at night.</p>'+
   (S.places.length?'<h4>Places passed</h4><p class="fh-places">'+S.places.slice(-10).map(esc).join(" → ")+'</p>':"")+
   '<p class="fh-sky"><label class="fh-ck"><input type="checkbox" data-k="sky"'+(S.sky==="day"?" checked":"")+'> Always daylight (otherwise the sky follows your clock)</label></p>';
}
host.addEventListener("click",ev=>{
  const b=ev.target.closest("button");if(!b||!host.contains(b))return;
  const a=b.dataset.a;
  if(a==="close"){closePop();return;}
  if(a==="collapse"){S.collapsed=!S.collapsed;applyCollapse();save();return;}
  if(a==="mixer"||a==="timerset"||a==="look"||a==="journal"){openPop(a,b);return;}
  if(b.dataset.preset!=null){const t=S.timer;t.preset=+b.dataset.preset;if(!t.running){t.left=presetMs(t.mode);}save();timerUI();renderTimerSet();pop.querySelector('[data-preset="'+t.preset+'"]').focus();return;}
  if(b.dataset.look){S.look[b.dataset.look]=+b.dataset.v;save();
    b.parentNode.querySelectorAll("[data-look]").forEach(x=>x.setAttribute("aria-checked",String(x===b)));draw(performance.now());}
});
host.addEventListener("input",ev=>{
  const i=ev.target,k=i.dataset&&i.dataset.k;if(!k)return;
  if(i.type==="range"){S.snd[k]=+i.value;soundTick();}
  else if(k==="follow")S.snd.follow=i.checked;
  else if(k==="chime")S.timer.chime=i.checked;
  else if(k==="sky"){S.sky=i.checked?"day":"clock";draw(performance.now());}
  else if(k==="name"){S.look.name=i.value.slice(0,20);updateLabel();}
  saveSoon();
});
document.addEventListener("keydown",ev=>{if(ev.key==="Escape"&&popKind)closePop();});
document.addEventListener("pointerdown",ev=>{if(popKind&&!pop.contains(ev.target)&&!ev.target.closest(".fh-ib,.fh-pill"))closePop();});
function applyCollapse(){
  host.classList.toggle("fh-collapsed",S.collapsed);
  const b=host.querySelector('[data-a="collapse"]');b.setAttribute("aria-expanded",String(!S.collapsed));
  b.title=S.collapsed?"Show the landscape":"Hide the landscape";b.innerHTML=(S.collapsed?IC.max:IC.min)+'<span class="fh-sr">'+b.title+'</span>';
  if(S.collapsed)closePop();timerUI();
  if(!S.collapsed){requestAnimationFrame(()=>{resize();schedule();});}
}

updateTitle();applyCollapse();resize();schedule();
})();
