// Элементы формы

const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

const basePrice = 6000; // Базовая цена

// Связать range с текстовым полем, слушаем событие инпута

squareRange.addEventListener('input', function () {
	squareInput.value = squareRange.value;
});

// Связать текстовое поле с ползунком

squareInput.addEventListener('input', function () {
	squareRange.value = squareInput.value;
});

const totalPrice = basePrice * parseInt(squareInput.value); // приводим строку из инпута к числу
