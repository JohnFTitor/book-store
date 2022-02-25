import React from 'react';
import '../styles/books.scss';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const booksArray = useSelector((state) => state.booksReducer);

  const createBooks = () => (
    booksArray.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        category={book.category}
        author={book.author}
      />
    ))
  );

  return (
    <div className="books-page">
      <ul className="books-container">
        {createBooks()}
      </ul>
      <h1> Add New Book </h1>
      <AddBook />
    </div>
  );
};

export default Books;
