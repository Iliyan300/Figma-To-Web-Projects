(() => {
	if(customElements.get('swiper-reviews')) {
		return;
	}
	
	class SwiperReviews extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.swiper = new Swiper(this, {
				breakpoints: {
					0: {
						enabled: true,
						spaceBetween: 32,
						slidesPerView:1,
						pagination: {
							el: '[data-pagination]',
							clickable: true,
						},
					},
					768: {
						enabled: false,
						spaceBetween: 0,
					}
				},
			})
		}
	}

	customElements.define('swiper-reviews', SwiperReviews)
})();