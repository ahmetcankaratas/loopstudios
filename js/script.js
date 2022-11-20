const btn = document.getElementById('menuButton')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle);

function navToggle() {
   btn.classList.toggle('menu-open');
   menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}