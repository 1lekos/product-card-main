
// Импорт массива товаров
import { products } from './products.js';


// 3. Функция для отображения карточек

function renderCards(productsToRender) {
  const cardsContainer = document.querySelector('.cards');

  cardsContainer.innerHTML = productsToRender.map(function (product) {
    return `
      <li class="card">
        <img class="card-image" src="${product.image}" alt="${product.name}">

        <span class="card-tag">${product.skinType}</span>

        <h2 class="card-title">${product.name}</h2>

        <p class="card-text">${product.description}</p>

        <span class="card-subtitle">Состав:</span>

        <ul class="ingredients">
          ${product.ingredients.map(function (ingredient) {
            return `<li>${ingredient}</li>`;
          }).join('')}
        </ul>

        <div class="price">
          <b>Цена</b>
          <span>${product.price.toLocaleString('ru-RU')} ₽</span>
        </div>
      </li>
    `;
  }).join('');
}


// 4. Получение массива объектов с названиями и описаниями

const productDescriptions = products.reduce(function (result, product) {
  result.push({
    [product.name]: product.description
  });

  return result;
}, []);

console.log(productDescriptions);


// 5. Получение количества карточек через prompt

function getCardsCount() {
  const answer = prompt('Сколько карточек отобразить? От 1 до 5');

  if (answer === null) {
    return 5;
  }

  const count = Number(answer);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert('Введите число от 1 до 5');
    return getCardsCount();
  }

  return count;
}


// Запуск отображения карточек

const cardsCount = getCardsCount();

renderCards(products.slice(0, cardsCount));
 