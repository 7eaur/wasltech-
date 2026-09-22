import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const DIST=path.join(ROOT,"dist");
const errors=[];

function fail(scope,message){errors.push(`${scope}: ${message}`);}

async function walk(directory){
  const entries=await readdir(directory,{withFileTypes:true});
  const files=[];
  for(const entry of entries){
    const full=path.join(directory,entry.name);
    if(entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function relative(file){return path.relative(DIST,file).replaceAll(path.sep,"/");}
function isPublicHtml(file){
  const rel=relative(file);
  return file.endsWith(".html") && !rel.startsWith("__showcase/") && !rel.startsWith("en/__showcase/");
}

function routeForFile(file){
  const rel=relative(file);
  if(rel==="index.html") return "/";
  if(rel.endsWith("/index.html")) return `/${rel.slice(0,-"index.html".length)}`;
  return `/${rel}`;
}

function fileForPathname(pathname){
  const clean=decodeURIComponent(pathname);
  if(clean==="/") return path.join(DIST,"index.html");
  if(clean.endsWith("/")) return path.join(DIST,clean.replace(/^\//,""),"index.html");
  return path.join(DIST,clean.replace(/^\//,""));
}

function idsIn(html){
  return new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match)=>match[1]));
}

const allFiles=await walk(DIST);
const htmlFiles=allFiles.filter(isPublicHtml);
const htmlByFile=new Map();
const knownFiles=new Set(allFiles.map((file)=>path.resolve(file)));

for(const file of htmlFiles){
  const html=await readFile(file,"utf8");
  htmlByFile.set(path.resolve(file),html);
}

for(const file of htmlFiles){
  const html=htmlByFile.get(path.resolve(file));
  const route=routeForFile(file);
  const scope=relative(file);
  const currentIds=idsIn(html);

  for(const match of html.matchAll(/<a\b[^>]*\shref="([^"]+)"[^>]*>/gi)){
    const href=match[1].trim();
    if(!href) {
      fail(scope,"empty anchor href");
      continue;
    }
    if(/^(?:https?:|mailto:|tel:)/i.test(href)) continue;

    if(href.startsWith("#")){
      const fragment=href.slice(1);
      if(fragment && !currentIds.has(fragment)) fail(scope,`missing local fragment target: #${fragment}`);
      continue;
    }

    let resolved;
    try {
      resolved=new URL(href,`https://local.test${route}`);
    } catch {
      fail(scope,`invalid href: ${href}`);
      continue;
    }

    if(resolved.origin!=="https://local.test") continue;
    const targetFile=path.resolve(fileForPathname(resolved.pathname));
    if(!knownFiles.has(targetFile)){
      fail(scope,`internal link target missing: ${href} -> ${resolved.pathname}`);
      continue;
    }

    if(resolved.hash){
      const targetHtml=htmlByFile.get(targetFile);
      if(targetHtml){
        const fragment=decodeURIComponent(resolved.hash.slice(1));
        if(fragment && !idsIn(targetHtml).has(fragment)){
          fail(scope,`fragment target missing: ${href}`);
        }
      }
    }
  }
}

if(errors.length){
  console.error("VNEXT LINK CHECK: FAILED");
  for(const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("VNEXT LINK CHECK: PASSED");
console.log(`Checked internal links/fragments across ${htmlFiles.length} public generated HTML files.`);
