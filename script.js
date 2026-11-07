(function(){
  const menu=document.getElementById('menuToggle'),nav=document.getElementById('siteNav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  const overlay=document.getElementById('posterOverlay');
  function closePoster(){overlay.hidden=true;document.body.style.overflow='';try{sessionStorage.setItem('asaduzzaman-poster-seen','1')}catch(e){}}
  document.getElementById('closePoster').addEventListener('click',closePoster);
  document.getElementById('enterWebsite').addEventListener('click',closePoster);
  overlay.addEventListener('click',e=>{if(e.target===overlay)closePoster()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)closePoster()});
  try{if(!sessionStorage.getItem('asaduzzaman-poster-seen')){overlay.hidden=false;document.body.style.overflow='hidden';}}catch(e){overlay.hidden=false;document.body.style.overflow='hidden';}
})();
