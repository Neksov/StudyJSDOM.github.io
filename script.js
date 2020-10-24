'use strict';

const body= document.querySelector('body'),
      book = document.querySelectorAll('.book'),
      adv = document.querySelector('.adv'),
      title = document.getElementsByTagName('a')[4],
      book6 = book[2].querySelectorAll('li'),
      bookUl = book[2].querySelector('ul'),

      book2 = book[0].querySelectorAll('li'),
      book5 = book[5].querySelectorAll('li');
      

book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);
document.body.style.backgroundImage = "url('../image/you-dont-know-js.jpg')";
title.innerText = 'Книга 3. this и Прототипы Объектов';
adv.remove(adv);

let li = document.createElement('li'),
    text ='Глава 8: За пределами ES6';
li.textContent = text;
bookUl.appendChild(li);

book[0].querySelectorAll('li')[1].after(book[0].querySelectorAll('li')[3]);
book[0].querySelectorAll('li')[6].after(book[0].querySelectorAll('li')[3]);
book[0].querySelectorAll('li')[2].after(book[0].querySelectorAll('li')[8]);
book[0].querySelectorAll('li')[6].after(book[0].querySelectorAll('li')[8]);
book[0].querySelectorAll('li')[9].after(book[0].querySelectorAll('li')[8]);
book[0].querySelectorAll('li')[2].after(book[0].querySelectorAll('li')[6]);

book[5].querySelectorAll('li')[4].after(book[5].querySelectorAll('li')[2]);
book[5].querySelectorAll('li')[7].after(book[5].querySelectorAll('li')[5]);
book[5].querySelectorAll('li')[1].after(book[5].querySelectorAll('li')[9]);

book[2].querySelectorAll('li')[10].after(book[2].querySelectorAll('li')[9]);

console.log(book);
