(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(t,e,s){"use strict";var i=s(0);e.a=new i.default},176:function(t,e,s){},218:function(t,e,s){"use strict";var i=s(176);s.n(i).a},297:function(t,e,s){"use strict";s.r(e);var i=s(160),n={name:"FixedHeader",data:function(){return{description:"",isPosts:!1,tagName:""}},props:{content:{type:Array,default:function(){return[]}}},computed:{title:function(){var t,e=this;switch(this.$route.path.slice(1,6)){case"posts":t=this.$page.title,this.isPosts=!0,this.description=this.$page.lastUpdated?"最后更新时间："+this.$page.lastUpdated:"";break;case"all/":if(t=this.$themeConfig.menus.all||"时间归档",this.isPosts=!1,0===this.content.length)return this.description="";setTimeout((function(){e.description=e.content[e.content.length-1].lastUpdated.slice(0,7)+"~"+e.content[0].lastUpdated.slice(0,7)+" ===>>> 共"+e.content.length+"篇"}),20);break;case"tags/":t=this.tagName||"",this.isPosts=!1,this.description="";break;case"about":t=this.$themeConfig.menus.about||"自我介绍",this.isPosts=!1,this.description="";break;default:t=this.$site.title||"欢迎光临",this.isPosts=!1,this.description=this.$site.description||"期待与你的交流"}return t}},mounted:function(){var t=this;i.a.$on("changeContentHeader",(function(e){t.tagName=e}))}},a=(s(218),s(17)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-header index-header",style:{backgroundImage:"url("+t.$themeConfig.bgImg+")"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title animated fadeInDown",class:{"post-content-header":t.isPosts},attrs:{id:"conentHeader"}},[t._v(t._s(t.title))]),t._v(" "),s("h5",{staticClass:"subtitle"},[t._v(t._s(t.description))]),t._v(" "),t._t("default")],2)])}),[],!1,null,"62b60db2",null);e.default=o.exports}}]);