import Swiper, { Navigation } from 'swiper/swiper-bundle';

const sliderDownload = () => {
	Swiper.use([Navigation]);

	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper('.js-slider-download', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
	});
};

export default sliderDownload;
