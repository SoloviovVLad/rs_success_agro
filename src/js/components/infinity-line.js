import gsap from 'gsap';

const infinityLine = () => {
	const lineWrap = document.querySelectorAll('.js-infinity-line');

	if (lineWrap) {
		gsap.to(lineWrap, {
			xPercent: -100,
			repeat: -1,
			duration: 20,
			ease: 'linear',
		});
	}
};

export default infinityLine;
