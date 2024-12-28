"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8361],{1659:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var l=s(6043),i=s(4848),r=s(8453);const c={slug:"nodejs learning",title:"nodejs \u674e\u7acb\u8d85",authors:"Microhou",tags:["nodejs"]},d="nodejs \u5b66\u4e60",o={authorsImageUrls:[void 0]},h=[{value:"day1 nodejs \u7b80\u4ecb\u548c\u5b89\u88c5",id:"day1-nodejs-\u7b80\u4ecb\u548c\u5b89\u88c5",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528nodejs",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528nodejs",level:3},{value:"day2 \u540c\u6b65\u548c\u5f02\u6b65",id:"day2-\u540c\u6b65\u548c\u5f02\u6b65",level:2},{value:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b",id:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b",level:3},{value:"Promise",id:"promise",level:2},{value:"Promose \u7684\u9759\u6001\u65b9\u6cd5",id:"promose-\u7684\u9759\u6001\u65b9\u6cd5",level:2}];function t(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"nodejs \u5b66\u4e60"}),"\n",(0,i.jsx)(e.h2,{id:"day1-nodejs-\u7b80\u4ecb\u548c\u5b89\u88c5",children:"day1 nodejs \u7b80\u4ecb\u548c\u5b89\u88c5"}),"\n",(0,i.jsx)(e.h3,{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528nodejs",children:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528nodejs"}),"\n",(0,i.jsx)(e.p,{children:"Node.js \u662f\u4e00\u4e2a\u57fa\u4e8e Chrome V8 \u5f15\u64ce\u7684 JavaScript \u8fd0\u884c\u65f6\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f18\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9ad8\u6027\u80fd"}),":Node",".js \u4f7f\u7528\u4e8b\u4ef6\u9a71\u52a8\u3001\u975e\u963b\u585e I/O \u6a21\u578b\uff0c\u4f7f\u5176\u975e\u5e38\u8f7b\u91cf\u548c\u9ad8\u6548\uff0c\u9002\u5408\u6570\u636e\u5bc6\u96c6\u578b\u5b9e\u65f6\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5355\u7ebf\u7a0b"}),":Node",".js \u4f7f\u7528\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u4f46\u901a\u8fc7\u4e8b\u4ef6\u5faa\u73af\u548c\u5f02\u6b65 I/O \u64cd\u4f5c\uff0c\u53ef\u4ee5\u5904\u7406\u5927\u91cf\u5e76\u53d1\u8fde\u63a5\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e30\u5bcc\u7684\u751f\u6001\u7cfb\u7edf"}),":Node",".js \u62e5\u6709\u5e9e\u5927\u7684\u5305\u7ba1\u7406\u5668 npm,\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u548c\u5e93,\u6781\u5927\u5730\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5168\u6808\u5f00\u53d1"}),":\u4f7f\u7528 Node.js,\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u524d\u7aef\u548c\u540e\u7aef\u90fd\u4f7f\u7528 JavaScript,\u4ece\u800c\u5b9e\u73b0\u5168\u6808\u5f00\u53d1,\u51cf\u5c11\u4e86\u5b66\u4e60\u6210\u672c\u548c\u4e0a\u4e0b\u6587\u5207\u6362\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u793e\u533a\u652f\u6301"}),":Node",".js \u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u5f00\u53d1\u8005\u793e\u533a,\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u8d44\u6e90\u3001\u6559\u7a0b\u548c\u652f\u6301\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"nodejs \u7684\u5355\u7ebf\u7a0b\u53ef\u4ee5\u6709\u9ad8\u6548\u7387\u7684\u5904\u7406\u4efb\u52a1\u7684\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e9b\u4f18\u70b9\u4f7f\u5f97 Node.js \u6210\u4e3a\u6784\u5efa\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u7684\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u7684\u7406\u60f3\u9009\u62e9\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u7279\u70b9"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5355\u7ebf\u7a0b \u975e\u963b\u585e\uff0c\u5f02\u6b65"}),"\n",(0,i.jsx)(e.li,{children:"\u7edf\u4e00\u7684API"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"nvm"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"nvm  list"}),"\n",(0,i.jsx)(e.li,{children:"nvm  use 18.16.0"}),"\n",(0,i.jsx)(e.li,{children:"nvm  install 18.16.0"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884cnode"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"vscode F5 \u8c03\u8bd5nodejs"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"nodejs and JavaScript \u7684\u533a\u522b"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ECMAScript, (DOM, BOM) -- \u5bbf\u4e3b\u5bf9\u8c61"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"day2-\u540c\u6b65\u548c\u5f02\u6b65",children:"day2 \u540c\u6b65\u548c\u5f02\u6b65"}),"\n",(0,i.jsx)(e.h3,{id:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b",children:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8fdb\u7a0b: \u7a0b\u5e8f\u7684\u8fd0\u884c\u73af\u5883"}),"\n",(0,i.jsx)(e.li,{children:"\u7ebf\u7a0b: \u5b9e\u9645\u8fdb\u884c\u8fd0\u7b97\u7684\u4e1c\u897f"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u540c\u6b65"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u5e38\u60c5\u51b5\u5148\u90fd\u662f\u81ea\u4e0a\u5411\u4e0b\u4e00\u884c\u4e00\u884c\u6267\u884c\u7684"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u53ef\u80fd\u4f1a\u963b\u585e\uff0c \u524d\u9762\u7684\u4ee3\u7801\u4e0d\u6267\u884c\uff0c\u540e\u9762\u7684\u4ee3\u7801\u4e5f\u4e0d\u6267\u884c"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u89e3\u51b3\u540c\u6b65\u963b\u585e\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"java paython \u901a\u8fc7\u591a\u7ebf\u7a0b\u6765\u89e3\u51b3"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f02\u6b65"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ee3\u7801\u7684\u6267\u884c\u4e0d\u4f1a\u963b\u585e\u540e\u7eed\u4ee3\u7801\u7684\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(e.li,{}),"\n",(0,i.jsx)(e.li,{children:"\u5f02\u6b65\u7684\u95ee\u9898 --\x3e \u5f02\u6b65\u7684\u4ee3\u7801\u65e0\u6cd5\u901a\u8fc7return\u6765\u8bbe\u7f6e\u8fd4\u56de\u503c"}),"\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u8bbe\u7f6e\u8fd4\u56de\u503c"}),"\n",(0,i.jsx)(e.li,{children:"\u57fa\u4e8e\u56de\u8c03 \u7684 \u4ee3\u7801\u53ef\u8bfb\u6027\u5dee"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u4f55\u89e3\u51b3\u56de\u8c03\u51fd\u6570\u7684\u95ee\u9898\u4e86"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9700\u8981\u4e00\u4e2a\u4e1c\u897f\uff0c\u53ef\u4ee5\u66ff\u4ee3\u56de\u8c03\u51fd\u6570\uff0c\u7528\u6765\u8fd4\u56de\u5f02\u6b65\u7684\u7ed3\u679c"}),"\n",(0,i.jsxs)(e.li,{children:["Promise \u6a2a\u7a7a\u51fa\u4e16\uff0c\u7528\u6765\u89e3\u51b3\u56de\u8c03\u51fd\u6570\u7684\u95ee\u9898\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"new Promise()"}),"\n",(0,i.jsxs)(e.li,{children:["Promise \u662f\u4e00\u79cd\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u5bf9\u8c61","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528Promise \u6765\u5b58\u50a8\u5f02\u6b65\u8c03\u7528\u7684\u8fd4\u56de\u503c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u95ee\u4ec0\u4e48\u4f1a\u6709\u56de\u8c03\u51fd\u6570\uff0c\u628a\u77e5\u8bc6\u4e32\u8d77\u6765\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"promise",children:"Promise"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Promise \u4e2d\u7ef4\u62a4\u4e86\u4e24\u4e2a\u9690\u85cf\u5c5e\u6027"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["PromiseState","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8bb0\u5f55Promise\u7684\u72b6\u6001","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"pending"}),"\n",(0,i.jsx)(e.li,{children:"fulfilled --\x3e resolved"}),"\n",(0,i.jsx)(e.li,{children:"rejected --\x3e rejected"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"state \u53ea\u80fd\u4fee\u6539\u4e00\u6b21\uff0c\u4e00\u65e6\u4fee\u6539\u5c31\u4e0d\u80fd\u518d\u4fee\u6539"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Promiseresult"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"then \u548c catch"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u901a\u8fc7then \u8bfb\u53d6\u6570\u636e\u7684\u65f6\u5019\uff0cPromiseState \u53d8\u6210fulfilled"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u901a\u8fc7catch \u8bfb\u53d6\u6570\u636e\u7684\u65f6\u5019\uff0cPromiseState \u53d8\u6210rejected"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["catch --\x3e ",(0,i.jsx)(e.code,{children:"js promise.catch(error => {}) -- then(null, error => {})"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u6709\u9519\u8bef\uff0c\u5c31\u4f1a\u6267\u884ccatch\uff0c\u5426\u5219\u4e0d\u4f1a\u6267\u884ccatch"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"finally"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u65e0\u8bba\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c\u90fd\u4f1a\u6267\u884cfinally"}),"\n",(0,i.jsx)(e.li,{children:"finally \u4e2d\u4e0d\u4f1a\u63a5\u53d7\u5230reject and resolve \u7684\u6570\u636e"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"then() catch() finally() \u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684promise"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e3a\u4ec0\u4e48\u8981\u8fd4\u56de\u4e00\u4e2apromise"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53Promise \u4e2d\u6709\u9519\u8bef\uff0c\u4f46\u662f\u6ca1\u6709\u88abcatch, \u5c31\u4f1athrow \u5f02\u5e38"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"    promise.then(res => res).catch(err => err).then(res => res)\r\n\r\n    promise.then().then().catch()\r\n\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u5e38\u628acatch \u5199\u5728\u6700\u540e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u540e\u4e00\u6b65\u8bfb\u53d6\u7684\u662f\u524d\u4e00\u6b65\u7684\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"promose-\u7684\u9759\u6001\u65b9\u6cd5",children:"Promose \u7684\u9759\u6001\u65b9\u6cd5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Promise.resolve() --\x3e \u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5b8c\u6210\u7684Promise"}),"\n",(0,i.jsx)(e.li,{children:"Promise.reject() --\x3e \u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5931\u8d25\u7684Promise"}),"\n",(0,i.jsx)(e.li,{children:"Promise.all(iterable).then() --\x3e \u6240\u6709\u7684Promise \u90fd\u6210\u529f\uff0c\u8fd4\u56de\u4e00\u4e2a\u6210\u529f\u7684Promise\uff0c, \u6709\u4e00\u4e2areject\uff0c\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684Promise"}),"\n",(0,i.jsx)(e.li,{children:"Promise.allSettled([...]) --\x3e \u540c\u65f6\u8fd4\u56de\u591a\u4e2aPromise"}),"\n",(0,i.jsx)(e.li,{children:"Promise.race() --\x3e \u53ea\u8981\u6709\u4e00\u4e2aPromise\u6210\u529f\uff0c\u8fd4\u56de\u4e00\u4e2a\u6210\u529f\u7684Promise\uff0c\u5426\u5219\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684Promise"}),"\n",(0,i.jsx)(e.li,{children:"Promise.any() --\x3e \u53ea\u8981\u6709\u4e00\u4e2aPromise\u6210\u529f\uff0c\u8fd4\u56de\u4e00\u4e2a\u6210\u529f\u7684Promise\uff0c\u5426\u5219\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684Promise"}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var l=s(6540);const i={},r=l.createContext(i);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),l.createElement(r.Provider,{value:e},n.children)}},6043:n=>{n.exports=JSON.parse('{"permalink":"/en/blog/nodejs learning","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-27-nodejs-blog.md","source":"@site/blog/2024-12-27-nodejs-blog.md","title":"nodejs \u674e\u7acb\u8d85","description":"nodejs \u5b66\u4e60","date":"2024-12-27T00:00:00.000Z","tags":[{"inline":false,"label":"Node","permalink":"/en/blog/tags/nodejs","description":"Node.js learning"}],"readingTime":4.745,"hasTruncateMarker":true,"authors":[{"name":"Microhou","title":"Micro front leaning","url":"https://github.com/Microhou","imageURL":"https://github.com/Microhou.png","key":"Microhou","page":null}],"frontMatter":{"slug":"nodejs learning","title":"nodejs \u674e\u7acb\u8d85","authors":"Microhou","tags":["nodejs"]},"unlisted":false,"nextItem":{"title":"react useEffect","permalink":"/en/blog/react useEffect"}}')}}]);