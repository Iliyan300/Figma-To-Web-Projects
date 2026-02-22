(() => {
  if (customElements.get("quantity-selector")) {
    return;
  }

  class QuantitySelector extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.input = this.querySelector("[data-input]");
      this.addEventListener("click", this.update.bind(this));	
    }

    update(e) {
			if(e.target.hasAttribute('data-plus-btn')) {
				this.input.value++;
			} else if(e.target.hasAttribute('data-minus-btn')) {
				this.input.value > 0 && this.input.value--;
			}
    }
  }

  customElements.define("quantity-selector", QuantitySelector);
})();


