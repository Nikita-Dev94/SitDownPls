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

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
	// Создание карты.
	let myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.755885, 37.622854],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 14
	});
	// Создание геообъекта с типом точка (метка).
	let myGeoObject = new ymaps.GeoObject({
		geometry: {
			type: "Point", // тип геометрии - точка
		}
	});
	let myPlacemark1 = new ymaps.Placemark([55.751949, 37.641273], {
		balloonContent: `<div class="balloon__content">
		<h2 class="balloon__title">SitDownPls на Солянке </h2>
		<address class="balloon__address">м. Китай-город, ул. Солянка, д.24</address>
		<div class="baloon__phone">
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z"
					fill="#FF862F" />
			</svg>
			<a href="tel:+794958854547">+7 (495) 885-45-47</a>
		</div>
		
		<p class="balloon__time">Часы работы: <time>с 10:00 до 21:00</time> </p>
		<p class="balloon__place"> <span>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата,
			сервисный центр</p>
	</div>`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/placemark.svg',
		iconImageSize: [32, 22],
		iconImageOffset: [0, 0]
	});

	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myGeoObject);
	myMap.geoObjects.add(myPlacemark1);
	myPlacemark1.balloon.open();
	myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
	myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}


