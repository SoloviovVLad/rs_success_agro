import gsap from 'gsap';

const infinityText = () => {
	const textWrap = document.querySelectorAll('.js-infinity-text');

	if (textWrap) {
		gsap.to(textWrap, {
			xPercent: -100,
			repeat: -1,
			duration: 20,
			ease: 'linear',
		});
	}
};

export default infinityText;
