const firstProductCard = document.querySelector('.product-card');
const productCards = document.querySelectorAll('.product-card');
const productsTitle = document.querySelector('.products__title');

const repaintFirstButton = document.getElementById('repaint-first-button');
const repaintAllButton = document.getElementById('repaint-all-button');
const googleButton = document.getElementById('google-button');
const consoleButton = document.getElementById('console-button');
const alertButton = document.getElementById('alert-button');
const colorToggleButton = document.getElementById('color-toggle-button');

repaintFirstButton.addEventListener('click', function () {
  firstProductCard.style.backgroundColor = '#e6e3f0';
});

repaintAllButton.addEventListener('click', function () {
  productCards.forEach(function (productCard) {
    productCard.style.backgroundColor = '#eeeaf5';
  });
});

googleButton.addEventListener('click', function () {
  window.open('https://www.google.com', '_blank');
});

consoleButton.addEventListener('click', function () {
  console.log('Кнопка вывода в консоль нажата');
});

alertButton.addEventListener('click', function () {
  alert('Кнопка alert нажата');
});

productsTitle.addEventListener('mouseover', function () {
  console.log(productsTitle.textContent.trim());
});

colorToggleButton.addEventListener('click', function () {
  colorToggleButton.classList.toggle('button--alternate');
});