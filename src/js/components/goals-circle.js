import gsap from 'gsap';

const goalCircle = () => {
	const circle = document.querySelector('.js-goal-circle');

	if (circle) {
		gsap.to(circle, {
			rotation: 360,
			repeat: -1,
			duration: 20,
			ease: 'linear',
		});
	}
};

export default goalCircle;
