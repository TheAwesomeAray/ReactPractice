import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: '/images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 
    'Life on the Mississippi', 'Roughing It', "The War Prayer"]
  },
  {
    name: 'Stephen King',
    imageUrl: '/images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Shining', 
    'The Gunslinger', 'It', "Pet Semetary"]
  },
  {
    name: 'Robert Jordan',
    imageUrl: '/images/authors/robertjordan.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Eye of the World', 
    'The Dragonborn', 'Crossroads of Twilight', "A Crown of Swords"]
  },
  {
    name: 'JK Rowling',
    imageUrl: '/images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Harry Potter and the Sorcerers Stone', 
    'Harry Potter and the Chamber of Secrets', 
    'Harry Potter and the Prisoner of Azkaban', 
    "Harry Potter and the Goblet of Fire"]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c, i) {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks)

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
      author.books.some((title) => 
        title === answer))
  }
}

const state = {
  turnData: getTurnData(authors),
  highlight: '',
  onAnswerSelected: onAnswerSelected
}

function onAnswerSelected (answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function render() {
  ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
}
render();

  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
