(() => {
  if (customElements.get("swiper-products")) return;

  class SwiperProducts extends HTMLElement {
   constructor() {
		super();

      this.swiper = new Swiper(this, {
        slidesPerView: 1,
        loop: true,

        navigation: {
          prevEl: '[data-arrow-prev]',
          nextEl: '[data-arrow-next]'
        },

				effect: "fade",
					fadeEffect: {
						crossFade: true
				},

				on: {
        slideChange: function () {
            const activeSlide = this.slides[this.activeIndex];
            const productTitle = activeSlide.dataset.title;
            const productPrice = parseFloat(activeSlide.dataset.price);
            
            document.querySelector('.js-product-title').textContent = productTitle;
            document.querySelector('.js-product-price p').textContent = `$${productPrice.toFixed(2)} USD`;
        }
    }
      });
    }
  }

  customElements.define("swiper-products", SwiperProducts);
})();

