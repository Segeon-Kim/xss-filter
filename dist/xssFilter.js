/*
 * xssFilter 0.1.0
 * A XSS Filter For Javascript
 * https://github.com/superRaytin/xssFilter
 *
 * Copyright 2014, SuperRaytin
 * Released under the MIT license.
*/

!function(a){function b(a){g.isObject(a)&&g.extend(this.config,a),this.config={label_style:!0,label_script:!0,beautifyTags:!0,escape:!1,blackList_attrs:{onclick:!0,ondblclick:!0,onchange:!0,onblur:!0,onfocus:!0,onkeydown:!0,onkeypress:!0,onkeyup:!0,onmousedown:!0,onmousemove:!0,onmouseover:!0,onmouseout:!0,onmouseup:!0,onselect:!0,onsubmit:!0,onreset:!0,onload:!0,onabort:!0,onerror:!0}}}var c=/<style[^>]*>[^<]*<\/style>/gim,d=/<script[^>]*>[^<]*<\/script>/gim,e=/([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ ]*))/gim,f=/<[a-zA-Z]+((\s+([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ ]*)))+)>/gim,g={each:function(a,b){var c=a.length;if(c)for(var d=0;c>d&&b.call(a[d],a[d],d)!==!1;d++);else if("undefined"==typeof c)for(var e in a)if(b.call(a[e],a[e],e)===!1)break},str_trim:function(a){return a.replace(/^\s+/g,"").replace(/\s+$/g,"")},arr_compact:function(a){var b=[];return g.each(a,function(a){""!=g.str_trim(a)&&b.push(a)}),b},isObject:function(a){return a===Object(a)},extend:function(a,b){g.each(b,function(b,c){a[c]=b})}};b.prototype.options=function(a,b){var c=arguments,d=this.config;if(c.length)if("string"==typeof a){if("undefined"==typeof d[a])throw new Error(a+" is not a valid configuration name.");if("undefined"==typeof b)throw new Error("Please enter a value corresponding to the "+a);g.isObject(b)?g.extend(d[a],b):d[a]=b}else g.isObject(a)&&(b=a,g.extend(d,b))};var h=function(a,b){var c=a,d=a;return function(){var a=f.exec(d);if(f.lastIndex=0,a){var h=a[1],i=h.match(e);d=d.replace(h,""),g.each(i,function(a){var d=g.str_trim(a.substr(0,a.indexOf("=")));b.blackList_attrs[d]&&(c=c.replace(a,""))}),arguments.callee()}}(),c},i=function(a){return a.replace(c,"")},j=function(a){return a.replace(d,"")},k=function(a){return a.replace(/\t+\n/g,"").replace(/\s*>/gm,function(a){return a.replace(/\s+/,"")})},l=function(a){return a.replace(/</g,"&lt;").replace(/>/g,"&gt;")};b.prototype.filter=function(a){if(""!=a){var b=a,c=this.config;return c.label_style&&(b=i(b)),c.label_script&&(b=j(b)),b=h(b,c),c.beautifyTags&&(b=k(b)),c.escape&&(b=l(b)),b}},"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b}):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=b:a.xssFilter=b}(this);