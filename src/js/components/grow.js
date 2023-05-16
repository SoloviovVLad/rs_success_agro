import isElementInViewport from '../helpers/inViewport';

const grow = () => {
	const growImg = document.querySelector('.js-grow');
	const mod = 'grow__img_w--animated';

	if (growImg) {
		isElementInViewport(growImg, mod);
	}
};

export default grow;
