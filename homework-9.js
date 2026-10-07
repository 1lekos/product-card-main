import { comments } from './comments.js';

// 2. Фильтрация массива чисел

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(function (number) {
  return number >= 5;
});

console.log(numbersFromFive);

// 3. Проверка наличия элемента в массиве

const products = [
  'Очищающий гель',
  'Сыворотка',
  'Крем',
  'Тоник',
  'Солнцезащитный крем'
];

const hasSerum = products.includes('Сыворотка');

console.log(hasSerum);


// 4. Изменение порядка элементов массива на противоположный

function reverseArray(array) {
  return array.reverse();
}

reverseArray(numbers);
reverseArray(products);

console.log(numbers);
console.log(products);

// 7. Фильтрация комментариев по email с .com

const commentsWithCom = comments.filter(function (comment) {
  return comment.email.includes('.com');
});

console.log(commentsWithCom);

// 8. Изменение postId в зависимости от id пользователя

const commentsWithNewPostId = comments.map(function (comment) {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log(commentsWithNewPostId);

// 9. Создание массива объектов только с id и name

const commentsIdAndName = comments.map(function (comment) {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(commentsIdAndName);

// 10. Добавление свойства isInvalid

const commentsWithValidation = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log(commentsWithValidation);

// 11. Получение массива email с помощью reduce и map

const emailsWithReduce = comments.reduce(function (emails, comment) {
  emails.push(comment.email);
  return emails;
}, []);

console.log(emailsWithReduce);

const emailsWithMap = comments.map(function (comment) {
  return comment.email;
});

console.log(emailsWithMap);

// 12. Преобразование массива email в строку

const emailsStringWithToString = emailsWithMap.toString();

console.log(emailsStringWithToString);

const emailsStringWithJoin = emailsWithMap.join(', ');

console.log(emailsStringWithJoin);