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

