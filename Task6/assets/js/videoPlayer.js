(() =>  {
	if(customElements.get('video-section')) {
		return;
	}

	class ToggleVideo extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.video = this.querySelector('[data-video]');
			this.addEventListener('click', this.toggleVideo.bind(this));
		}

		disconnectedCallback () {
			this.removeEventListener('click', this.toggleVideo.bind(this));
		}

		toggleVideo() {						
			if(this.video.paused) {
				this.video.play();
				this.classList.add('is-playing');
			} else {
				this.video.pause();
				this.classList.remove('is-playing');
			} 
		} 
	}
	
	customElements.define('video-section', ToggleVideo);
})();
	
