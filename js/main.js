const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const navBtn = document.querySelector('.burger-btn')
const navContainer = document.querySelector('.nav-container')
const logoImg = document.querySelector('.logo__img')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

function addShadow() {
	if (window.scrollY >= 100) {
		navContainer.classList.add('shadow-bg')
		navMobile.classList.add('shadow-bg')
		logoImg.classList.add('is-transparent')
	} else {
		navContainer.classList.remove('shadow-bg')
		navMobile.classList.remove('shadow-bg')
		logoImg.classList.remove('is-transparent')
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

window.addEventListener('scroll', addShadow)
navBtn.addEventListener('click', handleNav)
