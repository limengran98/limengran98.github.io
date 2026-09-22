import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const directory=path.dirname(fileURLToPath(import.meta.url));
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(directory,'data.js'),'utf8')+'\nthis.profile={newsData,selectedWorks,fullPublications,awardsData,serviceData};',context,{timeout:1000});
vm.runInContext(fs.readFileSync(path.join(directory,'render.js'),'utf8'),context,{timeout:1000});
const {profile,SiteRender:R}=context;
const {newsData,selectedWorks,fullPublications,awardsData,serviceData}=profile;
const metadata=R.meta(fullPublications);
const replacements={
  SELECTED:selectedWorks.map(R.selected).join('\n'),
  PUBLICATIONS:fullPublications.map((p,i)=>R.publication(p,metadata[i])).join('\n'),
  NEWS:newsData.slice(0,5).map(R.news).join('\n'),
  NEWS_ARCHIVE:newsData.slice(5).map(R.news).join('\n'),
  NEWS_COUNT:newsData.length,
  AWARDS:awardsData.map(a=>`<li>${a}</li>`).join('\n'),
  SERVICE:serviceData.map(s=>`<p>${s}</p>`).join('\n'),
  YEARS:[...new Set(fullPublications.map(p=>p.year))].sort().reverse().map(y=>`<option value="${y}">${y}</option>`).join(''),
  PUB_COUNT:fullPublications.length,
  JOURNAL_COUNT:fullPublications.filter(p=>R.type(p)==='journal').length,
  CONFERENCE_COUNT:fullPublications.filter(p=>R.type(p)==='conference').length,
  PREPRINT_COUNT:fullPublications.filter(p=>R.type(p)==='preprint').length,
};
let html=fs.readFileSync(path.join(directory,'template.html'),'utf8');
for(const [key,value] of Object.entries(replacements))html=html.replaceAll(`<!--${key}-->`,String(value));
if(/<!--(?:SELECTED|PUBLICATIONS|NEWS|AWARDS|SERVICE|YEARS|\w+_COUNT)-->/g.test(html))throw new Error('Unfilled template field');
fs.writeFileSync(path.join(directory,'index.html'),html);
const dist=path.join(directory,'dist');fs.mkdirSync(dist,{recursive:true});
for(const name of ['index.html','styles.css','app.js','data.js','render.js','lmr.jpg'])fs.copyFileSync(path.join(directory,name),path.join(dist,name));
fs.cpSync(path.join(directory,'images'),path.join(dist,'images'),{recursive:true});
fs.writeFileSync(path.join(dist,'.nojekyll'),'');
console.log(`Built homepage: ${selectedWorks.length} selected works, ${fullPublications.length} publications, ${newsData.length} news items.`);
