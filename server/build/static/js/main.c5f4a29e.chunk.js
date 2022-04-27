(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);for(var n=a(0),c=a.n(n),r=a(29),l=a.n(r),o=(a(78),a(79),a(80),a(28)),i=a(12),s=a(10),u=a(137),m=a(141),d=a(145),p=a(138),g=a(140),E=a(142),h=a(143),f=function(e){return c.a.createElement(p.a,{className:"Titlecard",variant:"outlined",sx:{backgroundColor:"#b0bec5",boxShadow:3,margin:5,minWidth:150,minHeight:150,maxHeight:300,maxWidth:400}},c.a.createElement(g.a,{title:"Restaurant",subheader:"Type of Restaurant"}),c.a.createElement(E.a,null,c.a.createElement(h.a,{component:"img",height:"140",image:"https://wallpaperaccess.com/full/286308.jpg"}),c.a.createElement(m.a,{gutterBottom:!0,component:"div",variant:"body2",sx:{paddingTop:2}},"This is the restaurant description")))},b=(a(84),a(133)),v=a(135),x=a(144),j=function(e){var t=Object(n.useState)(e.term||""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(e.location||""),i=Object(s.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(e.latitude||""),p=Object(s.a)(d,2),g=p[0],E=p[1],h=Object(n.useState)(e.longitude||""),f=Object(s.a)(h,2),j=f[0],O=f[1];return Object(n.useEffect)(function(){""===u&&navigator.geolocation.getCurrentPosition(function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude),E(e.coords.latitude),O(e.coords.longitude),m([e.coords.latitude,e.coords.longitude])})}),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(t){"function"===typeof e.search&&e.search(r,g,j),console.log(r,g,j),t.preventDefault()}},c.a.createElement(v.a,{sx:{paddingTop:2,minWidth:450},variant:"outlined",label:"What are you hungry for? ",fullWidth:!0,type:"text",value:r,InputProps:{startAdornment:c.a.createElement(x.a,{position:"start"}," ",c.a.createElement(b.a,null))},onChange:function(e){l(e.target.value)}})))},O=a(45),y=a.n(O),w=a(54),S=a(55),R=a.n(S),N=function(e,t){var a=R.a.stringify(t);return fetch("".concat("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3").concat(e,"?").concat(a),{headers:{Authorization:"Bearer ".concat("bs7UOQ1KLnRGGRkeuDigR1J6JeTcrz1dHcXRQZPsrU1YNCpQZPXysKslSMqstH29Ih757KwD-is2XiVnuw5Ysg9XPIUdcuB1jYdYvLSaV0r7xQea3xMamncirGP5X3Yx"),Origin:"localhost",withCredentials:"true"}})},P=function(e,t,a){var c=Object(n.useState)([]),r=Object(s.a)(c,2),l=r[0],o=r[1],i=Object(n.useState)(),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)({term:e,longitude:t,latitude:a}),g=Object(s.a)(p,2),E=g[0],h=g[1];return Object(n.useEffect)(function(){o([]),function(){var e=Object(w.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/businesses/search",E);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(a.businesses),d(a.total),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error.apply(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}()()},[E]),[l,m,E,h]},I=[],k=0;k<12;k++)I.push(c.a.createElement(u.a,{item:!0,xs:1},c.a.createElement(f,null)));var U=function(){var e=Object(i.e)(),t=new URLSearchParams(e.search),a=t.get("desc"),n=t.get("latitude"),r=t.get("longitude"),l=P(a,n,r),o=Object(s.a)(l,4),p=(o[0],o[1],o[2],o[3],Object(i.f)());return c.a.createElement("div",{className:"Home"},c.a.createElement(m.a,{variant:"h5",fontFamily:"raleway",sx:{paddingY:3,color:"#64dd17",font:"Raleway"}},"Find Places to Eat Near Me"),c.a.createElement(d.a,{sx:{paddingX:2,maxWidth:450,mx:"auto",display:"flex"}},c.a.createElement(j,{search:function(e,t,a){var n=encodeURI(e),c=encodeURI(t),r=encodeURI(a);p("/search?desc=".concat(n,"&latitude=").concat(c,"&longitude=").concat(r))},term:a,latitude:n,longitude:r})),c.a.createElement(u.a,{container:!0,direction:"row",columns:{xs:1,sm:2,md:4}},I))},F=function(){return c.a.createElement("div",{className:"Previous"},c.a.createElement("h1",null,"Places I've Eaten Page"))},T=function(){return c.a.createElement("div",{className:"Spending"},c.a.createElement("h1",null,"Spending Page"))},C=a(134),X=(a(101),function(){return c.a.createElement(d.a,{className:"NavBar"},c.a.createElement(d.a,{className:"logo",sx:{paddingX:2,paddingY:1}},c.a.createElement(C.a,{sx:{paddingX:2,fontSize:40}}),c.a.createElement(m.a,{variant:"h4",fontFamily:"cabin"},"Eats!")),c.a.createElement("ul",{className:"nav-links"},c.a.createElement(o.b,{className:"link",to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(o.b,{className:"link",to:"/previous"},c.a.createElement("li",null,"Places I've Eaten")),c.a.createElement(o.b,{className:"link",to:"/spending"},c.a.createElement("li",null,"Spending"))))}),L=function(e){if(console.log(e.businesses),!e.businesses||!e.businesses.length)return c.a.createElement("div",null);var t=e.businesses.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{key:e.id,business:e}))});return c.a.createElement(u.a,null," ",t," ")},W=function(){var e,t=Object(i.e)(),a=new URLSearchParams(t.search),n=a.get("desc"),r=a.get("latitude"),l=a.get("longitude"),o=Object(i.f)(),p=P(n,r,l),g=Object(s.a)(p,4),E=g[0];g[1],g[2],g[3];return c.a.createElement("div",{className:"Search"},c.a.createElement(d.a,{sx:{paddingX:2,paddingTop:4,maxWidth:450,mx:"auto",display:"flex"}},c.a.createElement(j,{search:function(e,t,a){var n=encodeURI(e),c=encodeURI(t),r=encodeURI(a);o("/search?desc=".concat(n,"&latitude=").concat(c,"&longitude=").concat(r))},term:n,latitude:r,longitude:l})),c.a.createElement(m.a,{variant:"h5",fontFamily:"raleway",sx:{paddingTop:3,color:"#64dd17",font:"Raleway"}},"Search Results for ",(e=n).charAt(0).toUpperCase()+e.slice(1)," Near Me"),c.a.createElement(u.a,{container:!0,direction:"row",columns:{xs:1,sm:2,md:4}},c.a.createElement(L,{businesses:E})))},Y=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(X,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",element:c.a.createElement(U,null)}),c.a.createElement(i.a,{path:"/search",element:c.a.createElement(W,null)}),c.a.createElement(i.a,{path:"/previous",element:c.a.createElement(F,null)}),c.a.createElement(i.a,{path:"/spending",element:c.a.createElement(T,null)}))))},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),B()},70:function(e,t,a){e.exports=a(102)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.c5f4a29e.chunk.js.map