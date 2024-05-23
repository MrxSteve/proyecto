"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[802],{588:(e,s,r)=>{r.d(s,{Gf:()=>u,is:()=>c,ws:()=>N,Li:()=>k,TN:()=>j,IY:()=>m});var a=r(43),l=r(167),t=r(579);const i={THREE_KIND:"3x",FOUR_KIND:"4x",FULL_HOUSE:(0,t.jsx)(l.A,{type:"full-house",fill:"white"}),SMALL_STRAIGHT:(0,t.jsxs)("div",{className:"board-item-straight",children:[(0,t.jsx)(l.A,{type:"cards",fill:"white"}),(0,t.jsx)("div",{children:"Small"})]}),LARGE_STRAIGHT:(0,t.jsxs)("div",{className:"board-item-straight",children:[(0,t.jsx)(l.A,{type:"cards",fill:"white"}),(0,t.jsx)("div",{children:"Large"})]}),YATZY:(0,t.jsx)("div",{className:"board-item-yatzy",children:"Yatzy"}),CHANCE:"?"};var n=r(413);const o=e=>{let{label:s="",size:r=50,type:a=n.rE.UPPER_SECTION,value:l=1}=e;return(0,t.jsx)("div",{className:"board-item ".concat(a.toLowerCase()," ").concat(a===n.rE.UPPER_SECTION?"dice-".concat(l):""),style:{width:r,height:r},title:s||l.toString(),children:a===n.rE.LOWER_SECTION&&i[l]})},c=a.memo(o),d=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"board-wrapper",children:s})},m=a.memo(d),h=e=>{let{label:s="",typeGame:r=n.mR.SOLO}=e;return(0,t.jsx)("div",{className:"board-header-panel",children:r===n.mR.SOLO?s:(0,t.jsxs)("div",{className:"board-header-panel-player",children:[(0,t.jsx)("div",{children:n.ds[r===n.mR.BOT||r===n.mR.ONLINE?"YOU":"PLAYER1"]}),(0,t.jsx)("div",{children:r===n.mR.BOT?n.ds.BOT:r===n.mR.ONLINE?n.ds.THEM:n.ds.PLAYER2})]})})},p=e=>{let{typeGame:s=n.mR.SOLO}=e;return(0,t.jsx)("div",{className:"board-header",children:n.iO.map(((e,r)=>(0,t.jsx)(h,{label:e,typeGame:s},r)))})},u=a.memo(p),x=e=>{let{items:s,players:r,thrownDice:a=!1,turn:l=1,typeGame:i=n.mR.SOLO,handleClick:o}=e;return(0,t.jsx)("div",{className:"board-table-row-wrapper",children:new Array(7).fill(null).map(((e,n)=>(0,t.jsxs)("div",{className:"board-table-row",children:[(0,t.jsx)("div",{className:"board-table-row-item",children:n<6?(0,t.jsx)(N,{item:s.UPPER_SECTION[n],thrownDice:a,turn:l,typeGame:i,handleClick:o}):(0,t.jsx)(k,{players:r})}),(0,t.jsx)("div",{className:"board-table-row-item",children:(0,t.jsx)(N,{item:s.LOWER_SECTION[n],thrownDice:a,turn:l,typeGame:i,handleClick:o})})]},n)))})},j=a.memo(x),b=e=>{let{item:s,thrownDice:r=!1,turn:a=1,player:l=1,handleClick:i}=e;const{isSelected:o,isUsed:c,temporal:d,value:m,isBonusYatzy:h}=s.score[l-1],p=!(a===l&&r&&!c),u=r&&a===l||c?c?m:d:"",x=s.label+(""!==u?" = ".concat(u):""),j=c?"used-score":a===l?"turn":"",b=a===l&&r?c?"used":"active":"",v=o?"selected":"";return(0,t.jsxs)("button",{title:x,disabled:p,className:"board-panel-row-score-button ".concat(j," ").concat(b," ").concat(v),onClick:()=>i(s,l),children:[u,h&&(0,t.jsx)("span",{children:n.Qc.YATZY})]})},v=e=>{let{item:s,thrownDice:r=!1,typeGame:a=n.mR.SOLO,turn:l=1,handleClick:i}=e;const o={item:s,thrownDice:r,turn:l,handleClick:i};return(0,t.jsxs)("div",{className:"board-panel-row-category",children:[(0,t.jsx)("div",{className:"board-panel-row-item",children:(0,t.jsx)(c,{type:s.type,value:s.value,label:s.label})}),(0,t.jsxs)("div",{className:"board-panel-row-score",children:[(0,t.jsx)(b,{...o,player:1}),a===n.mR.SOLO?(0,t.jsx)("div",{className:"board-panel-row-score-label",children:s.label}):(0,t.jsx)(b,{...o,player:2})]})]})},N=a.memo(v);var w=r(749);const y=()=>(0,t.jsxs)("div",{className:"board-panel-score-bonus",children:[(0,t.jsx)("div",{children:n.ds.BONUS}),(0,t.jsxs)("div",{children:["+",n.Sf]})]}),f=e=>{let{value:s=0}=e;return(0,t.jsxs)("div",{className:"board-panel-score-item",children:[(0,t.jsx)(w.A,{score:s,className:"board-panel-score-item-score"}),(0,t.jsxs)("div",{className:"board-panel-score-item-bonus",children:["/",n.w]})]})},g=()=>(0,t.jsxs)("div",{className:"board-panel-score-bonus-earned",children:[(0,t.jsxs)("span",{children:["+",n.Sf]}),(0,t.jsx)(l.A,{type:"check",fill:"#fdb823"})]}),S=e=>{let{players:s}=e;return(0,t.jsxs)("div",{className:"board-panel-score",children:[(0,t.jsx)(y,{}),(0,t.jsx)("div",{className:"board-panel-score-items",children:s.map((e=>{var s;let{id:r,isBonusEarned:a,scoreBoard:l}=e;return a?(0,t.jsx)(g,{},r):(0,t.jsx)(f,{value:null!==(s=l.UPPER_SECTION)&&void 0!==s?s:0},r)}))})]})},k=a.memo(S)},749:(e,s,r)=>{r.d(s,{A:()=>n});var a=r(464),l=r(43),t=r(579);const i=e=>{let{score:s=0,className:r="",index:i=0,intervalTime:n=50,handleEndTimer:o}=e;const[c,d]=(0,l.useState)(0),[m,h]=(0,l.useState)(0),[p,u]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{s!==c&&(d(s),u(!0))}),[c,s]),(0,a.$$)((()=>{const e=m+1;h(e),e===c&&(u(!1),o&&o(i))}),p?n:null),(0,t.jsx)("div",{className:"".concat(r," ").concat(p?"score-counter":""),children:m})},n=l.memo(i)},793:(e,s,r)=>{r.d(s,{A:()=>o});var a=r(588),l=r(925),t=r(43),i=r(579);const n=()=>{const[e]=(0,t.useState)((0,l.RZ)(1,6));return(0,i.jsxs)("div",{className:"logo",children:[(0,i.jsx)("h1",{className:"logo-label",children:"YATZY"}),(0,i.jsx)("div",{className:"logo-dices",children:new Array(5).fill(null).map(((s,r)=>(0,i.jsx)(a.is,{value:e},r)))})]})},o=t.memo(n)},802:(e,s,r)=>{r.r(s),r.d(s,{default:()=>h});var a=r(442),l=r(793),t=r(43),i=r(167),n=r(579);const o=[{title:"Twitter",icon:"twitter",link:"https://twitter.com"},{title:"Github",icon:"github",link:"https://github.com/mrxSteve"},{title:"Linkedin",icon:"linkedin",link:"https://www.linkedin.com/in/mrXsteve"},{title:"Dev.to",icon:"devto",link:"https://dev.to"},{title:"bio.link",icon:"games",link:"https://bio.link"}],c=()=>(0,n.jsx)(a.ff,{children:(0,n.jsxs)("div",{className:"about-game",children:[(0,n.jsx)(l.A,{}),(0,n.jsxs)(a.e2,{label:"About",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{title:"Yatzy",href:"https://en.wikipedia.org/wiki/Yatzy",target:"_blank",rel:"noopener noreferrer",children:"Yatzy"})," ","Es un juego de dados similar al Yacht y Yahtzee. Est\xe1 relacionado con el juego latinoamericano Generala y el juego de dados de p\xf3quer ingl\xe9s. El Yatzy es m\xe1s popular en los pa\xedses n\xf3rdicos."]}),(0,n.jsxs)("p",{children:["This version was developed by"," ",(0,n.jsx)("a",{title:"Jorge Rubiano",href:"https://instagram.com/_mrxsteve",target:"_blank",rel:"noopener noreferrer",children:"Steve Tobar"})," ","en"," ",(0,n.jsx)("a",{title:"ReactJS",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"ReactJS"})," ","y"," ",(0,n.jsx)("a",{title:"TypeScript",href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer",children:"TypeScript"})]}),(0,n.jsxs)("p",{children:["Musica por"," ",(0,n.jsx)("a",{title:"freesound",href:"https://freesound.org/people/Setuniman/sounds/171394/",target:"_blank",rel:"noopener noreferrer",children:"freesound.org"})]})]}),(0,n.jsx)("div",{className:"about-game-social",children:o.map(((e,s)=>{let{title:r,icon:a,link:l}=e;return(0,n.jsx)("a",{className:"about-game-social-link",title:"Jorge Rubiano on ".concat(r),href:l,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i.A,{type:a,fill:"white"})},s)}))})]})}),d=t.memo(c),m=()=>(0,n.jsx)(d,{}),h=t.memo(m)}}]);
//# sourceMappingURL=802.2579c420.chunk.js.map