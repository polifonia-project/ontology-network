"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Links and provenance",c={unversionedId:"tutorial-basics/links_provenance",id:"tutorial-basics/links_provenance",title:"Links and provenance",description:"We propose a pattern based on RDF* [4] to describe the provenance at different levels (figure below).",source:"@site/docs/tutorial-basics/links_provenance.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/links_provenance",permalink:"/ontology-network/docs/tutorial-basics/links_provenance",draft:!1,editUrl:"ahttps://github.com/polifonia-project/ontology-network/tree/main/website/docs/tutorial-basics/links_provenance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Performance",permalink:"/ontology-network/docs/tutorial-basics/music-performance"},next:{title:"Congratulations!",permalink:"/ontology-network/docs/tutorial-basics/congratulations"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"links-and-provenance"},"Links and provenance"),(0,o.kt)("p",null,"We propose a pattern based on ",(0,o.kt)("inlineCode",{parentName:"p"},"RDF*")," ","[4]"," to describe the provenance at different levels (figure below).\nThe use of RDF* is particularly useful for this purpose, as it allows to embed provenance information to every triple in the dataset.\nThis simplifies and streamlines the model, eliminating the need for n-ary relations or reification for each triple."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://polifonia-project.github.io/music-meta-ontology/assets/images/provenance-851fc5dcfab752b84609cac4cc8b4063.png",alt:"Example banner"})),(0,o.kt)("p",null,"The proposed pattern is straightforward and comprises the class ",(0,o.kt)("inlineCode",{parentName:"p"},"core:Reference"),", which describes the source of the reference (using the class ",(0,o.kt)("inlineCode",{parentName:"p"},"core:Source"),") and the method used to obtain the annotation (using the class ",(0,o.kt)("inlineCode",{parentName:"p"},"core:SourceMethod"),").\nAdditionally, the datatype properties ",(0,o.kt)("inlineCode",{parentName:"p"},"core:confidence")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"core:retrievedOn")," describe the confidence of the annotation and the date it was produced, respectively."),(0,o.kt)("p",null,"[4]"," TODO"))}d.isMDXComponent=!0}}]);