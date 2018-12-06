'use strict';

/* eslint-disable no-cond-assign */
/* eslint-disable func-names,no-undef */

var hiddenMenu = document.querySelector('.menu-hidden');
var checkBox = document.querySelector('.checkbox');
var menuList = document.querySelectorAll('.menu-hidden li');
var viewMoreBlog = document.querySelector('#viewMoreBlog');
var sectionBlog = document.querySelector('.blog');
var blogPost = document.querySelectorAll('.blog__post');
var test = document.querySelector('#test');

function elem(post, day, month, author, title) {
  var blogPost4 = document.createElement('div');
  blogPost4.setAttribute('class', 'blog__post blog__post--' + post);
  blogPost4.innerHTML = '\n      <span class="blog__date"><span>' + day + '</span> ' + month + '</span>\n      <hgroup>\n      <h3 class="blog__title">' + title + '</h3>\n      <p class="blog__author">By ' + author + ' - 2 hours ago</p>\n      </hgroup>\n      ';
  sectionBlog.insertBefore(blogPost4, test.previousSibling);
}

viewMoreBlog.addEventListener('click', function () {
  if (viewMoreBlog.innerText === 'VIEW MORE') {
    elem(4, 6, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    elem(5, 12, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    elem(6, 25, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    viewMoreBlog.innerText = 'Hide Posts';
  } else {
    var kidsNodes = sectionBlog.childNodes;
    for (var i = 12; i >= 10; i--) {
      kidsNodes[i].remove();
    }
    viewMoreBlog.innerText = 'view more';
  }
});

checkBox.addEventListener('change', function () {
  if (checkBox.checked === true) {
    hiddenMenu.classList.add('show-menu');
  } else {
    hiddenMenu.classList.remove('show-menu');
  }
});

menuList.forEach(function (item) {
  return item.addEventListener('click', function () {
    hiddenMenu.classList.remove('show-menu');
    checkBox.checked = false;
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});