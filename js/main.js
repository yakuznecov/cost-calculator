// Элементы формы

const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input'); // найдем все инпуты на странице

const basePrice = 6000; // Базовая цена
const totalPriceElement = document.querySelector('#total-price');

// Связать range с текстовым полем, слушаем событие инпута

squareRange.addEventListener('input', function () {
	squareInput.value = squareRange.value;
});

// Связать текстовое поле с ползунком

squareInput.addEventListener('input', function () {
	squareRange.value = squareInput.value;
});

function calculate() {
	let totalPrice = basePrice * parseInt(squareInput.value); // приводим строку из инпута к числу

	const formatter = new Intl.NumberFormat('ru');
	formatter.format(totalPrice);
	totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

for (const item of inputs) {
	item.addEventListener('input', function () {
		calculate();
	});
}
