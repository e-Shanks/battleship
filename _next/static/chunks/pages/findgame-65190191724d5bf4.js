(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{2238:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findgame",function(){return n(7319)}])},2880:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var s=n(5893),a=n(5756),o=n.n(a),c=n(1163),i=n(461);function r(){const t=(0,c.useRouter)(),[,,e]=(0,i.Z)(["access_token"]);return(0,s.jsx)("div",{className:o().all,children:(0,s.jsx)("button",{onClick:function(){e("access_token"),t.push("/")},children:(0,s.jsx)("img",{className:o().logo,src:"icons/houselogo.png"})})})}},6046:function(t,e,n){"use strict";n.d(e,{u:function(){return i}});var s=n(5893),a=n(5523),o=n.n(a),c=n(7294);function i(t){const[e,n]=(0,c.useState)(!1),[a,i]=(0,c.useState)(!1),r=(0,c.useRef)(null);(0,c.useEffect)((()=>{}),[]);return(0,s.jsxs)("div",{className:o().all,children:[(0,s.jsx)("audio",{controls:!0,loop:!0,autoPlay:!0,className:o().audioTheme,ref:r,src:t.themeLink}),(0,s.jsx)("p",{className:o().pLegend,children:"Musique : "}),(0,s.jsx)("button",{onClick:()=>{n(!e),i(!a)},children:(0,s.jsx)("p",{className:o().pButton,children:e?"OFF":"ON"})})]})}},2612:function(t,e,n){"use strict";n.d(e,{p:function(){return s}});class s{static async getRooms(){const t=await fetch("/backend/rooms",{method:"GET"}),e=await t.json();return"success"===e.status?e.data:null}static async getGameDatas(t){const e=await fetch("/backend/rooms/unique/".concat(t),{method:"GET"}),n=await e.json();return"success"===n.status?n.data[0]:null}static async createRoom(t,e){const n=Math.random().toString(36).substring(2,10)+e,s=await fetch("/backend/rooms/new/".concat(n,"/").concat(t,"/").concat(e),{method:"POST"});return"success"===(await s.json()).status?n:null}static async joinRoom(t,e){const n=await fetch("/backend/rooms/join/".concat(t,"/").concat(e),{method:"POST"});return"success"===(await n.json()).status}static async checkReady(t){const e=await fetch("/backend/rooms/ready/".concat(t),{method:"GET"}),n=await e.json();return"success"===n.status&&n.data[0]}static async SaveCoords(t,e,n){const s=await fetch("/backend/rooms/coords",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,isPlayerCreator:e,shipsCoord:n})});return"success"===(await s.json()).status}static async Shoot(t,e,n,s){const a=await fetch("/backend/rooms/shoot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,isPlayerCreator:e,shootCoord:n,player1_turn:s})});return"success"===(await a.json()).status}}},987:function(t,e,n){"use strict";n.d(e,{E:function(){return o}});var s=n(1354),a=n(1876).Buffer;class o{static async login(t,e){const n=(0,s.SHA256)(e),o="".concat(t,":").concat(n),c={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},i=await fetch("/backend/users/signin",{headers:c}),r=await i.json();return"success"===r.status?r.data:null}static async register(t,e){const n=(0,s.SHA256)(e),o="".concat(t,":").concat(n),c={method:"GET",Authorization:"Basic ".concat(a.from(o).toString("base64"))},i=await fetch("/backend/users/signup",{headers:c}),r=await i.json();return"success"===r.status?r.data:null}static StoreJWT(t){document.cookie="access_token=".concat(t,"; path=/;")}static async verifyAccessToken(t){const e=new Headers;e.append("Authorization","Bearer ".concat(t));const n=await fetch("/backend/verifyJWT",{headers:e});return await n.json()}static parseJwt(){const t=document.cookie;if(null!==t||void 0!==t){const e=t.split(";").find((t=>t.trim().startsWith("access_token="))).split("=")[1].split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(e))}return null}static async checkLoginStatus(t){if(null!==t){const e=await o.verifyAccessToken(t);if(e.res)return e.res}return null}static async getUserNameById(t){if(null!==t||void 0!==t){const e=await fetch("/backend/users/".concat(t),{method:"GET"}),n=await e.json();return"success"===n.status?n.data[0].name:null}return null}}},7319:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var s=n(5893),a=n(9008),o=n.n(a),c=n(2612),i=n(7294),r=n(1734),u=n.n(r),l=n(461),d=n(987),m=n(1163);function p(t){let{GameRoom:e}=t;const n=(0,m.useRouter)(),[a]=(0,l.Z)(["access_token"]),[o,r]=(0,i.useState)(""),p=i.useRef(null);function h(){p.current&&(p.current.volume=.5,p.current.play())}const f=i.useRef(null);function _(){f.current&&(f.current.volume=.5,f.current.play())}(0,i.useEffect)((()=>{!async function(){1!==await d.E.checkLoginStatus(a.access_token)&&n.push("/")}()}),[]);async function j(t){let e="";void 0!==a.access_token&&(e=await d.E.parseJwt().id),await c.p.joinRoom(t,e)&&n.push("/preparation?roomId=".concat(t))}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("audio",{ref:p,children:(0,s.jsx)("source",{src:"/sounds/hoverSound.mp3",type:"audio/mpeg"})}),(0,s.jsx)("audio",{ref:f,children:(0,s.jsx)("source",{src:"/sounds/clickSound.mp3",type:"audio/mpeg"})}),(0,s.jsx)("div",{className:u().roomsContainer,children:(0,s.jsx)("ul",{className:u().roomsList,children:0===e.length?(0,s.jsx)("p",{children:"Aucune partie rejoignable"}):e.filter((t=>null===t.player2_id&&t.player1_id!==d.E.parseJwt().id)).map((t=>(0,s.jsxs)("li",{onMouseEnter:h,onDoubleClick:()=>j(t.id),children:[(0,s.jsx)("span",{children:t.name}),(0,s.jsx)("button",{onClick:()=>{_(),j(t.id)},children:"Rejoindre"})]},t.id)))})}),(0,s.jsx)("div",{className:u().inputTitle,children:"Cr\xe9er une partie"}),(0,s.jsxs)("div",{className:u().inputContainer,children:[(0,s.jsx)("input",{type:"text",placeholder:"Nom de la partie",value:o,onChange:t=>r(t.target.value),onKeyPress:t=>{var e;"Enter"===t.key&&(null===(e=document.getElementById("createButton"))||void 0===e||e.click())}}),(0,s.jsx)("button",{id:"createButton",onClick:()=>{_(),(async()=>{let t="";t=await d.E.parseJwt().id;let e=await c.p.createRoom(o,t);null!==e&&n.push("/preparation?roomId=".concat(e))})()},children:"Cr\xe9er"})]})]})}var h=n(2880),f=n(6046);function _(){const t=(0,m.useRouter)(),[e]=(0,l.Z)(["access_token"]),[n,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const n=setInterval((async()=>{let t=await c.p.getRooms();void 0!==e.access_token&&await d.E.parseJwt().id,null!==t&&(t=t.filter((t=>null===t.player2_id&&""!==t.player1_id)),a(t))}),1e3);return async function(){1!==await d.E.checkLoginStatus(e.access_token)&&t.push("/")}(),()=>clearInterval(n)}),[n]),(0,s.jsxs)("div",{className:u().all,children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"BATTLESHIP - BootyByters"}),(0,s.jsx)("link",{rel:"icon",href:"/steeringwheel2.ico"})]}),(0,s.jsx)(h.j,{}),(0,s.jsx)(f.u,{themeLink:"/sounds/codghostmenu.mp3"}),(0,s.jsx)("div",{className:u().titlebox,children:(0,s.jsx)("p",{className:u().p1,children:"LISTE \xa0DES \xa0PARTIES"})}),(0,s.jsx)(p,{GameRoom:n})]})}},1734:function(t){t.exports={all:"GameRooms_all__5LVcV",titlebox:"GameRooms_titlebox__zi8tF",p1:"GameRooms_p1__eVk5o",roomsList:"GameRooms_roomsList__gQi5I",inputTitle:"GameRooms_inputTitle__IcCXJ",inputContainer:"GameRooms_inputContainer__exO_a"}},5756:function(t){t.exports={all:"MenuButton_all__paLiN",logo:"MenuButton_logo__3q_Xe"}},5523:function(t){t.exports={all:"MusicButton_all__CPL9Y",audioTheme:"MusicButton_audioTheme__l7Brl",pLegend:"MusicButton_pLegend__Vuyic",pButton:"MusicButton_pButton__zDS7w"}},2480:function(){}},function(t){t.O(0,[570,774,888,179],(function(){return e=2238,t(t.s=e);var e}));var e=t.O();_N_E=e}]);