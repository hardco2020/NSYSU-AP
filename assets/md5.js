var hexcase=0;function hex_md5(r){return rstr2hex(rstr_md5(str2rstr_utf8(r)))}function hex_hmac_md5(r,d){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r),str2rstr_utf8(d)))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc").toLowerCase()}function rstr_md5(r){return binl2rstr(binl_md5(rstr2binl(r),8*r.length))}function rstr_hmac_md5(r,d){var e=rstr2binl(r);e.length>16&&(e=binl_md5(e,8*r.length));for(var t=Array(16),a=Array(16),n=0;n<16;n++)t[n]=909522486^e[n],a[n]=1549556828^e[n];var h=binl_md5(t.concat(rstr2binl(d)),512+8*d.length);return binl2rstr(binl_md5(a.concat(h),640))}function rstr2hex(r){for(var d,e=hexcase?"0123456789ABCDEF":"0123456789abcdef",t="",a=0;a<r.length;a++)d=r.charCodeAt(a),t+=e.charAt(d>>>4&15)+e.charAt(15&d);return t}function str2rstr_utf8(r){for(var d,e,t="",a=-1;++a<r.length;)d=r.charCodeAt(a),e=a+1<r.length?r.charCodeAt(a+1):0,55296<=d&&d<=56319&&56320<=e&&e<=57343&&(d=65536+((1023&d)<<10)+(1023&e),a++),d<=127?t+=String.fromCharCode(d):d<=2047?t+=String.fromCharCode(192|d>>>6&31,128|63&d):d<=65535?t+=String.fromCharCode(224|d>>>12&15,128|d>>>6&63,128|63&d):d<=2097151&&(t+=String.fromCharCode(240|d>>>18&7,128|d>>>12&63,128|d>>>6&63,128|63&d));return t}function rstr2binl(r){for(var d=Array(r.length>>2),e=0;e<d.length;e++)d[e]=0;for(e=0;e<8*r.length;e+=8)d[e>>5]|=(255&r.charCodeAt(e/8))<<e%32;return d}function binl2rstr(r){for(var d="",e=0;e<32*r.length;e+=8)d+=String.fromCharCode(r[e>>5]>>>e%32&255);return d}function binl_md5(r,d){r[d>>5]|=128<<d%32,r[14+(d+64>>>9<<4)]=d;for(var e=1732584193,t=-271733879,a=-1732584194,n=271733878,h=0;h<r.length;h+=16){var m=e,f=t,o=a,_=n;e=md5_ff(e,t,a,n,r[h+0],7,-680876936),n=md5_ff(n,e,t,a,r[h+1],12,-389564586),a=md5_ff(a,n,e,t,r[h+2],17,606105819),t=md5_ff(t,a,n,e,r[h+3],22,-1044525330),e=md5_ff(e,t,a,n,r[h+4],7,-176418897),n=md5_ff(n,e,t,a,r[h+5],12,1200080426),a=md5_ff(a,n,e,t,r[h+6],17,-1473231341),t=md5_ff(t,a,n,e,r[h+7],22,-45705983),e=md5_ff(e,t,a,n,r[h+8],7,1770035416),n=md5_ff(n,e,t,a,r[h+9],12,-1958414417),a=md5_ff(a,n,e,t,r[h+10],17,-42063),t=md5_ff(t,a,n,e,r[h+11],22,-1990404162),e=md5_ff(e,t,a,n,r[h+12],7,1804603682),n=md5_ff(n,e,t,a,r[h+13],12,-40341101),a=md5_ff(a,n,e,t,r[h+14],17,-1502002290),e=md5_gg(e,t=md5_ff(t,a,n,e,r[h+15],22,1236535329),a,n,r[h+1],5,-165796510),n=md5_gg(n,e,t,a,r[h+6],9,-1069501632),a=md5_gg(a,n,e,t,r[h+11],14,643717713),t=md5_gg(t,a,n,e,r[h+0],20,-373897302),e=md5_gg(e,t,a,n,r[h+5],5,-701558691),n=md5_gg(n,e,t,a,r[h+10],9,38016083),a=md5_gg(a,n,e,t,r[h+15],14,-660478335),t=md5_gg(t,a,n,e,r[h+4],20,-405537848),e=md5_gg(e,t,a,n,r[h+9],5,568446438),n=md5_gg(n,e,t,a,r[h+14],9,-1019803690),a=md5_gg(a,n,e,t,r[h+3],14,-187363961),t=md5_gg(t,a,n,e,r[h+8],20,1163531501),e=md5_gg(e,t,a,n,r[h+13],5,-1444681467),n=md5_gg(n,e,t,a,r[h+2],9,-51403784),a=md5_gg(a,n,e,t,r[h+7],14,1735328473),e=md5_hh(e,t=md5_gg(t,a,n,e,r[h+12],20,-1926607734),a,n,r[h+5],4,-378558),n=md5_hh(n,e,t,a,r[h+8],11,-2022574463),a=md5_hh(a,n,e,t,r[h+11],16,1839030562),t=md5_hh(t,a,n,e,r[h+14],23,-35309556),e=md5_hh(e,t,a,n,r[h+1],4,-1530992060),n=md5_hh(n,e,t,a,r[h+4],11,1272893353),a=md5_hh(a,n,e,t,r[h+7],16,-155497632),t=md5_hh(t,a,n,e,r[h+10],23,-1094730640),e=md5_hh(e,t,a,n,r[h+13],4,681279174),n=md5_hh(n,e,t,a,r[h+0],11,-358537222),a=md5_hh(a,n,e,t,r[h+3],16,-722521979),t=md5_hh(t,a,n,e,r[h+6],23,76029189),e=md5_hh(e,t,a,n,r[h+9],4,-640364487),n=md5_hh(n,e,t,a,r[h+12],11,-421815835),a=md5_hh(a,n,e,t,r[h+15],16,530742520),e=md5_ii(e,t=md5_hh(t,a,n,e,r[h+2],23,-995338651),a,n,r[h+0],6,-198630844),n=md5_ii(n,e,t,a,r[h+7],10,1126891415),a=md5_ii(a,n,e,t,r[h+14],15,-1416354905),t=md5_ii(t,a,n,e,r[h+5],21,-57434055),e=md5_ii(e,t,a,n,r[h+12],6,1700485571),n=md5_ii(n,e,t,a,r[h+3],10,-1894986606),a=md5_ii(a,n,e,t,r[h+10],15,-1051523),t=md5_ii(t,a,n,e,r[h+1],21,-2054922799),e=md5_ii(e,t,a,n,r[h+8],6,1873313359),n=md5_ii(n,e,t,a,r[h+15],10,-30611744),a=md5_ii(a,n,e,t,r[h+6],15,-1560198380),t=md5_ii(t,a,n,e,r[h+13],21,1309151649),e=md5_ii(e,t,a,n,r[h+4],6,-145523070),n=md5_ii(n,e,t,a,r[h+11],10,-1120210379),a=md5_ii(a,n,e,t,r[h+2],15,718787259),t=md5_ii(t,a,n,e,r[h+9],21,-343485551),e=safe_add(e,m),t=safe_add(t,f),a=safe_add(a,o),n=safe_add(n,_)}return Array(e,t,a,n)}function md5_cmn(r,d,e,t,a,n){return safe_add(bit_rol(safe_add(safe_add(d,r),safe_add(t,n)),a),e)}function md5_ff(r,d,e,t,a,n,h){return md5_cmn(d&e|~d&t,r,d,a,n,h)}function md5_gg(r,d,e,t,a,n,h){return md5_cmn(d&t|e&~t,r,d,a,n,h)}function md5_hh(r,d,e,t,a,n,h){return md5_cmn(d^e^t,r,d,a,n,h)}function md5_ii(r,d,e,t,a,n,h){return md5_cmn(e^(d|~t),r,d,a,n,h)}function safe_add(r,d){var e=(65535&r)+(65535&d);return(r>>16)+(d>>16)+(e>>16)<<16|65535&e}function bit_rol(r,d){return r<<d|r>>>32-d}function base64_md5(r){return base64encode(rstr_md5(str2rstr_utf8(r)))}var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(r){var d,e,t,a,n,h;for(t=r.length,e=0,d="";e<t;){if(a=255&r.charCodeAt(e++),e==t){d+=base64EncodeChars.charAt(a>>2),d+=base64EncodeChars.charAt((3&a)<<4),d+="==";break}if(n=r.charCodeAt(e++),e==t){d+=base64EncodeChars.charAt(a>>2),d+=base64EncodeChars.charAt((3&a)<<4|(240&n)>>4),d+=base64EncodeChars.charAt((15&n)<<2),d+="=";break}h=r.charCodeAt(e++),d+=base64EncodeChars.charAt(a>>2),d+=base64EncodeChars.charAt((3&a)<<4|(240&n)>>4),d+=base64EncodeChars.charAt((15&n)<<2|(192&h)>>6),d+=base64EncodeChars.charAt(63&h)}return d}function base64decode(r){var d,e,t,a,n,h,m;for(h=r.length,n=0,m="";n<h;){do{d=base64DecodeChars[255&r.charCodeAt(n++)]}while(n<h&&-1==d);if(-1==d)break;do{e=base64DecodeChars[255&r.charCodeAt(n++)]}while(n<h&&-1==e);if(-1==e)break;m+=String.fromCharCode(d<<2|(48&e)>>4);do{if(61==(t=255&r.charCodeAt(n++)))return m;t=base64DecodeChars[t]}while(n<h&&-1==t);if(-1==t)break;m+=String.fromCharCode((15&e)<<4|(60&t)>>2);do{if(61==(a=255&r.charCodeAt(n++)))return m;a=base64DecodeChars[a]}while(n<h&&-1==a);if(-1==a)break;m+=String.fromCharCode((3&t)<<6|a)}return m}function utf16to8(r){var d,e,t,a;for(d="",t=r.length,e=0;e<t;e++)(a=r.charCodeAt(e))>=1&&a<=127?d+=r.charAt(e):a>2047?(d+=String.fromCharCode(224|a>>12&15),d+=String.fromCharCode(128|a>>6&63),d+=String.fromCharCode(128|a>>0&63)):(d+=String.fromCharCode(192|a>>6&31),d+=String.fromCharCode(128|a>>0&63));return d}function utf8to16(r){var d,e,t,a,n,h;for(d="",t=r.length,e=0;e<t;)switch((a=r.charCodeAt(e++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:d+=r.charAt(e-1);break;case 12:case 13:n=r.charCodeAt(e++),d+=String.fromCharCode((31&a)<<6|63&n);break;case 14:n=r.charCodeAt(e++),h=r.charCodeAt(e++),d+=String.fromCharCode((15&a)<<12|(63&n)<<6|(63&h)<<0)}return d}