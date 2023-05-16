const certificateAll = () => {
	const list = document.querySelector('.js-certificate-list');
	const buttonShow = document.querySelector('.js-certificate-show');
	const buttonHide = document.querySelector('.js-certificate-hide');
	const buttons = document.querySelectorAll('.certificate_full__btn');

	if (list) {
		const listItems = list.querySelectorAll('.js-certificate-item');

		for (let i = 0; i < buttons.length; i += 1) {
			buttons[i].addEventListener('click', (e) => {
				e.preventDefault();
			});
		}

		buttonShow.addEventListener('click', () => {
			for (let i = 0; i < listItems.length; i += 1) {
				listItems[i].style.display = 'block';
			}
		});
		buttonHide.addEventListener('click', () => {
			for (let i = 0; i < listItems.length; i += 1) {
				listItems[i].removeAttribute('style');
			}
		});

		// buttonShow.addEventListener('click', function() {

		// });
	}
};

export default certificateAll;
