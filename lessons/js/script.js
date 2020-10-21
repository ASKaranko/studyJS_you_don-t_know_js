'use strict';

const books = document.querySelectorAll('.book'),
      adv = document.querySelector('.adv');

console.log(books);

books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
books[4].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();

const book2elems = books[0].querySelectorAll('li'),
      book5elems = books[5].querySelectorAll('li'),
      book6elems = books[2].querySelectorAll('li');

console.log(book2elems);
console.log(book5elems);
console.log(book6elems);

book2elems[4].before(book2elems[6]);
book2elems[4].before(book2elems[8]);
book5elems[2].before(book5elems[9]);
book5elems[4].after(book5elems[2]);
book5elems[5].before(book5elems[6]);
book5elems[5].before(book5elems[7]);

let li8 = document.createElement('li').textContent = 'Глава 8: За пределами ES6';
book6elems[8].after(li8);