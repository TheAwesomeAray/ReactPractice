import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route} from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

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

function reducer(state = { authors, turnData: getTurnData(authors), highlight: ''}, 
action) {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign(
        {}, 
        state, {
          highlight: isCorrect ? 'correct' : 'wrong'
        }
      )
    case 'CONTINUE':
    return Object.assign(
      {}, 
      state, {
        highlight:'',
        turnData: getTurnData(state.authors)
      }
    )
    case 'ADD_AUTHOR':
      return Object.assign(
        {}, 
        state, {
          authors: state.authors.concat([action.author])
        }
      )
    default: return state;
  }
}


let store = Redux.createStore(reducer, devToolsEnhancer()
);

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
    <ReactRedux.Provider store={store}>
      <Route exact path="/" component={AuthorQuiz} />
      <Route path="/add" component={AddAuthorForm} />
      </ReactRedux.Provider>
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root')
);

  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
