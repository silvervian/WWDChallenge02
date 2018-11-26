/* eslint-disable func-names,no-undef */

const hiddenMenu = document.querySelector('.menu-hidden');
const checkBox = document.querySelector('.checkbox');
const menuList = document.querySelectorAll('.menu-hidden li');

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
      behavior: 'smooth'
    });
  });
});
