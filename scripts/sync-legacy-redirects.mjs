import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { legacyStaticPageAliases } from "../src/seo/legacy-redirects.js";

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../vercel.json");
const flag=process.argv[2];
if(!["--check","--write"].includes(flag)||process.argv.length!==3){
  console.error("Usage: node scripts/sync-legacy-redirects.mjs --check|--write");
  process.exit(2);
}
const config=JSON.parse(await readFile(file,"utf8"));
const expected=legacyStaticPageAliases.map(({source,destination})=>({
  src:source.replaceAll(".","\\."),headers:{Location:destination},status:308
}));
const routes=config.routes??[];
const start=2;
const finish=routes.findIndex(x=>x.dest==="/api/legacy-service?language=en");
if(finish<0)throw Error("Missing service-function boundary");
if(flag==="--write"){
  config.routes=[...routes.slice(0,start),...expected,...routes.slice(finish)];
  delete config.redirects;
  await writeFile(file,JSON.stringify(config,null,2)+"\n","utf8");
}
if(config.redirects?.length)throw Error("The routing spike must not mix top-level redirects with legacy routes");
const actual=config.routes.slice(start,start+expected.length);
if(JSON.stringify(actual)!==JSON.stringify(expected)){
  console.error("Seven non-index legacy static redirects drifted from the documented canonical aliases");
  process.exit(1);
}
console.log(`ROUTES-ONLY PAGE SYNC: PASSED (${expected.length} HTML aliases)`);
