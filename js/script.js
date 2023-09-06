const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const clickNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	navItemAnimation();
}

navBtn.addEventListener('click', clickNav);

const navItemAnimation = () => {
	let delayTime = 0;
	allNavItems.forEach(item => {
		item.classList.toggle('nav-animation')
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	})
}

