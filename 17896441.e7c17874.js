(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(99);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,o=document.getElementsByClassName(e);l<o.length&&!c;){var s=o[l],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),s.classList.add(t),i(s),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(58),o=a.n(c),s="table-of-contents__link";function m(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return i(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{headings:t}))}},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a(23),c=a(103),o=a(101);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(108),d=a(100);var u=function(){var e=Object(i.default)().siteConfig.title,t=Object(m.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(m.useActiveVersion)(t),r=Object(m.useDocVersionSuggestions)(t),c=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var u,g=null!=c?c:(u=s).docs.find((function(e){return e.id===u.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:g.path,onClick:function(){return a(s.name)}},"latest version"))," ","(",s.label,")."))},g=a(113),v=a(99),E=a(70),f=a.n(E);t.default=function(e){var t,a=Object(i.default)().siteConfig,n=a.url,o=a.title,d=a.titleDelimiter,E=e.content,p=E.metadata,b=p.description,h=p.title,N=p.permalink,_=p.editUrl,w=p.lastUpdatedAt,O=p.lastUpdatedBy,y=E.frontMatter,k=y.image,j=y.keywords,C=y.hide_title,x=y.hide_table_of_contents,L=Object(m.useActivePlugin)({failfast:!0}).pluginId,A=Object(m.useVersions)(L),I=Object(m.useActiveVersion)(L),D=A.length>1,S=h?h+" "+d+" "+o:o,V=Object(c.a)(k,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,S),l.a.createElement("meta",{property:"og:title",content:S}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),j&&j.length&&l.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:V}),k&&l.a.createElement("meta",{property:"twitter:image",content:V}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),N&&l.a.createElement("meta",{property:"og:url",content:n+N}),N&&l.a.createElement("link",{rel:"canonical",href:n+N})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(v.a)("col",(t={},t[f.a.docItemCol]=!x,t))},l.a.createElement(u,null),l.a.createElement("div",{className:f.a.docItemContainer},l.a.createElement("article",null,D&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!C&&l.a.createElement("header",null,l.a.createElement("h1",{className:f.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(E,null))),(_||w||O)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||O)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",w&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:f.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),O&&" "),O&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,O)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:p})))),!x&&E.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(g.a,{headings:E.rightToc}))))}}}]);