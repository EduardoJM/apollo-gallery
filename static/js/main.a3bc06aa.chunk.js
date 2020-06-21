(this["webpackJsonpapollo-gallery"]=this["webpackJsonpapollo-gallery"]||[]).push([[0],{26:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(21),c=t.n(i),l=t(3),o=t(1),s=t(2);function d(){var n=Object(o.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n    \n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        background: #FFF;\n        color: #7c8081;\n        font-family: 'Roboto', sans-serif;\n    }\n"]);return d=function(){return n},n}var m=Object(s.a)(d());function u(){var n=Object(o.a)(["\n    flex: 1;\n"]);return u=function(){return n},n}function p(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    padding-left: 200px;\n\n    @media screen and (max-width: 700px) {\n        padding-left: 0;\n        padding-top: 60px;\n    }\n"]);return p=function(){return n},n}var f=s.c.div(p()),g=s.c.div(u()),x=t(5);function h(){var n=Object(o.a)(["\n        @media screen and (max-width: 700px) {\n            svg {\n                transform: rotate(-90deg);\n            }\n        }\n    "]);return h=function(){return n},n}function b(){var n=Object(o.a)(["\n    position: fixed;\n    left: 10px;\n    top: 10px;\n    z-index: 100;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    color: #555;\n    background: #FFF;\n    padding: 5px;\n    border-radius: 4px;\n\n    @media screen and (min-width: 701px) {\n        display: none;\n    }\n\n    ","\n\n    i.libre {\n        width: 32px;\n        height: 32px;\n\n        svg {\n            width: 32px !important;\n            height: 32px !important;\n            fill: #555;\n            transition: ease 0.5s;\n        }\n    }\n"]);return b=function(){return n},n}function E(){var n=Object(o.a)(["\n    width: 42px;\n    height: 42px;\n    margin: 0 5px !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i.libre {\n        width: 32px;\n        height: 32px;\n\n        svg {\n            width: 32px !important;\n            height: 32px !important;\n            max-width: 32px;\n            fill: #555;\n        }\n    }\n"]);return E=function(){return n},n}function v(){var n=Object(o.a)(["\n            display: flex;\n        "]);return v=function(){return n},n}function w(){var n=Object(o.a)(["\n    width: 200px;\n    height: 100vh;\n    position: fixed;\n    background: #fff;\n    left: 0;\n    top: 0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: center;\n\n    padding: 10px 20px;\n\n    z-index: 50;\n\n    @media screen and (max-width: 700px) {\n        display: none;\n        width: 300px;\n        padding-top: 80px;\n        justify-content: flex-start;\n\n        ","\n    }\n\n    @media screen and (max-width: 300px) {\n        width: 200px;\n    }\n\n    > h3 {\n        font-size: 14px;\n        font-weight: 100;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        margin-bottom: 30px;\n\n        a {\n            color: #555;\n            text-decoration: none;\n            margin: 5px 0;\n        }\n\n        &.social-area {\n            flex-direction: row;\n            flex-wrap: wrap;\n            justify-content: flex-start;\n            align-items: center;\n        }\n    }\n"]);return w=function(){return n},n}var j=s.c.div(w(),(function(n){return n.mobileVisible&&Object(s.b)(v())})),y=s.c.a(E()),S=s.c.button(b(),(function(n){return n.mobileVisible&&Object(s.b)(h())}));function A(){var n=Object(a.useState)(!1),e=Object(x.a)(n,2),t=e[0],i=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{mobileVisible:t,onClick:function(){i(!t)}},r.a.createElement("i",{className:"libre","data-icon":"gui-menu","data-color":"true"})),r.a.createElement(j,{mobileVisible:t},r.a.createElement("h3",null,"O Site"),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},"In\xedcio")),r.a.createElement("h3",null,"Galerias Dispon\xedveis"),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/g"},"Galerias"),r.a.createElement(l.b,{to:"/m"},"Rolos de C\xe2mera")),r.a.createElement("h3",null,"Criador"),r.a.createElement("div",{className:"social-area"},r.a.createElement(y,{href:"https://eduardojm.github.io/",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"gui-link"})),r.a.createElement(y,{href:"https://www.instagram.com/edu.js.o/",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"social-instagram"})),r.a.createElement(y,{href:"https://www.linkedin.com/in/edujso",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"social-linkedin"})),r.a.createElement(y,{href:"https://github.com/eduardojm/",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"social-github"}))),r.a.createElement("h3",null,"C\xf3digo-Fonte"),r.a.createElement("div",{className:"social-area"},r.a.createElement(y,{href:"https://github.com/EduardoJM/apollo-gallery",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"social-github"})))))}var k=t(10),O=t.n(k),N=t(11),z=function(n){var e=n.children,t=n.location,i=Object(a.useState)(t),c=Object(x.a)(i,2),l=c[0],o=c[1];return Object(a.useEffect)((function(){t!==l&&(window.scrollTo(0,0),o(t))}),[t,l]),r.a.createElement(r.a.Fragment,null,e)};z.propTypes={children:O.a.array,location:O.a.object},z.defaultProps={children:null,location:null};var I=Object(N.h)(z);function F(){var n=Object(o.a)(["\n    header {\n        padding: 20px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 100px;\n        color: #000;\n\n        > i.libre {\n            margin-right: 20px;\n            width: 86px;\n            height: 86px;\n\n            svg {\n                width: 86px !important;\n                height: 86px !important;\n            }\n        }\n\n        > div {\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            justify-content: center;\n\n            h1 {\n                font-size: 24px;\n                font-weight: normal;\n            }\n\n            h2 {\n                font-size: 18px;\n                font-weight: 100;\n            }\n        }\n    }\n\n    .icons-block {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: baseline;\n\n        > .icon {\n            flex: 0 0 33.33%;\n            padding: 20px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: baseline;\n\n            > i.libre {\n                width: 150px;\n                height: 150px;\n                margin: 20px 0;\n\n                > svg {\n                    width: 150px !important;\n                    height: 150px !important;\n                }\n            }\n\n            > span {\n                padding: 10px 40px;\n                text-align: center;\n                font-weight: 100;\n            }\n        }\n    }\n\n    .gallery-block {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n\n        h2 {\n            text-align: center;\n            font-size: 32px;\n            font-weight: normal;\n            padding: 30px 0;\n        }\n\n        > .gallery-item {\n            display: flex;\n            flex-direction: row;\n\n            > .gallery-image {\n                width: 60%;\n                height: 400px;\n                background-size: cover;\n                background-position: center;\n\n                &.galleries {\n                    background-image: url(https://www.hq.nasa.gov/office/pao/History/alsj/a11/ap11-69-HC-616.jpg);\n                }\n\n                &.magazines {\n                    background-image: url(https://www.hq.nasa.gov/office/pao/History/alsj/a11/AS11-36-5299.jpg);\n                }\n            }\n\n            > .gallery-text {\n                flex: 1;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n\n                > h3 {\n                    font-weight: normal;\n                    font-size: 24px;\n                }\n\n                > h4 {\n                    font-weight: 100;\n                    font-size: 18px;\n                }\n\n                > div {\n                    padding: 20px;\n\n                    > a {\n                        text-decoration: none;\n                        color: #555;\n                        text-transform: uppercase;\n                    }\n                }\n            }\n        }\n    }\n\n    .about-block {\n        margin: 20px 0;\n        padding: 20px;\n\n        p {\n            text-align: justify;\n            font-weight: 100;\n            font-size: 18px\n        }\n    }\n\n    @media screen and (max-width: 900px) {\n        .icons-block {\n            > .icon {\n                flex: 0 0 50%;\n            }\n        }\n    }\n\n    @media screen and (max-width: 500px) {\n        header {\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n\n            > svg {\n                margin: 20px 0;\n            }\n\n            > div {\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                \n                h1, h2 {\n                    text-align: center;\n                }\n            }\n        }\n\n        .icons-block {\n            > .icon {\n                flex: 0 0 100%;\n            }\n        }\n\n        .gallery-block {\n            .gallery-item {\n                flex-wrap: wrap;\n\n                .gallery-image {\n                    width: 100% !important;\n                    margin: 10px 0;\n                }\n\n                &:last-of-type {\n                    flex-direction: column-reverse;\n                }\n            }\n        }\n    }\n"]);return F=function(){return n},n}var M=s.c.div(F()),C=["Projeto criado por Eduardo Oliveira com o intuito de facilitar a exibi\xe7\xe3o das imagens da galeria das miss\xf5es lunares Apollo. Todas as informa\xe7\xf5es das imagens foram retiradas do site Apollo Archive. Esse projeto consiste de diversas etapas, dentre as quais est\xe3o a raspagem de informa\xe7\xf5es do site, a organiza\xe7\xe3o dos mesmos e, posteriormente, a cria\xe7\xe3o dessa interface gr\xe1fica, em React, para a exibi\xe7\xe3o das imagens. \xc9 importante, ressaltar, ainda, que as imagens n\xe3o foram hospedadas novamente e est\xe3o sendo carregadas do site da NASA."];function G(){return r.a.createElement(M,null,r.a.createElement("header",null,r.a.createElement("i",{className:"libre","data-icon":"weather-moon-waxing-crescent-2"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Galeria de Imagens"),r.a.createElement("h2",null,"Miss\xe3o Apollo"))),r.a.createElement("div",{className:"gallery-block"},r.a.createElement("h2",null,"Galerias"),r.a.createElement("div",{className:"gallery-item"},r.a.createElement("div",{className:"gallery-image galleries"}),r.a.createElement("div",{className:"gallery-text"},r.a.createElement("h3",null,"Galerias"),r.a.createElement("h4",null,"Ordenadas por miss\xe3o"),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/g"},"Ver Galerias")))),r.a.createElement("div",{className:"gallery-item"},r.a.createElement("div",{className:"gallery-text"},r.a.createElement("h3",null,"Magazines"),r.a.createElement("h4",null,"Rolos de c\xe2meras Hasselblad"),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/m"},"Ver Magazines"))),r.a.createElement("div",{className:"gallery-image magazines"})),r.a.createElement("h2",null,"Sobre")),r.a.createElement("div",{className:"about-block"},C.map((function(n){return r.a.createElement("p",{key:n},n)}))),r.a.createElement("div",{className:"gallery-block"},r.a.createElement("h2",null,"Funcionalidades")),r.a.createElement("div",{className:"icons-block"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"libre","data-icon":"gui-gallery"}),r.a.createElement("span",null,"Galerias ordenadas por programa, miss\xe3o e rolos de c\xe2meras dispon\xedveis.")),r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"libre","data-icon":"brand-nasa"}),r.a.createElement("span",null,"Imagens carregadas diretamente do site da NASA.")),r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"libre","data-icon":"tech-mobile"}),r.a.createElement("span",null,"Interface ajustada para visualiza\xe7\xe3o em smartphones."))))}function P(){var n=Object(o.a)(["\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    i.libre {\n        width: 256px;\n        height: 256px;\n        margin-bottom: 20px;\n\n        svg {\n            width: 256px !important;\n            height: 256px !important;\n        }\n    }\n\n    h1 {\n        font-size: 32px;\n        font-weight: normal;\n        margin-bottom: 10px;\n        text-align: center;\n    }\n\n    h2, h3 {\n        font-size: 24px;\n        font-weight: 100;\n        margin-bottom: 10px;\n        text-align: center;\n\n        a {\n            text-decoration: none;\n            color: #555;\n        }\n    }\n\n    @media screen and (max-width: 700px) {\n        height: auto;\n        padding-top: 100px;\n    }\n"]);return P=function(){return n},n}var T=s.c.div(P());function V(){return r.a.createElement(T,null,r.a.createElement("i",{className:"libre","data-icon":"tech"}),r.a.createElement("h1",null,"Ops!"),r.a.createElement("h2",null,"Parece que o conte\xfado que estava procurando n\xe3o foi embarcado..."),r.a.createElement("h3",null,r.a.createElement(l.b,{to:"/"},"In\xedcio")))}var J=t(8),R=t.n(J),q=t(12);function H(){var n=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: space-evenly;\n"]);return H=function(){return n},n}function K(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n\n    > h1 {\n        margin: 20px 0;\n        text-align: center;\n        font-size: 24px;\n    }\n"]);return K=function(){return n},n}var L=s.c.div(K()),B=s.c.div(H());function D(){var n=Object(o.a)(["\n    flex: 0 0 calc(33.33% - 50px);\n    margin-bottom: 60px;\n\n    @media screen and (max-width: 800px) {\n        flex: 0 0 calc(50% - 50px);\n    }\n\n    @media screen and (max-width: 500px) {\n        flex: 0 0 calc(100% - 50px);\n    }\n\n    > h2 {\n        font-weight: normal;\n        font-size: 15px;\n        text-align: right;\n        margin: 5px 0;\n\n        a {\n            color: #7c8081;\n            text-decoration: none;\n        }\n    }\n\n    > h3 {\n        font-weight: 100;\n        font-size: 14px;\n        text-align: right;\n        margin: 5px 0;\n    }\n\n    .image-container {\n        width: 100%;\n        height: 260px;\n        background: ",";\n        background-position: center;\n        background-size: cover;\n        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.6);\n    }\n\n    > .bottom-marker {\n        margin: 0 auto;\n        margin-top: 15px;\n        width: 60%;\n        height: 3px;\n        border-radius: 50% 50%;\n        background: rgba(0, 0, 0, 0.2);\n        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.7);\n    }\n"]);return D=function(){return n},n}var Q=s.c.div(D(),(function(n){return"url(".concat(n.image,")")}));function W(n){var e=n.id,t=n.title,a=n.image,i=n.linkPrefix;return r.a.createElement(Q,{image:a},r.a.createElement("h2",null,r.a.createElement(l.b,{to:"".concat(i,"/").concat(e)},t)),r.a.createElement("h3",null,e),r.a.createElement(l.b,{to:"".concat(i,"/").concat(e)},r.a.createElement("div",{className:"image-container"})),r.a.createElement("div",{className:"bottom-marker"}))}function X(n){var e=n.titleText,t=n.identifier,i=n.shortIdentifier,c=Object(a.useState)([]),l=Object(x.a)(c,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){function n(){return(n=Object(q.a)(R.a.mark((function n(){var e,a,r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/".concat(t,".json"));case 2:return e=n.sent,n.next=5,e.json();case 5:a=n.sent,r=a.map((function(n){var e=Math.floor(Math.random()*n.thumbs.length);return{id:n.id.replace("/","-"),title:n.title,thumb:n.thumbs[e]}})),s(r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),r.a.createElement(L,null,r.a.createElement("h1",null,e),r.a.createElement(B,null,o.map((function(n){return r.a.createElement(W,{key:n.id,id:n.id,title:n.title,image:n.thumb,linkPrefix:"/".concat(i)})}))))}function Y(){return r.a.createElement(X,{titleText:"Galleries",identifier:"galleries",shortIdentifier:"g"})}function Z(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: baseline;\n    justify-content: space-evenly;\n"]);return Z=function(){return n},n}function U(){var n=Object(o.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    > h2 {\n        margin: 20px 0;\n        text-align: center;\n        font-size: 24px;\n    }\n"]);return U=function(){return n},n}W.defaultProps={title:""};var $=s.c.div(U()),_=s.c.div(Z());function nn(){var n=Object(o.a)(["\n    flex: 0 0 calc(33.33% - 50px);\n    margin-bottom: 60px;\n\n    @media screen and (max-width: 900px) {\n        flex: 0 0 calc(50% - 50px);\n    }\n\n    @media screen and (max-width: 500px) {\n        flex: 0 0 calc(100% - 50px);\n    }\n\n    > .header {\n        height: 40px;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-end;\n        overflow: hidden;\n\n        > h3 {\n            font-weight: 100;\n            font-size: 14px;\n            text-align: right;\n            margin: 5px 0;\n\n            &:not(:first-of-type)::before {\n                content: '-   ';\n                margin-left: 6px;\n            }\n        }\n    }\n\n    > h2 {\n        font-weight: normal;\n        font-size: 15px;\n        text-align: right;\n        margin: 5px 0;\n\n        a {\n            color: #7c8081;\n            text-decoration: none;\n        }\n    }\n\n    .image-container {\n        width: 100%;\n        height: 260px;\n        background: ",";\n        background-position: center;\n        background-size: cover;\n        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.6);\n    }\n\n    span {\n        font-weight: 200;\n        font-size: 13px;\n    }\n"]);return nn=function(){return n},n}var en=s.c.div(nn(),(function(n){return"url(".concat(n.image,")")}));function tn(n){var e=n.id,t=n.credits,a=n.description,i=n.date,c=n.uri,o=n.linkPrefix;return r.a.createElement(en,{image:c},r.a.createElement("h2",null,r.a.createElement(l.b,{to:"".concat(o,"/").concat(e)},e)),r.a.createElement("div",{className:"header"},t&&r.a.createElement("h3",null,t),i&&r.a.createElement("h3",null,i)),r.a.createElement(l.b,{to:"".concat(o,"/").concat(e)},r.a.createElement("div",{className:"image-container"})),a&&r.a.createElement("span",null,a))}function an(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    \n    > div {\n        > a, > span {\n            display: block;\n            padding: 4px;\n            margin: 0 5px;\n        }\n\n        > span {\n            color: #FFF;\n            background: #7c8081;\n            border-radius: 4px;\n        }\n\n        > a {\n            text-decoration: none;\n            color: #555;\n\n            &:hover {\n                background: #999;\n                color: #FFF;\n                border-radius: 4px;\n            }\n        }\n    }\n"]);return an=function(){return n},n}tn.defaultProps={credits:"",description:"",date:""};var rn=s.c.div(an());function cn(n){var e=n.current,t=n.count,i=n.prefix,c=Object(a.useState)([]),o=Object(x.a)(c,2),s=o[0],d=o[1];return Object(a.useEffect)((function(){for(var n=[],a=1;a<=t;a+=1){var r={page:a,url:"".concat(i).concat(a),isCurrent:e===a};n.push(r)}d(n)}),[e,t,i]),r.a.createElement(rn,null,s.map((function(n){return r.a.createElement("div",{key:n.page},!n.isCurrent&&r.a.createElement(l.b,{to:n.url},n.page),n.isCurrent&&r.a.createElement("span",null,n.page))})))}function ln(n){var e=n.identifier,t=n.shortIdentifier,i=n.valids,c=Object(N.g)(),l=c.id,o=c.page,s=Object(a.useState)(0),d=Object(x.a)(s,2),m=d[0],u=d[1],p=Object(a.useState)(!1),f=Object(x.a)(p,2),g=f[0],h=f[1],b=Object(a.useState)([]),E=Object(x.a)(b,2),v=E[0],w=E[1];return Object(a.useEffect)((function(){function n(){return(n=Object(q.a)(R.a.mark((function n(){var t,a,r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/".concat(e,"/").concat(l,"/pagination.json"));case 2:return t=n.sent,n.next=5,t.json();case 5:if(a=n.sent,r=a.count,!(o>r)){n.next=10;break}return h(!0),n.abrupt("return");case 10:u(r);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l,o,e]),Object(a.useEffect)((function(){function n(){return(n=Object(q.a)(R.a.mark((function n(){var t,a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/".concat(e,"/").concat(l,"/").concat(o,".json"));case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,w(a);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}m<=0||function(){n.apply(this,arguments)}()}),[m,l,o,e]),null==o||void 0===o||o<=0||g?r.a.createElement(N.a,{to:"/".concat(t,"/").concat(l,"/1")}):i.includes(l)?r.a.createElement(r.a.Fragment,null,v.map((function(n){return r.a.createElement($,{key:n.title},r.a.createElement("h2",null,n.title),r.a.createElement(_,null,n.images.map((function(n){return r.a.createElement(tn,{key:n.id,id:n.id,credits:n.credits,description:n.description,date:n.date,uri:n.links.standard,linkPrefix:"/".concat(t,"/").concat(l,"/").concat(o)})}))))})),r.a.createElement(cn,{current:parseInt(o,10),count:m,prefix:"/".concat(t,"/").concat(l,"/")})):r.a.createElement(N.a,{to:"/".concat(t)})}var on=["AS07-03-M","AS07-04-N","AS07-05-Q","AS07-06-O","AS09-19-A","AS09-20-E","AS09-21-B","AS09-22-C","AS09-23-D","AS09-24-F","AS09-25-G","AS11-36-N","AS11-37-R","AS11-39-Q","AS11-40-S","AS11-44-V","AS12-46-Y","AS12-47-V","AS12-48-X","AS12-49-Z","AS14-64-LL","AS14-65-KK","AS14-66-II","AS14-67-JJ","AS14-68-MM","AS15-82-SS","AS15-84-MM","AS15-85-LL","AS15-86-NN","AS15-87-KK","AS15-88-TT","AS15-89-WW","AS15-90-PP","AS15-92-OO","AS16-105-M","AS16-106-K","AS16-107-C","AS16-108-I","AS16-109-G","AS16-110-H","AS16-111-J","AS16-112-L","AS16-113-A","AS16-114-B","AS16-115-D","AS16-116-E","AS16-117-F","AS17-133-J","AS17-134-B","AS17-135-G","AS17-136-H","AS17-137-C","AS17-138-I","AS17-139-K","AS17-140-E","AS17-141-L","AS17-142-M","AS17-143-N","AS17-144-R","AS17-145-D","AS17-146-F","AS17-147-A","AS17-162-SS","AS17-163-TT"],sn=["MG","EA","1","7","8","9","10","11","12","13","14","15","16","17","SV","PA"];function dn(){return r.a.createElement(ln,{identifier:"galleries",shortIdentifier:"g",valids:sn})}function mn(){return r.a.createElement(X,{titleText:"Magazines",identifier:"magazines",shortIdentifier:"m"})}function un(){return r.a.createElement(ln,{identifier:"magazines",shortIdentifier:"m",valids:on})}function pn(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .header {\n        padding: 10px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        a {\n            color: #555;\n            margin-right: 15px;\n\n            i.libre {\n                width: 32px;\n                height: 32px;\n\n                svg {\n                    width: 32px !important;\n                    height: 32px !important;\n                }\n            }\n        }\n    }\n\n    .image-container {\n        width: 100%;\n        height: 600px;\n        background-image: url(",");\n        background-size: contain;\n        background-position: center;\n        background-repeat: no-repeat;\n    }\n\n    .credits-line {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        span {\n            margin-right: 10px;\n\n            &.fit{\n                flex: 1;\n            }\n        }\n\n        a {\n            color: currentColor;\n            margin-right: 10px;\n\n            i.libre {\n                width: 32px;\n                height: 32px;\n\n                svg {\n                    width: 32px !important;\n                    height: 32px !important;\n                }\n            }\n        }\n    }\n\n    p {\n        font-weight: 100;\n    }\n"]);return pn=function(){return n},n}var fn=s.c.div(pn(),(function(n){return n.image}));function gn(n){var e=n.identifier,t=n.shortIdentifier,i=n.validIds,c=Object(N.g)(),o=c.id,s=c.page,d=c.photo,m=Object(a.useState)({}),u=Object(x.a)(m,2),p=u[0],f=u[1],g=Object(a.useState)(!1),h=Object(x.a)(g,2),b=h[0],E=h[1],v=Object(a.useState)(!1),w=Object(x.a)(v,2),j=w[0],y=w[1];return Object(a.useEffect)((function(){function n(){return(n=Object(q.a)(R.a.mark((function n(){var t,a,r,i,c,l,m;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(s<=0)){n.next=3;break}return E(!1),n.abrupt("return");case 3:return n.next=5,fetch("https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/".concat(e,"/").concat(o,"/pagination.json"));case 5:return t=n.sent,n.next=8,t.json();case 8:if(a=n.sent,r=a.count,!(s>r)){n.next=13;break}return E(!0),n.abrupt("return");case 13:return n.next=15,fetch("https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/".concat(e,"/").concat(o,"/").concat(s,".json"));case 15:return i=n.sent,n.next=18,i.json();case 18:if(c=n.sent,0!==(l=c.filter((function(n){return n.images.filter((function(n){return n.id===d})).length>0}))).length){n.next=23;break}return y(!0),n.abrupt("return");case 23:if(0!==(m=l[0].images.filter((function(n){return n.id===d}))).length){n.next=27;break}return y(!0),n.abrupt("return");case 27:f(m[0]);case 28:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e,o,s,d]),i.includes(o)?b?r.a.createElement(N.a,{to:"/".concat(t,"/").concat(o,"/1")}):j?r.a.createElement(N.a,{to:"/".concat(t,"/").concat(o,"/").concat(s)}):r.a.createElement(fn,{image:p.links?p.links.standard:""},r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/".concat(t,"/").concat(o,"/").concat(s)},r.a.createElement("i",{className:"libre","data-icon":"arrow-left"})),p.id&&r.a.createElement("span",null,p.id)),r.a.createElement("div",{className:"image-container"}),r.a.createElement("div",{className:"credits-line"},p.credits&&r.a.createElement("span",null,p.credits),p.date&&r.a.createElement("span",null,p.date),r.a.createElement("span",{className:"fit"}),r.a.createElement("a",{href:p.links?p.links.standard:"#",target:"blank"},r.a.createElement("i",{className:"libre","data-icon":"gui-link"}))),p.description&&r.a.createElement("p",null,p.description)):r.a.createElement(N.a,{to:"/".concat(t)})}function xn(){return r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/",exact:!0},r.a.createElement(G,null)),r.a.createElement(N.b,{path:"/g",exact:!0},r.a.createElement(Y,null)),r.a.createElement(N.b,{path:"/g/:id",exact:!0},r.a.createElement(dn,null)),r.a.createElement(N.b,{path:"/g/:id/:page",exact:!0},r.a.createElement(dn,null)),r.a.createElement(N.b,{path:"/g/:id/:page/:photo",exact:!0},r.a.createElement(gn,{identifier:"galleries",shortIdentifier:"g",validIds:sn})),r.a.createElement(N.b,{path:"/m",exact:!0},r.a.createElement(mn,null)),r.a.createElement(N.b,{path:"/m/:id",exact:!0},r.a.createElement(un,null)),r.a.createElement(N.b,{path:"/m/:id/:page",exact:!0},r.a.createElement(un,null)),r.a.createElement(N.b,{path:"/m/:id/:page/:photo",exact:!0},r.a.createElement(gn,{identifier:"magazines",shortIdentifier:"m",validIds:on})),r.a.createElement(N.b,null,r.a.createElement(V,null)))}var hn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(l.a,null,r.a.createElement(I,null,r.a.createElement(A,null),r.a.createElement(g,null,r.a.createElement(xn,null))))),r.a.createElement(m,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(hn,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a3bc06aa.chunk.js.map