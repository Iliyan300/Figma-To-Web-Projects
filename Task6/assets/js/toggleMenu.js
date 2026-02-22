(() => { 
	if(customElements.get('header-component')) {
		return;
	}

	class HeaderComponent extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.querySelector('[data-menu-toggle]').addEventListener('click', this.toggleMenu.bind(this));
		}

		disconnectedCallback() {
			this.querySelector('data-menu-toggle').removeEventListener('click', this.toggleMenu.bind(this));
		}

		toggleMenu() {
			this.classList.toggle('is-open');
			document.body.classList.toggle('is-disabled');
		}
}

	customElements.define('header-component', HeaderComponent);
})();