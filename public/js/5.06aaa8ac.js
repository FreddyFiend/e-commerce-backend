(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"56d8":function(e,i,t){"use strict";t("b322")},"8b24":function(e,i,t){"use strict";t.r(i);var c=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"bg-grey-3"},[t("Carousel",{attrs:{carousels:e.carousels}}),t("Featured",{attrs:{featured:e.featured}})],1)},r=[],l=t("bc3a"),o=t.n(l),a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"q-pa-md"},[t("q-carousel",{attrs:{arrows:"",swipeable:"",autoplay:!0,animated:"",height:"400px",infinite:""},model:{value:e.slide,callback:function(i){e.slide=i},expression:"slide"}},e._l(e.carousels,(function(i,c){return t("q-carousel-slide",{key:c,attrs:{name:c,"img-src":i.imagelink},on:{click:function(t){return e.goToProduct(i.productid)}}},[t("div",{staticClass:"absolute-bottom custom-caption"},[t("div",{staticClass:"text-h2"},[e._v(e._s(i.caption1))]),t("div",{staticClass:"text-subtitle1"},[e._v(e._s(i.caption2))])])])})),1)],1)},s=[],n={name:"Carousels",data(){return{slide:0}},methods:{goToProduct(e){this.$router.push(`/product/${e}`)}},props:["carousels"]},d=n,u=(t("56d8"),t("2877")),p=t("880c"),g=t("62cd"),m=t("eebe"),v=t.n(m),f=Object(u["a"])(d,a,s,!1,null,"59c24fca",null),b=f.exports;v()(f,"components",{QCarousel:p["a"],QCarouselSlide:g["a"]});var _=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"q-pa-md"},[t("h5",[e._v("Featured Products")]),t("q-carousel",{staticClass:"lt-md",attrs:{infinite:"",swipeable:"",arrows:"",navigation:"","control-color":"primary"},model:{value:e.mobSlide,callback:function(i){e.mobSlide=i},expression:"mobSlide"}},e._l([1,2,3,4,5,6],(function(i,c){return t("q-carousel-slide",{key:c,attrs:{name:i}},[t("div",{staticClass:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},e._l(e.featured.slice(3*c,3*c+3),(function(i){return t("div",{key:i.id,staticClass:"col-lg-2 col-md-2 col-sm-4  col-xs-4 hover_border_grey text-center full-height"},[t("div",{on:{click:function(t){return e.$router.push("/product/"+i.productid)}}},[t("q-img",{staticClass:"rounded-borders",attrs:{src:i.imagelink}}),t("div",[e._v(e._s(i.title))]),t("div",{staticClass:"text-caption text-weight-bold text-green"},[e._v("\n              "+e._s(i.caption)+"\n            ")]),t("div",[t("span",[e._v("$ "+e._s(i.originalprice))])])],1)])})),0)])})),1),t("div",{staticClass:"q-pl-md bg-white q-pt-sm gt-sm "},[t("q-carousel",{staticClass:"rounded-borders",attrs:{arrows:"",autoplay:!1,animated:"",infinite:"",swipeable:"","control-color":"primary",navigation:"",padding:"",height:"260px"},model:{value:e.slide,callback:function(i){e.slide=i},expression:"slide"}},e._l([1,2,3],(function(i,c){return t("q-carousel-slide",{key:c,staticClass:"column no-wrap",attrs:{name:i}},[t("div",{staticClass:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},e._l(e.featured.slice(6*c,6*c+6),(function(i){return t("div",{key:i.id,staticClass:"col-lg-2 col-md-2 col-sm-4  col-xs-12 hover_border_grey text-center full-height"},[t("div",{on:{click:function(t){return e.$router.push("/product/"+i.productid)}}},[t("q-img",{staticClass:"rounded-borders",staticStyle:{width:"100%"},attrs:{src:i.imagelink}}),t("div",[e._v(e._s(i.title))]),t("div",{staticClass:"text-caption text-weight-bold text-green"},[e._v("\n                "+e._s(i.caption)+"\n              ")]),t("div",[t("span",[e._v("$ "+e._s(i.originalprice))])])],1)])})),0)])})),1)],1)],1)},h=[];const $=[{id:0,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:1,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:2,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:3,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:4,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"Hello",caption:"Nice",originalprice:"$50",discountedprice:"40"},{id:5,title:"H77ello",caption:"Nice",originalprice:"$50",discountedprice:"40"}];var C={data(){return{slide:1,cards:$,mobSlide:1}},props:["featured"],created(){}},x=C,w=t("068f"),H=Object(u["a"])(x,_,h,!1,null,null,null),N=H.exports;v()(H,"components",{QCarousel:p["a"],QCarouselSlide:g["a"],QImg:w["a"]});var k={name:"PageIndex",data(){return{slide:"first",carousels:[],featured:[]}},components:{Carousel:b,Featured:N},created(){o.a.get("/home").then((e=>{this.carousels=e.data.carousels,this.featured=e.data.featured,console.log(e.data)}))}},q=k,y=Object(u["a"])(q,c,r,!1,null,null,null);i["default"]=y.exports},b322:function(e,i,t){}}]);