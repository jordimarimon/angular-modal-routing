"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[179],{9190:(i,a,n)=>{var s=n(6895),t=n(8256),p=n(1481),l=n(5322);var f=n(5861);const c=[{path:"view-1",outlet:"modal-4",loadChildren:()=>n.e(35).then(n.bind(n,9035)).then(o=>o.ROUTES)},{path:"view-2",outlet:"modal-4",loadChildren:()=>n.e(67).then(n.bind(n,9067)).then(o=>o.ROUTES)},{path:"view-3",outlet:"modal-4",loadChildren:()=>n.e(457).then(n.bind(n,6457)).then(o=>o.ROUTES)}];function h(o,r){const e={...o};return o.loadChildren?e.loadChildren=(0,f.Z)(function*(){return(yield o.loadChildren()).map(R=>h(R,r))}):e.children=[...o.children??[],...c],e}const d=function(){return["font-bold","text-neutral-900"]},v=function(){return{exact:!0}};let g=(()=>{class o{constructor(e){this._router=e,this._router.resetConfig(function m(o){const r=[];for(const e of o)r.push(h(e,c));return r}(this._router.config))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-root"]],standalone:!0,features:[t.jDz],decls:16,vars:8,consts:[[1,"p-6"],[1,"text-2xl","font-bold","my-6"],[1,"flex","w-full","my-4"],[1,"flex","items-center","gap-4","w-full"],["routerLink","/",1,"cursor-pointer","underline","text-neutral-600",3,"routerLinkActive","routerLinkActiveOptions"],["routerLink","/page-2",1,"cursor-pointer","underline","text-neutral-600",3,"routerLinkActive"],["routerLink","/page-3",1,"cursor-pointer","underline","text-neutral-600",3,"routerLinkActive"],[1,"p-4","border","border-neutral-200"]],template:function(e,x){1&e&&(t.TgZ(0,"main",0)(1,"h1",1),t._uU(2," Modals with routing! "),t.qZA(),t.TgZ(3,"nav",2)(4,"ul",3)(5,"li",4)(6,"a"),t._uU(7,"Go to Home"),t.qZA()(),t.TgZ(8,"li",5)(9,"a"),t._uU(10,"Go to Page 2"),t.qZA()(),t.TgZ(11,"li",6)(12,"a"),t._uU(13,"Go to Page 3"),t.qZA()()()(),t.TgZ(14,"section",7),t._UZ(15,"router-outlet"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("routerLinkActive",t.DdM(4,d))("routerLinkActiveOptions",t.DdM(5,v)),t.xp6(3),t.Q6J("routerLinkActive",t.DdM(6,d)),t.xp6(3),t.Q6J("routerLinkActive",t.DdM(7,d)))},dependencies:[l.Bz,l.lC,l.rH,l.Od],encapsulation:2,changeDetection:0}),o})();const C=[{path:"",loadChildren:()=>Promise.all([n.e(592),n.e(72)]).then(n.bind(n,8072)).then(o=>o.ROUTES)},{path:"page-2",loadChildren:()=>Promise.all([n.e(592),n.e(608)]).then(n.bind(n,2608)).then(o=>o.ROUTES)},{path:"page-3",loadChildren:()=>Promise.all([n.e(592),n.e(374)]).then(n.bind(n,6374)).then(o=>o.ROUTES)}];(0,t.G48)();const A=[(0,t.RIp)(l.Bz.forRoot(C,{preloadingStrategy:l.wm})),{provide:s.S$,useClass:s.Do},{provide:s.mr,useValue:"/"}];(0,p.Cg)(g,{providers:A}).catch(o=>console.error(o))}},i=>{i.O(0,[736],()=>i(i.s=9190)),i.O()}]);