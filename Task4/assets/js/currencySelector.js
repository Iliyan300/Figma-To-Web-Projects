const currencySelector = document.querySelectorAll('.js-currency-selector');

const currencies = {
    'AUD $ | United States': {
        symbol: '$',
        currency: 'USD'
    },
    'EUR € | Europe': {
        symbol: '€',
        currency: 'EUR'
    },
    'CAD $ | Canada': {
        symbol: '$',
        currency: 'CAD'
    },
};

function updatePrice(currency) {
	const priceElement = document.querySelector('.js-product-price p');
	const activeSlide = document.querySelector('.product-highlight .swiper .swiper-slide-active');
	const basePrice = parseFloat(activeSlide.dataset.price);
	const selectedCurrency = currencies[currency];

	let updatedPrice = basePrice;

	if(currency.includes('EUR')) {
		updatedPrice = basePrice * 0.60;
	} 
	else if(currency.includes('CAD')) {
		updatedPrice = basePrice * 1.36;
	} 
	
	priceElement.textContent = `${selectedCurrency.symbol}${updatedPrice.toFixed(2)} ${selectedCurrency.currency}`;
}

currencySelector.forEach((selector) => {
	selector.addEventListener('change', (e) => {
		updatePrice(e.target.value);
	});
});
