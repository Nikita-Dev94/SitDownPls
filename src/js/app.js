function isWebp() {
	// Проверка поддержки webp
	const testWebp = (callback) => {
		const webP = new Image()

		webP.onload = webP.onerror = () => callback(webP.height === 2)
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebp((support) => {
		const className = support === true ? 'webp' : 'no-webp'
		const html = document.documentElement
		html.classList.add(className)

	})
}
isWebp();
// Селекторы
//Регионы
const regions = document.querySelector('#region');
const choices1 = new Choices(regions, {
	itemSelectText: '',
	searchEnabled: false,
	allowHTML: true,
});
//Категории
const category = document.querySelector('#category');
const choices2 = new Choices(category, {
	itemSelectText: '',
	searchEnabled: false,
	allowHTML: true,
});

//Бургер анимация
let tlBurger = gsap.timeline({ paused: true });
let burgerBtn = document.querySelector('.header__burger-btn');

tlBurger.fromTo('.header__burger-nav', { display: "none", visibility: "hidden", opacity: 0, x: -50 }, { display: "flex", visibility: "visible", opacity: 1, x: 0, duration: .3 });

burgerBtn.onclick = function () {
	const body = document.querySelector('body');
	if (body.classList.contains('stop-scroll')) {
		body.classList.remove('stop-scroll');
		burgerBtn.classList.remove('header__burger__open');
		tlBurger.reverse();
	} else {
		document.querySelector('body').classList.add('stop-scroll')
		burgerBtn.classList.add('header__burger__open')
		tlBurger.play();
	}
}

// Свайпер HERO
const swiper = new Swiper('.hero__swiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		dynamicBullets: true
	},
	effect: "fade",
	autoplay: {
		delay: 5000,
	},

});
// Свайпер SALE
const saleSwiper = new Swiper('.sale__swiper', {
	breakpoints: {
		// when window width is >= 300px
		300: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.sale__swiper-button-next2',
				prevEl: '.sale__swiper-button-prev2'
			},
		},
		// when window width is >= 650px
		700: {
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.sale__swiper-button-next',
				prevEl: '.sale__swiper-button-prev'
			},
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPErGroup: 1,
			navigation: {
				nextEl: '.sale__swiper-button-next',
				prevEl: '.sale__swiper-button-prev'
			},
		},
		// when window width is >= 1300px
		1300: {
			navigation: {
				nextEl: '.sale__swiper-button-next',
				prevEl: '.sale__swiper-button-prev'
			},
			slidesPerView: 'auto',
			spaceBetween: 30,
			slidesPerGroup: 3,
		}
	}

});
// Свайпер useful
const usefulSwiper = new Swiper('.useful__swiper', {
	breakpoints: {
		// when window width is >= 300px
		300: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.useful__swiper-button-next2',
				prevEl: '.useful__swiper-button-prev2'
			},
		},
		// when window width is >= 650px
		700: {
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.useful__swiper-button-next',
				prevEl: '.useful__swiper-button-prev'
			},
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPErGroup: 1,
			navigation: {
				nextEl: '.useful__swiper-button-next',
				prevEl: '.useful__swiper-button-prev'
			},
		},
		// when window width is >= 1300px
		1300: {
			navigation: {
				nextEl: '.useful__swiper-button-next',
				prevEl: '.useful__swiper-button-prev'
			},
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 1,
		}
	}

});
// Показать еще
window.onload = function () {
	let card = document.getElementsByClassName('top__card');
	let btn = document.getElementById('top__btn');
	function tabMore(countCard, openedCard) {
		for (let i = countCard; i < card.length; i++) {
			card[i].style.display = "none";
		}
		let countD = countCard;
		btn.addEventListener("click", function () {
			let card = document.getElementsByClassName('top__card');
			countD += openedCard;
			if (countD <= card.length) {
				for (let i = 0; i < countD; i++) {
					card[i].style.display = "flex";
				}
			}

		})
	}
	if (document.documentElement.clientWidth > 1300) {
		tabMore(8, 4);
	}
	if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth >= 992) {
		tabMore(6, 3);
	}
	if (document.documentElement.clientWidth < 992) {
		tabMore(6, 2);
	}

}

// TOOLTIPS
tippy('#svg__tool', {
	content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
});


// ВВалидация формы
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);


const validateAbout = new window.JustValidate(
	'#contacts__form',
	{
		errorLabelStyle: {
			color: '#FF6972'
		},

	});

validateAbout
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Обязательно для заполнения',
		},
		{
			rule: 'email',
			errorMessage: 'Недопустимый формат!',
		},
	])
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Обязательно для заполнения',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Не менее двух символов',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: 'Не более 30 символов',
		},
	])
	.addField('#tel', [
		{
			rule: 'required',
			errorMessage: 'Обязательно для заполнения',
		}
	])
