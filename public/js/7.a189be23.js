(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"6eb0":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("options",{on:{getItems:function(e){return t.getItems()}}}),s("h3",{staticClass:"text-center"},[t._v("Products")]),s("div",{staticClass:"row"},t._l(t.items,(function(e){return s("div",{key:e.id,staticClass:"cards q-pa-md col-lg-2 col-md-3 col-sm-4"},[s("q-card",{staticClass:"my-card "},[s("q-img",{attrs:{src:"https://cdn.quasar.dev/img/chicken-salad.jpg"}}),s("q-card-section",[s("div",{staticClass:"row no-wrap items-center"},[s("div",{staticClass:"col text-h6 ellipsis"},[t._v("\n              "+t._s(e.title)+"\n            ")])])]),s("q-card-section",{staticClass:"q-pt-none"},[s("div",{staticClass:"text-caption text-grey"},[t._v("\n            Small plates, salads & sandwiches in an intimate setting.\n          ")]),s("div",{staticClass:"text-subtitle2"},[t._v("$"+t._s(e.price))])]),s("q-separator"),s("q-card-actions",[s("q-btn",{attrs:{flat:"",round:"",icon:"add_shopping_cart"},on:{click:function(s){return t.addToCart({price:e.price,title:e.title,id:e._id})}}}),s("q-btn",{attrs:{flat:"",color:"primary"},on:{click:function(s){return t.addToCart({price:e.price,title:e.title,id:e._id})}}},[t._v("\n            Add to Cart\n          ")])],1)],1)],1)})),0),s("div",{staticClass:"q-pa-lg flex flex-center"},[s("q-pagination",{attrs:{color:"black",max:t.totalItems/10+1,"max-pages":6,"boundary-numbers":!1},on:{input:t.getItems},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),s("q-dialog",{attrs:{nb:""},model:{value:t.cart_dialog,callback:function(e){t.cart_dialog=e},expression:"cart_dialog"}},[s("q-card",{staticStyle:{width:"300px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Add To Cart")])]),s("q-card-section",[t._v("\n        "+t._s(t.selected_item_title)+" $"+t._s(t.selected_item_price)+"\n        "),s("q-input",{attrs:{type:"number",placeholder:"Enter quantity"},model:{value:t.qty,callback:function(e){t.qty=t._n(e)},expression:"qty"}})],1),s("q-card-section",[t._v("\n        Items Quantity price: $"+t._s(t.totalprice)+"\n      ")]),s("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"},on:{click:function(e){return t.submitToCart()}}})],1)],1)],1),s("h6",[t._v(t._s(t.totalItems))]),t._v("\n\n  "+t._s(t.getCartItems)+"\n\n  "+t._s(t.$route.query.category)+"\n  "+t._s(t.$route.query.supplier)+"\n")],1)},a=[],i=(s("4e82"),s("ded3")),r=s.n(i),n=s("bc3a"),c=s.n(n),l=s("2f62"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md"},[t.showOptions?t._e():s("q-btn",{attrs:{icon:"arrow_downward"},on:{click:function(e){t.showOptions=!t.showOptions}}}),t.showOptions?s("q-btn",{attrs:{icon:"arrow_upward"},on:{click:function(e){t.showOptions=!t.showOptions}}}):t._e(),s("div",{staticClass:"row"},[t.showOptions?s("div",{staticClass:" q-pa-md col-lg-4 col-md-6 col-sm-12"},[s("q-select",{attrs:{outlined:"",options:t.catOptions},on:{input:t.PushRouter},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"category"}})]},proxy:!0}],null,!1,3088382044),model:{value:t.catModel,callback:function(e){t.catModel=e},expression:"catModel"}}),s("q-select",{attrs:{outlined:"",options:t.sortOptions},on:{input:t.PushRouter},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"sort"}})]},proxy:!0}],null,!1,589617910),model:{value:t.sortModel,callback:function(e){t.sortModel=e},expression:"sortModel"}}),s("q-select",{attrs:{outlined:"",options:t.orderOptions},on:{input:t.PushRouter},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"sort_by_alpha"}})]},proxy:!0}],null,!1,3330341177),model:{value:t.orderModel,callback:function(e){t.orderModel=e},expression:"orderModel"}})],1):t._e()])],1)},p=[],u={name:"categories",data(){return{showOptions:!1,sortModel:"Date",sortOptions:["Price","Date"],orderModel:"Ascending",orderOptions:["Ascending","Descending"],catModel:"Sports",catOptions:["Sports","Videos","Articles"]}},methods:{PushRouter(){let t,e=this.sortModel;t="Ascending"==this.orderModel?1:-1,this.$router.push(`/products?category=${this.catModel}&sort=${e}&order=${t}&page=0`),this.$emit("getItems")}}},m=u,h=s("2877"),_=s("9c40"),g=s("ddd8"),q=s("0016"),f=s("eebe"),y=s.n(f),v=Object(h["a"])(m,d,p,!1,null,null,null),b=v.exports;y()(v,"components",{QBtn:_["a"],QSelect:g["a"],QIcon:q["a"]});var C={name:"Products",data(){return{items:[],cart_dialog:!1,selected_item_title:null,selected_item_price:0,qty:0,totalprice:0,currentPage:1,totalItems:0}},components:{options:b},computed:r()({},Object(l["c"])("page",["getCartItems"])),methods:r()(r()({},Object(l["b"])("page",["setCartItems"])),{},{addToCart(t){this.selected_item_title=t.title,this.selected_item_price=t.price,this.selected_item_id=t.id,this.cart_dialog=!0,this.setCurrentItemQty="Hello"},submitToCart(){let t=localStorage.getItem("cart"),e=[];t&&(e=JSON.parse(t));let s=!0;if(e.forEach((t=>{if(t.id==this.selected_item_id)return s=!1,void this.$q.notify("Item is already in the Cart!")})),s&&this.qty>0){e.push({title:this.selected_item_title,price:this.selected_item_price,qty:this.qty,id:this.selected_item_id});let t=JSON.parse(localStorage.getItem("cart"));this.setCartItems(t.length+1)}localStorage.setItem("cart",JSON.stringify(e)),console.log(e)},getItems(){console.log("hrllo");let t=this.$route.query.category||"Sports",e=this.$route.query.sort||"",s=this.$route.query.order||1,o=this.currentPage-1;c.a.get(`http://localhost:5000/products?category=${t}&sort=${e}&order=${s}&page=${o}`).then((t=>{this.items=t.data.items,this.totalItems=t.data.total}))}}),created(){this.getItems()},watch:{qty(){this.totalprice=this.qty*this.selected_item_price}}},w=C,x=s("f09f"),I=s("068f"),O=s("a370"),$=s("eb85"),k=s("4b7e"),S=s("3b16"),M=s("24e8"),P=s("27f9"),Q=s("7f67"),A=Object(h["a"])(w,o,a,!1,null,null,null);e["default"]=A.exports;y()(A,"components",{QCard:x["a"],QImg:I["a"],QCardSection:O["a"],QSeparator:$["a"],QCardActions:k["a"],QBtn:_["a"],QPagination:S["a"],QDialog:M["a"],QInput:P["a"]}),y()(A,"directives",{ClosePopup:Q["a"]})}}]);