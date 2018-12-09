/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-cond-assign */
/* eslint-disable func-names,no-undef */

const hiddenMenu = document.querySelector('.menu-hidden');
const checkBox = document.querySelector('.checkbox');
const menuList = document.querySelectorAll('.menu-hidden li');
const viewMoreBlog = document.querySelector('#viewMoreBlog');
const sectionBlog = document.querySelector('.blog');
const blogPosts = document.querySelectorAll('.blog__post');
const test = document.querySelector('#test');
const sectionGallery = document.getElementById('gallery');
const moreGallery = document.getElementById('moreGallery');


const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;
const addClassNav = () => nav.classList.add('fade-in');
const removeClassNav = () => nav.classList.remove('fade-in');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos >= navHeight) { addClassNav(); } else { removeClassNav(); }
});


function fotoCreate(number) {
  const imgGallery = document.createElement('figure');
  imgGallery.setAttribute('class', `gallery__item gallery__item--${number}`);
  imgGallery.innerHTML = `
    <a class="example-image-link" href="img/img-${number}.jpg" data-lightbox="example-set" data-title="Foooood is Gooooood."><img
      class="gallery__img example-image" src="img/img-${number}.jpg" alt="" /></a>
  `;
  sectionGallery.insertBefore(imgGallery, moreGallery);
}

moreGallery.addEventListener('click', () => {
  if (moreGallery.innerText === 'VIEW MORE') {
    fotoCreate(6);
    fotoCreate(7);
    fotoCreate(8);
    fotoCreate(9);
    moreGallery.innerText = 'Hide Photos';
  } else {
    const kidsNodes = sectionGallery.childNodes;
    for (let i = 18; i >= 15; i--) {
      kidsNodes[i].remove();
    }
    moreGallery.innerText = 'view more';
  }
});

function postCreate(post, day, month, author, title) {
  const blogPost = document.createElement('div');
  blogPost.setAttribute('class', `blog__post blog__post--${post}`);
  blogPost.innerHTML = `
    <span class="blog__date"><span>${day}</span> ${month}</span>
    <hgroup>
    <h3 class="blog__title">${title}</h3>
    <p class="blog__author">By ${author} - 2 hours ago</p>
    </hgroup>
    `;
  sectionBlog.insertBefore(blogPost, test.previousSibling);
}


viewMoreBlog.addEventListener('click', () => {
  if (viewMoreBlog.innerText === 'VIEW MORE') {
    postCreate(4, 6, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    postCreate(5, 12, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    postCreate(6, 25, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    viewMoreBlog.innerText = 'Hide Posts';
  } else {
    const kidsNodes = sectionBlog.childNodes;
    for (let i = 12; i >= 10; i--) {
      kidsNodes[i].remove();
    }
    viewMoreBlog.innerText = 'view more';
  }
});


checkBox.addEventListener('change', () => {
  if (checkBox.checked === true) {
    hiddenMenu.classList.add('show-menu');
  } else {
    hiddenMenu.classList.remove('show-menu');
  }
});

menuList.forEach(item => item.addEventListener('click', () => {
  hiddenMenu.classList.remove('show-menu');
  checkBox.checked = false;
}));


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


function functionScroll() {
  const section = document.querySelectorAll('.SpyScroll');

  const sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });

  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 100) {
      document.querySelector('.is-active').classList.remove('is-active');
      document.querySelector(`li.nav__item a[href*="${i}"]`).classList.add('is-active');
    }
  }
}

function functionScrollMobile() {
  const section = document.querySelectorAll('.SpyScroll');

  const sections = {};
  let i = 0;
  [...section].forEach((e) => {
    sections[e.id] = e.offsetTop;
  });

  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 100) {
      document.querySelector('.is-active2').classList.remove('is-active2');
      document.querySelector(`li.mobile a[href*="${i}"]`).classList.add('is-active2');
    }
  }
}

window.addEventListener('scroll', () => {
  functionScroll();
  functionScrollMobile();
});
window.addEventListener('resize', () => {
  functionScroll();
  functionScrollMobile();
});
