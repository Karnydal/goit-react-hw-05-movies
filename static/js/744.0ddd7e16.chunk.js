"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{725:function(t,n,r){r.d(n,{s:function(){return c}});var e=r(6871),a=r(501),u=r(184),c=function(t){var n=t.movies,r=(0,e.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})})}},4390:function(t,n,r){r.d(n,{Df:function(){return s},IQ:function(){return p},Jh:function(){return d},XT:function(){return l},rs:function(){return f}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=08eafc951dbb6d6fc5b170c56029c8ce",s=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n).concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits").concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie".concat(o,"&query=").concat(n,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6744:function(t,n,r){r.r(n);var e=r(885),a=r(2791),u=r(4390),c=r(725),i=r(184);n.default=function(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],o=n[1];return(0,a.useEffect)((function(){u.Df().then((function(t){return o(t)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Trending today"}),r&&(0,i.jsx)(c.s,{movies:r})]})}}}]);
//# sourceMappingURL=744.0ddd7e16.chunk.js.map