import isElementInViewport from '../helpers/inViewport';

const animateProduct = () => {
	const bottle = document.querySelector('.js-animate-bottle');
	const container = document.querySelector('.js-animate-product');
	const mod = 'animate_product__img_container--animated';

	if (container && bottle) {
		isElementInViewport(container, mod);
	}
};

export default animateProduct;
