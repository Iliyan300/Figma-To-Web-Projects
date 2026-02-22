(() => {
  if (customElements.get("swiper-hero")) {
    return;
  }

  class SliderHero extends HTMLElement {
    constructor() {
      super();

      this.swiper = new Swiper(this, {
        slidesPerView: 1,
				loop: true,

				autoplay: {
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true
				},

				pagination: {
					el:'[data-pagination]',
					clickable: true
				},
      });
    }
  }

  customElements.define("swiper-hero", SliderHero);
})();
