(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{f68e:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"cart"},[i("q-list",{staticClass:"rounded-borders",staticStyle:{"max-width":"900px"},attrs:{bordered:"",padding:""}},[i("q-item-label",{attrs:{header:""}},[t._v("Items in cart")]),t._l(t.items,(function(e){return i("div",{key:e.id},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:"",top:"",to:"/product/"+e.id}},[i("q-avatar",{attrs:{icon:"folder",color:"primary","text-color":"white"}})],1),i("q-item-section",{on:{click:function(i){return t.goToProduct(e.id)}}},[i("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.title))])],1),i("q-item-section",[i("q-item-label",{attrs:{lines:"1"}},[t._v("Rs. "+t._s(e.price))])],1),i("q-item-section",[i("q-input",{staticStyle:{"max-width":"200px"},attrs:{type:"number",filled:"",prefix:"Qty: "},on:{click:t.updateCart},model:{value:e.qty,callback:function(i){t.$set(e,"qty",t._n(i))},expression:"item.qty"}})],1),i("q-item-section",[i("q-item-label",{attrs:{lines:"1"}},[t._v("Total Rs. "+t._s(e.price*e.qty))])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"delete",color:"red"},on:{click:function(i){return t.removeItem(e.id)}}})],1)],1)],1)}))],2)],1),i("q-space"),i("div",{staticClass:"cashout"},[i("div",{staticClass:"text-h3",attrs:{align:"center"}},[t._v("Total: "+t._s(t.total))])])],1)},s=[],r=i("ded3"),c=i.n(r),o=(i("bc3a"),i("2f62")),l={name:"cart",data(){return{items:[],total:0}},computed:c()({},Object(o["c"])("page",["getCartItems"])),created(){this.items=JSON.parse(localStorage.getItem("cart")),console.log(this.items),this.updateCart()},methods:c()(c()({},Object(o["b"])("page",["setCartItems"])),{},{updateCart(){this.items=this.items.filter((t=>t.qty>0)),localStorage.setItem("cart",JSON.stringify(this.items)),this.total=0,this.items.forEach((t=>{console.log(t.qty),this.total+=t.qty*t.price}))},removeItem(t){this.items=this.items.filter((e=>e.id!=t)),this.setCartItems(this.getCartItems-1),this.updateCart()},goToProduct(t){this.$router.push(`/product/${t}`)}})},n=l,m=i("2877"),d=i("1c1c"),p=i("0170"),u=i("66e5"),h=i("4074"),q=i("cb32"),v=i("27f9"),b=i("0016"),f=i("2c91"),g=i("714f"),y=i("eebe"),I=i.n(y),C=Object(m["a"])(n,a,s,!1,null,null,null);e["default"]=C.exports;I()(C,"components",{QList:d["a"],QItemLabel:p["a"],QItem:u["a"],QItemSection:h["a"],QAvatar:q["a"],QInput:v["a"],QIcon:b["a"],QSpace:f["a"]}),I()(C,"directives",{Ripple:g["a"]})}}]);