(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"25c2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-md"},[i("q-form",{on:{submit:e.postFeatured}},[i("q-input",{attrs:{outlined:"",label:"Product Code","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.productid,callback:function(t){e.productid=t},expression:"productid"}}),i("q-input",{attrs:{outlined:"",label:"Title","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("q-input",{attrs:{outlined:"",type:"number",label:"Original Price","lazy-rules":"",rules:[function(e){return e||e.length>0||"Please type something"}]},model:{value:e.originalprice,callback:function(t){e.originalprice=e._n(t)},expression:"originalprice"}}),i("q-input",{attrs:{type:"number",label:"Discounted Price",outlined:"","lazy-rules":"",rules:[function(e){return e||e.length<0||"Please type something"}]},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}}),i("q-input",{attrs:{outlined:"",label:"Image Link","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.imagelink,callback:function(t){e.imagelink=t},expression:"imagelink"}}),i("q-input",{attrs:{outlined:"",type:"number",label:"stars","lazy-rules":"",rules:[function(e){return e&&e>0&&e<11||"between 0-10"}]},model:{value:e.stars,callback:function(t){e.stars=e._n(t)},expression:"stars"}}),i("q-btn",{attrs:{type:"submit"}},[e._v("Post")])],1)],1)},l=[],r=i("bc3a"),a=i.n(r),s={name:"postfeatured",data(){return{productid:"",title:"",originalprice:0,price:0,imagelink:"",stars:0}},methods:{postFeatured(){a.a.post("/home/featured",{productid:this.productid,title:this.title,price:this.price,originalprice:this.originalprice,imagelink:this.imagelink,stars:this.stars}).then((e=>{this.$q.notify({message:e.data.msg})}))}}},u=s,o=i("2877"),c=i("0378"),p=i("27f9"),d=i("9c40"),m=i("eebe"),g=i.n(m),b=Object(o["a"])(u,n,l,!1,null,null,null);t["default"]=b.exports;g()(b,"components",{QForm:c["a"],QInput:p["a"],QBtn:d["a"]})}}]);