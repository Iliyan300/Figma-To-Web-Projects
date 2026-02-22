(() => {

  if (customElements.get('swiper-products')) {
		return;
	}

  class SwiperProducts extends HTMLElement {
		constructor() {
			super();
		}

   	connectedCallback() {
			this.swiperThumbs = this.querySelector('[data-thumbs]');
			this.swiperMain = this.querySelector('[data-main]');
			this.colorInputs = this.querySelectorAll('[data-color-input]');
	
			this.thumbs = new Swiper(this.swiperThumbs, {
				slidesPerView: 3,
				spaceBetween: 24,
				watchSlidesProgress: true,
			});

			this.swiper = new Swiper(this.swiperMain, {
				slidesPerView: 1,
				loop: false,
				navigation: {
					prevEl: '[data-arrow-prev]',
					nextEl: '[data-arrow-next]'
				},
				pagination: {
					el: '[data-pagination]',
					clickable:true,
				},
				effect: 'fade',
					fadeEffect: {
					crossFade: true
				},
				on: {
					slideChange: () => {
						const activeSlide = this.swiper.slides[this.swiper.activeIndex];
						const activeColor = activeSlide.dataset.color;

						this.colorInputs.forEach((colorInput) => {
							colorInput.checked = colorInput.value == activeColor;
						})
					},
				},
				thumbs: {
        	swiper: this.swiperThumbs,
      	},
    	});

			this.colorInputs.forEach((color) => {
  			color.addEventListener('change', (e) => {

    			if(e.target.checked) {
      			const selectedColor = e.target.value;
      			const slides = this.swiper.slides; 
      			const targetIndex = Array.from(slides).findIndex(slide => slide.dataset.color === selectedColor);

      		if(targetIndex !== -1) {
        		this.swiper.slideTo(targetIndex); 
    	  		}
    			} 
  			})
			})
		}
  }

  customElements.define('swiper-products', SwiperProducts);
})();


