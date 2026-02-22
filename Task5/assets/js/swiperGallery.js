(() => {
  if (customElements.get("swiper-gallery")) {
    return;
  }

  class SwiperSlider extends HTMLElement {
    connectedCallback() {
      const scrollbar = this.querySelector('[data-scrollbar]');

      this.swiper = new Swiper(this, {
        spaceBetween: 10,

        breakpoints: {
          0: {
            enabled: true,
            slidesPerView: 1.4, 
            scrollbar: {
              el: scrollbar,
              draggable: true
            },
          },

          769: {
            enabled: false,
						slidesPerView: 3,
            scrollbar: {
              el: scrollbar,
              draggable: true
            },
          }
        }
      });
    } 
  }

  customElements.define("swiper-gallery", SwiperSlider);
})();