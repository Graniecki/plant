'use strict';

const header = document.querySelector('.header');
const goUp = document.querySelector('.go-up');

goUp.addEventListener('click', () => {
  header.scrollIntoView({ behavior: "smooth" });
});

