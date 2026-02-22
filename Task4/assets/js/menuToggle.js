const hamburgerMenu = document.querySelector(".js-toggle-menu");
const navMenu = document.querySelector(".js-header-nav");
 
function toggleMenu() {
	hamburgerMenu.classList.toggle("is-active");
	navMenu.classList.toggle("is-active");
	document.body.classList.toggle('is-disabled');
}

function closeMenu() {
	hamburgerMenu.classList.remove("is-active");
	navMenu.classList.remove('is-active');
	document.body.classList.remove('is-disabled');
}

hamburgerMenu.addEventListener('click', toggleMenu);