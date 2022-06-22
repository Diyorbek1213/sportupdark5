"use strict"

/* АНИМАЦИЯ ПРИ КЛИКЕ ИЛИ ПРИ НАВЕДЕНИИ МЫШИ КОРЗИНКИ И ВХОДА В ШАПКЕ */

if (window.innerWidth > 920) {
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNum = document.querySelector('.cart__balance__num');
	if (headerCart && cartNum) {
		headerCart.addEventListener("mouseover", function (e) {
			cartBalance.style.color = "#02f778";
			cartBalance.style.transition = "all 0.3s ease 0s";
			headerCart.addEventListener('mouseleave', function (e) {
				cartBalance.style.color = "#0ce876";
			})
		})
	}
	const loginText = document.querySelector('.login__link');
	const loginLogo = document.querySelector('.login__logo');
	if (loginText && loginLogo) {
		loginText.addEventListener("mouseover", function (e) {
			loginLogo.classList.add('_active');
			loginText.addEventListener("mouseleave", function (e) {
				loginLogo.classList.remove('_active');
			})
		})
	}

}

/* АНИМАЦИЯ КОРЗИНКИ И ВХОДА ДЛЯ УСТРОЙСТ МЕНЬШЕ 920PX */

if (window.innerWidth < 920) {
	const loginLink = document.querySelector('.login__link');
	const logoImg = document.querySelector('.login__img');
	if (loginLink && logoImg) {
		loginLink.onclick = () => {
			logoImg.classList.add('mob_active');
		}
	}
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNumber = document.querySelector('.cart__number');
	if (headerCart && cartBalance && cartNumber) {
		headerCart.onclick = () => {
			cartBalance.classList.add('mob_active');
			cartNumber.classList.add('mob_active');
		}
	}
}

/* СКРИПТ ДЛЯ ОЧИСТКИ ПРИ ВВОДЕ В INPUT */

const mainInput = document.querySelector('.main__form__input');
const mainClear = document.querySelector('.main__input__clear');
if (mainInput && mainClear) {
	mainInput.addEventListener('input', (e) => {
		if (e.target.value !== "") {
			mainClear.classList.add('_active');
		} else {
			mainClear.classList.remove('_active');
		}
	})
	mainClear.onclick = () => {
		mainInput.value = '';
		mainClear.classList.remove('_active');
		mainInput.focus();
	}
}

/*АНИМАЦИЯ ПРИ НАВЕДЕНИИ МЫЩЬЮ В МЕНЮ*/

const mainMenu = document.querySelector('.main__menu__images');
const menuContent = document.querySelector('.main__menu__bar');
const menuBorder = document.querySelector('.main__menu__content');
const header = document.querySelector('header');
const mainContainer = document.querySelector('.main__container');

if (mainMenu && menuContent && header && mainContainer) {
	mainMenu.addEventListener('mouseenter', (e) => {
		menuContent.classList.add('_active');
		header.classList.add('_active');
		mainContainer.classList.add('_active');
		menuBorder.addEventListener('mouseleave', (e) => {
			menuContent.classList.remove('_active');
			header.classList.remove('_active');
			mainContainer.classList.remove('_active');
		})
	})
}


/* АНИМАЦИЯ ПРИ НАВЕДЕНИИ МЫЩЬЮ НА ЭЛЕМЕНТ ... */


var acc = document.getElementsByClassName("menu__item__link__dots");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}





const itemImg = document.querySelectorAll('.menu__item__image');
const itemTitle = document.querySelectorAll('.menu__item__title');
const menuLink = document.querySelectorAll('.menu__item__link');


if (itemImg && itemTitle && menuLink) {
	for (let i = 0; i < itemImg.length; i++) {
		itemTitle[i].addEventListener("mouseover", () => {
			itemImg[i].classList.add('_active');
			itemTitle[i].addEventListener("mouseleave", () => {
				itemImg[i].classList.remove('_active');
			})
		})
		itemImg[i].addEventListener("mouseover", () => {
			itemTitle[i].classList.add('_active')
			itemImg[i].addEventListener("mouseleave", () => {
				itemTitle[i].classList.remove('_active');
			})
		})
	}
}

const itemTitle1 = document.querySelector('.menu__item__title_1');
const itemLink1 = document.querySelectorAll('.menu__item__link_1');
const itemList1 = document.querySelector('.menu__item__list_1');
if (itemLink1 && itemLink1) {
	for (let i = 0; i < itemLink1.length; i++) {
		itemLink1[i].addEventListener("mouseover", () => {
			itemTitle1.classList.add('_active');
			itemList1.addEventListener("mouseleave", () => {
				itemTitle1.classList.remove('_active');
			})
		})
	}
}

const itemTitle2 = document.querySelector('.menu__item__title_2');
const itemLink2 = document.querySelectorAll('.menu__item__link_2');
const itemList2 = document.querySelector('.menu__item__list_2');
if (itemLink2 && itemLink2) {
	for (let i = 0; i < itemLink2.length; i++) {
		itemLink2[i].addEventListener("mouseover", () => {
			itemTitle2.classList.add('_active');
			itemList2.addEventListener("mouseleave", () => {
				itemTitle2.classList.remove('_active');
			})
		})
	}
}

const itemTitle3 = document.querySelector('.menu__item__title_3');
const itemLink3 = document.querySelectorAll('.menu__item__link_3');
const itemList3 = document.querySelector('.menu__item__list_3');
if (itemLink3 && itemLink3) {
	for (let i = 0; i < itemLink3.length; i++) {
		itemLink3[i].addEventListener("mouseover", () => {
			itemTitle3.classList.add('_active');
			itemList3.addEventListener("mouseleave", () => {
				itemTitle3.classList.remove('_active');
			})
		})
	}
}

const itemTitle4 = document.querySelector('.menu__item__title_4');
const itemLink4 = document.querySelectorAll('.menu__item__link_4');
const itemList4 = document.querySelector('.menu__item__list_4');
if (itemLink4 && itemLink4) {
	for (let i = 0; i < itemLink4.length; i++) {
		itemLink4[i].addEventListener("mouseover", () => {
			itemTitle4.classList.add('_active');
			itemList4.addEventListener("mouseleave", () => {
				itemTitle4.classList.remove('_active');
			})
		})
	}
}

const itemTitle5 = document.querySelector('.menu__item__title_5');
const itemLink5 = document.querySelectorAll('.menu__item__link_5');
const itemList5 = document.querySelector('.menu__item__list_5');
if (itemLink5 && itemLink5) {
	for (let i = 0; i < itemLink5.length; i++) {
		itemLink5[i].addEventListener("mouseover", () => {
			itemTitle5.classList.add('_active');
			itemList5.addEventListener("mouseleave", () => {
				itemTitle5.classList.remove('_active');
			})
		})
	}
}

const itemTitle6 = document.querySelector('.menu__item__title_6');
const itemLink6 = document.querySelectorAll('.menu__item__link_6');
const itemList6 = document.querySelector('.menu__item__list_6');
if (itemLink6 && itemLink6) {
	for (let i = 0; i < itemLink6.length; i++) {
		itemLink6[i].addEventListener("mouseover", () => {
			itemTitle6.classList.add('_active');
			itemList6.addEventListener("mouseleave", () => {
				itemTitle6.classList.remove('_active');
			})
		})
	}
}

const itemTitle7 = document.querySelector('.menu__item__title_7');
const itemLink7 = document.querySelectorAll('.menu__item__link_7');
const itemList7 = document.querySelector('.menu__item__list_7');
if (itemLink7 && itemLink7) {
	for (let i = 0; i < itemLink7.length; i++) {
		itemLink7[i].addEventListener("mouseover", () => {
			itemTitle7.classList.add('_active');
			itemList7.addEventListener("mouseleave", () => {
				itemTitle7.classList.remove('_active');
			})
		})
	}
}

const itemTitle8 = document.querySelector('.menu__item__title_8');
const itemLink8 = document.querySelectorAll('.menu__item__link_8');
const itemList8 = document.querySelector('.menu__item__list_8');
if (itemLink8 && itemLink8) {
	for (let i = 0; i < itemLink8.length; i++) {
		itemLink8[i].addEventListener("mouseover", () => {
			itemTitle8.classList.add('_active');
			itemList8.addEventListener("mouseleave", () => {
				itemTitle8.classList.remove('_active');
			})
		})
	}
}

const itemTitle9 = document.querySelector('.menu__item__title_9');
const itemLink9 = document.querySelectorAll('.menu__item__link_9');
const itemList9 = document.querySelector('.menu__item__list_9');
if (itemLink9 && itemLink9) {
	for (let i = 0; i < itemLink9.length; i++) {
		itemLink9[i].addEventListener("mouseover", () => {
			itemTitle9.classList.add('_active');
			itemList9.addEventListener("mouseleave", () => {
				itemTitle9.classList.remove('_active');
			})
		})
	}
}
