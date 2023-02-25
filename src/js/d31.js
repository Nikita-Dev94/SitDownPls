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



const swiperD1 = new Swiper(".ware__swiper-subs", {
	loop: true,
	freeMode: true,
	watchSlidesProgress: true,
	spaceBetween: 30,
	slidesPerView: 3,
	slidesPerGroup: 1,
	breakpoints: {
		// when window width is >= 300px
		300: {
			direction: 'horizontal',
			slidesPerView: 2,
		},
		// when window width is >= 700px
		700: {
			direction: 'vertical',
			slidesPerView: 3,
		},
		// when window width is >= 700px
		992: {
			direction: 'horizontal',
			slidesPerView: 3,

		}
	}
});
const swiperD2 = new Swiper('.ware__swiper-main', {
	// Optional parameters
	loop: true,
	thumbs: {
		swiper: swiperD1,
	},
});
const swiperD3 = new Swiper('.ware__more', {
	navigation: {
		nextEl: '.ware__swiper-button-next',
		prevEl: '.ware__swiper-button-prev',
	},

	breakpoints: {
		300: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 16,


		},
		// when window width is >= 992px
		992: {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPerGroup: 1,


		},
		// when window width is >= 1300px
		1300: {
			slidesPerView: 4,
			spaceBetween: 32,
			slidesPerGroup: 1,

		},
	}
});




// Слайдер popup

const swiperModalSub = new Swiper(".ware__modal-subs", {
	loop: true,
	breakpoints: {
		300: {
			slidesPerView: 'auto',
			slidesPerGroup: 1,

		},
		700: {
			slidesPerView: 2,
			slidesPerGroup: 1,

		},
		// when window width is >= 992px
		992: {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPerGroup: 1,


		},
		// when window width is >= 1300px
		1300: {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 1,

		},
	}

});
const swiperModalaAin = new Swiper('.ware__modal-main', {
	// Optional parameters
	loop: true,
	nextEl: '.ware__swiper-button-next',
	prevEl: '.ware__swiper-button-prev',
	thumbs: {
		swiper: swiperModalSub,
	},

});


// Валидация формы
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

const validateD = new window.JustValidate(
	'.ware__form',
	{
		errorLabelStyle: {
			color: '#FF6972'
		},

	});

validateD
	.addField('#ware__name', [
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
	.addField('#ware__tel', [
		{
			rule: 'required',
			errorMessage: 'Обязательно для заполнения',
		}
	])


// Submit
let buySubmit = document.querySelector('.ware__btn');
let nameInput = document.querySelector('#ware__name');
let phoneInput = document.querySelector('#ware__tel');


buySubmit.addEventListener('click', () => {
	if (nameInput.classList.contains('just-validate-success-field') && phoneInput.classList.contains('just-validate-success-field')) {
		const form = document.querySelector('.ware__form');
		const formSubmit = document.querySelector('.ware__form-submit');
		form.style.display = 'none'
		formSubmit.style.display = 'flex'
	}
})

