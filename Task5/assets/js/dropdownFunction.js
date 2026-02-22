function activateDropdowns() {
	let userOnMobile = window.innerWidth <= 768;
	const dropdownElements = document.querySelectorAll('.js-col-dropdown');

	dropdownElements.forEach((column) => {
		const title = column.querySelector('.js-col-title');

		if(userOnMobile) {
			title.addEventListener('click', function() {
				column.classList.toggle('open');
			})
			
		} else {
			column.classList.remove('open');
		}
	})
}
activateDropdowns();
window.addEventListener('resize', activateDropdowns)