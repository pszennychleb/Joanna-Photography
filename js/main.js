const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const navBtn = document.querySelector('.burger-btn')
const navContainer = document.querySelector('.nav-container')
const logoImg = document.querySelector('.logo__img')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

function addShadow() {
	if (window.scrollY >= 100) {
		navContainer.classList.add('shadow-bg')
		logoImg.classList.add('is-transparent')
	} else {
		navContainer.classList.remove('shadow-bg')
		logoImg.classList.remove('is-transparent')
	}
}

window.addEventListener('scroll', addShadow)
navBtn.addEventListener('click', handleNav)
