(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,a){"use strict";var n,r=a("q1tI"),o=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,a){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=t(c.map((function(t){return t.props}))),d.canUseDOM?e(s):a&&(s=a(s))}var d=function(t){var e,a;function r(){return t.apply(this,arguments)||this}a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,c=[],t};var i=r.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),u()},i.render=function(){return o.createElement(n,this.props)},r}(r.PureComponent);return i(d,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(d,"canUseDOM",l),d}}},"9Jzu":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"voteAmerica":"https://www.voteamerica.com/"}}}}')},Bl7J:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=(a("v31m"),a("xzmG")),i=a("Wbzz"),l=a("qhky"),s=function(){return r.a.createElement(i.StaticQuery,{query:"513857193",render:function(t){return r.a.createElement(l.a,null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),r.a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),r.a.createElement("meta",{name:"keywords",content:t.site.siteMetadata.keywords}),r.a.createElement("title",null,t.site.siteMetadata.title),r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{itemprop:"name",content:t.site.siteMetadata.author}),r.a.createElement("meta",{itemprop:"description",content:t.site.siteMetadata.description}),r.a.createElement("meta",{itemprop:"image",content:t.site.siteMetadata.imageUrl}))},data:o})},c=(a("gejq"),function(t){t.siteTitle;return r.a.createElement("section",{className:"hero gradientBg is-halfheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container center"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"is-uppercase is-size-1 has-text-white"},"You can vote early in ",r.a.createElement("span",{class:"hilight"},"38 states"),"."),r.a.createElement("p",{className:"subtitle has-text-white is-size-3"},"Here's how and when.")))))))}),u=a("yERI"),d=function(t){t=t.data;var e=new Date(t.earlyVotingStartDate);return t.shortStartDate=e.getMonth()+1+"/"+(e.getDate()+1),t.daysToVote<1?null:t.daysToVote<3?r.a.createElement("tr",null,r.a.createElement("th",null,t.state),r.a.createElement("td",{colspan:t.daysToStart,class:"bar-spacer"},t.shortStartDate),r.a.createElement("td",{colspan:t.daysToVote,class:"bar"})):r.a.createElement("tr",null,r.a.createElement("th",null,t.state),r.a.createElement("td",{colspan:t.daysToStart,class:"bar-spacer"}),r.a.createElement("td",{colspan:t.daysToVote,class:"bar"},t.shortStartDate))},y=function(t){var e=t.quip;return t=t.data,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("td",{colspan:t.daysToStart}),r.a.createElement("td",{colspan:t.daysToVote,class:"quip"},e))},f=new Date("2020-11-03"),p={42:"You could probably read all the Harry Potters if you saved this much time.",30:"Voting now would save you a whole month.",20:"This is three whole weekends off.",14:"Two weeks of bliss.",10:"Still worth it!"},m=[];function g(t){var e=new Date(t.earlyVotingStartDate),a=new Date("2020-09-17"),n=Math.abs(f-e)/1e3/60/60/24;return t.daysToStart=Math.abs(a-e)/1e3/60/60/24,null==p[n]||m.includes(n)?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{data:t})):(m.push(n),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{quip:p[n],data:t}),r.a.createElement(d,{data:t})))}var h=function(){return r.a.createElement(i.StaticQuery,{query:"811941253",render:function(t){return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"columns"},r.a.createElement("div",{class:"column is-10-desktop is-offset-1-desktop"},r.a.createElement("table",{class:"gantt table is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("th",null),r.a.createElement("td",{colspan:"45",align:"right"},"Election Day is November 3rd")),r.a.createElement("tr",null,r.a.createElement("td",{class:"bars",colspan:"46"},r.a.createElement("table",{class:"table is-fullwidth"},t.allGoogleSheetSiteDatesRow.nodes.map(g))))))))))},data:u})},T=function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"})))},E=a("9Jzu"),V=function(){return r.a.createElement(i.StaticQuery,{query:"1932291809",render:function(t){return r.a.createElement("footer",{className:"footer center has-background-light"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"is-size-4"},"By Jared Kofron and Dean Putney"),r.a.createElement("article",{className:"media center"},r.a.createElement("a",{href:t.site.siteMetadata.voteAmerica},"Data provided by VoteAmerica")," ")," "))},data:E})};e.a=function(t){t.children;return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(c,null),r.a.createElement(h,null),r.a.createElement(T,null),r.a.createElement(V,null))}},bmMU:function(t,e){var a="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!t(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!t(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(a&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!t(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}(t,e)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},gejq:function(t,e,a){t.exports=a.p+"static/vote-america-logo-3c6d516bc45df23e8f2f2e4a795fe94a.png"},qhky:function(t,e,a){"use strict";(function(t){var n,r,o,i,l=a("17x9"),s=a.n(l),c=a("8+s/"),u=a.n(c),d=a("bmMU"),y=a.n(d),f=a("q1tI"),p=a.n(f),m=a("6qGY"),g=a.n(m),h="bodyAttributes",T="htmlAttributes",E="titleAttributes",V={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(V).map((function(t){return V[t]})),"charset"),S="cssText",v="href",D="http-equiv",w="innerHTML",A="itemprop",O="name",C="property",k="rel",j="src",M="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",P="defer",I="encodeSpecialCharacters",L="onChangeClientState",q="titleTemplate",R=Object.keys(N).reduce((function(t,e){return t[N[e]]=e,t}),{}),H=[V.NOSCRIPT,V.SCRIPT,V.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},F=function(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},J=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=X(t,V.TITLE),a=X(t,q);if(a&&e)return a.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=X(t,x);return e||n||void 0},G=function(t){return X(t,L)||function(){}},K=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},Q=function(t,e){return e.filter((function(t){return void 0!==t[V.BASE]})).map((function(t){return t[V.BASE]})).reverse().reduce((function(e,a){if(!e.length)for(var n=Object.keys(a),r=0;r<n.length;r++){var o=n[r].toLowerCase();if(-1!==t.indexOf(o)&&a[o])return e.concat(a)}return e}),[])},$=function(t,e,a){var n={};return a.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,a){var r={};a.filter((function(t){for(var a=void 0,o=Object.keys(t),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===e.indexOf(s)||a===k&&"canonical"===t[a].toLowerCase()||s===k&&"stylesheet"===t[s].toLowerCase()||(a=s),-1===e.indexOf(l)||l!==w&&l!==S&&l!==A||(a=l)}if(!a||!t[a])return!1;var c=t[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][c]&&(r[a][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(r),i=0;i<o.length;i++){var l=o[i],s=g()({},n[l],r[l]);n[l]=s}return t}),[]).reverse()},X=function(t,e){for(var a=t.length-1;a>=0;a--){var n=t[a];if(n.hasOwnProperty(e))return n[e]}return null},Z=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Z(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:t.requestAnimationFrame||Z,at="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},rt=null,ot=function(t,e){var a=t.baseTag,n=t.bodyAttributes,r=t.htmlAttributes,o=t.linkTags,i=t.metaTags,l=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,d=t.title,y=t.titleAttributes;st(V.BODY,n),st(V.HTML,r),lt(d,y);var f={baseTag:ct(V.BASE,a),linkTags:ct(V.LINK,o),metaTags:ct(V.META,i),noscriptTags:ct(V.NOSCRIPT,l),scriptTags:ct(V.SCRIPT,c),styleTags:ct(V.STYLE,u)},p={},m={};Object.keys(f).forEach((function(t){var e=f[t],a=e.newTags,n=e.oldTags;a.length&&(p[t]=a),n.length&&(m[t]=f[t].oldTags)})),e&&e(),s(t,p,m)},it=function(t){return Array.isArray(t)?t.join(""):t},lt=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),st(V.TITLE,e)},st=function(t,e){var a=document.getElementsByTagName(t)[0];if(a){for(var n=a.getAttribute("data-react-helmet"),r=n?n.split(","):[],o=[].concat(r),i=Object.keys(e),l=0;l<i.length;l++){var s=i[l],c=e[s]||"";a.getAttribute(s)!==c&&a.setAttribute(s,c),-1===r.indexOf(s)&&r.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)a.removeAttribute(o[d]);r.length===o.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==i.join(",")&&a.setAttribute("data-react-helmet",i.join(","))}},ct=function(t,e){var a=document.head||document.querySelector(V.HEAD),n=a.querySelectorAll(t+"[data-react-helmet]"),r=Array.prototype.slice.call(n),o=[],i=void 0;return e&&e.length&&e.forEach((function(e){var a=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===w)a.innerHTML=e.innerHTML;else if(n===S)a.styleSheet?a.styleSheet.cssText=e.cssText:a.appendChild(document.createTextNode(e.cssText));else{var l=void 0===e[n]?"":e[n];a.setAttribute(n,l)}a.setAttribute("data-react-helmet","true"),r.some((function(t,e){return i=e,a.isEqualNode(t)}))?r.splice(i,1):o.push(a)})),r.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return a.appendChild(t)})),{oldTags:r,newTags:o}},ut=function(t){return Object.keys(t).reduce((function(e,a){var n=void 0!==t[a]?a+'="'+t[a]+'"':""+a;return e?e+" "+n:n}),"")},dt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,a){return e[N[a]||a]=t[a],e}),e)},yt=function(t,e,a){switch(t){case V.TITLE:return{toComponent:function(){return t=e.title,a=e.titleAttributes,(n={key:t})["data-react-helmet"]=!0,r=dt(a,n),[p.a.createElement(V.TITLE,r,t)];var t,a,n,r},toString:function(){return function(t,e,a,n){var r=ut(a),o=it(e);return r?"<"+t+' data-react-helmet="true" '+r+">"+J(o,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+J(o,n)+"</"+t+">"}(t,e.title,e.titleAttributes,a)}};case h:case T:return{toComponent:function(){return dt(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,a){var n,r=((n={key:a})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(t){var a=N[t]||t;if(a===w||a===S){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[a]=e[t]})),p.a.createElement(t,r)}))}(t,e)},toString:function(){return function(t,e,a){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(t){return!(t===w||t===S)})).reduce((function(t,e){var r=void 0===n[e]?e:e+'="'+J(n[e],a)+'"';return t?t+" "+r:r}),""),o=n.innerHTML||n.cssText||"",i=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+r+(i?"/>":">"+o+"</"+t+">")}),"")}(t,e,a)}}}},ft=function(t){var e=t.baseTag,a=t.bodyAttributes,n=t.encode,r=t.htmlAttributes,o=t.linkTags,i=t.metaTags,l=t.noscriptTags,s=t.scriptTags,c=t.styleTags,u=t.title,d=void 0===u?"":u,y=t.titleAttributes;return{base:yt(V.BASE,e,n),bodyAttributes:yt(h,a,n),htmlAttributes:yt(T,r,n),link:yt(V.LINK,o,n),meta:yt(V.META,i,n),noscript:yt(V.NOSCRIPT,l,n),script:yt(V.SCRIPT,s,n),style:yt(V.STYLE,c,n),title:yt(V.TITLE,{title:d,titleAttributes:y},n)}},pt=u()((function(t){return{baseTag:Q([v,M],t),bodyAttributes:K(h,t),defer:X(t,P),encode:X(t,I),htmlAttributes:K(T,t),linkTags:$(V.LINK,[k,v],t),metaTags:$(V.META,[O,b,D,C,A],t),noscriptTags:$(V.NOSCRIPT,[w],t),onChangeClientState:G(t),scriptTags:$(V.SCRIPT,[j,w],t),styleTags:$(V.STYLE,[S],t),title:W(t),titleAttributes:K(E,t)}}),(function(t){rt&&at(rt),t.defer?rt=et((function(){ot(t,(function(){rt=null}))})):(ot(t),rt=null)}),ft)((function(){return null})),mt=(r=pt,i=o=function(t){function e(){return B(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!y()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case V.SCRIPT:case V.NOSCRIPT:return{innerHTML:e};case V.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,a=t.child,n=t.arrayTypeChildren,r=t.newChildProps,o=t.nestedChildren;return Y({},n,((e={})[a.type]=[].concat(n[a.type]||[],[Y({},r,this.mapNestedChildrenToProps(a,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,a,n=t.child,r=t.newProps,o=t.newChildProps,i=t.nestedChildren;switch(n.type){case V.TITLE:return Y({},r,((e={})[n.type]=i,e.titleAttributes=Y({},o),e));case V.BODY:return Y({},r,{bodyAttributes:Y({},o)});case V.HTML:return Y({},r,{htmlAttributes:Y({},o)})}return Y({},r,((a={})[n.type]=Y({},o),a))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var a=Y({},e);return Object.keys(t).forEach((function(e){var n;a=Y({},a,((n={})[e]=t[e],n))})),a},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var a=this,n={};return p.a.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,o=r.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,a){return e[R[a]||a]=t[a],e}),e)}(F(r,["children"]));switch(a.warnOnInvalidChildren(t,o),t.type){case V.LINK:case V.META:case V.NOSCRIPT:case V.SCRIPT:case V.STYLE:n=a.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:e=a.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,a=F(t,["children"]),n=Y({},a);return e&&(n=this.mapChildrenToProps(e,n)),p.a.createElement(r,n)},_(e,null,[{key:"canUseDOM",set:function(t){r.canUseDOM=t}}]),e}(p.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var t=r.rewind();return t||(t=ft({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);mt.renderStatic=mt.rewind,e.a=mt}).call(this,a("yLpj"))},v31m:function(t,e,a){},xzmG:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vote Early!","author":"jared kofron & dean putney","imageUrl":"https://i.imgur.com/Vz81GEl.png","description":"Get informed about early voting in your state.","keywords":"Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter"}}}}')},yERI:function(t){t.exports=JSON.parse('{"data":{"allGoogleSheetSiteDatesRow":{"nodes":[{"state":"Minnesota","daysToVote":45,"earlyVotingStartDate":"2020-09-18","earlyVotingEndDate":"2020-11-02"},{"state":"Michigan","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"South Dakota","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"Vermont","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"Virginia","daysToVote":42,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-10-31"},{"state":"Missouri","daysToVote":41,"earlyVotingStartDate":"2020-09-22","earlyVotingEndDate":"2020-11-02"},{"state":"Illinois","daysToVote":39,"earlyVotingStartDate":"2020-09-24","earlyVotingEndDate":"2020-11-02"},{"state":"Wyoming","daysToVote":39,"earlyVotingStartDate":"2020-09-24","earlyVotingEndDate":"2020-11-02"},{"state":"Maine","daysToVote":25,"earlyVotingStartDate":"2020-10-04","earlyVotingEndDate":"2020-10-29"},{"state":"Nebraska","daysToVote":29,"earlyVotingStartDate":"2020-10-04","earlyVotingEndDate":"2020-11-02"},{"state":"Iowa","daysToVote":28,"earlyVotingStartDate":"2020-10-05","earlyVotingEndDate":"2020-11-02"},{"state":"Ohio","daysToVote":28,"earlyVotingStartDate":"2020-10-05","earlyVotingEndDate":"2020-11-02"},{"state":"Indiana","daysToVote":27,"earlyVotingStartDate":"2020-10-06","earlyVotingEndDate":"2020-11-02"},{"state":"New Mexico","daysToVote":25,"earlyVotingStartDate":"2020-10-06","earlyVotingEndDate":"2020-10-31"},{"state":"Arizona","daysToVote":23,"earlyVotingStartDate":"2020-10-07","earlyVotingEndDate":"2020-10-30"},{"state":"Georgia","daysToVote":18,"earlyVotingStartDate":"2020-10-12","earlyVotingEndDate":"2020-10-30"},{"state":"Tennessee","daysToVote":15,"earlyVotingStartDate":"2020-10-14","earlyVotingEndDate":"2020-10-29"},{"state":"North Carolina","daysToVote":16,"earlyVotingStartDate":"2020-10-15","earlyVotingEndDate":"2020-10-31"},{"state":"Washington","daysToVote":17,"earlyVotingStartDate":"2020-10-16","earlyVotingEndDate":"2020-11-02"},{"state":"Nevada","daysToVote":13,"earlyVotingStartDate":"2020-10-17","earlyVotingEndDate":"2020-10-30"},{"state":"Alaska","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Arkansas","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Colorado","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Washington DC","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Idaho","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Massachusetts","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Texas","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Wisconsin","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"California","daysToVote":13,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-11-02"},{"state":"Louisiana","daysToVote":7,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-10-27"},{"state":"Utah","daysToVote":14,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-11-03"},{"state":"West Virginia","daysToVote":10,"earlyVotingStartDate":"2020-10-21","earlyVotingEndDate":"2020-10-31"},{"state":"Maryland","daysToVote":7,"earlyVotingStartDate":"2020-10-22","earlyVotingEndDate":"2020-10-29"},{"state":"Florida","daysToVote":7,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-10-31"},{"state":"Hawaii","daysToVote":10,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-11-03"},{"state":"New York","daysToVote":8,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-11-01"},{"state":"Kansas","daysToVote":6,"earlyVotingStartDate":"2020-10-27","earlyVotingEndDate":"2020-11-02"},{"state":"Oklahoma","daysToVote":2,"earlyVotingStartDate":"2020-10-29","earlyVotingEndDate":"2020-10-31"},{"state":"Alabama","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Connecticut","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Delaware","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Kentucky","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Mississippi","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Montana","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"New Hampshire","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"New Jersey","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"North Dakota","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Oregon","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Pennsylvania","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Rhode Island","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"South Carolina","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null}]}}}')},yLpj:function(t,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}t.exports=a}}]);
//# sourceMappingURL=commons-39d2ca5414ca89b40ed1.js.map