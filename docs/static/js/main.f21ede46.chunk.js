(this.webpackJsonpnow=this.webpackJsonpnow||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(1)),l=(n(10),[0,1,2,3,4,5,6,7,8,9,10,11]);function u(e){var t=e.now;return r.a.createElement("div",{className:"Now"},r.a.createElement("div",{className:"Calendar"},l.map((function(e){return r.a.createElement(s,{key:e,now:t,month:e})}))))}function s(e){var t=e.now,n=e.month,a=new Date(t.getFullYear(),n,1,0,0,0,0),o=t.getMonth()>a.getMonth(),c=t.getMonth()===a.getMonth(),i=t.getMonth()<n,l=a.toLocaleString("default",{month:"long"});return r.a.createElement("div",{className:"month"},o&&r.a.createElement("strike",null,l),c&&r.a.createElement("em",null,t.toLocaleString("default",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),i&&r.a.createElement("span",null,l))}function m(e){var t=e.now,n=e.isNegative,a=e.children,o=new Date(t);o.setMonth(0),o.setDate(1),o.setHours(0),o.setMinutes(0),o.setSeconds(0);var c=new Date(o);c.setYear(c.getFullYear()+1);var i="".concat((100*((t-o)/(c-o))).toFixed(2)),l=n?{color:"white",background:"black",height:"".concat(i,"vh")}:{color:"black",background:"white",marginTop:"-".concat(i,"vh")};return r.a.createElement("div",{className:"BackdropContainer"},r.a.createElement("div",{style:l},a))}function v(e){return(e.clientY-e.currentTarget.clientTop)/e.currentTarget.clientHeight}var h=function(e){var t=e.date,n=void 0===t?new Date:t,o=Object(a.useState)(n),c=Object(i.a)(o,2),l=c[0],s=c[1],h=Object(a.useState)(.3832923832923833),w=Object(i.a)(h,2),g=w[0],d=w[1],f=null!==g?function(e,t){var n=function(e){var t=new Date(e.getFullYear(),0,0,0,0,0),n=new Date(e.getFullYear()+1,0,0,0,0,0);return[t,n]}(e).map((function(e){return e.getTime()})),a=Object(i.a)(n,2),r=a[0],o=a[1];return new Date(function(e,t,n){return e+(t-e)*n}(r,o,t))}(l,g):l;function E(){d(null)}return Object(a.useEffect)((function(){var e=setInterval((function(){return s(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"App",onPointerDown:function(e){d(v(e))},onPointerMove:function(e){d(v(e))},onPointerUp:E,onPointerLeave:E},r.a.createElement(m,{now:f,isNegative:!0},r.a.createElement(u,{now:f})),r.a.createElement(m,{now:f,isNegative:!1},r.a.createElement(u,{now:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f21ede46.chunk.js.map