'use strict';


import * as dayMessage from './message.js'
import { getBooksBySubject } from './library.js';
import { appendData } from './library.js';
import * as weather  from './weather.js';

 
// DOM Element(s)

const subjectText = document.querySelector('#subject');
const getBooksButton = document.querySelector('#getBooks');
const getAuthorsName = document.querySelector('#myData');


// Main

getBooksButton.addEventListener('click', () => {
  getBooksBySubject(subjectText.value);
});

getAuthorsName.addEventListener('click', () => {
  appendData(subjectText.value);
});

console.log(dayMessage);
console.log(weather);
