(this.webpackJsonpstoragerentalpage=this.webpackJsonpstoragerentalpage||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t.n(a),c=t(7),r=t.n(c),l=(t(24),t(25),t(4)),i=t(2),o=function(e){return{type:"TOGGLE",payload:e}},j=function(e){return{type:"VALUE",payload:e}},d=t(0);function m(){var e=new Date(Date.now()).toISOString().split("T")[0],n=Object(i.c)((function(e){return e.toggleReducer})),t=Object(i.c)((function(e){return e.valueReducer})),s=Object(a.useState)(""),c=Object(l.a)(s,2),r=c[0],m=c[1],b=Object(a.useState)(""),O=Object(l.a)(b,2),u=O[0],h=O[1],x=Object(a.useState)(""),f=Object(l.a)(x,2),g=f[0],p=f[1],N=Object(a.useState)(t),k=Object(l.a)(N,2),v=(k[0],k[1],Object(a.useState)("")),S=Object(l.a)(v,2),C=S[0],B=S[1],P=Object(a.useState)(e),I=Object(l.a)(P,2),w=I[0],F=I[1],y=Object(i.b)();var R=parseInt(t.substring(0,2));return Object(d.jsx)("div",{className:"cover",children:Object(d.jsxs)("form",{className:"bookingWrapper",children:[Object(d.jsx)("p",{onClick:function(){y(o(!n))},className:"bookingClose",children:"x"}),Object(d.jsx)("h2",{className:"bookingH2",children:"BOKA F\xd6RR\xc5D"}),Object(d.jsx)("span",{className:"bookingSquareM",children:Object(d.jsxs)("select",{onChange:function(e){y(j(e.target.value))},children:[Object(d.jsxs)("option",{defaultValue:t,children:[t,"*"]}),Object(d.jsx)("option",{value:"4 m2 fr\xe5n 429kr/m\xe5nad",children:"4 m2 fr\xe5n 429kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"5 m2 fr\xe5n 529kr/m\xe5nad",children:"5 m2 fr\xe5n 529kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"6 m2 fr\xe5n 629kr/m\xe5nad",children:"6 m2 fr\xe5n 629kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"7 m2 fr\xe5n 729kr/m\xe5nad",children:"7 m2 fr\xe5n 729kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"8 m2 fr\xe5n 829kr/m\xe5nad",children:"8 m2 fr\xe5n 829kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"10 m2 fr\xe5n 1029kr/m\xe5nad",children:"10 m2 fr\xe5n 1029kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"11 m2 fr\xe5n 1129kr/m\xe5nad",children:"11 m2 fr\xe5n 1129kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"12 m2 fr\xe5n 1229kr/m\xe5nad",children:"12 m2 fr\xe5n 1229kr/m\xe5nad*"}),Object(d.jsx)("option",{value:"13 m2 fr\xe5n 1329kr/m\xe5nad",children:"13 m2 fr\xe5n 1329kr/m\xe5nad*"})]})}),Object(d.jsx)("span",{className:"bookingIntervall",children:Object(d.jsxs)("select",{onChange:function(e){return B(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Abonnemang:*"}),Object(d.jsxs)("option",{value:"M\xe5nadsvis ".concat(R,"99kr/m\xe5nad"),children:["M\xe5nadsvis ",R,"99kr/m\xe5nad*"]}),Object(d.jsxs)("option",{value:"6 m\xe5nader faktureringsintervall: ".concat(R,"69kr/m\xe5nad"),children:["6 m\xe5nader faktureringsintervall: ",R,"69kr/m\xe5nad*"]}),Object(d.jsxs)("option",{value:"12 m\xe5nader faktureringsintervall: ".concat(R,"29kr/m\xe5nad"),children:["12 m\xe5nader faktureringsintervall: ",R,"29kr/m\xe5nad*"]})]})}),Object(d.jsxs)("label",{className:"bookingStartDate",children:["\xd6nskat Startdatum:",Object(d.jsx)("input",{type:"date",defaultValue:e,min:e,onChange:function(e){return F(e.target.value)}})]}),Object(d.jsx)("input",{className:"footerInput",type:"email",placeholder:"Din MejlAdress*",value:r,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("input",{className:"footerInput",type:"text",placeholder:"Namn*",value:u,onChange:function(e){return h(e.target.value)}}),Object(d.jsx)("textarea",{className:"bookingMessage",type:"text",placeholder:"Meddelande*",maxLength:"500",value:g,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("button",{type:"button",className:"btn",onClick:function(){if(""!==C){var e=encodeURIComponent("F\xf6rr\xe5ds f\xf6rfr\xe5gan ".concat(u)),n=encodeURIComponent("Meddelande: ".concat(g," \n\nF\xf6rr\xe5dsstorlek: ").concat(t,"\n\nEmail: ").concat(r," \n\nNamn p\xe5 kund: ").concat(u,"\n\nBoknings l\xe4ngd: ").concat(C,"\n\nUpps\xe4gningsvillkor: Senast 2 veckor innan p\xe5b\xf6rjad m\xe5nad.\n\n\xd6vriga villkor: \n- Inneh\xe5llet i ert f\xf6rr\xe5d t\xe4cks av egen hemf\xf6rs\xe4kring.\n- Innefattar urst\xe4dning av f\xf6rr\xe5d senast utflyttningsdatum, \xf6vertr\xe4delse b\xf6ter 500kr.\n- Ej t\xf6mda f\xf6rr\xe5d efter 2 p\xe5minnelser, b\xf6tf\xe4lles i beaktning av kvarl\xe4mnat material (max b\xf6ter 5000kr).\n- Materialet tas till \xe5tervinningsstation.\n\nStart Datum: ").concat(w));window.location.href="mailto:forradshotelbjasta@hotmail.com?subject=".concat(e,"&body=").concat(n)}},children:"SKICKA F\xd6RFR\xc5GAN"})]})})}var b=t(3),O=t.n(b),u=t(6),h=t.n(u),x=t(8),f=t.n(x);function g(){var e=Object(i.c)((function(e){return e.toggleReducer})),n=Object(i.b)();return Object(d.jsxs)("nav",{className:"navWrapper",children:[Object(d.jsxs)("div",{className:"navBox1",children:[Object(d.jsx)(b.Icon,{className:"navLogo",icon:h.a}),Object(d.jsx)("p",{className:"ownerName",children:"F\xf6rr\xe5ds Hotel Bj\xe4sta"}),Object(d.jsx)("span",{className:"navPipe"})]}),Object(d.jsx)("div",{className:"navBox2",children:Object(d.jsxs)("ul",{className:"navUl",children:[Object(d.jsx)("li",{onClick:function(t){n(o(!e))},className:"navStorage",children:"Boka F\xf6rr\xe5d"}),Object(d.jsx)("li",{onClick:function(){window.scrollTo(0,2655)},children:"Vanliga Fr\xe5gor"}),Object(d.jsx)("li",{onClick:function(){window.scrollTo(0,3140)},children:"Info"})]})}),Object(d.jsxs)("div",{className:"navBox3",children:[Object(d.jsx)("span",{className:"navPipe"}),Object(d.jsxs)("p",{onClick:function(){window.scrollTo(0,3800)},className:"navMailAdress",children:[" ",Object(d.jsx)(b.Icon,{className:"navSnableA",icon:f.a}),"forradshotelbjasta@hotmail.com"]})]})]})}var p=t(14),N=t.n(p);function k(){return Object(d.jsx)("div",{className:"heroWrapper",children:Object(d.jsxs)("div",{className:"heroContentContainer",children:[Object(d.jsx)(O.a,{className:"heroLogo",icon:h.a}),Object(d.jsxs)("h1",{className:"heroH1",children:["VARMT F\xd6RR\xc5DSHOTELL I CENTRALA BJ\xc4STA",Object(d.jsx)("br",{}),"  DET FINNS OLIKA BEHOV AV F\xd6RR\xc5D",Object(d.jsx)("br",{}),"VI FYLLER DEM ALLA!!"]}),Object(d.jsx)("h2",{className:"heroH2",children:"V\xe5ra F\xf6rr\xe5d"}),Object(d.jsx)(O.a,{className:"heroArrow",icon:N.a})]})})}var v=t.p+"static/media/liten.d8548d69.png",S=t.p+"static/media/mellan.ed33a254.png",C=t.p+"static/media/stor.438d0eee.png";function B(){var e=Object(i.c)((function(e){return e.toggleReducer})),n=Object(i.b)();function t(t){n(o(!e)),n(j(t.target.value))}return Object(d.jsxs)("section",{className:"firstSectionWrapper",children:[Object(d.jsxs)("div",{className:"firstSectionContainer",children:[Object(d.jsx)("h3",{className:"firstSectionH3",children:"Liten"}),Object(d.jsx)("img",{className:"firstSectionImgSmall",src:v,alt:"smallstorage"}),Object(d.jsx)("p",{className:"firstSectionP",children:"4 m2 fr\xe5n 429kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"4 m2 fr\xe5n 429kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"firstSectionContainer",children:[Object(d.jsx)("h3",{className:"firstSectionH3",children:"Medium"}),Object(d.jsx)("img",{className:"firstSectionImgMedium",src:S,alt:"mediumstorage"}),Object(d.jsx)("p",{className:"firstSectionP",children:"8 m2 fr\xe5n 829kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"8 m2 fr\xe5n 829kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"firstSectionContainer",children:[Object(d.jsx)("h3",{className:"firstSectionH3",children:"Stor"}),Object(d.jsx)("img",{className:"firstSectionImgBig",src:C,alt:"storstorage"}),Object(d.jsx)("p",{className:"firstSectionP",children:"12 m2 fr\xe5n 1229kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"12 m2 fr\xe5n 1229kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]})]})}function P(){var e=Object(i.c)((function(e){return e.toggleReducer})),n=Object(i.b)();function t(t){n(o(!e)),n(j(t.target.value))}return Object(d.jsxs)("section",{className:"smallSectionWrapper",children:[Object(d.jsxs)("div",{className:"smallSectionContainer",children:[Object(d.jsx)("img",{className:"smallSectionImgSide",src:v,alt:"smallstorage"}),Object(d.jsx)("p",{className:"smallSectionP",children:"4 m2 fr\xe5n 429kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"4 m2 fr\xe5n 429kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"smallSectionContainer",children:[Object(d.jsx)("h3",{className:"smallSectionH3",children:"Liten"}),Object(d.jsx)("img",{className:"smallSectionImgSmall",src:v,alt:"smallstorage"}),Object(d.jsx)("p",{className:"smallSectionP",children:"5 m2 fr\xe5n 529kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"5 m2 fr\xe5n 529kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"smallSectionContainer",children:[Object(d.jsx)("img",{className:"smallSectionImgSide",src:v,alt:"smallstorage"}),Object(d.jsx)("p",{className:"smallSectionP",children:"6 m2 fr\xe5n 629kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"6 m2 fr\xe5n 629kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]})]})}function I(){var e=Object(i.c)((function(e){return e.toggleReducer})),n=Object(i.b)();function t(t){n(o(!e)),n(j(t.target.value))}return Object(d.jsxs)("section",{className:"mediumSectionWrapper",children:[Object(d.jsxs)("div",{className:"mediumSectionContainer",children:[Object(d.jsx)("img",{className:"mediumSectionImgSide",src:S,alt:"mediumstorage"}),Object(d.jsx)("p",{className:"mediumSectionP",children:"7 m2 fr\xe5n 729kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"7 m2 fr\xe5n 729kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"mediumSectionContainer",children:[Object(d.jsx)("h3",{className:"mediumSectionH3",children:"Medium"}),Object(d.jsx)("img",{className:"mediumSectionImgCenter",src:S,alt:"mediumstorage"}),Object(d.jsx)("p",{className:"mediumSectionP",children:"8 m2 fr\xe5n 829kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"8 m2 fr\xe5n 829kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"mediumSectionContainer",children:[Object(d.jsx)("img",{className:"mediumSectionImgSide",src:S,alt:"mediumstorage"}),Object(d.jsx)("p",{className:"mediumSectionP",children:"10 m2 fr\xe5n 1029kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"10 m2 fr\xe5n 1029kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]})]})}function w(){var e=Object(i.c)((function(e){return e.toggleReducer})),n=Object(i.b)();function t(t){n(o(!e)),n(j(t.target.value))}return Object(d.jsxs)("section",{className:"bigSectionWrapper",children:[Object(d.jsxs)("div",{className:"bigSectionContainer",children:[Object(d.jsx)("img",{className:"bigSectionImgSide",src:C,alt:"bigstorage"}),Object(d.jsx)("p",{className:"bigSectionP",children:"11 m2 fr\xe5n 1129kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"11 m2 fr\xe5n 1129kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"bigSectionContainer",children:[Object(d.jsx)("h3",{className:"bigSectionH3",children:"Stor"}),Object(d.jsx)("img",{className:"bigSectionImgSide",src:C,alt:"smallstorage"}),Object(d.jsx)("p",{className:"bigSectionP",children:"12 m2 fr\xe5n 1229kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"12 m2 fr\xe5n 1229kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]}),Object(d.jsxs)("div",{className:"bigSectionContainer",children:[Object(d.jsx)("img",{className:"bigSectionImgSide",src:C,alt:"smallstorage"}),Object(d.jsx)("p",{className:"bigSectionP",children:"13 m2 fr\xe5n 1329kr/m\xe5nad"}),Object(d.jsx)("button",{onClick:t,value:"13 m2 fr\xe5n 1329kr/m\xe5nad",className:"btn2",children:"Boka F\xf6rr\xe5d"})]})]})}function F(){return Object(d.jsxs)("article",{className:"questionsWrapper",children:[Object(d.jsxs)("ul",{className:"questionsUl",children:[Object(d.jsx)("li",{children:"\xd6ppettider?"}),Object(d.jsx)("li",{children:"F\xf6rs\xe4kringar?"}),Object(d.jsx)("li",{children:"Minsta hyrtid?"})]}),Object(d.jsxs)("ul",{className:"questionsUl",children:[Object(d.jsx)("li",{children:"Alla dagar 7-22."}),Object(d.jsx)("li",{children:"Egen hemf\xf6rs\xe4kring g\xe4ller."}),Object(d.jsx)("li",{children:"1 m\xe5nad."})]}),Object(d.jsx)("h3",{className:"questionsH3",children:"Vanliga Fr\xe5gor"}),Object(d.jsxs)("ul",{className:"questionsUl",children:[Object(d.jsx)("li",{children:"Moms?"}),Object(d.jsx)("li",{children:"Vad kan jag ej?"}),Object(d.jsx)("li",{children:"Upps\xe4gning?"})]}),Object(d.jsxs)("ul",{className:"questionsUl",children:[Object(d.jsx)("li",{children:"F\xf6r privatpersoner \xe4r det momsbefriat."}),Object(d.jsx)("li",{children:"Brandfarligt gods, kraftigt luktande gods s\xe5som: kemikaler, r\xe5varor m.m."}),Object(d.jsx)("li",{children:"Upps\xe4gning senast 2 veckor innan p\xe5b\xf6rjad m\xe5nad."})]})]})}function y(){return Object(d.jsxs)("article",{className:"infoWrapper",children:[Object(d.jsx)("h3",{className:"infoH3",children:"Info"}),Object(d.jsx)("p",{className:"infoP",children:"Magasin i \xd6rnsk\xf6ldsvik n\xe4rmare best\xe4mt i Bj\xe4sta. F\xf6rr\xe5dsuthyrning i storlekar fr\xe5n 4 upp till 13kvm med en takh\xf6jd p\xe5 2,5meter. Byggnaden \xe4r utrustad med kameror och r\xf6relse aktiverade ljus samt insynsskyddad, ytterd\xf6rr med pinkod o passage sker med egenvald kod. Tillg\xe5ng till f\xf6rr\xe5d 365 dagar om \xe5ret kl 7-22. F\xf6rr\xe5d l\xe5ses med egna h\xe4ngl\xe5s."}),Object(d.jsx)("h3",{className:"infoH3",children:"\xd6vriga villkor"}),Object(d.jsx)("p",{className:"infoP",children:"Inneh\xe5llet i ert f\xf6rr\xe5d t\xe4cks av egen hemf\xf6rs\xe4kring. - Innefattar urst\xe4dning av f\xf6rr\xe5d senast utflyttningsdatum, \xf6vertr\xe4delse b\xf6ter 500kr. - Ej t\xf6mda f\xf6rr\xe5d efter 2 p\xe5minnelser, b\xf6tf\xe4lles i beaktning av kvarl\xe4mnat material (max b\xf6ter 5000kr). - Materialet tas till \xe5tervinningsstation."}),Object(d.jsx)("h3",{className:"infoH3",children:"GDPR"}),Object(d.jsxs)("p",{className:"infoP",children:["Vi f\xf6ljer lagen om GDPR, h\xe4r finns en  ",Object(d.jsx)("a",{href:"https://www.dnb.com/sv-se/dataskydd/gdpr/.html?gad=1&gclid=CjwKCAiA0syqBhBxEiwAeNx9NwuWpwtEsR6_qZCBcEFH5bTdtKZ_gm790lOoTnmlNLV1ipQkC4vx0hoCtBEQAvD_BwE&gclsrc=aw.ds",target:"_blank",children:"L\xe4nk"})," f\xf6r mer information om den lagen. "]})]})}var R=t(15),E=t.n(R),A=t(16),L=t.n(A),T=t(17),H=t.n(T);function M(){return Object(d.jsxs)("section",{className:"infoPoppersWrapper",children:[Object(d.jsx)("h3",{className:"infoPoppersH3",children:"V\xe4lkommen till F\xf6rr\xe5ds Hotel Bj\xe4sta!"}),Object(d.jsxs)("div",{className:"infoPoppersContainer",children:[Object(d.jsxs)("div",{className:"infoPoppersBox",children:[Object(d.jsx)("div",{className:"infoPoppersEllipse",children:Object(d.jsx)(b.Icon,{className:"infoPoppersIcon",icon:E.a})}),Object(d.jsx)("p",{className:"infoPoppersP",children:"S\xe4kert!"}),Object(d.jsx)("p",{className:"infoPoppersP",children:"Byggnaden \xe4r utrustad med kameror och r\xf6relse aktiverade ljus samt insynsskyddad."})]}),Object(d.jsxs)("div",{className:"infoPoppersBox",children:[Object(d.jsx)("div",{className:"infoPoppersEllipse",children:Object(d.jsx)(b.Icon,{className:"infoPoppersIcon",icon:L.a})}),Object(d.jsx)("p",{className:"infoPoppersP",children:"Tillg\xe4ngligt!"}),Object(d.jsx)("p",{className:"infoPoppersP",children:"Tillg\xe5ng till f\xf6rr\xe5d 365 dagar om \xe5ret kl 7-22 passage med egen kod."})]}),Object(d.jsxs)("div",{className:"infoPoppersBox",children:[Object(d.jsx)("div",{className:"infoPoppersEllipse",children:Object(d.jsx)(b.Icon,{className:"infoPoppersIcon",icon:H.a})}),Object(d.jsx)("p",{className:"infoPoppersP",children:"Fr\xe4scht!"}),Object(d.jsx)("p",{className:"infoPoppersP",children:"Varm f\xf6rr\xe5d som \xe4r hela och rena och samt \xe4r byggnaden isolerad!"})]})]})]})}var V=t(18),_=t.n(V),D=t(19),U=t.n(D);function W(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],s=n[1],c=Object(a.useState)(""),r=Object(l.a)(c,2),j=r[0],m=r[1],b=Object(a.useState)(""),u=Object(l.a)(b,2),x=u[0],g=u[1],p=Object(i.c)((function(e){return e.toggleReducer})),N=Object(i.b)();return Object(d.jsxs)("footer",{className:"footerWrapper",children:[Object(d.jsxs)("div",{className:"footerBox",children:[Object(d.jsx)("p",{onClick:function(e){N(o(!p))},className:"footerP",children:"Boka F\xf6rr\xe5d"}),Object(d.jsx)("p",{onClick:function(){window.scrollTo(0,500)},className:"footerP",children:"V\xe5ra F\xf6rr\xe5d"}),Object(d.jsx)("p",{onClick:function(){window.scrollTo(0,2655)},className:"footerP",children:"Vanliga Fr\xe5gor"}),Object(d.jsx)("p",{onClick:function(){window.scrollTo(0,3140)},className:"footerP",children:"Info"})]}),Object(d.jsxs)("div",{className:"footerBox",children:[Object(d.jsx)("h3",{className:"footerH3",children:"Kontakta Oss"}),Object(d.jsx)(O.a,{className:"footerSnabel",icon:f.a}),Object(d.jsxs)("div",{className:"footerBox",children:[Object(d.jsx)("input",{className:"footerInput",type:"text",placeholder:"Namn*",value:t,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("input",{className:"footerInput",type:"text",placeholder:"MejlAdress*",value:j,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("textarea",{className:"footerTextArea",type:"text",placeholder:"Meddelande*",value:x,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("button",{className:"btn",onClick:function(){var e=encodeURIComponent("F\xf6rr\xe5ds fr\xe5gor ".concat(t)),n=encodeURIComponent(x);window.location.href="mailto:forradshotelbjasta@hotmail.com?subject=".concat(e,"&body=").concat(n)},children:"Skicka Mejl"}),Object(d.jsx)("p",{className:"footerCopywright",children:"Copywright F\xf6rr\xe5ds Hotel Bj\xe4sta AB 2021"})]})]}),Object(d.jsxs)("div",{className:"footerBox",children:[Object(d.jsxs)("a",{href:"http://localhost:3000/",className:"footerBoxRight",children:[Object(d.jsx)(O.a,{className:"footerLogo",icon:h.a}),Object(d.jsx)("p",{className:"footerP",children:"F\xf6rr\xe5ds Hotel Bj\xe4sta"})]}),Object(d.jsxs)("a",{href:"https://www.google.se/maps/place/Orkesterv%C3%A4gen+19,+893+30+Bj%C3%A4sta/@63.2040748,18.5043895,17z/data=!3m1!4b1!4m5!3m4!1s0x467b540cafc2a55f:0xe0d83c8d7b27c6b8!8m2!3d63.2040724!4d18.5065782",target:"_blank",rel:"noreferrer",className:"footerBoxRight",children:[Object(d.jsx)(O.a,{className:"footerLogo",icon:_.a}),Object(d.jsx)("p",{className:"footerP",children:"Orkesterv\xe4gen 19, 893 30 Bj\xe4sta"})]}),Object(d.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=61553516910517",target:"_blank",rel:"noreferrer",className:"footerBoxRight",children:[Object(d.jsx)(O.a,{className:"footerLogo",icon:U.a}),Object(d.jsx)("p",{className:"footerP",children:"F\xf6rr\xe5ds Hotel Bj\xe4sta"})]})]})]})}var q=function(){var e=Object(i.c)((function(e){return e.toggleReducer}));return Object(d.jsxs)("main",{className:"App",children:[e?Object(d.jsx)(m,{}):"",Object(d.jsx)(g,{}),Object(d.jsx)(k,{}),Object(d.jsx)(B,{}),Object(d.jsx)(P,{}),Object(d.jsx)(I,{}),Object(d.jsx)(w,{}),Object(d.jsx)(F,{}),Object(d.jsx)(y,{}),Object(d.jsx)(M,{}),Object(d.jsx)(W,{})]})},G=t(5),K=Object(G.b)({toggleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE":return n.payload;default:return e}},valueReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"V\xe4lj F\xf6rr\xe5d",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"VALUE":return n.payload;default:return e}}}),X=Object(G.c)(K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{store:X,children:Object(d.jsx)(q,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7045bf05.chunk.js.map