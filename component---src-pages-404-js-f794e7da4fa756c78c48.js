(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(t,a,e){"use strict";var l=e("q1tI"),n=e.n(l),o=(e("v31m"),e("1GyG"));var s=e("dI71"),r=e("Y/8h"),i=e("Wbzz"),u=(e("gejq"),e("veNr")),d=function(t){function a(a){var e;return(e=t.call(this,a)||this).state={},e.data=a.data,e.handleChange=e.handleChange.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)),e}Object(s.a)(a,t);var e=a.prototype;return e.handleChange=function(t){var a=t.target.value;window.location.href=a},e.render=function(){return n.a.createElement("select",{onChange:this.handleChange},n.a.createElement("option",null,"YOUR STATE"),this.data.allGoogleSheetVaApiDataRow.nodes.map(g))},a}(l.Component),g=function(t){var a=Object(u.statePageUri)(t.stateSlug);return n.a.createElement("option",{value:a},t.fullStateName)},c=function(t){var a=t.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"subtitle has-text-white is-size-3 is-hidden-mobile"},"I vote in",n.a.createElement("div",{class:"select is-medium is-primary state-dropdown"},n.a.createElement(d,{data:a})),"and I'm ready to get this over with!"),n.a.createElement("p",{className:"subtitle has-text-white is-size-3 is-hidden-desktop"},"I vote in",n.a.createElement("div",{class:"select is-medium is-primary state-dropdown"},n.a.createElement(d,{data:a}))))},y=function(t){t.siteTitle;return n.a.createElement("section",{className:"hero gradientBg is-halfheight"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container center"},n.a.createElement("article",{className:"media"},n.a.createElement("div",{className:"media-content"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"is-uppercase is-size-1 has-text-white"},"You can vote early in ",n.a.createElement("span",{class:"hilight"},"41 states"),"."),n.a.createElement(i.StaticQuery,{query:"3456468484",render:function(t){return n.a.createElement(c,{data:t})},data:r})))))))},m=e("yERI"),S=e("uKGf"),V=function(t){if(t=t.data,null===(a=t).earlyVotingStartDate||null===a.earlyVotingEndDate)return null;var a,e=Object(u.statePageUri)(t.state),l=Object(S.parseDate)(t.earlyVotingEndDate),o=Object(S.parseDate)(t.earlyVotingStartDate);t.shortStartDate=o.month()+1+"/"+(o.date()+1);var s=Object(S.dateDiffInDays)(o,l);if(t.daysToVote<1||null===l)return null;if(t.daysToVote<3)return n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(i.Link,{to:e},t.state)),n.a.createElement("td",{colspan:t.daysToStart,class:"bar-spacer"},t.shortStartDate),n.a.createElement("td",{colspan:s,class:"bar"},n.a.createElement(i.Link,{to:e},n.a.createElement("div",{class:"bar-content"}))));return n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(i.Link,{to:e},t.state)),n.a.createElement("td",{colspan:t.daysToStart,class:"bar-spacer"},n.a.createElement("span",{class:t.daysToVote<12?"date is-hidden-tablet":"date is-hidden"},t.shortStartDate)),n.a.createElement("td",{colspan:s,class:"bar"},n.a.createElement(i.Link,{to:e},n.a.createElement("div",{class:"bar-content"},n.a.createElement("span",{class:t.daysToVote<12?"date is-hidden-mobile":"date"},t.shortStartDate)))))},D=function(t){var a=t.quip;return t=t.data,n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",{class:"is-hidden-touch"},n.a.createElement("th",null),n.a.createElement("td",{colspan:t.daysToStart}),n.a.createElement("td",{colspan:t.daysToVote,class:"quip"},a)),n.a.createElement("tr",{class:"is-hidden-desktop"},n.a.createElement("td",{colspan:"47",class:"quip",align:"right"},a)))},E=Object(S.parseDate)("2020-11-03"),h={42:"You could do a Couch to 5K if you saved this much time.",30:"Voting now would save you a whole month.",20:"This is three whole weekends off.",14:"Two weeks of bliss.",10:"Still worth it!"},f=[];function N(t){var a=Object(S.parseDate)(t.earlyVotingStartDate),e=Object(S.parseDate)("2020-09-17"),l=Object(S.dateDiffInDays)(a,E);return t.daysToStart=Object(S.dateDiffInDays)(e,a),null==h[l]||f.includes(l)?n.a.createElement(n.a.Fragment,null,n.a.createElement(V,{data:t})):(f.push(l),n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{quip:h[l],data:t}),n.a.createElement(V,{data:t})))}var T=function(){return n.a.createElement(i.StaticQuery,{query:"811941253",render:function(t){return n.a.createElement("div",{class:"columns"},n.a.createElement("div",{class:"column gantt-column is-10-desktop is-offset-1-desktop is-fullwidth-mobile"},n.a.createElement("table",{class:"gantt table is-fullwidth"},n.a.createElement("thead",null,n.a.createElement("th",null),n.a.createElement("td",{colspan:"45",align:"right"},"Election Day is November 3rd")),n.a.createElement("tr",null,n.a.createElement("td",{class:"bars",colspan:"46"},n.a.createElement("table",{class:"is-fullwidth is-fullwidth-mobile"},t.allGoogleSheetSiteDatesRow.nodes.map(N)))))))},data:m})},p=e("0DS1"),w=e("W/9C");a.a=function(t){t.children;return n.a.createElement("div",null,n.a.createElement(o.a,null),n.a.createElement(y,null),n.a.createElement("div",null,n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement(p.a,null),n.a.createElement(T,null)))),n.a.createElement(w.a,null))}},"Y/8h":function(t){t.exports=JSON.parse('{"data":{"allGoogleSheetVaApiDataRow":{"nodes":[{"stateSlug":"alabama","fullStateName":"Alabama"},{"stateSlug":"alaska","fullStateName":"Alaska"},{"stateSlug":"arizona","fullStateName":"Arizona"},{"stateSlug":"arkansas","fullStateName":"Arkansas"},{"stateSlug":"california","fullStateName":"California"},{"stateSlug":"colorado","fullStateName":"Colorado"},{"stateSlug":"connecticut","fullStateName":"Connecticut"},{"stateSlug":"delaware","fullStateName":"Delaware"},{"stateSlug":"district-of-columbia","fullStateName":"District of Columbia"},{"stateSlug":"florida","fullStateName":"Florida"},{"stateSlug":"georgia","fullStateName":"Georgia"},{"stateSlug":"hawaii","fullStateName":"Hawaii"},{"stateSlug":"idaho","fullStateName":"Idaho"},{"stateSlug":"illinois","fullStateName":"Illinois"},{"stateSlug":"indiana","fullStateName":"Indiana"},{"stateSlug":"iowa","fullStateName":"Iowa"},{"stateSlug":"kansas","fullStateName":"Kansas"},{"stateSlug":"kentucky","fullStateName":"Kentucky"},{"stateSlug":"louisiana","fullStateName":"Louisiana"},{"stateSlug":"maine","fullStateName":"Maine"},{"stateSlug":"maryland","fullStateName":"Maryland"},{"stateSlug":"massachusetts","fullStateName":"Massachusetts"},{"stateSlug":"michigan","fullStateName":"Michigan"},{"stateSlug":"minnesota","fullStateName":"Minnesota"},{"stateSlug":"mississippi","fullStateName":"Mississippi"},{"stateSlug":"missouri","fullStateName":"Missouri"},{"stateSlug":"montana","fullStateName":"Montana"},{"stateSlug":"nebraska","fullStateName":"Nebraska"},{"stateSlug":"nevada","fullStateName":"Nevada"},{"stateSlug":"new-hampshire","fullStateName":"New Hampshire"},{"stateSlug":"new-jersey","fullStateName":"New Jersey"},{"stateSlug":"new-mexico","fullStateName":"New Mexico"},{"stateSlug":"new-york","fullStateName":"New York"},{"stateSlug":"north-carolina","fullStateName":"North Carolina"},{"stateSlug":"north-dakota","fullStateName":"North Dakota"},{"stateSlug":"ohio","fullStateName":"Ohio"},{"stateSlug":"oklahoma","fullStateName":"Oklahoma"},{"stateSlug":"oregon","fullStateName":"Oregon"},{"stateSlug":"pennsylvania","fullStateName":"Pennsylvania"},{"stateSlug":"rhode-island","fullStateName":"Rhode Island"},{"stateSlug":"south-carolina","fullStateName":"South Carolina"},{"stateSlug":"south-dakota","fullStateName":"South Dakota"},{"stateSlug":"tennessee","fullStateName":"Tennessee"},{"stateSlug":"texas","fullStateName":"Texas"},{"stateSlug":"utah","fullStateName":"Utah"},{"stateSlug":"vermont","fullStateName":"Vermont"},{"stateSlug":"virginia","fullStateName":"Virginia"},{"stateSlug":"washington","fullStateName":"Washington"},{"stateSlug":"west-virginia","fullStateName":"West Virginia"},{"stateSlug":"wisconsin","fullStateName":"Wisconsin"},{"stateSlug":"wyoming","fullStateName":"Wyoming"}]}}}')},w2l6:function(t,a,e){"use strict";e.r(a);var l=e("q1tI"),n=e.n(l),o=e("Bl7J");a.default=function(){return n.a.createElement(o.a,null,n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},yERI:function(t){t.exports=JSON.parse('{"data":{"allGoogleSheetSiteDatesRow":{"nodes":[{"state":"Minnesota","daysToVote":45,"earlyVotingStartDate":"2020-09-18","earlyVotingEndDate":"2020-11-02"},{"state":"Michigan","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"South Dakota","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"Vermont","daysToVote":44,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-11-02"},{"state":"Virginia","daysToVote":42,"earlyVotingStartDate":"2020-09-19","earlyVotingEndDate":"2020-10-31"},{"state":"Missouri","daysToVote":41,"earlyVotingStartDate":"2020-09-22","earlyVotingEndDate":"2020-11-02"},{"state":"Illinois","daysToVote":39,"earlyVotingStartDate":"2020-09-24","earlyVotingEndDate":"2020-11-02"},{"state":"Wyoming","daysToVote":39,"earlyVotingStartDate":"2020-09-24","earlyVotingEndDate":"2020-11-02"},{"state":"Maine","daysToVote":25,"earlyVotingStartDate":"2020-10-04","earlyVotingEndDate":"2020-10-29"},{"state":"Nebraska","daysToVote":29,"earlyVotingStartDate":"2020-10-04","earlyVotingEndDate":"2020-11-02"},{"state":"Iowa","daysToVote":28,"earlyVotingStartDate":"2020-10-05","earlyVotingEndDate":"2020-11-02"},{"state":"Ohio","daysToVote":28,"earlyVotingStartDate":"2020-10-05","earlyVotingEndDate":"2020-11-02"},{"state":"Indiana","daysToVote":27,"earlyVotingStartDate":"2020-10-06","earlyVotingEndDate":"2020-11-02"},{"state":"New Mexico","daysToVote":25,"earlyVotingStartDate":"2020-10-06","earlyVotingEndDate":"2020-10-31"},{"state":"Arizona","daysToVote":23,"earlyVotingStartDate":"2020-10-07","earlyVotingEndDate":"2020-10-30"},{"state":"Georgia","daysToVote":18,"earlyVotingStartDate":"2020-10-12","earlyVotingEndDate":"2020-10-30"},{"state":"Tennessee","daysToVote":15,"earlyVotingStartDate":"2020-10-14","earlyVotingEndDate":"2020-10-29"},{"state":"North Carolina","daysToVote":16,"earlyVotingStartDate":"2020-10-15","earlyVotingEndDate":"2020-10-31"},{"state":"Washington","daysToVote":17,"earlyVotingStartDate":"2020-10-16","earlyVotingEndDate":"2020-11-02"},{"state":"Nevada","daysToVote":13,"earlyVotingStartDate":"2020-10-17","earlyVotingEndDate":"2020-10-30"},{"state":"Alaska","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Arkansas","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Colorado","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Washington DC","daysToVote":14,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-11-02"},{"state":"Idaho","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Massachusetts","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Texas","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"Wisconsin","daysToVote":11,"earlyVotingStartDate":"2020-10-19","earlyVotingEndDate":"2020-10-30"},{"state":"California","daysToVote":13,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-11-02"},{"state":"Louisiana","daysToVote":7,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-10-27"},{"state":"Utah","daysToVote":14,"earlyVotingStartDate":"2020-10-20","earlyVotingEndDate":"2020-11-03"},{"state":"West Virginia","daysToVote":10,"earlyVotingStartDate":"2020-10-21","earlyVotingEndDate":"2020-10-31"},{"state":"Maryland","daysToVote":7,"earlyVotingStartDate":"2020-10-22","earlyVotingEndDate":"2020-10-29"},{"state":"Florida","daysToVote":7,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-10-31"},{"state":"Hawaii","daysToVote":10,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-11-03"},{"state":"New York","daysToVote":8,"earlyVotingStartDate":"2020-10-24","earlyVotingEndDate":"2020-11-01"},{"state":"Kansas","daysToVote":6,"earlyVotingStartDate":"2020-10-27","earlyVotingEndDate":"2020-11-02"},{"state":"Oklahoma","daysToVote":2,"earlyVotingStartDate":"2020-10-29","earlyVotingEndDate":"2020-10-31"},{"state":"Alabama","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Connecticut","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Delaware","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Kentucky","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Mississippi","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Montana","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"New Hampshire","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"New Jersey","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"North Dakota","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Oregon","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Pennsylvania","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"Rhode Island","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null},{"state":"South Carolina","daysToVote":null,"earlyVotingStartDate":null,"earlyVotingEndDate":null}]}}}')}}]);
//# sourceMappingURL=component---src-pages-404-js-f794e7da4fa756c78c48.js.map