(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{168:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),o=t.n(i),c=t(32),a=t.n(c),s=t(6),d=t(15),u=t(7),l=t(2),b=t(16),m=t(65),f=t(66),h=t(8),p=t(4);var j=function(n,e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,r.type)?e[r.type](t,r):t}},g=t(21);function x(n){return Object(g.a)(n).sort((function(n,e){return Number(n.orderPosition)-Number(e.orderPosition)}))}var v,w="[Game]",O="".concat(w," Reset Game State"),k="".concat(w," Initialize Game Request"),y="".concat(w," Initialize Game Success"),P="".concat(w," Initialize Game Failure"),C="".concat(w," Set Answer Id"),A="".concat(w," Set Active Question Id"),z="".concat(w," Set Show Correct Answer"),I="".concat(w," Set Score"),D="".concat(w," Set Should Block Navigation"),L={isLoading:!0,questions:{byId:{},allIds:{}},answers:{byId:{},allIds:{}},activeQuestionId:void 0,selectedAnswerId:void 0,isQuestionResultVisible:!1,score:void 0,shouldBlockNavigation:!1};var N,B=(v={},Object(h.a)(v,O,(function(){return L})),Object(h.a)(v,k,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return Object(p.a)(Object(p.a)({},n),{},{isLoading:!0})})),Object(h.a)(v,y,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0,t=e.payload.data,r=t.entities,i=r.questions,o=r.answers,c=t.result,a=c.questions,s=c.answers,d=x(a.map((function(n){return i[n]})))[0];return Object(p.a)(Object(p.a)({},n),{},{isLoading:!1,questions:{byId:i,allIds:a},answers:{byId:o,allIds:s},activeQuestionId:d.id,score:"$0",shouldBlockNavigation:!0})})),Object(h.a)(v,P,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return Object(p.a)(Object(p.a)({},n),{},{isLoading:!1})})),Object(h.a)(v,C,(function(n,e){var t=e.payload.id;return Object(p.a)(Object(p.a)({},n),{},{selectedAnswerId:t})})),Object(h.a)(v,A,(function(n,e){var t=e.payload.id;return Object(p.a)(Object(p.a)({},n),{},{activeQuestionId:t})})),Object(h.a)(v,z,(function(n,e){var t=e.payload.isVisible;return Object(p.a)(Object(p.a)({},n),{},{isQuestionResultVisible:t})})),Object(h.a)(v,I,(function(n,e){var t=e.payload.score;return Object(p.a)(Object(p.a)({},n),{},{score:t})})),Object(h.a)(v,D,(function(n,e){var t=e.payload.shouldBlock;return Object(p.a)(Object(p.a)({},n),{},{shouldBlockNavigation:t})})),v),U=j(L,B),R="[Game]",Y="".concat(R," Open Drawer"),S="".concat(R," Close Drawer");var F=j({isDrawerOpen:!1},(N={},Object(h.a)(N,Y,(function(n){return Object(p.a)(Object(p.a)({},n),{},{isDrawerOpen:!0})})),Object(h.a)(N,S,(function(n){return Object(p.a)(Object(p.a)({},n),{},{isDrawerOpen:!1})})),N)),$=Object(b.combineReducers)({game:U,common:F});var E=t(3),q=t.p+"static/media/hand.db4d6f4e.png";function M(){var n=Object(E.a)(["\n  display: inline-block;\n  text-decoration: none;\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  padding: 2rem 2.4rem;\n  min-width: 29.6rem;\n  font-weight: 600;\n  font-size: 2rem;\n  line-height: 2.32rem;\n  border-radius: 1.2rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n\n  "," {\n    font-size: 1.8rem;\n    line-height: 2.1rem;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"]);return M=function(){return n},n}var Q=l.c.button(M(),(function(n){return n.theme.colors.primary.main}),(function(n){return n.theme.colors.common.white}),(function(n){return n.theme.breakpoints.down("sm")}),(function(n){return n.theme.colors.primary.light}),(function(n){return n.theme.colors.primary.dark}));function G(){var n=Object(E.a)(["\n  display: inline-block;\n  text-decoration: none;\n  text-align: center;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n\n  &:hover {\n    background-color: transparent;\n  }\n\n  &:active {\n    background-color: transparent;\n  }\n"]);return G=function(){return n},n}var H=l.c.button(G());function T(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 22;\n  width: 90%;\n  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);\n  background-color: ",";\n\n  "," {\n    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);\n  }\n\n  &:hover {\n    background-color: ",";\n\n    & + "," {\n      background-color: ",";\n    }\n  }\n"]);return T=function(){return n},n}function V(){var n=Object(E.a)(["\n  color: ",";\n  margin-right: 8px;\n"]);return V=function(){return n},n}function W(){var n=Object(E.a)(["\n  background-color: ",";\n  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  z-index: 21;\n  cursor: pointer;\n  position: relative;\n  padding: 2.45rem 3.2rem;\n  border-radius: 8px;\n\n  "," {\n    padding: 2rem 3rem;\n  }\n\n  "," {\n    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);\n  }\n\n  "," {\n    padding: 2rem 2.4rem;\n  }\n"]);return W=function(){return n},n}function Z(){var n=Object(E.a)(["\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 20;\n  background-color: ",";\n"]);return Z=function(){return n},n}function J(){var n=Object(E.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n"]);return J=function(){return n},n}function K(n){var e=n.theme,t=n.correct,r=n.wrong,i=n.selected;return t?e.colors.success.main:r?e.colors.error.main:i?e.colors.primary.main:e.colors.common.black40}function X(n){var e=n.theme,t=n.correct,r=n.wrong;return t?e.colors.success.main:r?e.colors.error.main:e.colors.primary.main}var _=l.c.div(J()),nn=l.c.div(Z(),K),en=l.c.div(W(),(function(n){var e=n.theme,t=n.selected,r=n.correct,i=n.wrong;return r?e.colors.success.light:i?e.colors.error.light:t?e.colors.primary.xLight:e.colors.common.white}),(function(n){return n.theme.breakpoints.down("xl")}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),tn=l.c.span(V(),(function(n){return n.theme.colors.primary.main})),rn=l.c.div(T(),K,(function(n){return n.theme.breakpoints.down("md")}),X,nn,X);var on=function(n){var e=n.correct,t=n.wrong,i=n.selected,o=n.handleClick,c=n.label,a=n.text;return Object(r.jsxs)(_,{children:[Object(r.jsx)(rn,{correct:e,wrong:t,selected:i,children:Object(r.jsxs)(en,{onClick:o,correct:e,wrong:t,selected:i,children:[Object(r.jsx)(tn,{children:c}),a]})}),Object(r.jsx)(nn,{correct:e,wrong:t,selected:i})]})};function cn(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 22;\n  width: 60%;\n  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);\n  background-color: ",";\n\n  "," {\n    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);\n  }\n"]);return cn=function(){return n},n}function an(){var n=Object(E.a)(["\n  background-color: ",";\n  padding: 0.8rem 2.4rem;\n  text-align: center;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  z-index: 21;\n  border-radius: 8px;\n  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);\n\n  "," {\n    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);\n  }\n\n  color: ",";\n"]);return an=function(){return n},n}function sn(){var n=Object(E.a)(["\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 20;\n  background-color: ",";\n"]);return sn=function(){return n},n}function dn(){var n=Object(E.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  &:not(:last-child) {\n    margin-bottom: 0.8rem;\n  }\n"]);return dn=function(){return n},n}var un=l.c.div(dn()),ln=l.c.div(sn(),(function(n){var e=n.theme;return n.active?e.colors.primary.main:e.colors.common.black40})),bn=l.c.div(an(),(function(n){return n.theme.colors.common.white}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){var e=n.active,t=n.disabled,r=n.theme;return t?r.colors.text.disabled:e?r.colors.primary.main:r.colors.text.primary})),mn=l.c.div(cn(),(function(n){var e=n.theme;return n.active?e.colors.primary.main:e.colors.common.black40}),(function(n){return n.theme.breakpoints.down("md")}));var fn=function(n){var e=n.text,t=n.disabled,i=n.active;return Object(r.jsxs)(un,{children:[Object(r.jsx)(mn,{active:i,children:Object(r.jsx)(bn,{disabled:t,active:i,children:e})}),Object(r.jsx)(ln,{active:i})]})};function hn(){var n=Object(E.a)(["\n  font-size: 5.6rem;\n  line-height: 6.496rem;\n  font-weight: 600;\n  margin-bottom: 6.4rem;\n\n  "," {\n    font-size: 5rem;\n    line-height: 6rem;\n  }\n\n  "," {\n    font-size: 4.5rem;\n    line-height: 5.7rem;\n    margin-bottom: 5.9rem;\n  }\n\n  "," {\n    font-size: 3.5rem;\n    line-height: 3.9rem;\n  }\n"]);return hn=function(){return n},n}var pn=l.c.h1(hn(),(function(n){return n.theme.breakpoints.down("lg")}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")}));function jn(){var n=Object(E.a)(["\n  width: 50%;\n\n  "," {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: 70%;\n  }\n\n  "," {\n    width: 100%;\n    align-items: stretch;\n    justify-content: space-between;\n    flex: 1;\n  }\n"]);return jn=function(){return n},n}function gn(){var n=Object(E.a)(["\n  max-width: 100%;\n  height: auto;\n"]);return gn=function(){return n},n}function xn(){var n=Object(E.a)(["\n  margin-right: 3.2rem;\n  width: 50%;\n\n  "," {\n    margin-bottom: 2.4rem;\n    margin-right: 0;\n    width: 70%;\n  }\n\n  "," {\n    margin-bottom: 2.4rem;\n    margin-right: 0;\n    width: 90%;\n  }\n"]);return xn=function(){return n},n}function vn(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  "," {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(E.a)(["\n  height: 100vh;\n  min-height: 40rem;\n  background: linear-gradient(\n    to right bottom,\n    "," 50%,\n    "," 50%\n  );\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 8rem;\n\n  "," {\n    padding: 0 6rem;\n    min-height: 60rem;\n  }\n\n  "," {\n    padding: 10rem 2.5rem 7.5rem;\n  }\n"]);return wn=function(){return n},n}var On=l.c.div(wn(),(function(n){return n.theme.colors.common.white}),(function(n){return n.theme.colors.primary.xLight}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),kn=l.c.div(vn(),(function(n){return n.theme.breakpoints.down("md")})),yn=l.c.div(xn(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),Pn=l.c.img(gn()),Cn=l.c.div(jn(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")}));var An=function(){return Object(r.jsx)(On,{children:Object(r.jsxs)(kn,{children:[Object(r.jsx)(yn,{children:Object(r.jsx)(Pn,{src:q,alt:"Millionaire"})}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(pn,{children:"Who wants to be a millionaire?"}),Object(r.jsx)(Q,{as:d.b,to:"/game",children:"Start"})]})]})})},zn=t(45),In=t.n(zn),Dn=t(70),Ln=t(25),Nn=t(71);function Bn(n){return{type:y,payload:{data:n}}}function Un(n){return{type:C,payload:{id:n}}}function Rn(n){return{type:z,payload:{isVisible:n}}}function Yn(n){return{type:D,payload:{shouldBlock:n}}}var Sn=new Ln.b.Entity("answers"),Fn={questions:[new Ln.b.Entity("questions",{answers:[Sn]})]},$n=t(22),En=t(72),qn=t.n(En),Mn=function(n){return n.game.questions.byId},Qn=function(n){return n.game.activeQuestionId},Gn=function(n){return n.game.isLoading},Hn=function(n){return n.game.selectedAnswerId},Tn=function(n){return n.game.isQuestionResultVisible},Vn=function(n){return n.game.score},Wn=function(n){return n.game.shouldBlockNavigation},Zn=Object($n.a)(Mn,(function(n){return n.game.questions.allIds}),(function(n,e){return x(e.map((function(e){return n[e]})))})),Jn=Object($n.a)(Mn,Qn,(function(n,e){return n[e]})),Kn=Object($n.a)(Jn,(function(n){return n.game.answers.byId}),(function(n,e){return x(n.answers.map((function(n){return e[n]})))})),Xn=Object($n.a)(Jn,(function(n){return n.correctAnswerIds})),_n=Object($n.a)(Zn,Qn,(function(n,e){return qn()(n.map((function(n){return n.id})),(function(n){return n!==e}))}));function ne(n){return function(e,t){var r,i=t(),o=Zn(i),c=Qn(i),a=o.findIndex((function(n){return n.id===c}))+1,s=o[a];a<o.length&&s?(e(Un(void 0)),e((r=s.id,{type:A,payload:{id:r}}))):(e(Yn(!1)),n.push("/final"))}}function ee(n,e){return function(t,r){t(Un(n));var i=r(),o=Xn(i),c=Hn(i),a=Jn(i);setTimeout((function(){t(Rn(!0)),setTimeout((function(){var n;o.includes(c)?(t(Rn(!1)),t((n=a.prize,{type:I,payload:{score:n}})),t(ne(e))):(t(Yn(!1)),e.push("/final"))}),1e3)}),1e3)}}var te=function(n){return n.common.isDrawerOpen};function re(n){var e=n.className;return Object(r.jsx)("svg",{className:e,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M13.3638 2.05025C13.7544 1.65972 13.7544 1.02656 13.3638 0.636033C12.9733 0.245508 12.3401 0.245509 11.9496 0.636033L6.99987 5.58579L2.05014 0.636061C1.65962 0.245537 1.02645 0.245537 0.635928 0.636061C0.245404 1.02659 0.245404 1.65975 0.635928 2.05028L5.58565 7L0.635911 11.9497C0.245387 12.3403 0.245386 12.9734 0.635911 13.364C1.02643 13.7545 1.6596 13.7545 2.05012 13.364L6.99987 8.41421L11.9496 13.364C12.3402 13.7545 12.9733 13.7545 13.3638 13.364C13.7544 12.9735 13.7544 12.3403 13.3638 11.9498L8.41408 7L13.3638 2.05025Z",fill:"#1C1C21"})})}re.defaultProps={className:""};var ie=re;function oe(n){var e=n.className;return Object(r.jsxs)("svg",{className:e,width:"16",height:"14",viewBox:"0 0 16 14",fill:"black",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("path",{d:"M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1Z",fill:"#1C1C21"}),Object(r.jsx)("path",{d:"M0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7Z",fill:"#1C1C21"}),Object(r.jsx)("path",{d:"M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H1Z",fill:"#1C1C21"})]})}oe.defaultProps={className:""};var ce=oe;function ae(){var n=Object(E.a)(["\n  width: 1.6rem;\n  height: 1.6rem;\n"]);return ae=function(){return n},n}function se(){var n=Object(E.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  display: none;\n  z-index: 1100;\n\n  "," {\n    display: inline-block;\n  }\n\n  &:hover {\n    & path {\n      fill: ",";\n    }\n  }\n"]);return se=function(){return n},n}function de(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return de=function(){return n},n}function ue(){var n=Object(E.a)(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  background-color: ",";\n  overflow-x: hidden;\n  padding-top: 6.4rem;\n  padding-bottom: 3.2rem;\n  transition: 0.2s;\n\n  "," {\n    width: ",";\n  }\n"]);return ue=function(){return n},n}var le=l.c.div(ue(),(function(n){return n.theme.colors.background.default}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.isOpen?"100%":0})),be=l.c.div(de()),me=Object(l.c)(H)(se(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.colors.primary.main})),fe=Object(l.c)(ie)(ae());var he=function(){var n=Object(s.b)(),e=Object(s.c)(te),t=Object(s.c)(Zn),i=Object(s.c)(Qn),o=Object(s.c)(_n);return Object(r.jsxs)(le,{isOpen:e,children:[Object(r.jsx)(me,{onClick:function(){return n({type:S})},children:Object(r.jsx)(fe,{})}),Object(r.jsx)(be,{children:Object(g.a)(t).reverse().map((function(n){var e=n.prize,t=n.id;return Object(r.jsx)(fn,{disabled:o.includes(t),active:t===i,text:e},t)}))})]})};function pe(){var n=Object(E.a)(["\n  width: 2rem;\n  height: 1.8rem;\n"]);return pe=function(){return n},n}function je(){var n=Object(E.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  display: none;\n  z-index: 100;\n\n  "," {\n    display: inline-block;\n  }\n\n  &:hover {\n    & path {\n      fill: ",";\n    }\n  }\n"]);return je=function(){return n},n}function ge(){var n=Object(E.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-row-gap: 3.2rem;\n  width: 100%;\n  max-width: 84rem;\n\n  "," {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    grid-row-gap: 2rem;\n  }\n\n  "," {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    grid-row-gap: 8px;\n  }\n"]);return ge=function(){return n},n}function xe(){var n=Object(E.a)(["\n  font-size: 3.2rem;\n  line-height: 3.712rem;\n  font-weight: 600;\n  max-width: 62.4rem;\n  width: 100%;\n\n  "," {\n    text-align: center;\n  }\n"]);return xe=function(){return n},n}function ve(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-basis: 0;\n  flex-grow: 1000;\n  min-width: 50%;\n  padding: 13.3rem 8rem 12.2rem;\n  background-color: ",";\n  position: relative;\n\n  "," {\n    padding: 10rem 5rem 9rem;\n  }\n\n  "," {\n    align-items: center;\n  }\n\n  "," {\n    padding: 13.6rem 0 2.4rem;\n  }\n"]);return ve=function(){return n},n}var we=l.c.div(ve(),(function(n){return n.theme.colors.background.default}),(function(n){return n.theme.breakpoints.down("xl")}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),Oe=l.c.div(xe(),(function(n){return n.theme.breakpoints.down("md")})),ke=l.c.div(ge(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),ye=Object(l.c)(H)(je(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.colors.primary.main})),Pe=Object(l.c)(ce)(pe());var Ce=function(){var n=Object(u.g)(),e=Object(s.b)(),t=Object(s.c)(Jn),i=Object(s.c)(Kn),o=Object(s.c)(Xn),c=Object(s.c)(Tn),a=Object(s.c)(Hn);return Object(r.jsxs)(we,{children:[Object(r.jsx)(ye,{onClick:function(){return e({type:Y})},children:Object(r.jsx)(Pe,{})}),Object(r.jsx)(Oe,{children:t.text}),Object(r.jsx)(ke,{children:i.map((function(t){var i=t.id,s=t.label,d=t.text;return Object(r.jsx)(on,{correct:c&&o.includes(i),wrong:c&&a===i&&!o.includes(i),selected:a===i,handleClick:function(){a||e(ee(i,n))},label:s,text:d},i)}))})]})};function Ae(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"]);return Ae=function(){return n},n}function ze(){var n=Object(E.a)(["\n  flex-basis: 37.6rem;\n  flex-grow: 1;\n\n  "," {\n    display: none;\n  }\n\n  "," {\n    flex-basis: 30rem;\n  }\n"]);return ze=function(){return n},n}var Ie=l.c.div(ze(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("xl")})),De=l.c.div(Ae());var Le=function(){var n=Object(s.c)(Zn),e=Object(s.c)(Qn),t=Object(s.c)(_n);return Object(r.jsx)(Ie,{children:Object(r.jsx)(De,{children:Object(g.a)(n).reverse().map((function(n){var i=n.prize,o=n.id;return Object(r.jsx)(fn,{disabled:t.includes(o),active:o===e,text:i},o)}))})})};function Ne(){var n=Object(E.a)(["\n  height: 100vh;\n  min-height: 65rem;\n  display: flex;\n"]);return Ne=function(){return n},n}var Be=l.c.div(Ne());var Ue=function(){var n=Object(s.b)(),e=Object(s.c)(Gn),t=Object(s.c)(Wn);return Object(i.useEffect)((function(){n(function(){var n=Object(Dn.a)(In.a.mark((function n(e){var t,r,i,o;return In.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:O}),e({type:k}),n.next=5,new Promise((function(n){n(Nn)}));case 5:t=n.sent,r=Object(Ln.a)(t,Fn),i=Object.keys(r.entities.answers),o=Object(p.a)(Object(p.a)({},r),{},{result:Object(p.a)(Object(p.a)({},r.result),{},{answers:i})}),e(Bn(o)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),e({type:P});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}())}),[]),e?Object(r.jsx)("div",{children:"Loading"}):Object(r.jsxs)(Be,{children:[Object(r.jsx)(he,{}),Object(r.jsx)(u.a,{when:t,message:"You'll lose your progress!"}),Object(r.jsx)(Ce,{}),Object(r.jsx)(Le,{})]})};function Re(){var n=Object(E.a)(["\n  font-size: 3.2rem;\n  line-height: 3.712rem;\n  font-weight: 600;\n  opacity: 0.5;\n\n  "," {\n    font-size: 2rem;\n    line-height: 2.5rem;\n  }\n"]);return Re=function(){return n},n}function Ye(){var n=Object(E.a)(["\n  width: 50%;\n\n  "," {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: 70%;\n  }\n\n  "," {\n    width: 100%;\n    align-items: stretch;\n    justify-content: space-between;\n    flex: 1;\n  }\n"]);return Ye=function(){return n},n}function Se(){var n=Object(E.a)(["\n  margin-right: 3.2rem;\n  width: 50%;\n\n  "," {\n    margin-bottom: 2.4rem;\n    margin-right: 0;\n    width: 70%;\n  }\n\n  "," {\n    margin-bottom: 4rem;\n    margin-right: 0;\n    width: 90%;\n  }\n"]);return Se=function(){return n},n}function Fe(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  "," {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n  }\n"]);return Fe=function(){return n},n}function $e(){var n=Object(E.a)(["\n  height: 100vh;\n  min-height: 40rem;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 8rem;\n\n  "," {\n    padding: 0 6rem;\n    min-height: 60rem;\n  }\n\n  "," {\n    padding: 10rem 2.5rem 7.5rem;\n  }\n"]);return $e=function(){return n},n}var Ee=l.c.div($e(),(function(n){return n.theme.colors.background.default}),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),qe=l.c.div(Fe(),(function(n){return n.theme.breakpoints.down("md")})),Me=l.c.img(Se(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),Qe=l.c.div(Ye(),(function(n){return n.theme.breakpoints.down("md")}),(function(n){return n.theme.breakpoints.down("sm")})),Ge=l.c.span(Re(),(function(n){return n.theme.breakpoints.down("sm")}));var He=function(){var n=Object(s.c)(Vn);return void 0===n?Object(r.jsx)(u.b,{to:"/"}):Object(r.jsx)(Ee,{children:Object(r.jsxs)(qe,{children:[Object(r.jsx)(Me,{src:q,alt:""}),Object(r.jsxs)(Qe,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Ge,{children:"Total score:"}),Object(r.jsxs)(pn,{as:"div",children:[n," earned"]})]}),Object(r.jsx)(Q,{as:d.b,to:"/game",children:"Try Again"})]})]})})},Te={xs:0,sm:576,md:768,lg:992,xl:1200},Ve={breakpoints:{keys:["xs","sm","md","lg","xl"],values:Te,down:function(n){return"@media (max-width: ".concat(Te[n],"px)")},between:function(n,e){return"@media (min-width: ".concat(Te[n],"px) and (max-width: ").concat(Te[e],"px)")}}},We={light:Object(p.a)(Object(p.a)({},Ve),{},{colors:{common:{black:"#000",black40:"#D0D0D8",white:"#fff"},primary:{dark:"#E87928",main:"#FF8B37",light:"#FFAC70",xLight:"#FFF3EB"},success:{main:"#47D867",light:"#E6FAEA"},error:{main:"#EC6259",light:"#FDEEED"},background:{default:"#F5F5F7",paper:"#fff"},text:{primary:"#1C1C21",disabled:"#D0D0D8"}}})};function Ze(){var n=Object(E.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n    \n  body {\n    font-family: 'Inter', sans-serif;\n    font-size: 2rem;\n    box-sizing: border-box;\n    line-height: 2.32rem;\n    font-weight: 400;\n  }\n  \n  html {\n    font-size: 62.5%;\n    \n    "," {\n      font-size: 50%\n    }\n  }\n"]);return Ze=function(){return n},n}var Je=Object(l.b)(Ze(),(function(n){return n.theme.breakpoints.down("lg")})),Ke=function(n){var e=[m.a],t=[b.applyMiddleware.apply(void 0,e)],r=f.composeWithDevTools.apply(void 0,t);return Object(b.createStore)($,n,r)}({});var Xe=function(){return Object(r.jsx)(s.a,{store:Ke,children:Object(r.jsxs)(l.a,{theme:We.light,children:[Object(r.jsx)(Je,{}),Object(r.jsxs)(d.a,{basename:"/",children:[Object(r.jsx)(u.c,{exact:!0,path:"/",children:Object(r.jsx)(An,{})}),Object(r.jsx)(u.c,{exact:!0,path:"/game",children:Object(r.jsx)(Ue,{})}),Object(r.jsx)(u.c,{exact:!0,path:"/final",children:Object(r.jsx)(He,{})})]})]})})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Xe,{})}),document.getElementById("root"))},71:function(n){n.exports=JSON.parse('{"questions":[{"id":"1","text":"What is the capital of Ukraine?","correctAnswerIds":["1"],"orderPosition":"1","prize":"$500","answers":[{"id":"1","text":"Kyiv","label":"A","orderPosition":"1"},{"id":"2","text":"Odessa","label":"B","orderPosition":"2"},{"id":"3","text":"Moscow","label":"C","orderPosition":"3"},{"id":"4","text":"New York","label":"D","orderPosition":"4"}]},{"id":"2","text":"What is the capital of Ukraine?","correctAnswerIds":["342"],"orderPosition":"3","prize":"$2,000","answers":[{"id":"342","text":"Kyiv","label":"A","orderPosition":"1"},{"id":"341","text":"Odessa","label":"B","orderPosition":"2"},{"id":"345","text":"Moscow","label":"C","orderPosition":"3"},{"id":"343","text":"New York","label":"D","orderPosition":"4"}]},{"id":"3","text":"Choose the cities of Ukraine","correctAnswerIds":["6"],"orderPosition":"2","prize":"$1,000","answers":[{"id":"5","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"6","text":"Rivne","label":"B","orderPosition":"2"},{"id":"7","text":"Uganda","label":"C","orderPosition":"3"},{"id":"8","text":"New York","label":"D","orderPosition":"4"}]},{"id":"4","text":"Choose the cities of Ukraine","correctAnswerIds":["10"],"orderPosition":"4","prize":"$4,000","answers":[{"id":"9","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"10","text":"Rivne","label":"B","orderPosition":"2"},{"id":"11","text":"Uganda","label":"C","orderPosition":"3"},{"id":"12","text":"New York","label":"D","orderPosition":"4"}]},{"id":"5","text":"Choose the cities of Ukraine","correctAnswerIds":["14"],"orderPosition":"5","prize":"$8,000","answers":[{"id":"13","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"14","text":"Rivne","label":"B","orderPosition":"2"},{"id":"15","text":"Uganda","label":"C","orderPosition":"3"},{"id":"16","text":"New York","label":"D","orderPosition":"4"}]},{"id":"6","text":"Choose the cities of Ukraine","correctAnswerIds":["18"],"orderPosition":"6","prize":"$16,000","answers":[{"id":"17","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"18","text":"Rivne","label":"B","orderPosition":"2"},{"id":"19","text":"Uganda","label":"C","orderPosition":"3"},{"id":"20","text":"New York","label":"D","orderPosition":"4"}]},{"id":"7","text":"Choose the cities of Ukraine","correctAnswerIds":["22"],"orderPosition":"7","prize":"$32,000","answers":[{"id":"21","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"22","text":"Rivne","label":"B","orderPosition":"2"},{"id":"23","text":"Uganda","label":"C","orderPosition":"3"},{"id":"24","text":"New York","label":"D","orderPosition":"4"}]},{"id":"8","text":"Choose the cities of Ukraine","correctAnswerIds":["26"],"orderPosition":"8","prize":"$64,000","answers":[{"id":"25","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"26","text":"Rivne","label":"B","orderPosition":"2"},{"id":"27","text":"Uganda","label":"C","orderPosition":"3"},{"id":"28","text":"New York","label":"D","orderPosition":"4"}]},{"id":"9","text":"Choose the cities of Ukraine","correctAnswerIds":["30"],"orderPosition":"9","prize":"$125,000","answers":[{"id":"29","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"30","text":"Rivne","label":"B","orderPosition":"2"},{"id":"31","text":"Uganda","label":"C","orderPosition":"3"},{"id":"32","text":"New York","label":"D","orderPosition":"4"}]},{"id":"10","text":"Choose the cities of Ukraine","correctAnswerIds":["123"],"orderPosition":"10","prize":"$250,000","answers":[{"id":"111","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"123","text":"Rivne","label":"B","orderPosition":"2"},{"id":"341","text":"Uganda","label":"C","orderPosition":"3"},{"id":"90","text":"New York","label":"D","orderPosition":"4"}]},{"id":"103","text":"Choose the cities of Ukraine","correctAnswerIds":["63"],"orderPosition":"11","prize":"$500,000","answers":[{"id":"54","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"63","text":"Rivne","label":"B","orderPosition":"2"},{"id":"210","text":"Uganda","label":"C","orderPosition":"3"},{"id":"511","text":"New York","label":"D","orderPosition":"4"}]},{"id":"33","text":"Choose the cities of Ukraine","correctAnswerIds":["72"],"orderPosition":"12","prize":"$1,000,000","answers":[{"id":"71","text":"Los-Angeles","label":"A","orderPosition":"1"},{"id":"72","text":"Rivne","label":"B","orderPosition":"2"},{"id":"73","text":"Uganda","label":"C","orderPosition":"3"},{"id":"74","text":"New York","label":"D","orderPosition":"4"}]}]}')}},[[168,1,2]]]);
//# sourceMappingURL=main.931a16ac.chunk.js.map