(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["iuc-News-newsList"],{"291c":function(t,n,e){"use strict";e.r(n);var i=e("8d1d"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},"371b":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-informatic-brown"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("通知公告")])],2),t._l(t.news,function(n,i){return e("v-uni-view",{key:i,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(n.ID)}}},[e("v-uni-view",{staticClass:"solids-bottom padding bg-white"},[e("v-uni-view",{staticClass:"padding-bottom-xs"},[e("v-uni-text",{staticClass:"text-xxl"},[t._v(t._s(n.Topic))])],1),e("v-uni-view",{staticClass:"text-grey"},[e("v-uni-text",{staticClass:"text-df margin-right-sm"},[t._v(t._s(n.Author))]),e("v-uni-text",{staticClass:"text-df"},[t._v(t._s(n.ReleaseTime))])],1)],1)],1)}),e("navTab",{attrs:{selection:1}})],2)},s=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})},"8d1d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLoad:function(){this.getDatas()},data:function(){return{TabCur:0,tabNav:["学校新闻","学院公告","实验室公告","综合公告","平台通知","党团通知"],news:[]}},methods:{getDatas:function(){var t=this;uni.post("/api/cms/getArticles",{},function(n){t.news=n.data,t.news=t.news.filter(function(t){return"00000000-0000-0000-0000-000000000000"!==t.ID})})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},toDetail:function(t){uni.navigateTo({url:"./newsDetail?id="+t})}}};n.default=i},a019:function(t,n,e){"use strict";e.r(n);var i=e("371b"),a=e("291c");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var u,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"27828ffa",null,!1,i["a"],u);n["default"]=c.exports}}]);