import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const source = await readFile(new URL("../src/client/analytics.js", import.meta.url), "utf8");
const failures = [];
function check(ok, message) { if(!ok) failures.push(message); }

function simulate({ hostname="wasl-tech.com", search="", lang="ar", stored=null } = {}) {
  const store = new Map(stored ? [["wasltech-analytics-preference-v1",stored]] : []);
  function element(tag) {
    const item = {
      tag,children:[],hidden:false,events:{},
      append(...nodes) { this.children.push(...nodes); },
      setAttribute(name,value){this[name]=value;},
      addEventListener(name,callback){this.events[name]=callback;},
      textContent:"",className:"",type:""
    };
    return item;
  }
  const head=element("head"),body=element("body"),footer=element("footer");
  const document = {
    currentScript:{dataset:{analyticsHost:"wasl-tech.com",measurementId:"G-WVH08BTS6C"}},
    documentElement:{lang},
    head,body,cookie:"_ga=existing",
    createElement:element,
    querySelector(selector){return selector===".site-footer" ? footer : null;}
  };
  const window={};
  const localStorage={
    getItem(key){return store.get(key)??null;},
    setItem(key,value){store.set(key,value);}
  };
  runInNewContext(source,{document,window,location:{hostname,search},
    localStorage,URLSearchParams,encodeURIComponent,Date});
  const panel=body.children.find(x=>x.className==="analytics-consent");
  const actions=panel?.children?.[2]?.children??[];
  return {head,body,footer,panel,actions,store,window};
}

let state=simulate();
check(state.head.children.length===0,"No Google requests before consent");
check(state.panel && !state.panel.hidden,"Consent choice must be visible for first-time visitors");
check(state.actions.length===2,"Allow and decline actions must both exist");
check(state.footer.children.length===1,"Preferences must be available in the footer");
state.actions[1]?.events.click?.();
check(state.store.get("wasltech-analytics-preference-v1")==="denied","Decline persisted");
check(state.head.children.length===0,"Decline must not load Google analytics");
state.footer.children[0]?.events.click?.();
check(!state.panel.hidden,"Settings control must reopen the choices");
state.actions[0]?.events.click?.();
check(state.store.get("wasltech-analytics-preference-v1")==="granted","Opt-in persisted");
check(state.head.children.length===1,"Opt-in must load analytics once");
check(state.window.dataLayer.some(x=>x[0]==="config"),"GA4 config only after opt-in");

state=simulate({stored:"granted",lang:"en"});
check(state.panel.hidden,"Saved consent must not reprompt on every page");
check(state.head.children.length===1,"Previously consented visitor may load analytics");

state=simulate({stored:"denied"});
check(state.panel.hidden && state.head.children.length===0,"Stored decline must keep analytics disabled");

state=simulate({hostname:"preview.vercel.app",search:"?previewAnalyticsConsent=1"});
check(!state.panel.hidden,"Explicit preview QA can display consent UI");
state.actions[0]?.events.click?.();
check(state.head.children.length===0,"Preview QA must never send analytics");

state=simulate({hostname:"preview.vercel.app"});
check(state.body.children.length===0 && state.head.children.length===0,"Ordinary previews remain free of analytics/overlay");

if(failures.length){
  console.error("PRIVACY SAFE ANALYTICS: FAILED");
  failures.forEach(x=>console.error("- "+x));
  process.exit(1);
}
console.log("PRIVACY SAFE ANALYTICS: PASSED (deny by default, opt-in, reject, reopen, locale and preview isolation)");
