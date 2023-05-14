(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{9159:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ingame",function(){return n(8707)}])},6046:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var s=n(5893),a=n(5523),o=n.n(a),i=n(7294);function c(e){let[t,n]=(0,i.useState)(!1),[a,c]=(0,i.useState)(!1),r=(0,i.useRef)(null);(0,i.useEffect)(()=>{},[]);let l=()=>{n(!t),c(!a)};return(0,s.jsxs)("div",{className:o().all,children:[(0,s.jsx)("audio",{controls:!0,loop:!0,autoPlay:!0,className:o().audioTheme,ref:r,src:e.themeLink}),(0,s.jsx)("p",{className:o().pLegend,children:"Musique : "}),(0,s.jsx)("button",{onClick:l,children:(0,s.jsx)("p",{className:o().pButton,children:t?"OFF":"ON"})})]})}},2612:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});class s{static async getRooms(){let e=await fetch("/backend/rooms",{method:"GET"}),t=await e.json();return"success"===t.status?t.data:null}static async getGameDatas(e){let t=await fetch("/backend/rooms/unique/".concat(e),{method:"GET"}),n=await t.json();return"success"===n.status?n.data[0]:null}static async createRoom(e,t){let n=Math.random().toString(36).substring(2,10),s=n+t,a=await fetch("/backend/rooms/new/".concat(s,"/").concat(e,"/").concat(t),{method:"POST"}),o=await a.json();return"success"===o.status?s:null}static async joinRoom(e,t){let n=await fetch("/backend/rooms/join/".concat(e,"/").concat(t),{method:"POST"}),s=await n.json();return"success"===s.status}static async checkReady(e){let t=await fetch("/backend/rooms/ready/".concat(e),{method:"GET"}),n=await t.json();return"success"===n.status&&n.data[0]}static async SaveCoords(e,t,n){let s=await fetch("/backend/rooms/coords",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,isPlayerCreator:t,shipsCoord:n})}),a=await s.json();return"success"===a.status}static async Shoot(e,t,n,s){let a=await fetch("/backend/rooms/shoot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,isPlayerCreator:t,shootCoord:n,player1_turn:s})}),o=await a.json();return"success"===o.status}}},987:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var s=n(1354),a=n(1876).Buffer;class o{static async login(e,t){let n=(0,s.SHA256)(t),o="".concat(e,":").concat(n),i={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},c=await fetch("/backend/users/signin",{headers:i}),r=await c.json();return"success"===r.status?r.data:null}static async register(e,t){let n=(0,s.SHA256)(t),o="".concat(e,":").concat(n),i={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},c=await fetch("/backend/users/signup",{headers:i}),r=await c.json();return"success"===r.status?r.data:null}static StoreJWT(e){document.cookie="access_token=".concat(e,"; path=/;")}static async verifyAccessToken(e){let t=new Headers;t.append("Authorization","Bearer ".concat(e));let n=await fetch("/backend/verifyJWT",{headers:t}),s=await n.json();return s}static parseJwt(){let e=document.cookie;if(null!==e||void 0!==e){let t=e.split(";").find(e=>e.trim().startsWith("access_token=")).split("=")[1],n=t.split(".")[1],s=n.replace(/-/g,"+").replace(/_/g,"/"),a=JSON.parse(atob(s));return a}return null}static async checkLoginStatus(e){if(null!==e){let t=await o.verifyAccessToken(e);if(t.res)return t.res}return null}static async getUserNameById(e){if(null!==e||void 0!==e){let t=await fetch("/backend/users/".concat(e),{method:"GET"}),n=await t.json();if("success"===n.status)return n.data[0].name}return null}}},8707:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var s=n(5893),a=n(9008),o=n.n(a),i=n(8041),c=n.n(i),r=n(7294),l=n(987),u=n(461),d=n(1163),p=n(861);function _(e){let{roomDatas:t}=e,[n,a]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),u=[];if((0,r.useEffect)(()=>{let e=setInterval(()=>{if(null!=t){let e=l.E.parseJwt().id,n=t.player1_id===e?t.player1_board:t.player2_board,s=n?n.split(" "):[];a(s);let o=e===t.player1_id?t.player2_shots:t.player1_shots,c=o?o.split(" "):[];i(c)}},500);return()=>clearInterval(e)},[t]),!t||void 0===t)return(0,s.jsx)(p.default,{});for(let e=1;e<=10;e++){let t=[];for(let a=1;a<=10;a++){let i="clickZone".concat(e,"-").concat(a);t.push((0,s.jsx)("div",{className:c().clickZone,id:i,children:n.includes("".concat(e,"-").concat(a))&&!o.includes("".concat(e,"-").concat(a))?(0,s.jsx)("div",{className:c().ship,children:"\xa0\xa0"}):n.includes("".concat(e,"-").concat(a))&&o.includes("".concat(e,"-").concat(a))?(0,s.jsx)("div",{className:c().shipTouched,children:(0,s.jsx)("video",{autoPlay:!0,src:"/icons/boom.mp4"})}):!n.includes("".concat(e,"-").concat(a))&&o.includes("".concat(e,"-").concat(a))?(0,s.jsxs)("div",{className:c().shipMissed,children:[(0,s.jsx)("img",{src:"/icons/cross2.png"}),(0,s.jsx)("audio",{autoPlay:!0,src:"/sounds/missedShot.mp3"})]}):null},i))}u.push((0,s.jsx)("div",{className:c().row,children:t},e))}return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:c().column2,children:(0,s.jsx)("div",{className:c().grid,children:u})})})}var m=n(2612);function h(e){let{roomDatas:t}=e,[n,a]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),[u,d]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{t&&void 0!==t.player1_board&&void 0!==t.player2_board&&(d(t.player1_id==l.E.parseJwt().id),i(u?t.player2_board?t.player2_board.split(" "):[]:t.player1_board?t.player1_board.split(" "):[]))},[t]),void 0===t)return(0,s.jsx)(p.default,{});let _=e=>{if((1==t.player1_turn&&u||0==t.player1_turn&&!u)&&(e=e.replace("clickZone",""),!n.includes(e))){let n=t.id;o.includes(e)||(t.player1_turn=t.player1_turn?0:1),m.p.Shoot(n,u,e,t.player1_turn),a(t=>[...t,e])}console.log(n)},h=[];for(let e=1;e<=10;e++){let a=[];for(let i=1;i<=10;i++){let r="clickZone".concat(e,"-").concat(i),l="".concat(e,"-").concat(i);a.push((0,s.jsxs)("div",{className:"".concat(t.player1_turn&&!u||!t.player1_turn&&u?c().OpponentTurn:n.includes(l)&&o.includes(l)?c().OpponentTouchedClickZone:n.includes(l)?c().OpponentDisabledClickZone:c().OpponentClickZone),id:r,onClick:n.includes(r)?void 0:()=>_(r),children:[" ",n.includes(l)&&o.includes(l)?(0,s.jsx)("div",{className:c().shipTouched,children:(0,s.jsx)("video",{autoPlay:!0,src:"/icons/enemyMapBoom.mp4"})}):n.includes(l)?(0,s.jsxs)("div",{className:c().shipMissed,children:[(0,s.jsx)("img",{src:"/icons/cross2.png"}),(0,s.jsx)("audio",{autoPlay:!0,src:"/sounds/missedShot.mp3"})]}):null]},r))}h.push((0,s.jsx)("div",{className:c().row,children:a},e))}return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:c().column4,children:(0,s.jsx)("div",{className:c().grid,children:h})})})}var f=n(6046);function y(){let e=(0,d.useRouter)(),[t]=(0,u.Z)(["access_token"]),{roomId:n}=e.query,[a,i]=(0,r.useState)([]),[y,g]=(0,r.useState)(!1),j=()=>{let[e,t]=(0,r.useState)(a.player1_turn&&y||!a.player1_turn&&!y?"Votre tour":"Tour de l'adversaire");return(0,s.jsx)("div",{className:"Votre tour"===e?c().yourTurnInformation:c().opponentTurnInformation,children:e})};return((0,r.useEffect)(()=>{async function s(){1!==await l.E.checkLoginStatus(t.access_token)&&e.push("/")}let o=setInterval(async()=>{if(void 0!==n){let t=await m.p.getGameDatas(n);null!==t?((null==t.player1_id||null==t.player2_id)&&e.push("/404"),i(t),(a||void 0!==a)&&g(a.player1_id==l.E.parseJwt().id)):e.push("/404")}(function(){if(a&&void 0!==a.player1_board&&void 0!==a.player2_board&&void 0!==a.player1_shots&&void 0!==a.player2_shots){let e=a.player1_board.split(" "),t=a.player2_board.split(" "),n=a.player1_shots.split(" "),s=a.player2_shots.split(" "),o=0,i=0;for(let e=0;e<n.length;e++)t.includes(n[e])&&i++;for(let t=0;t<s.length;t++)e.includes(s[t])&&o++;if(o===e.length||i===t.length)return!0}return!1})()&&(alert("Partie termin\xe9e !"),e.push("/findgame"))},500);return s(),()=>clearInterval(o)},[a]),void 0===n||""===n)?(setTimeout(()=>{(void 0===n||""===n)&&e.push("/404")},1e4),(0,s.jsx)(p.default,{})):(0,s.jsxs)("div",{className:c().all,children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"BATTLESHIP - BootyByters"}),(0,s.jsx)("link",{rel:"icon",href:"/steeringwheel2.ico"})]}),(0,s.jsxs)("main",{className:c().main,children:[(0,s.jsx)(f.u,{themeLink:"/sounds/ingameTheme.mp3"}),(0,s.jsx)("div",{className:c().titlebox,children:(0,s.jsxs)("p",{className:c().p1,children:['Partie \xa0"',a.name,'"']})}),(0,s.jsx)(j,{}),(0,s.jsxs)("div",{className:c().globalGrid,children:[(0,s.jsx)("div",{className:c().myGrid,children:(0,s.jsx)(_,{roomDatas:a})}),(0,s.jsx)("div",{className:c().opponentGrid,children:(0,s.jsx)(h,{roomDatas:a})}),(0,s.jsx)("div",{className:c().myMapTitle,children:(0,s.jsx)("p",{children:"Votre flotte"})}),(0,s.jsx)("div",{className:c().opponentMapTitle,children:(0,s.jsx)("p",{children:"Flotte ennemie"})})]})]})]})}},861:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(5893),a=n(4913),o=n.n(a);function i(){return(0,s.jsxs)("div",{className:o().loading,children:[(0,s.jsx)("h1",{children:"Connexion..."}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"En attente de connexion au serveur"})]})}},8041:function(e){e.exports={all:"Ingame_all__CFOq0",main:"Ingame_main__1FXxH",titlebox:"Ingame_titlebox__rXlmM",p1:"Ingame_p1__0ch4N",globalGrid:"Ingame_globalGrid__bXHYN",myGrid:"Ingame_myGrid__80Mj5",opponentGrid:"Ingame_opponentGrid__OJaFs",grid:"Ingame_grid__QwoYW",column2:"Ingame_column2__Dp_C5",column4:"Ingame_column4__XKJSc",myMapTitle:"Ingame_myMapTitle__j9TwQ",opponentMapTitle:"Ingame_opponentMapTitle__WcTEn",clickZone:"Ingame_clickZone__b5Hx_",OpponentClickZone:"Ingame_OpponentClickZone__UhGCy",ship:"Ingame_ship__a2gRg",shipTouched:"Ingame_shipTouched__pUmuI",shipMissed:"Ingame_shipMissed__BS4Vj",missedShot:"Ingame_missedShot__M5Exz",OpponentDisabledClickZone:"Ingame_OpponentDisabledClickZone__eybYK",OpponentTouchedClickZone:"Ingame_OpponentTouchedClickZone__0sCQr",OpponentTurn:"Ingame_OpponentTurn__vbR4D",yourTurnInformation:"Ingame_yourTurnInformation__2ARti",opponentTurnInformation:"Ingame_opponentTurnInformation__fHZVK"}},4913:function(e){e.exports={loading:"Loading_loading__w3J2E"}},5523:function(e){e.exports={all:"MusicButton_all__CPL9Y",audioTheme:"MusicButton_audioTheme__l7Brl",pLegend:"MusicButton_pLegend__Vuyic",pButton:"MusicButton_pButton__zDS7w"}},2480:function(){}},function(e){e.O(0,[570,774,888,179],function(){return e(e.s=9159)}),_N_E=e.O()}]);