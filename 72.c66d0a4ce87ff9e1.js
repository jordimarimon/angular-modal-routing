"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[72],{8072:(w,m,e)=>{e.r(m),e.d(m,{ROUTES:()=>k});var u=e(5322),f=e(519),g=e(1346),t=e(8256);const V=["dialog"],T=function(){return{"modal-1":null}},r=function(n){return{outlets:n}},a=function(n){return["/",n]},b=function(){return["view-1"]},s=function(n){return{"modal-1":n}},d=function(){return["underline","font-bold"]},K=function(){return["view-2"]},L=function(){return["view-3"]};let h=(()=>{class n{show(){this.dialogEl?.nativeElement.showModal()}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-modal-1"]],viewQuery:function(o,l){if(1&o&&t.Gf(V,5),2&o){let i;t.iGM(i=t.CRH())&&(l.dialogEl=i.first)}},standalone:!0,features:[t.jDz],decls:17,vars:36,consts:[[1,"shadow-lg","border-4","border-blue-400"],["dialog",""],[1,"flex","flex-col","w-80","h-80"],[1,"mis-auto","px-4","py-2","bg-red-600","text-neutral-50",3,"routerLink","click"],[1,"flex","items-center","gap-4","mb-4"],[1,"flex","items-center","px-4","-py-2",3,"routerLink","routerLinkActive"],[1,"p-4","flex-1","border","border-neutral-200"],["name","modal-1"]],template:function(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"dialog",0,1)(2,"section",2)(3,"button",3),t.NdJ("click",function(){t.CHM(i);const p=t.MAs(1);return t.KtG(p.close())}),t._uU(4," Close "),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"button"),t._uU(8,"Tab 1"),t.qZA()(),t.TgZ(9,"li",5)(10,"button"),t._uU(11,"Tab 2"),t.qZA()(),t.TgZ(12,"li",5)(13,"button"),t._uU(14,"Tab 3"),t.qZA()()(),t.TgZ(15,"div",6),t._UZ(16,"router-outlet",7),t.qZA()()()}2&o&&(t.xp6(3),t.Q6J("routerLink",t.VKq(10,a,t.VKq(8,r,t.DdM(7,T)))),t.xp6(3),t.Q6J("routerLink",t.VKq(17,a,t.VKq(15,r,t.VKq(13,s,t.DdM(12,b)))))("routerLinkActive",t.DdM(19,d)),t.xp6(3),t.Q6J("routerLink",t.VKq(25,a,t.VKq(23,r,t.VKq(21,s,t.DdM(20,K)))))("routerLinkActive",t.DdM(27,d)),t.xp6(3),t.Q6J("routerLink",t.VKq(33,a,t.VKq(31,r,t.VKq(29,s,t.DdM(28,L)))))("routerLinkActive",t.DdM(35,d)))},dependencies:[u.Bz,u.lC,u.rH,u.Od],encapsulation:2,changeDetection:0}),n})();var v=e(4641);const C=function(){return["view-1"]},A=function(n){return{"modal-1":n}},M=function(n){return{outlets:n}},Z=function(n,c){return[n,c]},U=function(n){return{"modal-4":n}},k=[{path:"",component:(()=>{class n{constructor(o,l){this._activeOutlet=o,this._modal=l}ngAfterViewInit(){this._activeOutlet.hasOutlet("modal-1")?this._modalEl?.show():this._activeOutlet.hasOutlet("modal-4")&&this._modal.showModal(f.Q)}showModal4(){this._modal.showModal(f.Q)}getUrl(){return this._activeOutlet.getUrlWithoutOutlet()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.k),t.Y36(v.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-page-1"]],viewQuery:function(o,l){if(1&o&&t.Gf(h,5),2&o){let i;t.iGM(i=t.CRH())&&(l._modalEl=i.first)}},standalone:!0,features:[t._Bn([g.k,v.Z]),t.jDz],decls:8,vars:18,consts:[[1,"text-lg","font-bold","mb-6"],[1,"flex","items-center","px-4","py-2","mb-4","bg-blue-600","text-neutral-50",3,"routerLink","click"],[1,"flex","items-center","px-4","py-2","bg-blue-600","text-neutral-50",3,"routerLink","click"],["modal",""]],template:function(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"h2",0),t._uU(1," Home Page "),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){t.CHM(i);const p=t.MAs(7);return t.KtG(p.show())}),t._uU(3," Open Modal 1 "),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return l.showModal4()}),t._uU(5," Open Modal 4 "),t.qZA(),t._UZ(6,"app-modal-1",null,3)}2&o&&(t.xp6(2),t.Q6J("routerLink",t.WLB(7,Z,l.getUrl(),t.VKq(5,M,t.VKq(3,A,t.DdM(2,C))))),t.xp6(2),t.Q6J("routerLink",t.WLB(15,Z,l.getUrl(),t.VKq(13,M,t.VKq(11,U,t.DdM(10,C))))))},dependencies:[u.Bz,u.rH,h],encapsulation:2}),n})(),children:[{path:"view-1",outlet:"modal-1",loadComponent:()=>e.e(456).then(e.bind(e,456)).then(n=>n.View11Component)},{path:"view-2",outlet:"modal-1",loadComponent:()=>e.e(702).then(e.bind(e,4702)).then(n=>n.View12Component)},{path:"view-3",outlet:"modal-1",loadComponent:()=>e.e(929).then(e.bind(e,3929)).then(n=>n.View13Component)}]}]}}]);