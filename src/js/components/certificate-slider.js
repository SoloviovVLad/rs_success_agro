import Swiper, { Navigation } from 'swiper/swiper-bundle';

const certificateSlider = () => {
	Swiper.use([Navigation]);

	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper('.js-certificate-slider', {
		slidesPerView: 1.5,
		breakpoints: {
			// when window width is >= 320px
			480: {
				slidesPerView: 1.5,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default certificateSlider;
