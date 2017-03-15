!function(){"use strict";function e(e,r){var i=Mirador({id:"IIIF",layout:"1x1",mainMenuSettings:{show:!1},data:[{manifestUri:e,location:"University of Maryland"}],windowObjects:[{loadedManifest:e,viewType:"ImageView",displayLayout:!1,bottomPanel:!1,sidePanel:!1,annotationLayer:!1}],annotationEndpoint:{name:"Local Storage",module:"LocalStorageEndpoint"}}),l=function(e){i.viewer.workspace.windows[0].setCurrentCanvasID(e),s(e)};i.eventEmitter.subscribe("windowAdded",function(e,a){var n=i.viewer.workspace.windows[0],o="",s=!0,c=!1,d=void 0;try{for(var u,h=Array.from(n.imagesList).entries()[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var f=t.slicedToArray(u.value,2),v=f[0],y=f[1];$("#pages").append("<a class='dropdown-item' href='#"+(v+1)+"'>"+y.label+"</a>"),v+1==r&&($("#cur_page").text(y.label),o=y["@id"])}}catch(e){c=!0,d=e}finally{try{!s&&h.return&&h.return()}finally{if(c)throw d}}var m=!1;i.eventEmitter.subscribe("windowUpdated",function(){m||(m=!0,l(o))}),window.onhashchange=function(){var e=window.location.hash.substring(window.location.hash.indexOf("#")+1);""!=e&&(r=e);var a=!0,i=!1,o=void 0;try{for(var s,c=Array.from(n.imagesList).entries()[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=t.slicedToArray(s.value,2),u=d[0],h=d[1];if($("#pages").append("<a class='dropdown-item' href='#"+(u+1)+"'>"+h.label+"</a>"),u+1==r){r=h["@id"],$("#cur_page").text(h.label),l(r);break}}}catch(e){i=!0,o=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw o}}},$("#mnext").click(function(e){var r=!0,a=!1,i=void 0;try{for(var l,o=Array.from(n.imagesList).entries()[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=t.slicedToArray(l.value,2),c=s[0],d=s[1];if(d["@id"]==n.canvasID){n.imagesList[c+1]["@id"];window.location.hash="#"+(c+2);break}}}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}}),$("#mprev").click(function(e){var r=!0,a=!1,i=void 0;try{for(var l,o=Array.from(n.imagesList).entries()[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=t.slicedToArray(l.value,2),c=s[0],d=s[1];if(d["@id"]==n.canvasID){n.imagesList[c-1]["@id"];$("#cur_page").text(n.imagesList[c+1].label),window.location.hash="#"+c;break}}}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}})}),i.eventEmitter.subscribe("windowUpdated",function(){$(".mirador-osd-next").remove(),$(".mirador-osd-previous").remove()}),console.log(i);var o=new a,s=function(e){$("#TEI").children().unbind(),$("#TEI").unbind(),$("#TEI").empty(),o.getHTML5(e,function(e){document.getElementById("TEI").innerHTML="",document.getElementById("TEI").appendChild(e),n(e)})}}var t={};t.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),t.slicedToArray=function(){function e(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var r={handlers:{ptr:['<a href="$rw@target">$@target</a>'],ref:['<a href="$rw@target">',"</a>"],graphic:function(){return function(){}},table:function(){var e=this;return function(){var t=this.createShadowRoot();e.addShadowStyle(t);var r=document.createElement("table");if(r.innerHTML=this.innerHTML,"tei-head"==r.firstElementChild.localName){var a=r.firstElementChild;a.remove();var n=document.createElement("caption");n.innerHTML=a.innerHTML,r.appendChild(n)}var i=!0,l=!1,o=void 0;try{for(var s,c=Array.from(r.querySelectorAll("tei-row"))[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var d=s.value,u=document.createElement("tr");u.innerHTML=d.innerHTML;var h=!0,f=!1,v=void 0;try{for(var y,m=Array.from(d.attributes)[Symbol.iterator]();!(h=(y=m.next()).done);h=!0){var p=y.value;u.setAttribute(p.name,p.value)}}catch(e){f=!0,v=e}finally{try{!h&&m.return&&m.return()}finally{if(f)throw v}}d.parentElement.replaceChild(u,d)}}catch(e){l=!0,o=e}finally{try{!i&&c.return&&c.return()}finally{if(l)throw o}}var b=!0,g=!1,w=void 0;try{for(var A,T=Array.from(r.querySelectorAll("tei-cell"))[Symbol.iterator]();!(b=(A=T.next()).done);b=!0){var E=A.value,L=document.createElement("td");E.hasAttribute("cols")&&L.setAttribute("colspan",E.getAttribute("cols")),L.innerHTML=E.innerHTML;var x=!0,S=!1,M=void 0;try{for(var k,H=Array.from(E.attributes)[Symbol.iterator]();!(x=(k=H.next()).done);x=!0){var $=k.value;L.setAttribute($.name,$.value)}}catch(e){S=!0,M=e}finally{try{!x&&H.return&&H.return()}finally{if(S)throw M}}E.parentElement.replaceChild(L,E)}}catch(e){g=!0,w=e}finally{try{!b&&T.return&&T.return()}finally{if(g)throw w}}t.appendChild(r)}},egXML:function(){var e=this;return function(){var t=this.createShadowRoot();e.addShadowStyle(t),t.innerHTML="<pre>"+e.serialize(this,!0)+"</pre>"}}},fallbacks:{ref:function(e){var t=this;e.addEventListener("click",function(r){window.location=t.rw(e.getAttribute("target"))})},graphic:function(e){},table:function e(t){var e=document.createElement("table");if(e.innerHTML=t.innerHTML,"tei-head"==e.firstElementChild.localName){var r=e.firstElementChild;r.remove();var a=document.createElement("caption");a.innerHTML=r.innerHTML,e.appendChild(a)}var n=!0,i=!1,l=void 0;try{for(var o,s=Array.from(e.querySelectorAll("tei-row"))[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value,d=document.createElement("tr");d.innerHTML=c.innerHTML;var u=!0,h=!1,f=void 0;try{for(var v,y=Array.from(c.attributes)[Symbol.iterator]();!(u=(v=y.next()).done);u=!0){var m=v.value;d.setAttribute(m.name,m.value)}}catch(e){h=!0,f=e}finally{try{!u&&y.return&&y.return()}finally{if(h)throw f}}c.parentElement.replaceChild(d,c)}}catch(e){i=!0,l=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw l}}var p=!0,b=!1,g=void 0;try{for(var w,A=Array.from(e.querySelectorAll("tei-cell"))[Symbol.iterator]();!(p=(w=A.next()).done);p=!0){var T=w.value,E=document.createElement("td");T.hasAttribute("cols")&&E.setAttribute("colspan",T.getAttribute("cols")),E.innerHTML=T.innerHTML;var L=!0,x=!1,S=void 0;try{for(var M,k=Array.from(T.attributes)[Symbol.iterator]();!(L=(M=k.next()).done);L=!0){var H=M.value;E.setAttribute(H.name,H.value)}}catch(e){x=!0,S=e}finally{try{!L&&k.return&&k.return()}finally{if(x)throw S}}T.parentElement.replaceChild(E,T)}}catch(e){b=!0,g=e}finally{try{!p&&A.return&&A.return()}finally{if(b)throw g}}t.innerHTML='<span style="display:none">'+t.innerHTML+"</span>",t.appendChild(e)},egXML:function(e){var t=this.serialize(e,!0);e.innerHTML='<span style="display:none">'+e.innerHTML+"</span>",e.innerHTML+="<pre>"+t+"</pre>"}}},a=function(){function e(a){if(t.classCallCheck(this,e),this.els=[],this.behaviors=[],this.hasStyle=!1,this.prefixes=[],a)this.base=a;else try{window&&(this.base=window.location.href.replace(/\/[^\/]*$/,"/"))}catch(e){this.base=""}this.behaviors.push(r),this.shadowCSS}return t.createClass(e,[{key:"getHTML5",value:function(e,t,r){var a=this,n=new Promise(function(t,r){var a=new XMLHttpRequest;a.open("GET",e),a.send(),a.onload=function(){this.status>=200&&this.status<300?t(this.response):r(this.statusText)},a.onerror=function(){r(this.statusText)}}).catch(function(e){console.log(e)});return n.then(function(e){return a.makeHTML5(e,t,r)})}},{key:"makeHTML5",value:function(e,t,r){var a=this,n=(new DOMParser).parseFromString(e,"text/xml");this._fromTEI(n);var i=function e(t){var n=void 0,i=!1;switch(t.namespaceURI){case"http://www.tei-c.org/ns/1.0":n=document.createElement("tei-"+t.tagName);break;case"http://www.tei-c.org/ns/Examples":if("egXML"==t.tagName){n=document.createElement("teieg-"+t.tagName);break}default:n=document.importNode(t,!1),i=!0}var l=!0,o=!1,s=void 0;try{for(var c,d=Array.from(t.attributes)[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var u=c.value;"xmlns"!=u.name||i?n.setAttribute(u.name,u.value):n.setAttribute("data-xmlns",u.value),"xml:id"!=u.name||i||n.setAttribute("id",u.value),"xml:lang"!=u.name||i||n.setAttribute("lang",u.value),"rendition"==u.name&&n.setAttribute("class",u.value.replace(/#/g,""))}}catch(e){o=!0,s=e}finally{try{!l&&d.return&&d.return()}finally{if(o)throw s}}if(n.setAttribute("data-teiname",t.localName),"tagsDecl"==t.localName){var h=document.createElement("style"),f=!0,v=!1,y=void 0;try{for(var m,p=Array.from(t.childNodes)[Symbol.iterator]();!(f=(m=p.next()).done);f=!0){var b=m.value;if(b.nodeType==Node.ELEMENT_NODE&&"rendition"==b.localName&&"css"==b.getAttribute("scheme")){var g="";b.hasAttribute("selector")?(g+=b.getAttribute("selector").replace(/([^#, >]+\w*)/g,"tei-$1").replace(/#tei-/g,"#")+"{\n",g+=b.textContent):(g+="."+b.getAttribute("xml:id")+"{\n",g+=b.textContent),g+="\n}\n",h.appendChild(document.createTextNode(g))}}}catch(e){v=!0,y=e}finally{try{!f&&p.return&&p.return()}finally{if(v)throw y}}h.childNodes.length>0&&(n.appendChild(h),a.hasStyle=!0)}"prefixDef"==t.localName&&(a.prefixes.push(t.getAttribute("ident")),a.prefixes[t.getAttribute("ident")]={matchPattern:t.getAttribute("matchPattern"),replacementPattern:t.getAttribute("replacementPattern")});var w=!0,A=!1,T=void 0;try{for(var E,L=Array.from(t.childNodes)[Symbol.iterator]();!(w=(E=L.next()).done);w=!0){var x=E.value;x.nodeType==Node.ELEMENT_NODE?n.appendChild(e(x)):n.appendChild(x.cloneNode())}}catch(e){A=!0,T=e}finally{try{!w&&L.return&&L.return()}finally{if(A)throw T}}return r&&r(n),n};return this.dom=i(n.documentElement),document.registerElement?this.registerAll(this.els):this.fallback(this.els),this.done=!0,t?void t(this.dom,this):this.dom}},{key:"addStyle",value:function(e,t){this.hasStyle&&e.getElementsByTagName("head").item(0).appendChild(t.getElementsByTagName("style").item(0).cloneNode(!0))}},{key:"addShadowStyle",value:function(e){this.shadowCSS&&(e.innerHTML='<style>@import url("'+this.shadowCSS+'");</style>'+e.innerHTML)}},{key:"addBehaviors",value:function(e){e.handlers||e.fallbacks?this.behaviors.push(e):console.log("No handlers or fallback methods found.")}},{key:"setBaseUrl",value:function(e){this.base=e}},{key:"_fromTEI",value:function(e){var t=e.documentElement;this.els=new Set(Array.from(t.getElementsByTagName("*"),function(e){return e.tagName})),this.els.add(t.tagName)}},{key:"_insert",value:function(e,t){if(e.createShadowRoot){var r=e.createShadowRoot();this.addShadowStyle(r),r.innerHTML+=t[0]+e.innerHTML+(t[1]?t[1]:"")}else{t.length>1?t[0].includes("<")&&t[1].includes("</")?e.innerHTML=t[0]+e.innerHTML+t[1]:e.innerHTML="<span>"+t[0]+"</span>"+e.innerHTML+"<span>"+t[1]+"</span>":t[0].includes("<")?e.innerHTML=t[0]+e.innerHTML:e.innerHTML="<span>"+t[0]+"</span>"+e.innerHTML}}},{key:"_template",value:function(e,t){var r=e;if(e.search(/$(\w*)@(\w+)/))for(var a=/\$(\w*)@(\w+)/g,n=void 0;n=a.exec(e);)t.hasAttribute(n[2])&&(r=n[1]&&this[n[1]]?r.replace(n[0],this[n[1]].call(this,t.getAttribute(n[2]))):r.replace(n[0],t.getAttribute(n[2])));return r}},{key:"tagName",value:function(e){return"egXML"==e?"teieg-"+e:"tei-"+e}},{key:"decorator",value:function(e){return function(){var t=this;return function(r){var a=[];this!=t&&(r=this);for(var n=0;n<e.length;n++)a.push(t._template(e[n],r));t._insert(r,a)}}}},{key:"getHandler",value:function(e){for(var t=this.behaviors.length-1;t>=0;t--)if(this.behaviors[t].handlers[e])return Array.isArray(this.behaviors[t].handlers[e])?this.decorator(this.behaviors[t].handlers[e]):this.behaviors[t].handlers[e]}},{key:"getFallback",value:function(e){for(var t=this.behaviors.length-1;t>=0;t--){if(this.behaviors[t].fallbacks[e])return Array.isArray(this.behaviors[t].fallbacks[e])?this.decorator(this.behaviors[t].fallbacks[e]).call(this):this.behaviors[t].fallbacks[e];if(this.behaviors[t].handlers[e]&&Array.isArray(this.behaviors[t].handlers[e]))return this.decorator(this.behaviors[t].handlers[e]).call(this);if(this.behaviors[t].handlers[e]&&1==this.behaviors[t].handlers[e].call(this).length)return this.behaviors[t].handlers[e].call(this)}}},{key:"registerAll",value:function(e){var t=!0,r=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var l=n.value,o=Object.create(HTMLElement.prototype),s=this.getHandler(l);s&&(o.createdCallback=s.call(this));var c=this.tagName(l);try{document.registerElement(c,{prototype:o})}catch(e){console.log(c+" couldn't be registered or is already registered."),console.log(e)}}}catch(e){r=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw a}}}},{key:"fallback",value:function(e){var t=!0,r=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var l=n.value,o=this.getFallback(l);if(o){var s=!0,c=!1,d=void 0;try{for(var u,h=Array.from(this.dom.getElementsByTagName(this.tagName(l)))[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var f=u.value;o.call(this,f)}}catch(e){c=!0,d=e}finally{try{!s&&h.return&&h.return()}finally{if(c)throw d}}}}}catch(e){r=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw a}}}},{key:"rw",value:function(e){return e.match(/^(?:http|mailto|file|\/|#).*$/)?e:this.base+e}},{key:"first",value:function(e){return e.replace(/ .*$/,"")}},{key:"serialize",value:function(e,t){var r="";if(!t){r+="&lt;"+e.getAttribute("data-teiname");var a=!0,n=!1,i=void 0;try{for(var l,o=Array.from(e.attributes)[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var s=l.value;s.name.startsWith("data-")||["id","lang","class"].includes(s.name)||(r+=" "+s.name+'="'+s.value+'"')}}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}r+=e.childNodes.length>0?">":"/>"}var c=!0,d=!1,u=void 0;try{for(var h,f=Array.from(e.childNodes)[Symbol.iterator]();!(c=(h=f.next()).done);c=!0){var v=h.value;r+=v.nodeType==Node.ELEMENT_NODE?this.serialize(v):v.nodeValue}}catch(e){d=!0,u=e}finally{try{!c&&f.return&&f.return()}finally{if(d)throw u}}return!t&&e.childNodes.length>0&&(r+="&lt;"+e.getAttribute("data-teiname")+">"),r}},{key:"fromODD",value:function(){}}]),e}();try{window&&(window.CETEI=a)}catch(e){}var n=function(e){var r=$(e),a=r.find("tei-zone[type=main]");r.find("tei-line:has(tei-add[place=superlinear])").css("margin-top",".5em"),r.find("tei-line:has(tei-add[place=sublinear])").each(function(e,r){var a=$(r);a.css("margin-bottom",".5em");var n=a.find("tei-add[place=sublinear]"),l=!0,o=!1,s=void 0;try{for(var c,d=Array.from(n).entries()[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var u=t.slicedToArray(c.value,2),h=u[0],f=u[1],v=n[h-1];if(null!=v){var y=v.getBoundingClientRect(),m=f.getBoundingClientRect();if(i(y,m)){var p=y.right-m.left;$(f).css("padding-left",p+10+"px")}if($(f).closest("tei-add").length>0){var b=parseInt(a.css("padding-top").replace(/^(\d+).*?$/,"$1"));a.css("padding-top",b+10+"px")}}}}catch(e){o=!0,s=e}finally{try{!l&&d.return&&d.return()}finally{if(o)throw s}}}),r.find("tei-line:has(tei-add[place=superlinear])").each(function(e,r){var a=$(r);a.css("margin-top",".5em");var n=a.find("tei-add[place=superlinear]"),l=!0,o=!1,s=void 0;try{for(var c,d=Array.from(n).entries()[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var u=t.slicedToArray(c.value,2),h=u[0],f=u[1],v=n[h-1];if(null!=v){var y=v.getBoundingClientRect(),m=f.getBoundingClientRect();if(i(y,m)){var p=y.right-m.left;$(f).css("padding-left",p+10+"px")}if($(f).closest("tei-add").length>0){var b=parseInt(a.css("padding-top").replace(/^(\d+).*?$/,"$1"));a.css("padding-top",b+10+"px")}}}}catch(e){o=!0,s=e}finally{try{!l&&d.return&&d.return()}finally{if(o)throw s}}});var n=r.find("tei-zone[type=left_margin]");n.length>0&&a.css("margin-left","10em"),n.css("margin-top",a.position().top),n.each(function(e,t){$(t).css("top",e*(100/n.length)+"%")});var l=r.find("tei-line"),o=0;l.each(function(e,t){var r=$(t).clone().children().remove().end().text().length;o=r>o?r:o}),$("tei-line[rend='center']").each(function(e,t){$(t).css("padding-left",(o-$(t).text().length)/2+"ex")});var s=r.width()/10;$("tei-line[rend^='indent']").each(function(e,t){var r=/^indent(\d+)/.exec($(t).attr("rend"))[1],a=parseInt(r)*s;$(t).css("padding-left",a)})},i=function(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)},l="1",o=window.location.hash.substring(window.location.hash.indexOf("#")+1);""!=o&&(l=o),e("/manifests/ox-ms_shelley_adds_c4.json",l)}();