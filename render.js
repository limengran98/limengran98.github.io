(function(root){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const external=(url,label,cls='')=>`<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const type=pub=>pub.type||(/arxiv|preprint/i.test(pub.venue)?'preprint':/aaai|ijcai|icml|neurips|iclr|cvpr|iccv|eccv|sigkdd|kdd|miccai|bigdata|acl|emnlp/i.test(pub.venue)?'conference':'journal');
  const role=pub=>(pub.rank||'').replace('2th','2nd');
  const isFirstCorresponding=pub=>pub.corr===true||/1st|first|correspond|通讯/i.test(pub.rank||'');
  const authors=names=>esc(names).replace(/Mengran Li/g,'<strong>Mengran Li</strong>');
  const researchFigures={
    morphosuff:[
      ['images/morphosuff.webp','Measurement-sufficiency framework',2163,750],
      ['images/morphosuff-evidence.webp','Evidence across OPS, OASIS, and PERISCOPE measurement contexts',2162,467]
    ],
    cellscientist:[
      ['images/cellscientist.webp','Feedback-guided local revision and auditable model trajectories',2667,1024],
      ['images/cellscientist-trajectory.webp','BBBC047 model-revision trajectory. PCC values are validation scores used during search.',2441,1339]
    ],
    cellaudit:[
      ['images/cellaudit.webp','Discover, falsify, and revise: the input-use auditing workflow',2400,802],
      ['images/cellaudit-input-audit.webp','Candidate-level input auditing and predictive contribution',2400,1302]
    ]
  };
  function selected(work,index){
    const name=work.shortName||({arb:'AttriReBoost',app:'APP',chmr:'CHMR'}[work.id]||'Research');
    const figures=researchFigures[work.id]||[[work.img,`${name} research framework`]];
    const gallery=figures.map(([src,caption,width,height],i)=>`<figure class="research-figure ${i?'supporting-figure':''}"><a class="figure-link" href="${esc(src)}" data-figure="${esc(src)}" data-caption="${esc(caption)}" aria-label="Enlarge ${esc(caption)}"><img src="${esc(src)}" alt="${esc(caption)}" loading="lazy"${width?` width="${width}" height="${height}"`:''}><span class="figure-expand" aria-hidden="true">Enlarge ↗</span></a><figcaption>${esc(caption)}</figcaption></figure>`).join('');
    return `<article class="work-card ${researchFigures[work.id]?'featured-work':'classic-work'}" id="work-${esc(work.id)}"><div class="work-content"><div class="work-topline"><span class="work-name">${esc(name)}</span><span class="venue">${esc(work.venue)}</span></div><h3>${external(work.projectUrl||work.paperUrl,esc(work.title))}</h3><p class="authors">${authors(work.authors)}</p><p class="work-description">${esc(work.desc)}</p><div class="work-bottom"><div class="work-links">${work.projectUrl?external(work.projectUrl,'Project ↗','project-link'):''}${work.paperUrl?external(work.paperUrl,'Paper ↗'):''}${work.codeUrl?external(work.codeUrl,'Code ↗'):''}${work.bibtex?`<button class="cite-button" data-cite="${index}" aria-label="Cite ${esc(name)}">BibTeX</button>`:''}</div><div class="tags">${(work.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></div><div class="work-gallery">${gallery}</div></article>`;
  }
  function meta(items){
    const counts={journal:0,conference:0,preprint:0};items.forEach(p=>counts[type(p)]++);const next={...counts};
    return items.map(p=>({type:type(p),code:({journal:'J',conference:'C',preprint:'P'}[type(p)])+next[type(p)]--}));
  }
  function publication(pub,m){
    return `<article class="publication" data-type="${m.type}"><span class="publication-code">${esc(m.code)}</span><div><h4>${pub.url?external(pub.url,esc(pub.title)):esc(pub.title)}</h4><div class="publication-meta"><span>${esc(pub.year)}</span><span class="publication-venue">${esc(pub.venue)}</span><span class="author-role">${esc(role(pub))}${pub.corr===true&&!/correspond/i.test(pub.rank)?' · Corresponding':''}</span>${pub.projectUrl?external(pub.projectUrl,'Project ↗'):''}${pub.codeUrl?external(pub.codeUrl,'Code ↗'):''}</div></div></article>`;
  }
  function news(item){return `<li><time>${esc(item.date)}</time><div>${item.content}</div></li>`;}
  root.SiteRender={esc,type,meta,selected,publication,news,isFirstCorresponding};
})(globalThis);
