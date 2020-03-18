const $burgerBtn = document.getElementById('burger-btn');
const $menu = document.getElementById('menu');

$burgerBtn.addEventListener('click', () => {
  $menu.classList.toggle('menu--open');
});