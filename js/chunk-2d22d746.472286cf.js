(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d746"],{f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ContentTitle",{staticClass:"content",attrs:{title:"成员殿堂",icon:"fas fa-place-of-worship"}}),a("MemberPalace",{staticClass:"content"})],1)},n=[],s=a("3457"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-row",t._l(t.memberList,(function(t){return a("MemberCard",{key:t.login,attrs:{member:t}})})),1)],1)])},i=[],c=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{staticClass:"rounded-lg transition-swing",attrs:{elevation:r?4:1,outlined:""}},[a("v-card-text",{staticClass:"text-center"},[a("v-avatar",{attrs:{color:"primary",size:"72"}},[t.member.avatar_url?a("v-img",{attrs:{src:t.member.avatar_url}}):a("span",{staticClass:"white--text headline text-h3"},[t._v(t._s(t.member.name[0]))])],1)],1),a("v-card-title",{staticClass:"justify-center pt-0"},[t._v(t._s(t.member.name))]),a("v-card-subtitle",{staticClass:"text-center"},[a("div",[t._v("「"+t._s(t.member.bio)+"」")]),a("div",["blog"in t.member?a("v-chip",{staticClass:"ma-1 mt-3",attrs:{label:"",small:"",color:"primary"},on:{click:function(e){return t.$Utils.openExternalLink(t.member.blog)}}},[a("v-icon",{attrs:{small:"",color:"white"}},[t._v(" fas fa-blog ")])],1):t._e(),a("v-chip",{staticClass:"ma-1 mt-3",attrs:{label:"",small:"",color:"primary"},on:{click:function(e){return t.$Utils.openExternalLink(t.member.html_url)}}},[a("v-icon",{attrs:{small:"",color:"white"}},[t._v(" fab fa-github ")])],1)],1)])],1)]}}])})],1)}),o=[],m={name:"MemberCard",props:["member"]},u=m,b=a("2877"),d=a("6544"),v=a.n(d),f=a("8212"),p=a("b0af"),h=a("99d9"),C=a("cc20"),_=a("62ad"),g=a("ce87"),w=a("132d"),x=a("adda"),V=Object(b["a"])(u,c,o,!1,null,null,null),k=V.exports;v()(V,{VAvatar:f["a"],VCard:p["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VChip:C["a"],VCol:_["a"],VHover:g["a"],VIcon:w["a"],VImg:x["a"]});var y={name:"MembersPalace",components:{MemberCard:k},data:function(){return{memberList:[]}},created:function(){var t=this;this.axios.get("https://api.github.com/orgs/uestclug/members").then((function(e){e.data.forEach((function(e){t.axios.get("https://api.github.com/users/"+e.login).then((function(e){t.memberList.push(e.data)}))}))}))}},E=y,M=a("0fd9"),L=Object(b["a"])(E,l,i,!1,null,null,null),$=L.exports;v()(L,{VRow:M["a"]});var j={name:"About",components:{ContentTitle:s["a"],MemberPalace:$}},T=j,O=Object(b["a"])(T,r,n,!1,null,null,null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d22d746.472286cf.js.map