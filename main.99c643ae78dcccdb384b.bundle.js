webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function u(n){return d._26(0,[(n()(),d._8(0,0,null,null,14,"ul",[],null,null,null,null,null)),(n()(),d._24(-1,null,["\n    "])),(n()(),d._8(2,0,null,null,11,"li",[],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;if("click"===l){u=!1!==o.getPost(n.context.$implicit.id)&&u}return u},null,null)),(n()(),d._24(-1,null,["\n        "])),(n()(),d._8(4,0,null,null,4,"strong",[],null,null,null,null,null)),(n()(),d._24(5,null,[""," ("])),(n()(),d._8(6,0,null,null,1,"a",[["href","#"]],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;if("click"===l){u=!1!==o.deletePost(n.context.$implicit.id)&&u}return u},null,null)),(n()(),d._24(-1,null,["Remove"])),(n()(),d._24(-1,null,[")"])),(n()(),d._24(-1,null,["\n\n        "])),(n()(),d._8(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),d._8(11,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),d._24(-1,null,["Message:"])),(n()(),d._24(13,null,[" ","\n    "])),(n()(),d._24(-1,null,["\n"]))],null,function(n,l){n(l,5,0,l.context.$implicit.data.title),n(l,13,0,l.context.$implicit.data.content)})}function o(n){return d._26(0,[(n()(),d._8(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),d._24(-1,null,["Write down your notes:"])),(n()(),d._24(-1,null,["\n\n"])),(n()(),d._8(3,0,null,null,5,"input",[["name","title"],["placeholder","Title.."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,o=n.component;if("input"===l){u=!1!==d._20(n,4)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==d._20(n,4).onTouched()&&u}if("compositionstart"===l){u=!1!==d._20(n,4)._compositionStart()&&u}if("compositionend"===l){u=!1!==d._20(n,4)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(o.title=t)&&u}return u},null,null)),d._6(4,16384,null,0,p.b,[d.G,d.k,[2,p.a]],null,null),d._22(1024,null,p.d,function(n){return[n]},[p.b]),d._6(6,671744,null,0,p.g,[[8,null],[8,null],[8,null],[2,p.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),d._22(2048,null,p.e,null,[p.g]),d._6(8,16384,null,0,p.f,[p.e],null,null),(n()(),d._24(-1,null,["\n"])),(n()(),d._8(10,0,null,null,5,"textarea",[["name","content"],["placeholder","Content.."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,o=n.component;if("input"===l){u=!1!==d._20(n,11)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==d._20(n,11).onTouched()&&u}if("compositionstart"===l){u=!1!==d._20(n,11)._compositionStart()&&u}if("compositionend"===l){u=!1!==d._20(n,11)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(o.content=t)&&u}return u},null,null)),d._6(11,16384,null,0,p.b,[d.G,d.k,[2,p.a]],null,null),d._22(1024,null,p.d,function(n){return[n]},[p.b]),d._6(13,671744,null,0,p.g,[[8,null],[8,null],[8,null],[2,p.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),d._22(2048,null,p.e,null,[p.g]),d._6(15,16384,null,0,p.f,[p.e],null,null),(n()(),d._24(-1,null,["\n"])),(n()(),d._8(17,0,null,null,0,"input",[["type","submit"],["value","Add a Post"]],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;if("click"===l){u=!1!==o.addPost()&&u}return u},null,null)),(n()(),d._24(-1,null,["\n\n\n"])),(n()(),d._2(16777216,null,null,2,null,u)),d._6(20,802816,null,0,g.d,[d.Q,d.N,d.t],{ngForOf:[0,"ngForOf"]},null),d._21(131072,g.a,[d.g]),(n()(),d._24(-1,null,["\n\n\n"])),(n()(),d._8(23,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),d._24(24,null,["",""])),d._21(131072,g.a,[d.g]),(n()(),d._24(-1,null,["\n"])),(n()(),d._8(27,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),d._24(28,null,["",""])),d._21(131072,g.a,[d.g])],function(n,l){var t=l.component;n(l,6,0,"title",t.title);n(l,13,0,"content",t.content),n(l,20,0,d._25(l,20,0,d._20(l,21).transform(t.posts)))},function(n,l){var t=l.component;n(l,3,0,d._20(l,8).ngClassUntouched,d._20(l,8).ngClassTouched,d._20(l,8).ngClassPristine,d._20(l,8).ngClassDirty,d._20(l,8).ngClassValid,d._20(l,8).ngClassInvalid,d._20(l,8).ngClassPending),n(l,10,0,d._20(l,15).ngClassUntouched,d._20(l,15).ngClassTouched,d._20(l,15).ngClassPristine,d._20(l,15).ngClassDirty,d._20(l,15).ngClassValid,d._20(l,15).ngClassInvalid,d._20(l,15).ngClassPending);var u=null;n(l,24,0,null==(u=d._25(l,24,0,d._20(l,25).transform(t.post)))?null:u.title);var o=null;n(l,28,0,null==(o=d._25(l,28,0,d._20(l,29).transform(t.post)))?null:o.content)})}function e(n){return d._26(0,[(n()(),d._8(0,0,null,null,1,"app-root",[],null,null,null,o,h)),d._6(1,114688,null,0,_,[f.a],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var i={production:!0},c=function(){function n(){}return n}(),a=t("5v8a"),r=(t.n(a),t("Z0p1")),_=function(){function n(n){this.afs=n}return n.prototype.ngOnInit=function(){this.postsCol=this.afs.collection("posts"),this.posts=this.postsCol.snapshotChanges().map(function(n){return n.map(function(n){var l=n.payload.doc.data();return{id:n.payload.doc.id,data:l}})})},n.prototype.addPost=function(){this.afs.collection("posts").add({title:this.title,content:this.content})},n.prototype.getPost=function(n){this.postDoc=this.afs.doc("posts/"+n),this.post=this.postDoc.valueChanges()},n.prototype.deletePost=function(n){this.afs.doc("posts/"+n).delete()},n.ctorParameters=function(){return[{type:r.a}]},n}(),s=["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:15px;padding:10px;background:none;border-bottom:1px solid #414a59!important;border:0;color:#fff}input[type=submit][_ngcontent-%COMP%]{background-color:#fc0;cursor:pointer;color:#000;font-weight:700;margin-bottom:50px;padding:20px}ul[_ngcontent-%COMP%]{list-style-type:none;width:100%;margin:0;padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#414a59;padding:20px;margin-bottom:2px;color:#bec8d9}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fc0}h1[_ngcontent-%COMP%]{margin-top:50px}"],d=t("/oeL"),p=t("bm2B"),g=t("qbdv"),f=t("Z0p1"),m=[s],h=d._5({encapsulation:0,styles:m,data:{}}),b=d._3("app-root",_,e,{},{},[]),C=t("/oeL"),v=t("qbdv"),y=t("fc+i"),P=t("13je"),M=t("Z0p1"),x=t("bm2B"),O=C._4(c,[_],function(n){return C._18([C._19(512,C.i,C._0,[[8,[b]],[3,C.i],C.x]),C._19(5120,C.v,C._17,[[3,C.v]]),C._19(4608,v.f,v.e,[C.v]),C._19(4608,C.h,C.h,[]),C._19(5120,C.a,C._9,[]),C._19(5120,C.t,C._14,[]),C._19(5120,C.u,C._15,[]),C._19(4608,y.b,y.s,[v.c]),C._19(6144,C.J,null,[y.b]),C._19(4608,y.e,y.f,[]),C._19(5120,y.c,function(n,l,t,u){return[new y.k(n),new y.o(l),new y.n(t,u)]},[v.c,v.c,v.c,y.e]),C._19(4608,y.d,y.d,[y.c,C.z]),C._19(135680,y.m,y.m,[v.c]),C._19(4608,y.l,y.l,[y.d,y.m]),C._19(6144,C.H,null,[y.l]),C._19(6144,y.p,null,[y.m]),C._19(4608,C.O,C.O,[C.z]),C._19(4608,y.g,y.g,[v.c]),C._19(4608,y.i,y.i,[v.c]),C._19(5120,P.b,P.f,[P.c,P.d]),C._19(5120,M.a,M.d,[P.b,M.c]),C._19(4608,x.i,x.i,[]),C._19(512,v.b,v.b,[]),C._19(1024,C.l,y.q,[]),C._19(1024,C.b,function(n,l){return[y.r(n,l)]},[[2,y.h],[2,C.y]]),C._19(512,C.c,C.c,[[2,C.b]]),C._19(131584,C._7,C._7,[C.z,C._1,C.r,C.l,C.i,C.c]),C._19(2048,C.e,null,[C._7]),C._19(512,C.d,C.d,[C.e]),C._19(512,y.a,y.a,[[3,y.a]]),C._19(512,P.a,P.a,[]),C._19(512,M.b,M.b,[]),C._19(512,x.h,x.h,[]),C._19(512,x.c,x.c,[]),C._19(512,c,c,[]),C._19(256,P.c,{apiKey:"AIzaSyAXDgbAuBj9l6kyMLWnmjI6fK3irnlNpIw",authDomain:"firestore-e5268.firebaseapp.com",databaseURL:"https://firestore-e5268.firebaseio.com",projectId:"firestore-e5268",storageBucket:"",messagingSenderId:"1044004802162"},[]),C._19(256,P.d,void 0,[]),C._19(256,M.c,!1,[])])}),k=t("/oeL"),I=t("fc+i");i.production&&Object(k.U)(),Object(I.j)().bootstrapModuleFactory(O)},gFIY:function(n,l){function t(n){return new Promise(function(l,t){t(new Error("Cannot find module '"+n+"'."))})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);