console.log('homework-7.js подключён');

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Москве', 20);

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(400000000);
checkSpeed(200000000);
checkSpeed(299792458);

const productName = 'Наушники';
const productPrice = 150;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

buyProduct(200);
buyProduct(100);

function greetUser(name) {
  console.log(`Привет, ${name}!`);
}

greetUser('Алексей');

const studentName = 'Алексей';
const studentAge = 21;
const isHomeworkCompleted = true; 