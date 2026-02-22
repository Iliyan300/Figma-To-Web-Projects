const minusBtn = document.querySelector('.js-qunatity-minus');
const plusBtn = document.querySelector('.js-qunatity-plus');
let quantityInput = document.querySelector('.js-quantity-input');

function addQuantity() {
	let currentQuantity = parseInt(quantityInput.value);
	const maxQuantity = parseInt(quantityInput.max);

		if(currentQuantity < maxQuantity) {
			quantityInput.value = currentQuantity + 1;
	}
}

function removeQuantity() {
	let currentQuantity = parseInt(quantityInput.value);
	
	if(currentQuantity >= 1) {
	quantityInput.value = currentQuantity - 1;
	}
}

function inputQuantityLimit(quantity) {
		if(quantity.length > 2) {
		quantity = quantity.slice(0, 2);
	}
	return quantity;
}

plusBtn.addEventListener('click', addQuantity);
minusBtn.addEventListener('click', removeQuantity);

quantityInput.addEventListener('input', function(e) {
	let userQuantity = e.target.value.replace(/\D/g, '');
	e.target.value = inputQuantityLimit(userQuantity);
})

quantityInput.addEventListener('blur', function(e) {
    if (e.target.value === '') {
        e.target.value = '0';
    }
});

