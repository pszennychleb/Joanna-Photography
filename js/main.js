const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const navBtn = document.querySelector('.burger-btn')
const navContainer = document.querySelector('.nav-container')
const logoImg = document.querySelector('.logo__img')
const footerYear = document.querySelector('.footer__year')
const thumbnails = document.querySelectorAll('.gallery__photo')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const popupImg = document.querySelector('.popup__img')
const arrowLeft = document.querySelector('.popup__arrow--left')
const arrowRight = document.querySelector('.popup__arrow--right')
let currentImgIndex

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

thumbnails.forEach((thumbnail, index) => {
	const showPopup = e => {
		popup.classList.remove('hidden')
		popupImg.src = e.target.src
		popupImg.alt = e.target.alt
		currentImgIndex = index
		thumbnails.forEach(element => {
			element.setAttribute('tabindex', -1)
		})
	}
	thumbnail.addEventListener('click', showPopup)

	thumbnail.addEventListener('keydown', e => {
		if (e.code === 'Enter') {
			showPopup(e)
		}
	})
})

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

const closePopup = () => {
	popup.classList.add('fade-out')

	setTimeout(() => {
		popup.classList.add('hidden')
		popup.classList.remove('fade-out')
		thumbnails.forEach(element => {
			element.setAttribute('tabindex', 1)
		})
	}, 300)
}

const showNext = () => {
	if (currentImgIndex === thumbnails.length - 1) {
		currentImgIndex = 0
	} else {
		currentImgIndex++
	}
	popupImg.src = thumbnails[currentImgIndex].src
	popupImg.alt = thumbnails[currentImgIndex].alt
}

const showPrevious = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = thumbnails.length - 1
	} else {
		currentImgIndex--
	}
	popupImg.src = thumbnails[currentImgIndex].src
	popupImg.alt = thumbnails[currentImgIndex].alt
}
handleCurrentYear()

window.addEventListener('scroll', addShadow)
navBtn.addEventListener('click', handleNav)
popupClose.addEventListener('click', closePopup)
popup.addEventListener('click', e => {
	if (e.target === popup) {
		closePopup()
	}
})

document.addEventListener('keydown', e => {
	if (!popup.classList.contains('hidden')) {
		if (e.code === 'ArrowRight') {
			showNext()
		}

		if (e.code === 'ArrowLeft') {
			showPrevious()
		}

		if (e.code === 'Escape') {
			closePopup()
		}
	}
})

arrowRight.addEventListener('click', showNext)
arrowLeft.addEventListener('click', showPrevious)
