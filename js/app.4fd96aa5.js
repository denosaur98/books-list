(function(){"use strict";var e={2028:function(e,o,t){var s=t(5130),n=t(6768);function i(e,o){const t=(0,n.g2)("RouterView");return(0,n.uX)(),(0,n.Wv)(t)}var p=t(1241);const a={},l=(0,p.A)(a,[["render",i]]);var u=l,c=t(1387),r=(t(8992),t(4520),t(144)),d=t.p+"img/logo.c63f0632.svg",k=t.p+"img/search.fd6e1f73.svg",_=t.p+"img/close.8cacd380.svg",v=t.p+"img/add.0ec9bfeb.svg",m=(t(4114),t(2577),t(782)),f=(0,m.y$)({state(){return{isAddPopupOpen:!1,isEditPopupOpen:!1,isConfirmPopupOpen:!1,selectedBook:null,books:[{id:1,title:"Как разговаривать с кем угодно, когда угодно, где угодно",author:"Ларри Кинг",year:"2011",genre:"Научпоп"},{id:2,title:"Больше, чем просто красивая. 12 тайных сил женщины, перед которой невозможно устоять",author:"Кара Кинг",year:"2020",genre:"Научпоп"},{id:3,title:"Чистый код: создание, анализ и рефакторинг",author:"Роберт Мартин",year:"2008",genre:""}]}},mutations:{openAddPopup(e){e.isAddPopupOpen=!0},closeAddPopup(e){e.isAddPopupOpen=!1},openEditPopup(e,o){e.selectedBook=e.books.find((e=>e.id===o)),e.isEditPopupOpen=!0},closeEditPopup(e){e.isEditPopupOpen=!1},openConfirmPopup(e){e.isConfirmPopupOpen=!0},closeConfirmPopup(e){e.isConfirmPopupOpen=!1},addBook(e,o){e.books.push(o),e.isAddPopupOpen=!1},updateBook(e,o){const t=e.books.findIndex((e=>e.id===o.id));-1!==t&&e.books.splice(t,1,o),e.isEditPopupOpen=!1},removeBook(e,o){const t=e.books.findIndex((e=>e.id===o.id));-1!==t&&e.books.splice(t,1),e.isEditPopupOpen=!1,e.isConfirmPopupOpen=!1}}}),b=t(4232),h=t.p+"img/edit.cba72daa.svg";const L={class:"item__header"},g={class:"header__title"},C=["onClick"],y={class:"item__info"},P={class:"info__element"},O={class:"info__element"},E={class:"info__element"};var w={__name:"BookItem",props:{searchItems:{type:Array,required:!0}},setup(e){function o(e){f.commit("openEditPopup",e)}const t=e;return(e,s)=>((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.searchItems,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"book-item",key:e.id},[(0,n.Lk)("div",L,[(0,n.Lk)("h1",g,(0,b.v_)(e.title),1),(0,n.Lk)("button",{class:"header__edit",onClick:t=>o(e.id)},s[0]||(s[0]=[(0,n.Lk)("img",{src:h},null,-1)]),8,C)]),(0,n.Lk)("div",y,[(0,n.Lk)("p",P,(0,b.v_)(e.author),1),(0,n.Lk)("p",O,(0,b.v_)(e.year),1),(0,n.Lk)("p",E,(0,b.v_)(e.genre),1)])])))),128))}};const A=(0,p.A)(w,[["__scopeId","data-v-733b663a"]]);var x=A,R=t.p+"img/trash.a70e1c36.svg";const B={class:"confirm-popup-wrapper"};var X={__name:"ConfirmPopup",setup(e){function o(){f.commit("closeConfirmPopup")}function t(){f.commit("removeBook",f.state.selectedBook)}return(e,s)=>((0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("div",{class:"popup__overlay",onClick:o}),(0,n.Lk)("div",{class:"confirm-popup"},[(0,n.Lk)("button",{class:"confirm__popup-button",onClick:t},"Да"),(0,n.Lk)("button",{class:"confirm__popup-button",onClick:o},"Нет")])]))}};const I=(0,p.A)(X,[["__scopeId","data-v-28362147"]]);var W=I;const j={class:"book-popup-wrapper"},K={class:"book-popup"},V={class:"popup__header-wrapper"},J={class:"popup__header"},U={class:"header__title"},F={class:"header__subtitle"},Q={class:"popup__item"},T={class:"popup__item"},q={class:"popup__item"},M={class:"popup__item"},$={class:"popup__checkbox-item"},z={for:"checkbox",class:"checkbox__title"},D={key:1,class:"popup__buttons-wrapper"};var G={__name:"BookPopup",setup(e){function o(){f.commit("closeAddPopup")}function t(){f.commit("closeEditPopup")}function i(){f.commit("openConfirmPopup")}const p=(0,r.KR)(""),a=(0,r.KR)(""),l=(0,r.KR)(""),u=(0,r.KR)("");function c(){const e={id:f.state.books.length+1,title:p.value,author:a.value,year:l.value,genre:u.value};f.commit("addBook",e)}function d(){if(f.state.selectedBook){const e={id:f.state.selectedBook.id,title:p.value,author:a.value,year:l.value,genre:u.value};f.commit("updateBook",e)}}return(0,n.wB)((()=>f.state.selectedBook),(e=>{f.state.isEditPopupOpen&&e&&(p.value=e.title,a.value=e.author,l.value=e.year,u.value=e.genre)}),{immediate:!0}),(e,k)=>{const m=(0,n.g2)("RouterLink");return(0,n.uX)(),(0,n.CE)("div",j,[(0,r.R1)(f).state.isAddPopupOpen?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"popup__overlay",onClick:o})):((0,n.uX)(),(0,n.CE)("div",{key:1,class:"popup__overlay",onClick:t})),(0,n.Lk)("div",K,[(0,n.Lk)("div",V,[(0,n.Lk)("div",J,[(0,n.Lk)("h1",U,(0,b.v_)((0,r.R1)(f).state.isAddPopupOpen?"Добавить книгу":"Редактирование"),1),(0,n.Lk)("p",F,(0,b.v_)((0,r.R1)(f).state.isAddPopupOpen?"Заполните все поля и добавьте книгу в список":"Внесите изменение в карточке"),1)]),(0,r.R1)(f).state.isAddPopupOpen?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"header__close-popup",onClick:o},k[4]||(k[4]=[(0,n.Lk)("img",{src:_},null,-1)]))):((0,n.uX)(),(0,n.CE)("button",{key:1,class:"header__close-popup",onClick:t},k[5]||(k[5]=[(0,n.Lk)("img",{src:_},null,-1)])))]),(0,n.Lk)("div",Q,[k[6]||(k[6]=(0,n.Lk)("label",{class:"item__title"},"Название",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"item__input",placeholder:"Название произведения","onUpdate:modelValue":k[0]||(k[0]=e=>p.value=e)},null,512),[[s.Jo,p.value]])]),(0,n.Lk)("div",T,[k[7]||(k[7]=(0,n.Lk)("label",{class:"item__title"},"Автор",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"item__input",placeholder:"Имя и фамилия автора","onUpdate:modelValue":k[1]||(k[1]=e=>a.value=e)},null,512),[[s.Jo,a.value]])]),(0,n.Lk)("div",q,[k[8]||(k[8]=(0,n.Lk)("label",{class:"item__title"},"Год",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",class:"item__input",placeholder:"Год выпуска","onUpdate:modelValue":k[2]||(k[2]=e=>l.value=e)},null,512),[[s.Jo,l.value]])]),(0,n.Lk)("div",M,[k[9]||(k[9]=(0,n.Lk)("label",{class:"item__title"},"Жанр",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"item__input",placeholder:"Добавьте жанр произведения","onUpdate:modelValue":k[3]||(k[3]=e=>u.value=e)},null,512),[[s.Jo,u.value]])]),(0,n.Lk)("div",$,[k[12]||(k[12]=(0,n.Lk)("input",{type:"checkbox",id:"checkbox",class:"checkbox"},null,-1)),(0,n.Lk)("label",z,[k[11]||(k[11]=(0,n.eW)("Я согласен с условиями ")),(0,n.bF)(m,{to:"#"},{default:(0,n.k6)((()=>k[10]||(k[10]=[(0,n.eW)("Политики конфиденциальности")]))),_:1})])]),(0,r.R1)(f).state.isAddPopupOpen?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"popup__done",onClick:c},k[13]||(k[13]=[(0,n.Lk)("img",{src:v},null,-1),(0,n.eW)(" Добавить ")]))):((0,n.uX)(),(0,n.CE)("div",D,[(0,n.Lk)("button",{class:"popup__done",onClick:d},k[14]||(k[14]=[(0,n.Lk)("img",{src:v},null,-1),(0,n.eW)(" Сохранить ")])),(0,n.Lk)("button",{class:"popup__delete",onClick:i},k[15]||(k[15]=[(0,n.Lk)("img",{src:R},null,-1)]))]))]),(0,r.R1)(f).state.isConfirmPopupOpen?((0,n.uX)(),(0,n.Wv)(W,{key:2})):(0,n.Q3)("",!0)])}}};const H=(0,p.A)(G,[["__scopeId","data-v-1d6dfe30"]]);var N=H;const S={class:"books-list-wrapper"},Y={class:"books-list"},Z={class:"list__header-wrapper"},ee={class:"header__search-wrapper"},oe={class:"search__item-wrapper"},te={key:0,src:k,class:"item__icon"},se={class:"list__place"};var ne={__name:"BooksList",setup(e){function o(){f.commit("openAddPopup")}const t=(0,r.KR)(""),i=(0,n.EW)((()=>f.state.books.filter((e=>e.title.toLowerCase().includes(t.value.toLowerCase())))));function p(){t.value=""}return(e,a)=>((0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("div",Y,[(0,n.Lk)("div",Z,[(0,n.Lk)("div",ee,[a[2]||(a[2]=(0,n.Lk)("img",{src:d,class:"search__logo"},null,-1)),(0,n.Lk)("div",oe,[""===t.value?((0,n.uX)(),(0,n.CE)("img",te)):((0,n.uX)(),(0,n.CE)("button",{key:1,class:"item__clean-button",onClick:p},a[1]||(a[1]=[(0,n.Lk)("img",{src:_},null,-1)]))),(0,n.bo)((0,n.Lk)("input",{type:"text",placeholder:"Найти ту самую книгу",class:"search__item","onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,512),[[s.Jo,t.value]])])]),(0,n.Lk)("div",{class:"header__info-wrapper"},[a[4]||(a[4]=(0,n.Lk)("h1",{class:"info__title"},[(0,n.eW)(" Книги в каталоге "),(0,n.Lk)("span",{class:"info__count"},"3")],-1)),(0,n.Lk)("button",{class:"info__add-book",onClick:o},a[3]||(a[3]=[(0,n.Lk)("img",{src:v},null,-1),(0,n.eW)(" Добавить книгу ")]))])])]),(0,n.Lk)("div",se,[(0,n.bF)((0,r.R1)(x),{searchItems:i.value},null,8,["searchItems"])]),(0,r.R1)(f).state.isAddPopupOpen||(0,r.R1)(f).state.isEditPopupOpen?((0,n.uX)(),(0,n.Wv)((0,r.R1)(N),{key:0})):(0,n.Q3)("",!0)]))}};const ie=(0,p.A)(ne,[["__scopeId","data-v-f43fef00"]]);var pe=ie;const ae=[{path:"/",component:pe}];var le=(0,c.aE)({history:(0,c.LA)(),routes:ae}),ue=t(3178),ce=t.n(ue);(0,s.Ef)(u).use(le).use(ce()).mount("#app")}},o={};function t(s){var n=o[s];if(void 0!==n)return n.exports;var i=o[s]={exports:{}};return e[s].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,s,n,i){if(!s){var p=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],i=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||p>=i)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<p&&(p=i));if(a){e.splice(c--,1);var u=n();void 0!==u&&(o=u)}}return o}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,n,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/books-list/"}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,s){var n,i,p=s[0],a=s[1],l=s[2],u=0;if(p.some((function(o){return 0!==e[o]}))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(l)var c=l(t)}for(o&&o(s);u<p.length;u++)i=p[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},s=self["webpackChunkbooks_list"]=self["webpackChunkbooks_list"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(2028)}));s=t.O(s)})();
//# sourceMappingURL=app.4fd96aa5.js.map