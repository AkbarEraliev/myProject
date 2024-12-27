//                                          PHONE BLOCK

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = 'Ok';
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerHTML = 'Invalid phone number'
		phoneResult.style.color = 'red'
	}
}

//                                          TAB SLIDER

const tab_content_blocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
	tab_content_blocks.forEach((item) => {
		item.style.display = 'none'
	})
	tabs.forEach((item) => {
		item.classList.remove('tab_content_item_active')
	})
}

const showTabContent = (index = 0) => {
	tab_content_blocks[index].style.display = 'block'
	tabs[index].classList.add('tab_content_item_active')
	
}

let plusIndex = 0

const autoTabs = () => {
	hideTabContent()
	showTabContent(plusIndex)
	plusIndex = (plusIndex + 1) % tabs.length;
}

let autoInterval = setInterval(autoTabs, 3000);

tabsParent.onclick = (event) => {
	if (event.target.classList.contains('tab_content_item')) {
		plusIndex = [...tabs].indexOf(event.target)
		hideTabContent()
		showTabContent(plusIndex)

		clearInterval(autoInterval)
		autoInterval = setInterval(autoTabs, 3000)
	}
}

hideTabContent()
showTabContent(plusIndex)

//                                         CONVERTER

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '../data/converter.json');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            if (element.id === 'som') {
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.euro).toFixed(2);
            } else if (element.id === 'usd') {
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = ((element.value * data.usd) / data.euro).toFixed(2);
            } else if (element.id === 'eur') {
                targetElement1.value = (element.value * data.euro).toFixed(2);
                targetElement2.value = ((element.value * data.euro) / data.usd).toFixed(2);
            }
        };
    };
};

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

//                                    CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 1
let maxCardId = 200

const updateCard = (newCardId) => {
	if (newCardId > maxCardId) {
		cardId = 1
	} else if (newCardId < 1) {
		cardId = maxCardId
	} else {
		cardId = newCardId
	}
	fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
		.then(response => response.json())
		.then(data => {
			const {title, completed, id} = data
			cardBlock.innerHTML = `
			<p>${title}</p>
			<p>${completed}</p>
			<span>${id}</span>
			`
		})
		.catch(error => console.error('Error:', error))
}

document.addEventListener('DOMContentLoaded', () => {
	updateCard(cardId)
})

btnNext.onclick = () => {
	updateCard(cardId + 1)
}

btnPrev.onclick = () => {
	updateCard(cardId - 1)
}

//                            2 Домашка

fetch(`https://jsonplaceholder.typicode.com/posts`)
	.then(response => response.json())
	.then((data) => console.log(data[0]))

