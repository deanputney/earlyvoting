(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Bl7J:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),o=(t("v31m"),t("1GyG"));var r=t("dI71"),i=t("Y/8h"),s=t("Wbzz"),m=(t("gejq"),t("veNr")),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={},t.data=a.data,t.handleChange=t.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.handleChange=function(e){var a=e.target.value;window.location.href=a},t.render=function(){return n.a.createElement("select",{onChange:this.handleChange},n.a.createElement("option",null,"YOUR STATE"),this.data.allGoogleSheetVaApiDataRow.nodes.map(y))},a}(l.Component),y=function(e){var a=Object(m.statePageUri)(e.fullStateName);return n.a.createElement("option",{value:a},e.fullStateName)},u=function(e){var a=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"subtitle has-text-white is-size-3 is-hidden-mobile"},"I vote in",n.a.createElement("div",{class:"select is-medium is-primary state-dropdown"},n.a.createElement(d,{data:a})),"and I'm ready to get this over with!"),n.a.createElement("p",{className:"subtitle has-text-white is-size-3 is-hidden-desktop"},"I vote in",n.a.createElement("div",{class:"select is-medium is-primary state-dropdown"},n.a.createElement(d,{data:a}))))},c=function(e){e.siteTitle;return n.a.createElement("section",{className:"hero gradientBg is-halfheight"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container center"},n.a.createElement("article",{className:"media"},n.a.createElement("div",{className:"media-content"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"is-uppercase is-size-1 has-text-white"},"You can vote early in ",n.a.createElement("span",{class:"hilight"},"41 states"),"."),n.a.createElement(s.StaticQuery,{query:"3456468484",render:function(e){return n.a.createElement(u,{data:e})},data:i})))))))},S=t("xcpP"),b=t("uKGf"),E=function(e){if(e=e.data,null===(a=e).earlyVotingStartDate||null===a.earlyVotingEndDate)return null;var a,t=Object(m.statePageUri)(e.fullStateName),l=Object(b.parseDate)(e.year2020EarlyVotingEndsCombined),o=Object(b.parseDate)(e.year2020EarlyVotingStartsCombined);e.shortStartDate=o.month()+1+"/"+o.date();var r=Object(b.dateDiffInDays)(o,l);if(e.daysToVote<1||null===l)return null;if(e.daysToVote<3)return n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(s.Link,{to:t},e.fullStateName)),n.a.createElement("td",{colspan:e.daysToStart,class:"bar-spacer"},e.shortStartDate),n.a.createElement("td",{colspan:r,class:"bar"},n.a.createElement(s.Link,{to:t},n.a.createElement("div",{class:"bar-content"}))));return n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(s.Link,{to:t},e.fullStateName)),n.a.createElement("td",{colspan:e.daysToStart,class:"bar-spacer"},n.a.createElement("span",{class:e.daysToVote<12?"date is-hidden-tablet":"date is-hidden"},e.shortStartDate)),n.a.createElement("td",{colspan:r,class:"bar"},n.a.createElement(s.Link,{to:t},n.a.createElement("div",{class:"bar-content"},n.a.createElement("span",{class:e.daysToVote<12?"date is-hidden-mobile":"date"},e.shortStartDate)))))},g=function(e){var a=e.quip;return e=e.data,n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",{class:"is-hidden-touch"},n.a.createElement("th",null),n.a.createElement("td",{colspan:e.daysToStart}),n.a.createElement("td",{colspan:e.daysToVote,class:"quip"},a)),n.a.createElement("tr",{class:"is-hidden-desktop"},n.a.createElement("td",{colspan:"47",class:"quip",align:"right"},a)))},N=Object(b.parseDate)("2020-11-03"),V={42:"You could do a Couch to 5K if you saved this much time.",30:"Voting now would save you a whole month.",20:"This is three whole weekends off.",14:"Two weeks of bliss.",10:"Still worth it!"},f=[];function C(e){var a=Object(b.parseDate)(e.year2020EarlyVotingStartsCombined),t=Object(b.parseDate)("2020-09-17"),l=Object(b.dateDiffInDays)(a,N);return e.daysToStart=Object(b.dateDiffInDays)(t,a),null==V[l]||f.includes(l)?n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{data:e})):(f.push(l),n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{quip:V[l],data:e}),n.a.createElement(E,{data:e})))}var h=function(){return n.a.createElement(s.StaticQuery,{query:"1429094766",render:function(e){return n.a.createElement("div",{class:"columns"},n.a.createElement("div",{class:"column gantt-column is-10-desktop is-offset-1-desktop is-fullwidth-mobile"},n.a.createElement("table",{class:"gantt table is-fullwidth"},n.a.createElement("thead",null,n.a.createElement("th",null),n.a.createElement("td",{colspan:"45",align:"right"},"Election Day is November 3rd")),n.a.createElement("tr",null,n.a.createElement("td",{class:"bars",colspan:"46"},n.a.createElement("table",{class:"is-fullwidth is-fullwidth-mobile"},e.allGoogleSheetEarlyVotingDataRow.nodes.map(C)))))))},data:S})},p=t("0DS1"),v=t("W/9C");a.a=function(e){e.children;return n.a.createElement("div",null,n.a.createElement(o.a,null),n.a.createElement(c,null),n.a.createElement("div",null,n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement(p.a,null),n.a.createElement(h,null)))),n.a.createElement(v.a,null))}},"Y/8h":function(e){e.exports=JSON.parse('{"data":{"allGoogleSheetVaApiDataRow":{"nodes":[{"stateSlug":"alabama","fullStateName":"Alabama"},{"stateSlug":"alaska","fullStateName":"Alaska"},{"stateSlug":"arizona","fullStateName":"Arizona"},{"stateSlug":"arkansas","fullStateName":"Arkansas"},{"stateSlug":"california","fullStateName":"California"},{"stateSlug":"colorado","fullStateName":"Colorado"},{"stateSlug":"connecticut","fullStateName":"Connecticut"},{"stateSlug":"delaware","fullStateName":"Delaware"},{"stateSlug":"district-of-columbia","fullStateName":"District of Columbia"},{"stateSlug":"florida","fullStateName":"Florida"},{"stateSlug":"georgia","fullStateName":"Georgia"},{"stateSlug":"hawaii","fullStateName":"Hawaii"},{"stateSlug":"idaho","fullStateName":"Idaho"},{"stateSlug":"illinois","fullStateName":"Illinois"},{"stateSlug":"indiana","fullStateName":"Indiana"},{"stateSlug":"iowa","fullStateName":"Iowa"},{"stateSlug":"kansas","fullStateName":"Kansas"},{"stateSlug":"kentucky","fullStateName":"Kentucky"},{"stateSlug":"louisiana","fullStateName":"Louisiana"},{"stateSlug":"maine","fullStateName":"Maine"},{"stateSlug":"maryland","fullStateName":"Maryland"},{"stateSlug":"massachusetts","fullStateName":"Massachusetts"},{"stateSlug":"michigan","fullStateName":"Michigan"},{"stateSlug":"minnesota","fullStateName":"Minnesota"},{"stateSlug":"mississippi","fullStateName":"Mississippi"},{"stateSlug":"missouri","fullStateName":"Missouri"},{"stateSlug":"montana","fullStateName":"Montana"},{"stateSlug":"nebraska","fullStateName":"Nebraska"},{"stateSlug":"nevada","fullStateName":"Nevada"},{"stateSlug":"new-hampshire","fullStateName":"New Hampshire"},{"stateSlug":"new-jersey","fullStateName":"New Jersey"},{"stateSlug":"new-mexico","fullStateName":"New Mexico"},{"stateSlug":"new-york","fullStateName":"New York"},{"stateSlug":"north-carolina","fullStateName":"North Carolina"},{"stateSlug":"north-dakota","fullStateName":"North Dakota"},{"stateSlug":"ohio","fullStateName":"Ohio"},{"stateSlug":"oklahoma","fullStateName":"Oklahoma"},{"stateSlug":"oregon","fullStateName":"Oregon"},{"stateSlug":"pennsylvania","fullStateName":"Pennsylvania"},{"stateSlug":"rhode-island","fullStateName":"Rhode Island"},{"stateSlug":"south-carolina","fullStateName":"South Carolina"},{"stateSlug":"south-dakota","fullStateName":"South Dakota"},{"stateSlug":"tennessee","fullStateName":"Tennessee"},{"stateSlug":"texas","fullStateName":"Texas"},{"stateSlug":"utah","fullStateName":"Utah"},{"stateSlug":"vermont","fullStateName":"Vermont"},{"stateSlug":"virginia","fullStateName":"Virginia"},{"stateSlug":"washington","fullStateName":"Washington"},{"stateSlug":"west-virginia","fullStateName":"West Virginia"},{"stateSlug":"wisconsin","fullStateName":"Wisconsin"},{"stateSlug":"wyoming","fullStateName":"Wyoming"}]}}}')},xcpP:function(e){e.exports=JSON.parse('{"data":{"allGoogleSheetEarlyVotingDataRow":{"nodes":[{"year2020EarlyVotingStartsCombined":"September 18, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Minnesota","daysToVote":45},{"year2020EarlyVotingStartsCombined":"September 18, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Wyoming","daysToVote":45},{"year2020EarlyVotingStartsCombined":"September 18, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"South Dakota","daysToVote":45},{"year2020EarlyVotingStartsCombined":"September 18, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"Virginia","daysToVote":43},{"year2020EarlyVotingStartsCombined":"September 21, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Vermont","daysToVote":42},{"year2020EarlyVotingStartsCombined":"September 22, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Missouri","daysToVote":41},{"year2020EarlyVotingStartsCombined":"September 24, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Michigan","daysToVote":39},{"year2020EarlyVotingStartsCombined":"September 24, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Illinois","daysToVote":39},{"year2020EarlyVotingStartsCombined":"October 4, 2020","year2020EarlyVotingEndsCombined":"October 29, 2020","fullStateName":"Maine","daysToVote":25},{"year2020EarlyVotingStartsCombined":"October 5, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"California","daysToVote":28},{"year2020EarlyVotingStartsCombined":"October 5, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Iowa","daysToVote":28},{"year2020EarlyVotingStartsCombined":"October 5, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Nebraska","daysToVote":28},{"year2020EarlyVotingStartsCombined":"October 6, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Indiana","daysToVote":27},{"year2020EarlyVotingStartsCombined":"October 6, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"New Mexico","daysToVote":25},{"year2020EarlyVotingStartsCombined":"October 6, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Ohio","daysToVote":27},{"year2020EarlyVotingStartsCombined":"October 7, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Arizona","daysToVote":23},{"year2020EarlyVotingStartsCombined":"October 12, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Georgia","daysToVote":18},{"year2020EarlyVotingStartsCombined":"October 13, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Texas","daysToVote":17},{"year2020EarlyVotingStartsCombined":"October 14, 2020","year2020EarlyVotingEndsCombined":"October 29, 2020","fullStateName":"Tennessee","daysToVote":15},{"year2020EarlyVotingStartsCombined":"October 15, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"North Carolina","daysToVote":16},{"year2020EarlyVotingStartsCombined":"October 16, 2020","year2020EarlyVotingEndsCombined":"November 3, 2020","fullStateName":"Washington","daysToVote":18},{"year2020EarlyVotingStartsCombined":"October 16, 2020","year2020EarlyVotingEndsCombined":"October 27, 2020","fullStateName":"Louisiana","daysToVote":11},{"year2020EarlyVotingStartsCombined":"October 17, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Massachusetts","daysToVote":13},{"year2020EarlyVotingStartsCombined":"October 17, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Nevada","daysToVote":13},{"year2020EarlyVotingStartsCombined":"October 19, 2020","year2020EarlyVotingEndsCombined":"November 3, 2020","fullStateName":"Alaska","daysToVote":15},{"year2020EarlyVotingStartsCombined":"October 19, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Idaho","daysToVote":11},{"year2020EarlyVotingStartsCombined":"October 19, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Arkansas","daysToVote":14},{"year2020EarlyVotingStartsCombined":"October 19, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Colorado","daysToVote":14},{"year2020EarlyVotingStartsCombined":"October 19, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"North Dakota","daysToVote":14},{"year2020EarlyVotingStartsCombined":"October 20, 2020","year2020EarlyVotingEndsCombined":"November 3, 2020","fullStateName":"Hawaii","daysToVote":14},{"year2020EarlyVotingStartsCombined":"October 20, 2020","year2020EarlyVotingEndsCombined":"October 30, 2020","fullStateName":"Utah","daysToVote":10},{"year2020EarlyVotingStartsCombined":"October 20, 2020","year2020EarlyVotingEndsCombined":"November 1, 2020","fullStateName":"Wisconsin","daysToVote":12},{"year2020EarlyVotingStartsCombined":"October 21, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"West Virginia","daysToVote":10},{"year2020EarlyVotingStartsCombined":"October 24, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"Florida","daysToVote":7},{"year2020EarlyVotingStartsCombined":"October 24, 2020","year2020EarlyVotingEndsCombined":"November 1, 2020","fullStateName":"New York","daysToVote":8},{"year2020EarlyVotingStartsCombined":"October 26, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Maryland","daysToVote":7},{"year2020EarlyVotingStartsCombined":"October 27, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"District of Columbia","daysToVote":6},{"year2020EarlyVotingStartsCombined":"October 27, 2020","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Kansas","daysToVote":6},{"year2020EarlyVotingStartsCombined":"October 29, 2020","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"Oklahoma","daysToVote":2},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"October 31, 2020","fullStateName":"Mississippi","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"South Carolina","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Montana","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Rhode Island","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"November 2, 2020","fullStateName":"Kentucky","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"Alabama","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"Connecticut","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"Delaware","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"New Hampshire","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"New Jersey","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"Oregon","daysToVote":null},{"year2020EarlyVotingStartsCombined":"N/A","year2020EarlyVotingEndsCombined":"N/A","fullStateName":"Pennsylvania","daysToVote":null}]}}}')}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-75904f292d0780cf2df7.js.map