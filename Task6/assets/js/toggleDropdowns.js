(() => {
	if(customElements.get('dropdown-element')) {
		return;
	}

	class DropdownsComponent extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.querySelector('[data-dropdown-header]').addEventListener('click', this.toggleDropdown.bind(this));
		}

		disconnectedCallback() {	
			this.querySelector('[data-dropdown-header]').removeEventListener('click', this.toggleDropdown.bind(this));
		}

		toggleDropdown() {
			this.classList.toggle('is-open');
  	}
	}

		customElements.define('dropdown-element', DropdownsComponent);
})();