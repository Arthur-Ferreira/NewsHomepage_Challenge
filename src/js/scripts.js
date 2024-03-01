
const openBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sliderAside = document.getElementById('menu-slider');

function openMenu() {
  sliderAside.classList.add('open')
}

function closeMenu() {
  sliderAside.classList.remove('open')
}




openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);