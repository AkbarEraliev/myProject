//                                             MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

let scrolledToBottom = false

const openModal = () => {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

const pageBottom = () => {
	return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
}

const onScroll = () => {
	if (pageBottom() && !scrolledToBottom){
		scrolledToBottom = true;
		openModal()
	}
}

window.addEventListener('scroll', onScroll)

const closeModal = () => {
	modal.style.display = 'none'
	document.body.style.overflow = ''
}

// setTimeout(openModal, 10000)

modalTrigger.onclick = openModal
modalCloseButton.onclick = closeModal

modal.onclick = (event) => {
	if (event.target === modal) {
		closeModal()
	}
}
