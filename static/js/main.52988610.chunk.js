(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,a,t){e.exports=t(163)},128:function(e,a,t){},129:function(e,a,t){},163:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),i=(t(128),t(129),t(55)),l=t(39),s=t(211),m=t(197),d=t(214),p=t(215),u=t(199),g=t(200),E=t(106),f=t.n(E),v=t(107),h=t.n(v),b=t(108),x=t.n(b),w=t(109),y=t.n(w),N=Object(m.a)(function(e){return{root:{display:"flex"},drawer:{width:64,flexShrink:0},drawerPaper:{width:64},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar,navlink:{textDecoration:"none","&.active li":{backgroundColor:e.palette.secondary[900]},"&:hover li":{backgroundColor:e.palette.secondary[900]},"&.active span":{color:e.palette.secondary[700]}}}});function O(e){var a=N(),t=e.children,n=[{route:"/home",text:"Dashboard",icon:r.a.createElement(f.a,null)},{route:"/options",text:"Options",icon:r.a.createElement(h.a,null)},{route:"/settings",text:"Settings",icon:r.a.createElement(x.a,null)},{route:"/notifications",text:"Notifications",icon:r.a.createElement(y.a,null)}];return r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(p.a,null,n.map(function(e,t){return r.a.createElement(i.b,{to:e.route,key:t,className:a.navlink},r.a.createElement(u.a,null,r.a.createElement(g.a,null,e.icon)))}))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),t))}var j=t(12),C=t(201),S=t(202),M=t(203),k=t(87),I=t(115),Y=t.n(I),P=Object(m.a)(function(e){return{grow:{flexGrow:1},toolbar:Object(j.a)({height:64,padding:"0 ".concat(e.spacing(3),"px 0 0")},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,left:1},searchButton:{backgroundColor:e.palette.secondary[300],width:64,height:64,borderRadius:0,marginRight:e.spacing(3),color:"#FFF","&:hover":{backgroundColor:e.palette.secondary[800]}},pageTitle:{fontWeight:400}}});function F(e){var a=P(),t=e.pageTitle;return r.a.createElement(C.a,{position:"fixed",className:a.appBar},r.a.createElement(S.a,{className:a.toolbar},r.a.createElement(M.a,{color:"secondary",className:a.searchButton},r.a.createElement(Y.a,null)),r.a.createElement(k.a,{variant:"h4",noWrap:!0,className:a.pageTitle},t&&t),r.a.createElement("div",{className:a.grow}),r.a.createElement(M.a,{variant:"contained",color:"secondary",onClick:function(){return alert("You are now logged out.")}},"Log Out")))}var A=t(8),B=t(204),D=t(206),R=t(205),W=t(164),z=Object(m.a)(function(e){return{root:{display:"flex"},grow:{flexGrow:1},titleSection:{color:"#949494",fontSize:14,fontWeight:600,display:"inline",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px")},link:{fontSize:14,padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px")},buttonSection:{display:"flex",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(2),"px")}}});function L(e){var a=z(),t=e.title,n=e.link,c=e.children;return r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(W.a,{className:a.grow},r.a.createElement(B.a,{container:!0,direction:"column"},r.a.createElement(B.a,{container:!0,direction:"row"},r.a.createElement(k.a,{className:a.titleSection},t),r.a.createElement("div",{className:a.grow}),n&&r.a.createElement(k.a,{className:a.link},r.a.createElement(R.a,{href:n.url},n.text))),r.a.createElement(D.a,null),c,r.a.createElement(D.a,null),r.a.createElement("div",{className:a.buttonSection},r.a.createElement("div",{className:a.grow}),r.a.createElement(M.a,{variant:"contained",color:"secondary"},"Save Changes")))))}var T=t(16),G=t(212),U=t(216),H=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)}}});function V(){var e,a=H(),t=r.a.useState(),n=r.a.useState({email:t.email}),c=Object(A.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Email")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.textField,value:o.email,onChange:(e="email",function(a){i(Object(j.a)({},o,Object(T.a)({},e,a.target.value)))}),variant:"outlined",fullWidth:!0}))))}var J=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)}}});function _(){var e,a=J(),t=r.a.useState(),n=r.a.useState({name:t.name}),c=Object(A.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Name")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.textField,value:o.name,onChange:(e="name",function(a){i(Object(j.a)({},o,Object(T.a)({},e,a.target.value)))}),variant:"outlined",fullWidth:!0,placeholder:"Enter name"}))))}var $=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)}}});function Q(){var e,a=$(),t=r.a.useState(),n=r.a.useState({phone:t.phone}),c=Object(A.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Phone")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.textField,value:o.phone,onChange:(e="phone",function(a){i(Object(j.a)({},o,Object(T.a)({},e,a.target.value)))}),variant:"outlined",placeholder:"Enter phone number"}))))}var Z=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)}}});function q(){var e,a=Z(),t=r.a.useState({zip:""}),n=Object(A.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Zip")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.textField,value:c.zip,onChange:(e="zip",function(a){o(Object(j.a)({},c,Object(T.a)({},e,a.target.value)))}),variant:"outlined",placeholder:"Enter zip code"}))))}var K=t(207),X=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)},checkbox:{margin:e.spacing()}}});function ee(){var e,a=X(),t=r.a.useState({commissionCharges:!1}),n=Object(A.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Commission Charges")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(K.a,{control:r.a.createElement("input",{type:"checkbox",value:"commissionCharges",onChange:(e="commissionCharges",function(a){o(Object(j.a)({},c,Object(T.a)({},e,!a.target.value)))}),className:a.checkbox}),label:"Take into account Apple commission charge (30%)"}))))}var ae=t(208),te=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)},caption:{fontSize:12,color:"#949494",display:"inline",margin:e.spacing()}}});function ne(){var e,a=te(),t=r.a.useState({trackingExpenses:"0.00"}),n=Object(A.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,{htmlFor:"tracking-expenses"},"Tracking Expenses")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{id:"outlined-adornment-amount",className:a.textField,variant:"outlined",value:c.trackingExpenses,onChange:(e="amount",function(a){o(Object(j.a)({},c,Object(T.a)({},e,a.target.value)))}),InputProps:{startAdornment:r.a.createElement(ae.a,{position:"start"},r.a.createElement("span",{style:{fontSize:10}},"$"))}}),r.a.createElement(k.a,{className:a.caption},"per each install"))))}var re=t(3),ce=t(209),oe=t(76),ie=t.n(oe),le=t(75),se=t.n(le),me=Object(m.a)(function(e){return{root:{display:"flex",margin:e.spacing(2)},textField:{margin:e.spacing()}}});function de(){var e=me(),a=r.a.useState({showPassword:[!1,!1,!1]}),t=Object(A.a)(a,2),n=t[0],c=t[1],o=function(e){return function(a){c(Object(j.a)({},n,Object(T.a)({},e,a.target.value)))}},i=function(e){var a=n.showPassword;a[e]=!a[e],c(Object(j.a)({},n,{showPassword:a}))};return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Current Password")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:Object(re.a)(e.margin,e.textField),variant:"outlined",placeholder:"Enter password",type:n.showPassword[0]?"text":"password",onChange:o("password"),InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(ce.a,{edge:"end","aria-label":"Toggle password visibility",disableRipple:!0,onClick:function(){return i(0)}},n.showPassword[0]?r.a.createElement(se.a,{style:{width:16}}):r.a.createElement(ie.a,{style:{width:16}})))},fullWidth:!0}),n.password&&"bacon"!==n.password&&r.a.createElement(k.a,{variant:"caption",color:"error"},"The password you've entered is incorrect.")),r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"New Password")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:Object(re.a)(e.margin,e.textField),variant:"outlined",placeholder:"At least 6 characters",type:n.showPassword[1]?"text":"password",onChange:o("newPassword"),InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(ce.a,{edge:"end","aria-label":"Toggle password visibility",disableRipple:!0,onClick:function(){return i(1)}},n.showPassword[1]?r.a.createElement(se.a,{style:{width:16}}):r.a.createElement(ie.a,{style:{width:16}})))},fullWidth:!0})," "),r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Confirm Password")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:Object(re.a)(e.margin,e.textField),variant:"outlined",placeholder:"Re-enter the password above",type:n.showPassword[2]?"text":"password",onChange:o("confirmPassword"),InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(ce.a,{edge:"end","aria-label":"Toggle password visibility",disableRipple:!0,onClick:function(){return i(2)}},n.showPassword[2]?r.a.createElement(se.a,{style:{width:16}}):r.a.createElement(ie.a,{style:{width:16}})))},fullWidth:!0}))))}var pe=t(73),ue=t.n(pe),ge=t(210),Ee=t(29),fe=t.n(Ee),ve=Object(m.a)(function(e){return{root:{display:"flex"},grow:{flexGrow:1},paper:{flexGrow:1,padding:e.spacing(2),color:"#949494"},cloudUploadIcon:{marginRight:e.spacing(),marginLeft:e.spacing()},text:{color:"#949494",margin:e.spacing()},progressBar:{margin:e.spacing()}}});function he(e){var a=ve(),t=r.a.useState(!1),n=Object(A.a)(t,2),c=n[0],o=n[1],i=r.a.useState(0),l=Object(A.a)(i,2),s=l[0],m=l[1],d=r.a.useState({appsflyerReports:{lastUpdated:fe()().subtract(7,"days").format("MMM DD, YYYY HH:MM A")}}),p=Object(A.a)(d,2),u=p[0],g=p[1];return r.a.useEffect(function(){var e=setInterval(function(){m(function(e){if(100===e)return o(!1),0;var a=30*Math.random();return Math.min(e+a,100)})},500);return function(){clearInterval(e)}},[]),r.a.createElement(W.a,{className:a.paper},r.a.createElement(B.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(ue.a,{className:a.cloudUploadIcon,color:c?"secondary":"inherit"})),r.a.createElement(B.a,{item:!0,xs:!0},c&&r.a.createElement("div",{className:a.root},r.a.createElement(k.a,{variant:"caption",className:a.text},"Uploading report_file_Q32017.csv"),r.a.createElement("div",{className:a.grow}),r.a.createElement(k.a,{variant:"caption",className:a.text},"<1 minute left")),!c&&r.a.createElement(k.a,{className:a.text},"Drop .csv document here or"," ",r.a.createElement(R.a,{variant:"body1",component:"button",onClick:function(){return o(!0),m(0),void g(Object(j.a)({},u,{appsflyerReports:{lastUpdated:fe()().format("MMM DD, YYYY HH:MM A")}}))}},"choose file")," ","to upload Appsflyer statistics"),c&&r.a.createElement(ge.a,{color:"secondary",variant:"determinate",value:s,className:a.progressBar}))))}var be=t(50),xe=Object(m.a)(function(e){return{root:{display:"flex"},grow:{flexGrow:1},paper:{flexGrow:1,margin:"".concat(e.spacing(),"px 0"),padding:e.spacing(2),color:"#949494"},cloudUploadIcon:{marginRight:e.spacing(),marginLeft:e.spacing()},text:{color:"#949494",margin:e.spacing()},progressBar:{margin:e.spacing()}}});function we(e){var a=xe(),t=r.a.useState(!1),n=Object(A.a)(t,2),c=n[0],o=n[1],i=r.a.useState(0),l=Object(A.a)(i,2),s=l[0],m=l[1],d=r.a.useState([{name:"Joshua Moody",dateAdded:"05-21-2017",enabled:!0},{name:"Bernard Rhodes",dateAdded:"06-10-2017",enabled:!1}]),p=Object(A.a)(d,2),u=p[0],g=p[1];return r.a.useEffect(function(){var e=setInterval(function(){m(function(e){if(100===e){o(!1);var a=[].concat(Object(be.a)(u),[{name:"Another Person",dateAdded:fe()().format("MM-DD-YYYY"),enabled:!0}]);return g(a),0}var t=30*Math.random();return Math.min(e+t,100)})},500);return function(){clearInterval(e)}},[u]),r.a.createElement(W.a,{className:a.paper},r.a.createElement(B.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(ue.a,{className:a.cloudUploadIcon,color:c?"secondary":"inherit"})),r.a.createElement(B.a,{item:!0,xs:!0},c&&r.a.createElement("div",{className:a.root},r.a.createElement(k.a,{variant:"caption",className:a.text},"Uploading api_certificates.zip"),r.a.createElement("div",{className:a.grow}),r.a.createElement(k.a,{variant:"caption",className:a.text},"<1 minute left")),!c&&r.a.createElement(k.a,{className:a.text},"Drop archive with API Certificate here or"," ",r.a.createElement(R.a,{variant:"body1",component:"button",onClick:function(){return o(!0),void m(0)}},"choose file")," ","to add new account"),c&&r.a.createElement(ge.a,{color:"secondary",variant:"determinate",value:s,className:a.progressBar}))))}var ye=Object(m.a)(function(e){return{root:{display:"flex"},grow:{flexGrow:1},paper:{flexGrow:1,margin:"".concat(e.spacing(),"px 0"),padding:e.spacing(2),color:"#949494"},cloudUploadIcon:{marginRight:e.spacing(),marginLeft:e.spacing()},text:{color:"#949494",margin:e.spacing()},progressBar:{margin:e.spacing()},indicator:{margin:e.spacing(),width:10,height:10,borderRadius:"50%"},button:{width:90,backgroundColor:e.palette.primary[100],color:"#949494"}}});function Ne(e){var a=ye(),t=r.a.useState([{name:"Linus Torvalds",dateAdded:"05-21-2017",enabled:!0},{name:"Les Paul",dateAdded:"06-10-2017",enabled:!1}]),n=Object(A.a)(t,2),c=n[0],o=n[1];return c.map(function(e,t){return r.a.createElement(W.a,{className:a.paper,key:t},r.a.createElement(B.a,{container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement("div",{className:a.indicator,style:{backgroundColor:e.enabled?"green":"lightgrey"}}),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(k.a,null,e.name),r.a.createElement(k.a,{variant:"caption"},"Added ",fe()(e.dateAdded,"MM-DD-YYYY").format("MMM DD, YYYY"))),r.a.createElement(B.a,{item:!0,xs:"auto"},r.a.createElement(M.a,{className:a.button,onClick:function(){!function(e){var a=c;a[e].enabled=!a[e].enabled,o(Object(be.a)(a))}(t)}},e.enabled?"Disable":"Enable"))))})}var Oe=Object(m.a)(function(e){return{root:{display:"flex",margin:"0 ".concat(e.spacing(2),"px"),maxHeight:60},cardNumberField:{margin:e.spacing(),width:140},expirationField:{margin:e.spacing(),width:60},cvcField:{margin:e.spacing(),width:40}}});function je(){var e,a=Oe(),t=r.a.useState({paymentInfo:[{type:"",cardNumber:"",lastFour:"",expiration:"",cvc:""}]}),n=Object(A.a)(t,2),c=n[0],o=n[1],i=function(a){return function(t){e=[Object(j.a)({},c.paymentInfo,Object(T.a)({},a,t.target.value))],o(Object(j.a)({},c,{paymentInfo:e}))}};return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Card Details")),r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.cardNumberField,value:c.paymentInfo.cardNumber,onChange:i("creditCard"),variant:"outlined",placeholder:"0000  0000  0000  0000"}),r.a.createElement(G.a,{className:a.expirationField,value:c.paymentInfo.expiration,onChange:i("expiration"),variant:"outlined",placeholder:"MM / YY"}),r.a.createElement(G.a,{className:a.cvcField,value:c.paymentInfo.cvc,onChange:i("cvc"),variant:"outlined",placeholder:"CVC"}))))}var Ce=Object(m.a)(function(e){return{root:{display:"flex"},grow:{flexGrow:1},paper:{flexGrow:1,margin:"".concat(e.spacing(),"px 0"),color:"#949494"},cardPanel:{padding:e.spacing(2)},cloudUploadIcon:{marginRight:e.spacing(),marginLeft:e.spacing()},text:{color:"#949494",margin:e.spacing()},progressBar:{margin:e.spacing()},indicator:{margin:e.spacing(),width:10,height:10,borderRadius:"50%",alignSelf:"flex-start"},button:{width:90,backgroundColor:e.palette.primary[100],color:"#949494"},titleSection:{color:"#949494",fontSize:14,fontWeight:600,display:"inline",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px")},buttonSection:{display:"flex",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(2),"px")}}});function Se(e){var a=Ce(),t=r.a.useState({editing:!1}),n=Object(A.a)(t,2),c=n[0],o=n[1],i=r.a.useState({paymentInfo:[{type:"MasterCard",lastFour:"4482",expiration:"07-2020"}]}),l=Object(A.a)(i,1)[0];function s(){var e={editing:!c.editing};o(e)}return r.a.createElement(W.a,{className:a.paper},c.editing?r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,direction:"column"},r.a.createElement(B.a,{container:!0,direction:"row"},r.a.createElement(k.a,{className:a.titleSection},"Edit Card")),r.a.createElement(D.a,null),r.a.createElement(je,null),r.a.createElement(D.a,null),r.a.createElement("div",{className:a.buttonSection},r.a.createElement("div",{className:a.grow}),r.a.createElement(M.a,{className:a.button,onClick:function(){s()}},"Cancel"),r.a.createElement(M.a,{variant:"contained",color:"secondary"},"Save Changes")))):l.paymentInfo.map(function(e,t){return r.a.createElement(B.a,{key:t,container:!0,direction:"row",alignItems:"center",className:a.cardPanel},r.a.createElement("div",{className:a.indicator,style:{backgroundColor:"green"}}),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(k.a,null,e.type," ending in ",e.lastFour),r.a.createElement(k.a,{variant:"overline"},fe()(e.expiration,"MM-YYYY").format("MM/YY"))),r.a.createElement(B.a,{item:!0,xs:"auto"},r.a.createElement(M.a,{className:a.button,onClick:function(){s()}},"Edit Card")))}))}var Me=Object(m.a)(function(e){return{root:{display:"flex"},divider:{margin:"".concat(e.spacing(3),"px 0")},margin:{margin:"".concat(e.spacing(),"px 0")}}});function ke(){var e=r.a.useState({name:"Steven Williams",email:"stevenwritescode@gmail.com",appsflyerReports:{lastUpdated:fe()().subtract(7,"days").format("MMM DD, YYYY HH:MM A")}}),a=Object(A.a)(e,1)[0],t=r.a.useState(),n=Me();return r.a.createElement("div",null,r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{variant:"h6"},"System"),r.a.createElement(k.a,{variant:"caption"},"Configure external fees and email that will be used as default address for notifications."),r.a.createElement("div",{className:n.margin},r.a.createElement(k.a,{variant:"caption"},r.a.createElement(R.a,{component:"button"},"How does Apple commission influence my statistic?")),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"caption"},r.a.createElement(R.a,{component:"button"},"What do attribution tracking expenses mean?")))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(L,{title:"General settings",valid:t.email!==a.email},r.a.createElement(V,null),r.a.createElement(ee,null),r.a.createElement(ne,null)))),r.a.createElement(D.a,{className:n.divider}),r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{variant:"h6"},"Appsflyer reports"),r.a.createElement(k.a,{variant:"caption"},"Last updated ",a.appsflyerReports.lastUpdated)),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(he,null))),r.a.createElement(D.a,{className:n.divider}),r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{variant:"h6"},"Search ads accounts"),r.a.createElement(k.a,{variant:"caption"},"Manage your search ads accounts. Once an account is disabled the system will stop updating data for the account."),r.a.createElement("div",{className:n.margin},r.a.createElement(k.a,{variant:"caption"},r.a.createElement(R.a,{component:"button"},"Where can I get API Certificates?")))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Ne,null),r.a.createElement(we,null))),r.a.createElement(D.a,{className:n.divider}),r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{variant:"h6"},"Billing"),r.a.createElement(k.a,{variant:"caption"},"Setup your billing data and payment details.")),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(L,{title:"Billing information",link:{url:"/#",text:"View Billing History"},valid:t.name!==a.name},r.a.createElement(_,null),r.a.createElement(Q,null),r.a.createElement(q,null)),r.a.createElement(Se,null))),r.a.createElement(D.a,{className:n.divider}),r.a.createElement(B.a,{container:!0,spacing:5},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{variant:"h6"},"Access to the system"),r.a.createElement(k.a,{variant:"caption"},"Do not use a simple password. It must contain at least 6 characters.")),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(L,{title:"Password",valid:t.password&&t.password.length>5},r.a.createElement(de,null)))))}var Ie=Object(l.e)(function(e){document.body.style.backgroundColor="#eceef3";var a=e.location.pathname;return r.a.createElement("div",null,r.a.createElement(F,{pageTitle:function(){switch(e.location.pathname){case"/home":return"Dashboard";case"/options":return"Options";case"/settings":return"Settings";case"/notifications":return"Notifications";default:return""}}()}),r.a.createElement(O,null,"/settings"===a&&r.a.createElement(ke,null)))}),Ye=t(117),Pe=t(116),Fe=t.n(Pe),Ae=t(86),Be=t.n(Ae),De=Object(Ye.a)(),Re={primary:Fe.a,secondary:Be.a},We={fontFamily:'"Open Sans"',lineHeight:"normal"},ze={h4:Object(j.a)({},We,{fontSize:20,fontWeight:600,color:"#6a6a6a"}),h6:Object(j.a)({},We,{fontSize:14,fontWeight:600,color:"#565656"}),caption:Object(j.a)({},We,{color:"#939393"})},Le=Object(j.a)({},De.overrides,{MuiButton:{root:{textTransform:"none",fontWeight:600}},MuiCheckbox:{root:{backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}}},MuiDrawer:{paper:{backgroundColor:Be.a[700]}},MuiFormControlLabel:{label:{fontSize:12,color:"#939393"}},MuiIconButton:{root:{"&:hover":{backgroundColor:"transparent"}}},MuiInputLabel:{root:{marginLeft:De.spacing(2),fontSize:12,fontWeight:600,color:"#AFAFAF"}},MuiLink:{root:{color:Re.secondary[700]}},MuiList:{padding:{paddingTop:0,paddingBottom:0}},MuiListItem:{root:{paddingTop:De.spacing(2),paddingBottom:De.spacing(2),paddingLeft:De.spacing(),paddingRight:De.spacing(),justifyContent:"center"},gutters:{paddingTop:20,paddingBottom:20,paddingLeft:0,paddingRight:0}},MuiListItemIcon:{root:{justifyContent:"center",color:"#fff"}},MuiPaper:{elevation1:{boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.02), 0px 1px 1px 0px rgba(0,0,0,0.02), 0px 2px 1px -1px rgba(0,0,0,0.02)"}},MuiOutlinedInput:{input:{fontSize:12,color:"#808080",padding:De.spacing(.75)}},MuiToolbar:{root:{backgroundColor:"#fff",color:"#777"}}}),Te=Object(Ye.a)({palette:Re,typography:ze,overrides:Le,props:{MuiAppBar:{elevation:1},MuiTextField:{variant:"outlined"},MuiCheckbox:{disableRipple:!0}}});var Ge=function(){return r.a.createElement(s.a,{theme:Te},r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Ie}),r.a.createElement(l.a,{path:"/home",component:Ie}),r.a.createElement(l.a,{path:"/options",component:Ie}),r.a.createElement(l.a,{path:"/settings",component:Ie}),r.a.createElement(l.a,{path:"/notifications",component:Ie})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.52988610.chunk.js.map