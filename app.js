'use strict';
const R=SiteRender;
const $=s=>document.querySelector(s);
const filters={search:$('#publication-search'),year:$('#year-filter'),type:$('#type-filter'),author:$('#author-filter')};
const metadata=R.meta(fullPublications);
function renderPublications(){
  const query=filters.search.value.trim().toLowerCase();
  const rows=fullPublications.map((pub,i)=>({pub,meta:metadata[i]})).filter(({pub,meta})=>(filters.year.value==='all'||pub.year===filters.year.value)&&(filters.type.value==='all'||meta.type===filters.type.value)&&(filters.author.value==='all'||R.isFirstCorresponding(pub))&&(!query||[pub.title,pub.venue,pub.rank,pub.year,...(pub.tags||[])].join(' ').toLowerCase().includes(query)));
  $('#full-list').innerHTML=rows.length?rows.map(({pub,meta})=>R.publication(pub,meta)).join(''):'<p class="empty-state">No matching publications. Try another keyword or reset the filters.</p>';
  $('#result-count').textContent=`${rows.length} of ${fullPublications.length} publications`;
  ['journal','conference','preprint'].forEach(t=>$('#'+t+'-count').textContent=rows.filter(r=>r.meta.type===t).length);
}
Object.values(filters).forEach(input=>input.addEventListener(input.tagName==='INPUT'?'input':'change',renderPublications));
$('#reset-filters').addEventListener('click',()=>{filters.search.value='';[filters.year,filters.type,filters.author].forEach(x=>x.value='all');renderPublications();});
const dialog=$('#citation-dialog');
document.querySelectorAll('[data-cite]').forEach(b=>b.addEventListener('click',()=>{
  const work=selectedWorks[Number(b.dataset.cite)];$('#citation-title').textContent=work.shortName||'BibTeX citation';$('#citation-text').value=work.bibtex;$('#copy-status').textContent='';dialog.showModal();
}));
$('#close-citation').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
$('#copy-citation').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#citation-text').value);$('#copy-status').textContent='Copied to clipboard.';}catch{$('#citation-text').select();$('#copy-status').textContent='Text selected. Press Ctrl+C or ⌘C to copy.';}});
function syncTheme(){const dark=document.documentElement.classList.contains('dark');$('#theme-toggle').setAttribute('aria-pressed',String(dark));$('#theme-toggle').setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');$('#theme-toggle span').textContent=dark?'Light':'Dark';}
$('#theme-toggle').addEventListener('click',()=>{const dark=document.documentElement.classList.toggle('dark');try{localStorage.setItem('ml-dark',dark?'1':'0')}catch{}syncTheme();});syncTheme();
$('#copyright-year').textContent=new Date().getFullYear();
let visitorLoaded=false;
$('#visitor-toggle').addEventListener('click',()=>{const panel=$('#visitor-panel');panel.hidden=!panel.hidden;$('#visitor-toggle').setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden&&!visitorLoaded){visitorLoaded=true;$('#visitor-status').textContent='Loading visitor map…';const script=document.createElement('script');script.id='clustrmaps';script.src='https://clustrmaps.com/map_v2.js?d=EO4WwligewGDvWwRyQC9S5OqQniwGcIxTOqOSCvSPGY&cl=ffffff&w=a&t=tt';script.async=true;script.onload=()=>$('#visitor-status').textContent='';script.onerror=()=>$('#visitor-status').textContent='The visitor map is temporarily unavailable.';$('#visitor-map').append(script);}});
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');
