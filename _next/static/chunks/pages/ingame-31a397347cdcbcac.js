(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{9159:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ingame",function(){return t(8707)}])},6046:function(e,n,t){"use strict";t.d(n,{u:function(){return i}});var s=t(5893),a=t(5523),o=t.n(a),c=t(7294);function i(e){const[n,t]=(0,c.useState)(!1),[a,i]=(0,c.useState)(!1),r=(0,c.useRef)(null);(0,c.useEffect)((()=>{}),[]);return(0,s.jsxs)("div",{className:o().all,children:[(0,s.jsx)("audio",{controls:!0,loop:!0,autoPlay:!0,className:o().audioTheme,ref:r,src:e.themeLink}),(0,s.jsx)("p",{className:o().pLegend,children:"Musique : "}),(0,s.jsx)("button",{onClick:()=>{t(!n),i(!a)},children:(0,s.jsx)("p",{className:o().pButton,children:n?"OFF":"ON"})})]})}},2612:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});class s{static async getRooms(){const e=await fetch("/backend/rooms",{method:"GET"}),n=await e.json();return"success"===n.status?n.data:null}static async getGameDatas(e){const n=await fetch("/backend/rooms/unique/".concat(e),{method:"GET"}),t=await n.json();return"success"===t.status?t.data[0]:null}static async createRoom(e,n){const t=Math.random().toString(36).substring(2,10)+n,s=await fetch("/backend/rooms/new/".concat(t,"/").concat(e,"/").concat(n),{method:"POST"});return"success"===(await s.json()).status?t:null}static async joinRoom(e,n){const t=await fetch("/backend/rooms/join/".concat(e,"/").concat(n),{method:"POST"});return"success"===(await t.json()).status}static async checkReady(e){const n=await fetch("/backend/rooms/ready/".concat(e),{method:"GET"}),t=await n.json();return"success"===t.status&&t.data[0]}static async SaveCoords(e,n,t){const s=await fetch("/backend/rooms/coords",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,isPlayerCreator:n,shipsCoord:t})});return"success"===(await s.json()).status}static async Shoot(e,n,t,s){const a=await fetch("/backend/rooms/shoot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,isPlayerCreator:n,shootCoord:t,player1_turn:s})});return"success"===(await a.json()).status}}},987:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var s=t(1354),a=t(1876).Buffer;class o{static async login(e,n){const t=(0,s.SHA256)(n),o="".concat(e,":").concat(t),c={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},i=await fetch("/backend/users/signin",{headers:c}),r=await i.json();return"success"===r.status?r.data:null}static async register(e,n){const t=(0,s.SHA256)(n),o="".concat(e,":").concat(t),c={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},i=await fetch("/backend/users/signup",{headers:c}),r=await i.json();return"success"===r.status?r.data:null}static StoreJWT(e){document.cookie="access_token=".concat(e,"; path=/;")}static async verifyAccessToken(e){const n=new Headers;n.append("Authorization","Bearer ".concat(e));const t=await fetch("/backend/verifyJWT",{headers:n});return await t.json()}static parseJwt(){const e=document.cookie;if(null!==e||void 0!==e){const n=e.split(";").find((e=>e.trim().startsWith("access_token="))).split("=")[1].split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(n))}return null}static async checkLoginStatus(e){if(null!==e){const n=await o.verifyAccessToken(e);if(n.res)return n.res}return null}static async getUserNameById(e){if(null!==e||void 0!==e){const n=await fetch("/backend/users/".concat(e),{method:"GET"}),t=await n.json();return"success"===t.status?t.data[0].name:null}return null}}},8707:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var s=t(5893),a=t(9008),o=t.n(a),c=t(8041),i=t.n(c),r=t(7294),l=t(987),u=t(461),d=t(1163),p=t(861);function m(e){let{roomDatas:n}=e;const[t,a]=(0,r.useState)([]),[o,c]=(0,r.useState)([]),u=[];if((0,r.useEffect)((()=>{const e=setInterval((()=>{if(null!==n&&void 0!==n){const e=l.E.parseJwt().id,t=n.player1_id===e?n.player1_board:n.player2_board,s=t?t.split(" "):[];a(s);const o=e===n.player1_id?n.player2_shots:n.player1_shots,i=o?o.split(" "):[];c(i)}}),500);return()=>clearInterval(e)}),[n]),n&&void 0!==n){for(let e=1;e<=10;e++){const n=[];for(let a=1;a<=10;a++){const c="clickZone".concat(e,"-").concat(a);n.push((0,s.jsx)("div",{className:i().clickZone,id:c,children:t.includes("".concat(e,"-").concat(a))&&!o.includes("".concat(e,"-").concat(a))?(0,s.jsx)("div",{className:i().ship,children:"\xa0\xa0"}):t.includes("".concat(e,"-").concat(a))&&o.includes("".concat(e,"-").concat(a))?(0,s.jsx)("div",{className:i().shipTouched,children:(0,s.jsx)("video",{autoPlay:!0,src:"/icons/boom.mp4"})}):!t.includes("".concat(e,"-").concat(a))&&o.includes("".concat(e,"-").concat(a))?(0,s.jsxs)("div",{className:i().shipMissed,children:[(0,s.jsx)("img",{src:"/icons/cross2.png"}),(0,s.jsx)("audio",{autoPlay:!0,src:"/sounds/missedShot.mp3"})]}):null},c))}u.push((0,s.jsx)("div",{className:i().row,children:n},e))}return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:i().column2,children:(0,s.jsx)("div",{className:i().grid,children:u})})})}return(0,s.jsx)(p.default,{})}var _=t(2612);function h(e){let{roomDatas:n}=e;const[t,a]=(0,r.useState)([]),[o,c]=(0,r.useState)([]),[u,d]=(0,r.useState)(!1);if((0,r.useEffect)((()=>{if(n&&void 0!==n.player1_board&&void 0!==n.player2_board){let e=null;d(n.player1_id==l.E.parseJwt().id),e=u?n.player2_board?n.player2_board.split(" "):[]:n.player1_board?n.player1_board.split(" "):[],c(e)}}),[n]),void 0===n)return(0,s.jsx)(p.default,{});const m=e=>{if((1==n.player1_turn&&u||0==n.player1_turn&&!u)&&(e=e.replace("clickZone",""),!t.includes(e))){let t=n.id,s=u;o.includes(e)||(n.player1_turn=n.player1_turn?0:1),_.p.Shoot(t,s,e,n.player1_turn),a((n=>[...n,e]))}console.log(t)},h=[];for(let r=1;r<=10;r++){const e=[];for(let a=1;a<=10;a++){const c="clickZone".concat(r,"-").concat(a),l="".concat(r,"-").concat(a);e.push((0,s.jsxs)("div",{className:"".concat(n.player1_turn&&!u||!n.player1_turn&&u?i().OpponentTurn:t.includes(l)&&o.includes(l)?i().OpponentTouchedClickZone:t.includes(l)?i().OpponentDisabledClickZone:i().OpponentClickZone),id:c,onClick:t.includes(c)?void 0:()=>m(c),children:[" ",t.includes(l)&&o.includes(l)?(0,s.jsx)("div",{className:i().shipTouched,children:(0,s.jsx)("video",{autoPlay:!0,src:"/icons/enemyMapBoom.mp4"})}):t.includes(l)?(0,s.jsxs)("div",{className:i().shipMissed,children:[(0,s.jsx)("img",{src:"/icons/cross2.png"}),(0,s.jsx)("audio",{autoPlay:!0,src:"/sounds/missedShot.mp3"})]}):null]},c))}h.push((0,s.jsx)("div",{className:i().row,children:e},r))}return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:i().column4,children:(0,s.jsx)("div",{className:i().grid,children:h})})})}var f=t(6046);function y(){const e=(0,d.useRouter)(),[n]=(0,u.Z)(["access_token"]),{roomId:t}=e.query,[a,c]=(0,r.useState)([]),[y,g]=(0,r.useState)(!1),j=()=>{const[e,n]=(0,r.useState)(a.player1_turn&&y||!a.player1_turn&&!y?"Votre tour":"Tour de l'adversaire");return(0,s.jsx)("div",{className:"Votre tour"===e?i().yourTurnInformation:i().opponentTurnInformation,children:e})};return(0,r.useEffect)((()=>{const s=setInterval((async()=>{if(void 0!==t){let n=await _.p.getGameDatas(t);null!==n?(null!=n.player1_id&&null!=n.player2_id||e.push("/404"),c(n),(a||void 0!==a)&&g(a.player1_id==l.E.parseJwt().id)):e.push("/404")}(function(){if(a&&void 0!==a.player1_board&&void 0!==a.player2_board&&void 0!==a.player1_shots&&void 0!==a.player2_shots){let e=a.player1_board.split(" "),n=a.player2_board.split(" "),t=a.player1_shots.split(" "),s=a.player2_shots.split(" "),o=0,c=0;for(let a=0;a<t.length;a++)n.includes(t[a])&&c++;for(let a=0;a<s.length;a++)e.includes(s[a])&&o++;if(o===e.length||c===n.length)return!0}return!1})()&&(alert("Partie termin\xe9e !"),e.push("/findgame"))}),500);return async function(){1!==await l.E.checkLoginStatus(n.access_token)&&e.push("/")}(),()=>clearInterval(s)}),[a]),void 0===t||""===t?(setTimeout((()=>{void 0!==t&&""!==t||e.push("/404")}),1e4),(0,s.jsx)(p.default,{})):(0,s.jsxs)("div",{className:i().all,children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"BATTLESHIP - BootyByters"}),(0,s.jsx)("link",{rel:"icon",href:"/steeringwheel2.ico"})]}),(0,s.jsxs)("main",{className:i().main,children:[(0,s.jsx)(f.u,{themeLink:"/sounds/ingameTheme.mp3"}),(0,s.jsx)("div",{className:i().titlebox,children:(0,s.jsxs)("p",{className:i().p1,children:['Partie \xa0"',a.name,'"']})}),(0,s.jsx)(j,{}),(0,s.jsxs)("div",{className:i().globalGrid,children:[(0,s.jsx)("div",{className:i().myGrid,children:(0,s.jsx)(m,{roomDatas:a})}),(0,s.jsx)("div",{className:i().opponentGrid,children:(0,s.jsx)(h,{roomDatas:a})}),(0,s.jsx)("div",{className:i().myMapTitle,children:(0,s.jsx)("p",{children:"Votre flotte"})}),(0,s.jsx)("div",{className:i().opponentMapTitle,children:(0,s.jsx)("p",{children:"Flotte ennemie"})})]})]})]})}},861:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t(5893),a=t(4913),o=t.n(a);function c(){return(0,s.jsxs)("div",{className:o().loading,children:[(0,s.jsx)("h1",{children:"Connexion..."}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"En attente de connexion au serveur"})]})}},8041:function(e){e.exports={all:"Ingame_all__CFOq0",main:"Ingame_main__1FXxH",titlebox:"Ingame_titlebox__rXlmM",p1:"Ingame_p1__0ch4N",globalGrid:"Ingame_globalGrid__bXHYN",myGrid:"Ingame_myGrid__80Mj5",opponentGrid:"Ingame_opponentGrid__OJaFs",grid:"Ingame_grid__QwoYW",column2:"Ingame_column2__Dp_C5",column4:"Ingame_column4__XKJSc",myMapTitle:"Ingame_myMapTitle__j9TwQ",opponentMapTitle:"Ingame_opponentMapTitle__WcTEn",clickZone:"Ingame_clickZone__b5Hx_",OpponentClickZone:"Ingame_OpponentClickZone__UhGCy",ship:"Ingame_ship__a2gRg",shipTouched:"Ingame_shipTouched__pUmuI",shipMissed:"Ingame_shipMissed__BS4Vj",missedShot:"Ingame_missedShot__M5Exz",OpponentDisabledClickZone:"Ingame_OpponentDisabledClickZone__eybYK",OpponentTouchedClickZone:"Ingame_OpponentTouchedClickZone__0sCQr",OpponentTurn:"Ingame_OpponentTurn__vbR4D",yourTurnInformation:"Ingame_yourTurnInformation__2ARti",opponentTurnInformation:"Ingame_opponentTurnInformation__fHZVK"}},4913:function(e){e.exports={loading:"Loading_loading__w3J2E"}},5523:function(e){e.exports={all:"MusicButton_all__CPL9Y",audioTheme:"MusicButton_audioTheme__l7Brl",pLegend:"MusicButton_pLegend__Vuyic",pButton:"MusicButton_pButton__zDS7w"}},2480:function(){}},function(e){e.O(0,[570,774,888,179],(function(){return n=9159,e(e.s=n);var n}));var n=e.O();_N_E=n}]);