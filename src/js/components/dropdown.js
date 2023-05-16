const dropdown = () => {
	const selectors = {
		wrap: '.js-dropdown-wrap',
		trigger: '.js-trigger-dropdown',
		dropdown: '.js-dropdown-list',
	};

	const wraps = document.querySelectorAll(selectors.wrap);

	if (wraps) {
		wraps.forEach((wrap) => {
			const trigger = wrap.querySelector(selectors.trigger);
			const dropdownList = wrap.querySelector(selectors.dropdown);

			trigger.addEventListener('click', () => {
				dropdownList.classList.toggle('dropdown__list--open_state');
			});
		});
	}
};

export default dropdown;
