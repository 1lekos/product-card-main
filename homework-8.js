// 3. Объект с данными пользователя
const userProfile = {
  firstName: 'Алексей',
  lastName: 'Иванов',
  email: 'example@gmail.com',
  age: 21,
  country: 'Россия',
  city: 'Москва',
  job: 'IT',
  position: 'Frontend-разработчик',
  relationshipStatus: 'Не указано',
};


// 4. Объект автомобиля и его владелец
const car = {
  brand: 'BMW',
  model: 'M5',
  year: 2020,
  color: 'Black',
  transmission: 'Automatic',
};

car.owner = userProfile;

console.log(car);
console.log(car.owner.firstName);

// 5. Добавление максимальной скорости автомобиля
function addMaxSpeed(carObject) {
  if ('maxSpeed' in carObject) {
    return;
  }

  carObject.maxSpeed = 250;
}

addMaxSpeed(car);

// 6. Вывод значения свойства объекта

function showObjectProperty(object, property) {
  console.log(object[property]);
}

showObjectProperty(car, 'brand');
showObjectProperty(car, 'color');

// 7. Массив продуктов

const products = [
  'Хлеб',
  'Молоко',
  'Сыр',
  'Яблоки',
  'Шоколад',
];

console.log(products);
console.log(products[0]);

// 8. Массив книг

const books = [
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    coverColor: 'Black',
    genre: 'Dystopia',
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    year: 1937,
    coverColor: 'Green',
    genre: 'Fantasy',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    coverColor: 'Red',
    genre: 'Thriller',
  },
];

books.push({
  title: 'Dune',
  author: 'Frank Herbert',
  year: 1965,
  coverColor: 'Orange',
  genre: 'Science fiction',
}); 

console.log(books);

// 9. Объединение массивов книг

const harryPotterBooks = [
  {
    title: 'Harry Potter and the Philosopher’s Stone',
    author: 'J. K. Rowling',
    year: 1997,
    coverColor: 'Red',
    genre: 'Fantasy',
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    year: 1998,
    coverColor: 'Blue',
    genre: 'Fantasy',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
    year: 2007,
    coverColor: 'Green',
    genre: 'Fantasy',
  },
];

const allBooks = [...books, ...harryPotterBooks];
console.log(allBooks);

// 10. Добавление свойства isRare через map

function addRareProperty(booksArray) {
  return booksArray.map(function (book) {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const booksWithRareStatus = addRareProperty(allBooks);
console.log(booksWithRareStatus);