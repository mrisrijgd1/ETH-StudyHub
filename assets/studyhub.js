/* Shared navigation and original StudyHub presentation. */
(function(){
 const script=document.currentScript, base=new URL('../',script.src), de=location.pathname.includes('/de/'), prefix=de?'de/':'';
 document.body.classList.add('studyhub-app');
 document.querySelectorAll('.sh-links,.sh-side').forEach(nav=>{if(nav.querySelector('[data-chemie-link]'))return;const a=document.createElement('a');a.href=new URL('chemie/',base);a.textContent='Chemie I (PC)';a.dataset.chemieLink='true';nav.append(a);});
 const progress=(()=>{try{return JSON.parse(localStorage.getItem('studyhub-chemie-v1')||'{}')}catch{return {}}})();
 document.querySelectorAll('[data-chemie-progress]').forEach(el=>el.textContent=(progress.done||[]).length+' / 27 '+(de?'Lektionen abgeschlossen':'lessons completed'));
})();
