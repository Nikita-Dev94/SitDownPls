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

// Табы каталог

window.onload = function () {
	let tabsBtn = document.querySelectorAll('.catalog__btn');
	let card = document.querySelectorAll('.catalog__card');

	function tabMoreCatalog(countCard) {
		for (let i = countCard; i < card.length; i++) {
			card[i].style.display = "none";
		}
		tabsBtn.forEach(function (element) {
			element.addEventListener('click', function (event) {
				tabsBtn.forEach(function (tabsBtn) {
					tabsBtn.classList.remove('catalog__btn--active')
				});
				const value = event.target.value;
				event.currentTarget.classList.add('catalog__btn--active');
				const countImages = 18; // Количество всех картинок
				for (let i = 0; i <= countImages; i++) {
					if (i <= value * countCard - 1 && i >= countCard * (value - 1)) {
						card[i].style.display = "flex"
					} else {
						card[i].style.display = "none"
					}
				};
			});
		});
	}
	if (document.documentElement.clientWidth > 998) {
		tabMoreCatalog(9);
	} else {
		tabMoreCatalog(6);
	}
}

// Появление тегов
const checks = document.querySelectorAll('.custom-checkbox');
const tags = document.querySelectorAll('.catalog__tag-item');

checks.forEach((el) => {
	el.addEventListener('click', () => {

		if (el.checked === true) {
			tags.forEach((e) => {
				if (el.dataset.path === e.dataset.tag) {
					e.classList.add('catalog__tag-item--visible');
				}
			})
		} else {
			tags.forEach((e) => {
				if (el.dataset.path === e.dataset.tag) {
					e.classList.remove('catalog__tag-item--visible');
				}
			})
		}
	})
})

// Ползунок цены
const sliderRange = document.getElementById('range__slider');

noUiSlider.create(sliderRange, {
	start: [2000, 150000],
	connect: true,
	range: {
		'min': 0,
		'max': 220000
	}
});

const inputFrom = document.getElementById('from');
const inputTo = document.getElementById('to');
const inputs = [inputFrom, inputTo];
const cards = document.querySelectorAll('.catalog__card');
const tagsPrice = document.querySelectorAll('.catalog__price-out')

sliderRange.noUiSlider.on('update', function (values, handle) {
	inputs[handle].value = Math.round(values[handle]);

	cards.forEach((card) => {
		if (Number(card.getAttribute('data-price')) > values[0] && Number(card.getAttribute('data-price')) < values[1]) {
			card.style.display = 'flex'
		} else {
			card.style.display = 'none'
		}
	});

});

const setRange = (i, value) => {
	let rangeArray = [null, null]
	rangeArray[i] = value;
	sliderRange.noUiSlider.set(rangeArray)

};
inputs.forEach((el, index) => {
	el.addEventListener('change', (e) => {
		setRange(index, e.currentTarget.value)
	})
});

//Категории Каталог
let expanded = false;

function showCheckboxes1() {
	const checkboxes = document.querySelector(".catalog__filter-cat #checkboxes1");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}
function showCheckboxes2() {
	const checkboxes = document.querySelector(".catalog__filter-price #checkboxes2");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}
function showCheckboxes3() {
	const checkboxes = document.querySelector(".catalog__filter-sale #checkboxes3");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}
function showCheckboxes4() {
	const checkboxes = document.querySelector(".catalog__filter-color #checkboxes4");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}


