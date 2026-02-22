(() => {
  if (customElements.get("swiper-products")) {
    return;
  }

  class SwiperSlider extends HTMLElement {
    connectedCallback() {
			const prevBtn = this.querySelector('[data-arrow-prev]');
      const nextBtn = this.querySelector('[data-arrow-next]');
      const scrollbar = this.querySelector('[data-scrollbar]');
		
			this.swiper = new Swiper(this, {
				
				breakpoints: {
					0: {
						enabled:false,
					},

					768: {
						enabled: true,
						slidesPerView: 4,
						spaceBetween:10,

						navigation: {
							prevEl: prevBtn,
							nextEl: nextBtn,
						},

						scrollbar: {
							el: scrollbar,
							draggable: true,
						},
					}
				}
			});
  		}
		}

  customElements.define("swiper-products", SwiperSlider);

})();
