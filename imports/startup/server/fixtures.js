import { Books } from '../../api/books/books';
import { Reviews } from '../../api/reviews/reviews';

const books = [{
  title: 'Seeking Wisdom',
  author: 'Peter Bevelin',
  read: true,
  reviews: [
    {
      name: 'Doug Funnie',
      rating: 5,
      review: 'This book helped me get out of some dark times.',
    },
    {
      name: 'Skeeter Valentine',
      rating: 3,
      review: 'Tried to read this at Doug\'s house but the pages were stuck together.',
    },
    {
      name: 'Patti Mayonnaise',
      rating: 4,
      review: 'Pretty good! Found it by accident outside my window...',
    },
  ],
},{
  title: 'The Conquest of Happiness',
  author: 'Bertrand Russel',
  read: false,
  reviews: [
    {
      name: 'Ryan Glover',
      rating: 5,
      review: 'Really enjoyed this book!',
    },
  ],
},{
  title: 'A Work in Progress',
  author: 'René Redzepi',
  read: true,
  reviews: [
    {
      name: 'Grant Achatz',
      rating: 5,
      review: 'René is a true inspiration and his journal makes it clear why Noma is the restaurant that it is today.',
    },
    {
      name: 'Thomas Keller',
      rating: 4,
      review: 'Noma is a really magical restaurant.',
    },
  ],
}];

export const seedBooks = () => {
  Books.remove({});
  books.forEach(({ title, author, read, reviews }) => {
    const book = Books.insert({ title, author, read });
    reviews.forEach((review) => {
      Reviews.insert({ book, ...review });
    });
  });
};

seedBooks();
