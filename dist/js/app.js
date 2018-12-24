"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}var hiddenMenu=document.querySelector(".menu-hidden"),checkBox=document.querySelector(".checkbox"),menuList=document.querySelectorAll(".menu-hidden li"),viewMoreBlog=document.querySelector("#viewMoreBlog"),sectionBlog=document.querySelector(".blog"),blogPosts=document.querySelectorAll(".blog__post"),test=document.querySelector("#test"),sectionGallery=document.getElementById("gallery"),moreGallery=document.getElementById("moreGallery"),nav=document.querySelector("nav"),navHeight=nav.offsetHeight,addClassNav=function(){return nav.classList.add("fade-in")},removeClassNav=function(){return nav.classList.remove("fade-in")};function fotoCreate(e){var o=document.createElement("figure");o.setAttribute("class","gallery__item gallery__item--"+e),o.innerHTML='\n    <a class="example-image-link" href="img/img-'+e+'.jpg" data-lightbox="example-set" data-title="Foooood is Gooooood."><img\n      class="gallery__img example-image" src="img/img-'+e+'.jpg" alt="" /></a>\n  ',sectionGallery.insertBefore(o,moreGallery)}function postCreate(e,o,t,n,r){var i=document.createElement("div");i.setAttribute("class","blog__post blog__post--"+e),i.innerHTML='\n    <span class="blog__date"><span>'+o+"</span> "+t+'</span>\n    <hgroup>\n    <h3 class="blog__title">'+r+'</h3>\n    <p class="blog__author">By '+n+" - 2 hours ago</p>\n    </hgroup>\n    ",sectionBlog.insertBefore(i,test.previousSibling)}function functionScroll(){var e=document.querySelectorAll("[data-scrollspy]"),o={},t=0;for(t in[].concat(_toConsumableArray(e)).forEach(function(e){o[e.id]=e.offsetTop}),o)o[t]<=window.pageYOffset+100&&(document.querySelector(".is-active").classList.remove("is-active"),document.querySelector('li.nav__item a[href*="'+t+'"]').classList.add("is-active"))}function functionScrollMobile(){var e=document.querySelectorAll(".SpyScroll"),o={},t=0;for(t in[].concat(_toConsumableArray(e)).forEach(function(e){o[e.id]=e.offsetTop}),o)o[t]<=window.pageYOffset+100&&(document.querySelector(".is-active2").classList.remove("is-active2"),document.querySelector('li.mobile a[href*="'+t+'"]').classList.add("is-active2"))}window.addEventListener("scroll",function(){var e=window.scrollY;navHeight<=e?addClassNav():removeClassNav()}),moreGallery.addEventListener("click",function(){if("VIEW MORE"===moreGallery.innerText)fotoCreate(6),fotoCreate(7),fotoCreate(8),fotoCreate(9),moreGallery.innerText="Hide Photos";else{for(var e=sectionGallery.childNodes,o=18;15<=o;o--)e[o].remove();moreGallery.innerText="view more"}}),viewMoreBlog.addEventListener("click",function(){if("VIEW MORE"===viewMoreBlog.innerText)postCreate(4,6,"DEC","Adijos","What a lovely Day is Today what do you think?"),postCreate(5,12,"DEC","Adijos","What a lovely Day is Today what do you think?"),postCreate(6,25,"DEC","Adijos","What a lovely Day is Today what do you think?"),viewMoreBlog.innerText="Hide Posts";else{for(var e=sectionBlog.childNodes,o=12;10<=o;o--)e[o].remove();viewMoreBlog.innerText="view more"}}),checkBox.addEventListener("change",function(){!0===checkBox.checked?hiddenMenu.classList.add("show-menu"):hiddenMenu.classList.remove("show-menu")}),menuList.forEach(function(e){return e.addEventListener("click",function(){hiddenMenu.classList.remove("show-menu"),checkBox.checked=!1})}),document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})}),window.addEventListener("scroll",function(){functionScroll(),functionScrollMobile()}),window.addEventListener("resize",function(){functionScroll(),functionScrollMobile()});