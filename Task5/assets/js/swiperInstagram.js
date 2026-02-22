	(() => {

		if(customElements.get("swiper-instagram")) {
			return;
		}

		class SwiperInstagram extends HTMLElement {
			connectedCallback() {
				const prevBtn = this.querySelector('[data-arrow-prev]');
				const nextBtn = this.querySelector('[data-arrow-next]');
				const scrollbar = this.querySelector('[data-scrollbar]');

				this.swiper = new Swiper(this, {
					

					breakpoints: {
						0: {
							slidesPerView: 1.4,
							spaceBetween: 10,

							scrollbar: {
								el: scrollbar,
								clickable: true,
							},

							navigation: {
								prevEl: prevBtn,
								nextEl: nextBtn,
							},
						},

						768: {
							slidesPerView: 4,
							spaceBetween: 10,

							scrollbar: {
								el: scrollbar,
								clickable: true,
							},

							navigation: {
								prevEl: prevBtn,
								nextEl: nextBtn,
							},
						}
					}
				})
			}
		}
		
		customElements.define("swiper-instagram", SwiperInstagram)
	})();