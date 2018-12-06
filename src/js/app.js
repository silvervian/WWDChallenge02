/* eslint-disable no-cond-assign */
/* eslint-disable func-names,no-undef */

const hiddenMenu = document.querySelector('.menu-hidden');
const checkBox = document.querySelector('.checkbox');
const menuList = document.querySelectorAll('.menu-hidden li');
const viewMoreBlog = document.querySelector('#viewMoreBlog');
const sectionBlog = document.querySelector('.blog');
const blogPost = document.querySelectorAll('.blog__post');
const test = document.querySelector('#test');

function elem(post, day, month, author, title) {
  const blogPost4 = document.createElement('div');
  blogPost4.setAttribute('class', `blog__post blog__post--${post}`);
  blogPost4.innerHTML = `
      <span class="blog__date"><span>${day}</span> ${month}</span>
      <hgroup>
      <h3 class="blog__title">${title}</h3>
      <p class="blog__author">By ${author} - 2 hours ago</p>
      </hgroup>
      `;
  sectionBlog.insertBefore(blogPost4, test.previousSibling);
}


viewMoreBlog.addEventListener('click', () => {
  if (viewMoreBlog.innerText === 'VIEW MORE') {
    elem(4, 6, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    elem(5, 12, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
    elem(6, 25, 'DEC', 'Adijos', 'What a lovely Day is Today what do you think?');
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
