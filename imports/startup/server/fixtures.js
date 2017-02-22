import { Books } from '../../api/books/books';

const books = [{
  title: 'Seeking Wisdom',
  author: 'Peter Bevelin',
  read: true,
},{
  title: 'The Conquest of Happiness',
  author: 'Bertrand Russel',
  read: true,
},{
  title: 'A Work in Progress',
  author: 'René Redzepi',
  read: true,
},{
  title: 'The Culture of Narcissim',
  author: 'Christopher Lasch',
  read: false,
}];

export const seedBooks = () => {
  Books.remove({});
  books.forEach((book) => Books.insert(book));
};

seedBooks();
