(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Quasar App\n      ")]),a("q-btn-group",{staticClass:"gt-sm",attrs:{spread:""}},[a("q-btn",{attrs:{unelevated:"",label:"Home"}}),a("q-btn",{attrs:{unelevated:"",to:"/products",label:"Products"}}),a("q-btn",{attrs:{unelevated:"",to:"/cart",label:"Cart"}}),a("q-btn",{attrs:{unelevated:"",label:"About"}})],1),a("q-btn",{staticClass:"q-ml-md lt-md ",attrs:{to:"cart",dense:"",color:"purple",round:"",icon:"shopping_cart"}},[t.getCartItems>0?a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.getCartItems))]):t._e()],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/products"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-avatar",{attrs:{icon:"computer",color:"primary","text-color":"white"}})],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Products")]),a("q-item-label",{attrs:{caption:""}},[t._v("caption")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/cart"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-avatar",{attrs:{icon:"computer",color:"primary","text-color":"white"}})],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Cart")]),a("q-item-label",{attrs:{caption:""}},[t._v("caption")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/postitem"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-avatar",{attrs:{icon:"computer",color:"primary","text-color":"white"}})],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("post product")]),a("q-item-label",{attrs:{caption:""}},[t._v("caption")])],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],l=a("ded3"),n=a.n(l),i=a("2f62"),s={name:"MainLayout",data(){return{leftDrawerOpen:!1,cartItems:0}},computed:n()({},Object(i["c"])("page",["getCartItems"])),created(){this.updateCartNumber()},methods:n()(n()({},Object(i["b"])("page",["setCartItems"])),{},{updateCartNumber(){const t=JSON.parse(localStorage.getItem("cart"));this.cartItems=t.length,this.setCartItems(t.length)}})},c=s,p=a("2877"),m=a("4d5a"),b=a("e359"),u=a("65c6"),d=a("9c40"),q=a("6ac5"),v=a("e7a9"),w=a("58a81"),g=a("9404"),f=a("66e5"),h=a("4074"),Q=a("cb32"),_=a("0170"),C=a("09e3"),I=a("714f"),O=a("eebe"),k=a.n(O),y=Object(p["a"])(c,r,o,!1,null,null,null);e["default"]=y.exports;k()(y,"components",{QLayout:m["a"],QHeader:b["a"],QToolbar:u["a"],QBtn:d["a"],QToolbarTitle:q["a"],QBtnGroup:v["a"],QBadge:w["a"],QDrawer:g["a"],QItem:f["a"],QItemSection:h["a"],QAvatar:Q["a"],QItemLabel:_["a"],QPageContainer:C["a"]}),k()(y,"directives",{Ripple:I["a"]})}}]);