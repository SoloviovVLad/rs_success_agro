import gsap from 'gsap';

const sputnik = () => {
	const el = document.querySelector('.counted_list__img_w--animate');

	if (el) {
		gsap.from(el, 2, {
			yoyo: true,
			y: -70,
			repeat: -1,
			ease: 'power0',
		});
	}
};

export default sputnik;
