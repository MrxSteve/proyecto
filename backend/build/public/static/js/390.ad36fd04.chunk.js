"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[390],{390:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var s=n(43),l=n(588),o=n(579);const c=e=>(0,o.jsxs)(l.IY,{children:[(0,o.jsx)(l.Gf,{typeGame:e.typeGame}),(0,o.jsx)(l.TN,{...e})]}),r=s.memo(c),a=e=>{let{blockContent:t=!1,children:n}=e;return(0,o.jsxs)("div",{className:"game-wrapper",children:[t&&(0,o.jsx)("div",{className:"game-wrapper-block-content"}),n]})},i=s.memo(a),d=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"header-wrapper",children:t})},u=s.memo(d),m=e=>{let{countdown:t,players:n,turn:s=1}=e;return(0,o.jsx)("div",{className:"header-players",children:n.map(((e,n)=>(0,o.jsx)(O,{countdown:t,isSelected:s===n+1,player:e,turn:s},e.id)))})},E=s.memo(m);var S=n(749);const h=e=>{let{countdown:t,isSelected:n=!1,player:{name:s,score:l},turn:c=1}=e;return(0,o.jsxs)("div",{className:"header-players-item",children:[(0,o.jsx)(S.A,{score:l,className:"header-players-item-score ".concat(n?"selected":"")}),(0,o.jsx)("div",{className:"header-players-item-name",children:s}),n&&t&&(0,o.jsx)("div",{className:"header-players-item-countdown",children:(0,o.jsx)(N,{stopCounter:t.stop,handleEndCountdown:()=>t.onEndCountdown(c)})})]})},O=s.memo(h);var x=n(543),p=n(103);const v=e=>{let{initialValue:t=x.id,intervalTime:n=x.SO,stopCounter:l=!1,handleEndCountdown:c}=e;const[r,a]=(0,s.useState)(t),[i,d]=(0,s.useState)(!0);return(0,s.useEffect)((()=>d(!l)),[l]),(0,p.$$)((()=>{const e=r-1;e>=0&&a(e),0===e&&(d(!1),c())}),i?n:null),(0,o.jsx)("div",{className:"header-players-countdown ".concat(r<=10?"end-time":""),children:"".concat(r<=9?"0".concat(r):r)})},N=s.memo(v);var y=n(979),R=n(23),f=n.n(R);var I=n(216);const T=e=>{const{withSound:t,toggleSound:n}=(0,p.W0)(),s=(0,I.Zp)();return(0,o.jsxs)(u,{children:[(0,o.jsx)(y.A,{type:"back",onClick:()=>{var e;e=e=>e&&s("/"),f()({title:"Saliendo",text:"\xbfSeguro que quieres salir del juego?",icon:"warning",closeOnClickOutside:!1,closeOnEsc:!1,buttons:["NO","SI"]}).then((t=>e(!!t)))}}),(0,o.jsx)(E,{...e}),(0,o.jsx)(y.A,{type:t?"sound-on":"sound-off",onClick:n})]})},A=s.memo(T),P=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"dices-wrapper",children:t})},C=s.memo(P);var g=n(203),L=n.n(g);const j={WHITE:{dotColor:"black",faceColor:"white"},RED:{dotColor:"white",faceColor:"red"}},w=e=>{let{dice:t={index:0,value:0,selected:!1},dieState:n=x.Al.HIDE,diceTheme:l=x.k3.WHITE,handleDone:c,handleSelectedDice:r}=e;const a=(0,s.useRef)(null),i=n!==x.Al.SPIN||t.selected?0:.5+.15*t.index,d="Dice ".concat(t.index+1)+(n===x.Al.STOPPED?" = ".concat(t.value):""),u="dices-button ".concat(t.selected?"selected":""," ").concat(n===x.Al.HIDE?"hide":""),m=!(n===x.Al.STOPPED)||l===x.k3.RED,{dotColor:E,faceColor:S}=j[l];return(0,s.useEffect)((()=>{const{value:e,selected:n}=t;var s;0===e||n||(null===(s=a.current)||void 0===s||s.rollAll([e]))}),[a,t]),(0,o.jsx)("button",{className:u,onClick:()=>r(t.index),disabled:m,title:d,children:(0,o.jsx)(L(),{dieSize:52,disableIndividual:!0,numDice:1,dotColor:E,faceColor:S,outlineColor:"white",ref:a,rollDone:c,rollTime:i})})},b=s.memo(w);let D=[];const _=e=>{let{values:t=[],diceTheme:n=x.k3.WHITE,dieState:s=x.Al.HIDE,handleDoneDices:l,handleSelectedDice:c}=e;return(0,o.jsx)(C,{children:t.map((e=>(0,o.jsx)(b,{dice:e,diceTheme:n,dieState:s,handleSelectedDice:c,handleDone:()=>{s===x.Al.SPIN&&((e,t,n)=>{if(!D.includes(e)){D.push(e);const s=t.filter((e=>!e.selected)).length;0!==s&&D.length===s&&(D=[],n())}})(e.index+1,t,l)}},"dice-".concat(e.index))))})},Y=s.memo(_),k=e=>{let{disabledPlay:t=!1,disabledRoll:n=!1,showPlay:s=!1,throwing:l=x.oq,handleClick:c}=e;return(0,o.jsxs)("div",{className:"game-buttons",children:[(0,o.jsxs)("button",{className:"button game-buttons-roll",disabled:n,onClick:()=>c(x.GB.ROLL),children:[x.ds.ROLL,(0,o.jsx)("span",{children:l})]}),s&&(0,o.jsx)("button",{className:"button orange",disabled:t,onClick:()=>c(x.GB.PLAY),children:x.ds.PLAY})]})},B=s.memo(k),U=e=>{let{index:t=0,score:n=0,name:s="",handleShowScore:l}=e;return(0,o.jsxs)("div",{className:"score-game-value-item item-".concat(t),children:[(0,o.jsx)(S.A,{className:"score-game-value-value",index:t,intervalTime:10,score:n,handleEndTimer:l}),s&&(0,o.jsx)("div",{className:"score-game-value-name",children:s})]})},G=s.memo(U);var W=n(167),H=n(309),z=n.n(H),Z=n(569);const F=e=>{let{players:t}=e;const n=(0,I.Zp)(),[l,c]=(0,s.useState)(0),[r,a]=(0,s.useState)(!1);(0,s.useEffect)((()=>a(l===t.length)),[l,t]);const i=1===t.length?x.ds.AMAZING_SCORE:t[0].score===t[1].score?x.ds.TIE:t[0].score>t[1].score?x.ds.WON:x.ds.LOSE,d={title:"React Dices",text:"Obtuve este puntaje ".concat(t[0].score," en React Dices!."),url:window.location.origin};return(0,o.jsx)(z(),{children:(0,o.jsx)("div",{className:"score-game",children:(0,o.jsxs)("div",{className:"score-game-wrapper ".concat(r?"show":""),children:[(0,o.jsx)(y.A,{onClick:()=>n("/")}),(0,o.jsx)("div",{className:"score-game-value",children:t.map(((e,n)=>{let{id:s,score:l,name:r}=e;return(0,o.jsx)(G,{index:n+1,name:2===t.length?r:"",score:l,handleShowScore:()=>c((e=>e+1))},s)}))}),(0,o.jsx)("div",{className:"score-game-message",children:i}),(0,o.jsxs)("div",{className:"score-game-buttons",children:[(0,o.jsx)("button",{className:"button orange score-game-buttons-play",onClick:()=>n("/"),children:"Play Again"}),(0,o.jsxs)("div",{className:"score-game-buttons-bottom",children:[(0,o.jsx)("button",{title:"Return to lobby",onClick:()=>n("/"),children:(0,o.jsx)(W.A,{type:"full-house",fill:"white"})}),(0,o.jsx)(Z.A,{data:d,children:(0,o.jsx)("button",{title:"Share",children:(0,o.jsx)(W.A,{type:"share",fill:"white"})})})]})]})]})})})},J=s.memo(F),q=e=>{let{isYatzy:t=!1,value:n="",counter:l=0}=e;const[c,r]=(0,s.useState)(!1);(0,s.useEffect)((()=>{let e;return 0!==l&&(r(!0),e=setTimeout((()=>{r(!1)}),1500)),()=>{e&&clearTimeout(e)}}),[l]);const a=t?"game-messages-wrapper-yatzy":"game-messages-wrapper";return(0,o.jsx)("div",{className:"game-messages ".concat(c?"show":"hide"),children:(0,o.jsx)("div",{className:a,children:n})})},Q=s.memo(q);var M=n(992),V=n.n(M),K=n(925);const $=(e,t)=>t.filter((t=>t.value===e)).length,X=(e,t)=>$(e,t)*e,ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=!1;for(let l=1;l<=6;l++){const o=$(l,t);if(s=n?o===e:o>=e,s)break}return s},te=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=!1;const s=[...new Set(V()(e).map((e=>e.value)).sort(((e,t)=>e-t)))];let l=1;for(;;){if(!(l+(t-1)<=6))break;{let e=0;for(let n=0;n<t;n++)e+=s.includes(n+l)?1:0;if(n=e===t,l++,n)break}}return n},ne=(e,t)=>e.reduce(((e,n)=>e+n.score[t-1].value),0),se=(e,t,n)=>{const s=e.filter((e=>!e.score[t-1].isUsed)).map((e=>({index:e.index,score:e.score[t-1].temporal}))).sort(((e,t)=>n===x.JG.HARD?t.score-e.score:e.score-t.score)),l=s.filter((e=>0!==e.score)),o=s.filter((e=>0===e.score));return(null===l||void 0===l?void 0:l[0])||(null===o||void 0===o?void 0:o[0])},le=()=>{const e={value:0,temporal:0,isSelected:!1,isUsed:!1,isBonusYatzy:!1},t=new Array(6).fill(null).map(((t,n)=>{const s=[e,e];return{index:n,label:x.FP[n],score:s,type:x.rE.UPPER_SECTION,value:n+1}})),n=x.R6.map(((t,n)=>{const s=[e,e];return{index:n,label:x.wv[n],score:s,type:x.rE.LOWER_SECTION,value:t}}));return{UPPER_SECTION:t,LOWER_SECTION:n}},oe=()=>new Array(5).fill(null).map(((e,t)=>({index:t,value:0,selected:!1}))),ce=e=>{const t=V()(e);for(let n=0;n<t.length;n++)t[n].selected||(t[n].value=(0,K.RZ)(1,6));return t},re=(e,t,n,s,l,o)=>{const c=V()(e),r=V()(n),{type:a,index:i}=t,{isBonusEarned:d}=r[s-1],{temporal:u}=c[a][i].score[s-1];let m=!1;if(o&&"YATZY"!==c[a][i].value){const e=c.LOWER_SECTION.findIndex((e=>"YATZY"===e.value));m=c.LOWER_SECTION[e].score[s-1].isUsed}const E=u+(m?x.Qc.YATZY:0);c[a][i].score[s-1].isSelected=!1,c[a][i].score[s-1].isUsed=!0,c[a][i].score[s-1].isBonusYatzy=!1,c[a][i].score[s-1].value=E;let S=ne(c.UPPER_SECTION,s)+(d?x.Sf:0);!d&&S>=x.w&&(r[s-1].isBonusEarned=!0,S+=x.Sf);const h=ne(c.LOWER_SECTION,s);r[s-1].score=S+h,r[s-1].scoreBoard={UPPER_SECTION:S,LOWER_SECTION:h};const O=((e,t)=>{const n=t===x.mR.SOLO?1:2;return Object.keys(x.rE).map((t=>{const s=e[t],l=s.length;let o=0;for(let e=0;e<l;e++){let t=0;for(let l=0;l<n;l++)t+=s[e].score[l].isUsed?1:0;o+=t===n?1:0}return o===l})).every((e=>e))})(c,l);return{copyBoardState:c,copyPlayers:r,isGameOver:O}},ae=(e,t)=>{const n=V()(e),s=(0,K.RZ)(0,4);if(t<x.oq&&s>0){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const t=[];for(;;){const n=(0,K.RZ)(0,4);if(t.includes(n)||t.push(n),t.length===e)break}return t}(s);for(let t=0;t<n.length;t++)n[t].selected=e.includes(t)}return n};var ie=n(284);const de=e=>{let{authUser:t={},difficulty:n=x.JG.EASY,initialTurn:l=2,opponent:c={},room:a="",socket:d,typeGame:u=x.mR.BOT}=e;const m=(0,p.WQ)(),[E,S]=(0,s.useState)(le),[h,O]=(0,s.useState)((()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.mR.SOLO,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=e===x.mR.SOLO?1:2,l={id:"",name:"",score:0,scoreBoard:{UPPER_SECTION:0,LOWER_SECTION:0},isBonusEarned:!1},o=new Array(s).fill(null).map(((e,t)=>({...l,id:"player".concat(t+1),name:"Player ".concat(t+1)})));return e!==x.mR.SOLO&&e!==x.mR.BOT||(o[0].name=x.ds.YOU),e===x.mR.BOT&&(o[1].name=x.ds.BOT),o[0]={...o[0],...t},e===x.mR.ONLINE&&n&&(o[1]={...o[1],...n}),o}(u,t,c))),[v,N]=(0,s.useState)(u!==x.mR.SOLO?l:1),[y,R]=(0,s.useState)((()=>oe())),[f,I]=(0,s.useState)(x.Al.HIDE),[T,P]=(0,s.useState)(x.oq),[C,g]=(0,s.useState)(!1),[L,j]=(0,s.useState)(x.Pr),[w,b]=(0,s.useState)(!1),[D,_]=(0,s.useState)({isYatzy:!1,value:u===x.mR.FRIEND?"Player ".concat(v):"",counter:u===x.mR.FRIEND?1:0}),k=(0,s.useCallback)((e=>{if(e===x.GB.ROLL&&(L.index>=0&&S((e=>((e,t,n)=>{const s=V()(e);return s[t.type][t.index].score[n-1].isSelected=!1,s[t.type][t.index].score[n-1].isBonusYatzy=!1,s})(e,L,v))),R((e=>{const t=ce(e);return u===x.mR.ONLINE&&(null===d||void 0===d||d.emit("ACTIONS",{room:a,diceValues:t,type:x.GB.ROLL})),t})),I(x.Al.SPIN),P((e=>e-1))),e===x.GB.PLAY){const{copyBoardState:e,copyPlayers:t,isGameOver:n}=re(E,L,h,v,u,C);if(S(e),O(t),P(x.oq),I(x.Al.HIDE),R(oe()),j(x.Pr),b(n),(0,ie.fw)("click"),n&&(0,ie.fw)("yatzy"),1===v&&u===x.mR.ONLINE&&(null===d||void 0===d||d.emit("ACTIONS",{room:a,itemSelected:L,isGameOver:n,type:x.GB.PLAY})),!n&&u!==x.mR.SOLO){const e=1===v?2:1;N(e),u===x.mR.FRIEND&&_((t=>({isYatzy:!1,value:"Player ".concat(e),counter:t.counter+1})))}}}),[E,C,L,h,a,d,v,u]);(0,s.useEffect)((()=>{const e=u===x.mR.BOT&&2===v,t=async()=>{await(0,K.cb)(1e3),R((e=>ce(ae(e,T)))),I(x.Al.SPIN),P((e=>e-1))};if(!w&&e&&f===x.Al.HIDE&&t(),e&&f===x.Al.STOPPED){const{rollAgain:e=!1,itemSelected:s}=((e,t,n,s,l)=>{const o=n===x.JG.MEDIUM?1===(0,K.RZ)(0,1)?x.JG.HARD:x.JG.EASY:n,c=se(e.UPPER_SECTION,l,o),r=se(e.LOWER_SECTION,l,o);let a=!1;(c||r)&&(c&&(a=0!==(null===c||void 0===c?void 0:c.score)),!a&&r&&(a=0!==(null===r||void 0===r?void 0:r.score)));const i=t>0&&!a&&!s;let d=V()(x.Pr);if(!i){if(s){const t=e.LOWER_SECTION.findIndex((e=>"YATZY"===e.value));e.LOWER_SECTION[t].score[l-1].isUsed||(d.index=t,d.type=x.rE.LOWER_SECTION)}d.index<0&&(c&&r?d={HARD:c.score>r.score?{index:c.index,type:x.rE.UPPER_SECTION}:{index:r.index,type:x.rE.LOWER_SECTION},EASY:c.score<r.score?{index:c.index,type:x.rE.UPPER_SECTION}:{index:r.index,type:x.rE.LOWER_SECTION}}[o]:(c&&(d.index=c.index,d.type=x.rE.UPPER_SECTION),r&&(d.index=r.index,d.type=x.rE.LOWER_SECTION)))}return{rollAgain:i,itemSelected:d}})(E,T,n,C,v);e?t():j(s)}w||f!==x.Al.SPIN||(0,ie.fw)("dice")}),[E,f,n,w,C,T,v,u]),(0,s.useEffect)((()=>{const e=u===x.mR.BOT&&2===v,t=u===x.mR.ONLINE&&2===v;(e||t)&&L.index>=0&&(e?(async()=>{await(0,K.cb)(2e3),k(x.GB.PLAY)})():k(x.GB.PLAY))}),[k,L,v,u]),(0,s.useEffect)((()=>{d&&(d.on("OPPONENT_LEAVE",(()=>{m({message:{title:"Oponente desconectado \ud83d\ude2d",icon:"error",timer:5e3}})})),d.on(x.GB.ROLL,(e=>{R(e.diceValues),I(x.Al.SPIN),P((e=>e-1))})),d.on(x.GB.PLAY,(e=>{j(e.itemSelected)})))}),[m,d]);const U=u===x.mR.ONLINE?{stop:f===x.Al.SPIN&&!w,onEndCountdown:e=>{1===e&&m({message:{title:"Se acabo el tiempo!",icon:"info",timer:5e3}})}}:void 0,G=1===v||u===x.mR.FRIEND,W=!w&&(u===x.mR.BOT||u===x.mR.ONLINE)&&2===v,H=W||w||f===x.Al.SPIN||T<=0||0===(e=>e.filter((e=>!e.selected)).length)(y),z=W||f===x.Al.SPIN||L.index<0,Z=!w&&f!==x.Al.HIDE&&G,F=x.k3[G?"WHITE":"RED"],q=G&&f===x.Al.STOPPED;return(0,o.jsxs)(i,{blockContent:W,children:[w&&(0,o.jsx)(J,{players:h}),(0,o.jsx)(Q,{...D}),(0,o.jsx)(A,{countdown:U,players:h,turn:v}),(0,o.jsx)(r,{items:E,players:h,thrownDice:q,turn:v,typeGame:u,handleClick:(e,t)=>{const{changeState:n,copyBoardState:s,newItemSelected:l}=function(e,t,n,s){let l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const o=V()(e),c=V()(x.Pr),{isUsed:r}=o[n.type][n.index].score[s-1];let a=!1;if(!r){if(t.index>=0&&(o[t.type][t.index].score[s-1].isSelected=!1,o[t.type][t.index].score[s-1].isBonusYatzy=!1),t.index!==n.index||t.type!==n.type){c.index=n.index,c.type=n.type,o[n.type][n.index].score[s-1].isSelected=!0;const e=0!==o.LOWER_SECTION.filter((e=>"YATZY"===e.value&&e.score[s-1].isUsed)).length;o[n.type][n.index].score[s-1].isBonusYatzy=e&&l}a=!0}return{changeState:a,copyBoardState:o,newItemSelected:c}}(E,L,e,t,C);n&&((0,ie.fw)("click"),S(s),j(l))}}),(0,o.jsx)(Y,{dieState:f,values:y,diceTheme:F,handleDoneDices:()=>{const{copyBoardState:e,isYatzy:t}=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const s=JSON.parse(JSON.stringify(e)),l=(e=>e.reduce(((e,t)=>e+t.value),0))(t),o=ee(3,t),c=ee(4,t),r=ee(3,t,!0)&&ee(2,t,!0),a=te(t,4),i=te(t,5),d=ee(5,t),u={THREE_KIND:o?l:0,FOUR_KIND:c?l:0,FULL_HOUSE:r?x.Qc.FULLHOUSE:0,SMALL_STRAIGHT:a?x.Qc.SMALL_STRAIGHT:0,LARGE_STRAIGHT:i?x.Qc.LARGE_STRAIGHT:0,YATZY:d?x.Qc.YATZY:0,CHANCE:l};for(let S=0;S<s.UPPER_SECTION.length;S++){var m;if(null===(m=s.UPPER_SECTION[S].score[n-1])||void 0===m||!m.isUsed){const{value:e}=s.UPPER_SECTION[S],l=X(e,t);s.UPPER_SECTION[S].score[n-1].temporal=l}}for(let S=0;S<s.LOWER_SECTION.length;S++){var E;const{value:e}=s.LOWER_SECTION[S];null!==(E=s.LOWER_SECTION[S].score[n-1])&&void 0!==E&&E.isUsed||(s.LOWER_SECTION[S].score[n-1].temporal=u[e])}return{isYatzy:d,copyBoardState:s}}(E,y,v);S(e),g(t),I(x.Al.STOPPED),j(x.Pr),t&&(_((e=>({isYatzy:!0,value:"Yatzy",counter:e.counter+1}))),(0,ie.fw)("yatzy"))},handleSelectedDice:e=>{(0,ie.fw)("click"),R(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=V()(e);return n[t].selected=!n[t].selected,n}(y,e))}}),(0,o.jsx)(B,{disabledPlay:z,disabledRoll:H,showPlay:Z,throwing:T,handleClick:k})]})},ue=s.memo(de)}}]);
//# sourceMappingURL=390.ad36fd04.chunk.js.map