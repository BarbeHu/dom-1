parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var o=dom.create("<div>newDiv</div>");console.log(o),dom.after(test,o),dom.wrap(test,o);var t=dom.empty(window.empty);console.log(t),dom.attr(test,"title","hi");var e=dom.attr(test,"title");console.log("title: ".concat(e)),dom.text(test,"这是新的文本内容");var d=dom.text(test);console.log("text:".concat(d)),dom.style(test,{border:"1px solid red",color:"blue"});var l=dom.style(test,"border");console.log("border:".concat(l)),dom.style(test,"color","red"),dom.class.add(test,"red"),dom.class.remove(test,"red"),console.log(dom.class.has(test,"red"));var s=function(){console.log("点击了")};dom.on(test,"click",s),dom.off(test,"click",s);var r=dom.find("#test")[0];console.log(r),console.log(dom.find(".red",r));var c=dom.find("#travel")[0];dom.each(dom.children(c),function(o){return dom.style(o,"color","red")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.739b263b.js.map