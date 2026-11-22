const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../../assets/tips.js'),'utf8');
const a=source.indexOf('  function placeTip(box) {'),b=source.indexOf('  function show()',a);assert.ok(a>=0&&b>a);
function place(phone,hasMain=true,hasIntro=true){let result='';const box={},intro={after(item){assert.equal(item,box);result='after intro'}},main={querySelector(){return hasIntro?intro:null},prepend(item){assert.equal(item,box);result='main start'}};const context={matchMedia:()=>({matches:phone}),document:{querySelector:()=>hasMain?main:null,body:{appendChild(item){assert.equal(item,box);result='body'}}},box};vm.runInNewContext(source.slice(a,b)+'\nplaceTip(box)',context);return result;}
test('phone tips are in the reading flow after the lesson intro',()=>assert.equal(place(true),'after intro'));
test('phone pages without an intro get an in-flow tip at main start',()=>assert.equal(place(true,true,false),'main start'));
test('desktop tips retain their existing location',()=>assert.equal(place(false),'body'));
test('pages without main still have a usable fallback',()=>assert.equal(place(true,false),'body'));
