(this["webpackJsonpreact-landing-page-v1"]=this["webpackJsonpreact-landing-page-v1"]||[]).push([[0],{131:function(e,t,s){},132:function(e,t,s){},134:function(e,t,s){},136:function(e,t,s){},137:function(e,t,s){},146:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),a=s(29),n=s.n(a),l=(s(131),s(132),s(133),s.p+"static/media/1.d0843629.jpeg"),r=s.p+"static/media/2.74abbaf4.jpeg",j=s.p+"static/media/3.b1151d40.jpg",d=(s(134),s(1)),o=s(7),b=(s(136),s(82)),h=function(e){var t=e.navbarLinks,s=Object(i.useState)(!1),c=Object(o.a)(s,2),a=c[0],n=c[1],l=function(){n(!a)};return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("span",{className:"navbar__logo",children:"Platino Eventos"}),a?Object(d.jsx)(b.b,{size:25,className:"navbar__menu",onClick:l}):Object(d.jsx)(b.a,{size:25,className:"navbar__menu",onClick:l}),Object(d.jsx)("ul",{className:a?"navbar__list navbar__list--active":"navbar__list",children:t.map((function(e,t){return Object(d.jsx)("li",{className:"navbar__item",children:Object(d.jsx)("a",{className:"navbar__link",href:e.url,children:e.title})},t)}))})]})},x=(s(137),s(49)),O=function(e){var t=e.imageSrc,s=e.title,i=e.subtitle,c=e.flipped,a=Object(x.a)({threshold:.4}),n=a.ref,l=a.inView;return Object(d.jsx)("div",{className:l?"slider slider--zoom":"slider",ref:n,children:c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"slider__content",children:[Object(d.jsx)("h1",{className:"slider__title",children:s}),Object(d.jsx)("p",{children:i})]}),Object(d.jsx)("img",{src:t,alt:"Travel",className:"slider__image"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:t,alt:"Travel",className:"slider__image"}),Object(d.jsxs)("div",{className:"slider__content",children:[Object(d.jsx)("h1",{className:"slider__title",children:s}),Object(d.jsx)("p",{children:i})]})]})})},m=s(14),u=s(17),p=s(218),g=s(227),v=s(212),f=s(211),_=s(209),N=s(210),y=(s(90),s(221)),S=s(228),z=s(223),C=s(222),w=s(224),k=s(215),A=s(213),E=s(225),L=s(217),I=s(200),F=s(226),T=s(214),P=s.p+"static/media/6.051562c9.JPEG",B=c.a.forwardRef((function(e,t){return Object(d.jsx)(A.a,Object(u.a)({elevation:6,ref:t,variant:"filled"},e))})),M=function(e){e.imageSrc;var t=e.title,s=e.subtitle,i=e.flipped,a=c.a.useState([0]),n=Object(o.a)(a,2),l=n[0],r=n[1],j=function(e){return function(){var t=l.indexOf(e),s=Object(m.a)(l);-1===t?s.push(e):s.splice(t,1),r(s)}},b=Object(x.a)({threshold:.4}),h=b.ref,O=b.inView,A=c.a.useState(!1),M=Object(o.a)(A,2),D=M[0],G=M[1],J=function(){G(!0)},q=function(e,t){"clickaway"!==t&&G(!1)},R=c.a.useState("1"),V=Object(o.a)(R,2),Y=V[0],$=V[1];return Object(d.jsx)("div",{className:O?"eventos eventos--zoom":"eventos",ref:h,children:i?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"eventos__content",children:[Object(d.jsx)("h1",{className:"eventos__title",children:"Agendar"}),Object(d.jsx)("p",{children:"Datos del contacto"}),Object(d.jsxs)(y.a,{style:{width:"-webkit-fill-available"},sx:{maxWidth:1200},children:[Object(d.jsx)(C.a,{component:"img",alt:"salon",height:"220",image:P}),Object(d.jsxs)(z.a,{children:[Object(d.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Sasago"}),Object(d.jsx)(w.a,{variant:"body2",color:"text.secondary",children:"Jard\xedn"}),Object(d.jsxs)(E.a,{dense:!0,sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(d.jsx)("p",{children:"Estacionamiento"}),Object(d.jsx)("p",{children:"Ba\xf1os"}),Object(d.jsx)("p",{children:"Este es un dato simple"}),[0,1,2,3].map((function(e){var t="checkbox-list-secondary-label-".concat(e);return Object(d.jsx)(L.a,{secondaryAction:Object(d.jsx)(T.a,{edge:"end",onChange:j(e),checked:-1!==l.indexOf(e),inputProps:{"aria-labelledby":t}}),disablePadding:!0,children:Object(d.jsx)(I.a,{children:Object(d.jsx)(F.a,{id:t,primary:"Line item ".concat(e+1)})})},e)}))]}),Object(d.jsx)(g.a,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:Object(d.jsx)(v.a,{id:"outlined-basic",label:"Nombre",variant:"outlined"})}),Object(d.jsx)(g.a,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:Object(d.jsx)(v.a,{id:"outlined-basic",label:"Numero de celular",variant:"outlined",type:"number"})}),Object(d.jsx)(g.a,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:Object(d.jsx)(v.a,{id:"outlined-basic",label:"email",variant:"outlined",type:"email"})}),Object(d.jsx)(g.a,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:Object(d.jsx)(_.b,{dateAdapter:f.a,children:Object(d.jsx)(N.a,{label:"Elige tu fecha",value:Y,onChange:function(e){$(e)},renderInput:function(e){return Object(d.jsx)(v.a,Object(u.a)({},e))}})})})]}),Object(d.jsxs)(S.a,{children:[Object(d.jsx)(p.a,{variant:"contained",onClick:J,children:"Agendar"}),Object(d.jsx)(p.a,{size:"small",children:"Share"}),Object(d.jsx)(p.a,{size:"small",children:"Learn More"})]}),Object(d.jsx)(k.a,{open:D,autoHideDuration:6e3,onClose:q,children:Object(d.jsx)(B,{onClose:q,severity:"success",sx:{width:"100%"},children:"Se ha enviado su solicitud!"})})]})]})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"eventos__image",children:Object(d.jsx)("h2",{children:"Salon"})}),Object(d.jsxs)("div",{className:"eventos__content",children:[Object(d.jsx)("h1",{className:"eventos__title",children:t}),Object(d.jsx)("p",{children:s})]})]})})},D=function(e){e.imageSrc;var t=e.title,s=e.subtitle,i=e.flipped,a=Object(x.a)({threshold:.4}),n=a.ref,l=a.inView,r=c.a.useState("1"),j=Object(o.a)(r,2);j[0],j[1];return Object(d.jsx)("div",{className:l?"eventos eventos--zoom":"eventos",ref:n,children:i?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{class:"hover-table-layout",children:[Object(d.jsxs)("div",{class:"listing-item",children:[Object(d.jsxs)("figure",{class:"image",children:[Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg",alt:"image"}),Object(d.jsx)("figcaption",{children:Object(d.jsxs)("div",{class:"caption",children:[Object(d.jsx)("h1",{children:"$10000"}),Object(d.jsx)("p",{children:"lorem"})]})})]}),Object(d.jsxs)("div",{class:"listing",children:[Object(d.jsx)("h4",{children:"Show catalogue listing"}),Object(d.jsx)("h4",{children:"Email signatures and banners"}),Object(d.jsx)("h4",{children:"E-invitations"}),Object(d.jsx)("h4",{children:"Online brochures"})]})]}),Object(d.jsxs)("div",{class:"listing-item",children:[Object(d.jsxs)("figure",{class:"image",children:[Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg",alt:"image"}),Object(d.jsx)("figcaption",{children:Object(d.jsxs)("div",{class:"caption",children:[Object(d.jsx)("h1",{children:"$ 2000"}),Object(d.jsx)("p",{children:"lorem"})]})})]}),Object(d.jsxs)("div",{class:"listing",children:[Object(d.jsx)("h4",{children:"Press releases"}),Object(d.jsx)("h4",{children:"Company logos for online listings"}),Object(d.jsx)("h4",{children:"Product categories"}),Object(d.jsx)("h4",{children:"Using the ADIPEC logo on exhibitor advertising"}),Object(d.jsx)("h4",{children:"Commercial opportunities in the preview and show dailies"})]})]}),Object(d.jsxs)("div",{class:"listing-item",children:[Object(d.jsxs)("figure",{class:"image",children:[Object(d.jsx)("img",{src:"https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg",alt:"image"}),Object(d.jsx)("figcaption",{children:Object(d.jsxs)("div",{class:"caption",children:[Object(d.jsx)("h1",{children:"$100"}),Object(d.jsx)("p",{children:"lorem"})]})})]}),Object(d.jsxs)("div",{class:"listing",children:[Object(d.jsx)("h4",{children:"Mobile app listing"}),Object(d.jsx)("h4",{children:"Order visitor badges"}),Object(d.jsx)("h4",{children:"Global meetings programme"}),Object(d.jsx)("h4",{children:"Get Social"})]})]})]})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"eventos__image",children:Object(d.jsx)("h2",{children:"Salon"})}),Object(d.jsxs)("div",{className:"eventos__content",children:[Object(d.jsx)("h1",{className:"eventos__title",children:t}),Object(d.jsx)("p",{children:s})]})]})})},G=s.p+"static/media/5.11bd7e79.jpg",J=s(44);var q=function(){return Object(d.jsxs)(J.a,{children:[Object(d.jsxs)(J.a.Item,{interval:2e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:l,alt:"First slide"}),Object(d.jsxs)(J.a.Caption,{children:[Object(d.jsx)("h3",{children:"SASAGO SALON1"}),Object(d.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(d.jsxs)(J.a.Item,{interval:2e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:r,alt:"Second slide"}),Object(d.jsxs)(J.a.Caption,{children:[Object(d.jsx)("h3",{children:"SALON 2 NOMBRE"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(d.jsxs)(J.a.Item,{interval:2e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:G,alt:"Third slide"}),Object(d.jsxs)(J.a.Caption,{children:[Object(d.jsx)("h3",{children:"SALON 3 NOMBRE"}),Object(d.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})};var R=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{navbarLinks:[{url:"#",title:"Inicio"},{url:"#",title:"Nosotros"},{url:"#",title:"Cotizar"},{url:"#",title:"Contacto"}]}),Object(d.jsx)(q,{}),Object(d.jsx)(O,{imageSrc:r,title:"Salon Sasago",subtitle:"es un espacio ideal para realizar todo tipo de eventos sociales, empresariales, estudiantiles y mucho m\xe1s, cuenta con un dise\xf1o arquitect\xf3nico totalmente diferente, simulando un gran jard\xedn exterior con toda comodidad y confort de un \xe1rea totalmente cerrada y climatizada.es un espacio ideal para realizar todo tipo de eventos sociales, empresariales, estudiantiles y mucho m\xe1s, cuenta con un dise\xf1o arquitect\xf3nico totalmente diferente, simulando un gran jard\xedn exterior con toda comodidad y confort de un \xe1rea totalmente cerrada y climatizada."}),Object(d.jsx)(O,{imageSrc:j,title:"Salon 2",subtitle:"Un salon de en sue\xf1o.",flipped:!0}),Object(d.jsx)(M,{title:"Salon 3",subtitle:"Este es el tercer salon donde hacen pruebas",flipped:!0}),Object(d.jsx)(D,{title:"Salon 3",subtitle:"Este es el tercer salon donde hacen pruebas",flipped:!0})]})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,231)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),a(e),n(e)}))};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),V()},90:function(e,t,s){}},[[146,1,2]]]);
//# sourceMappingURL=main.5a273e1b.chunk.js.map