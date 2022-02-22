import React from 'react';
import '../styles/books.scss';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const test = {
    title: '',
    category: '',
  };

  return (
    <div className="books-page">
      <ul className="books-container">
        <Book title={test.title} category={test.category} />
        <Book title={test.title} category={test.category} />
        <Book title={test.title} category={test.category} />
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
