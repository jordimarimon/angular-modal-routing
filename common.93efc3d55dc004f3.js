"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[592],{1346:(L,s,c)=>{c.d(s,{k:()=>_});var e=c(8256),u=c(5322);let _=(()=>{class t{constructor(o,n){this._route=o,this._router=n}getUrlWithoutOutlet(){return this._router.url.replace(/\/\(.*?\)$/,"")}hasOutlet(o){return(this._route.snapshot.children[0]?.routeConfig?.outlet??"")===o}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(u.gz),e.LFG(u.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()},519:(L,s,c)=>{c.d(s,{Q:()=>m});var e=c(5322),u=c(1346),_=c(4641),t=c(8256);const d=function(){return{"modal-4":null}},o=function(r){return{outlets:r}},n=function(r,h){return[r,h]},p=function(){return["view-1"]},f=function(r){return{"modal-4":r}},a=function(){return["underline","font-bold"]},v=function(){return["view-2"]},M=function(){return["view-3"]};let m=(()=>{class r{constructor(i,l){this.overlayRef=i,this._activeOutlet=l}close(){this.overlayRef.close(),this.overlayRef.remove()}getUrl(){return this._activeOutlet.getUrlWithoutOutlet()}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(_.$),t.Y36(u.k))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-modal-4"]],standalone:!0,features:[t._Bn([u.k]),t.jDz],decls:15,vars:40,consts:[[1,"flex","flex-col","w-md","max-w-screen","min-h-150"],[1,"mis-auto","px-4","py-2","bg-red-600","text-neutral-50",3,"routerLink","click"],[1,"flex","items-center","gap-4","mb-4"],[1,"flex","items-center","px-4","-py-2",3,"routerLink","routerLinkActive"],[1,"p-4","flex-1","border","border-neutral-200"],["name","modal-4"]],template:function(i,l){1&i&&(t.TgZ(0,"section",0)(1,"button",1),t.NdJ("click",function(){return l.close()}),t._uU(2," Close "),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"button"),t._uU(6,"Tab 1"),t.qZA()(),t.TgZ(7,"li",3)(8,"button"),t._uU(9,"Tab 2"),t.qZA()(),t.TgZ(10,"li",3)(11,"button"),t._uU(12,"Tab 3"),t.qZA()()(),t.TgZ(13,"div",4),t._UZ(14,"router-outlet",5),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("routerLink",t.WLB(10,n,l.getUrl(),t.VKq(8,o,t.DdM(7,d)))),t.xp6(3),t.Q6J("routerLink",t.WLB(18,n,l.getUrl(),t.VKq(16,o,t.VKq(14,f,t.DdM(13,p)))))("routerLinkActive",t.DdM(21,a)),t.xp6(3),t.Q6J("routerLink",t.WLB(27,n,l.getUrl(),t.VKq(25,o,t.VKq(23,f,t.DdM(22,v)))))("routerLinkActive",t.DdM(30,a)),t.xp6(3),t.Q6J("routerLink",t.WLB(36,n,l.getUrl(),t.VKq(34,o,t.VKq(32,f,t.DdM(31,M)))))("routerLinkActive",t.DdM(39,a)))},dependencies:[e.Bz,e.lC,e.rH,e.Od],encapsulation:2,changeDetection:0}),r})()},4641:(L,s,c)=>{c.d(s,{$:()=>u,Z:()=>_});var e=c(8256);const u=new e.OlP("OverlayRef");let _=(()=>{class t{constructor(o,n,p){this._environmentInjector=o,this._defaultInjector=n,this._appRef=p}showModal(o){const n=document.createElement("dialog"),f=e.zs3.create({parent:this._defaultInjector,providers:[{provide:u,useValue:n}]}),a=(0,e.LMc)(o,{environmentInjector:this._environmentInjector,elementInjector:f}),v=a.hostView;this._appRef.attachView(v),a.changeDetectorRef.reattach();const M=v.rootNodes,m=document.createDocumentFragment();for(const r of M)m.appendChild(r);n.appendChild(m),n.classList.add("shadow-lg","border-4","border-blue-400"),document.body.appendChild(n),n.showModal()}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(e.lqb),e.LFG(e.zs3),e.LFG(e.z2F))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()}}]);