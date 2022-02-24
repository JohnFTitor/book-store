import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookToAPI } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Category');
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const nodeName = event.target.name;
    if (nodeName === 'bookTitle') {
      setTitle(event.target.value);
      return;
    }
    if (nodeName === 'bookAuthor') {
      setAuthor(event.target.value);
      return;
    }
    if (nodeName === 'category') {
      setCategory(event.target.value);
    }
  };

  const submitBook = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      const newBook = {
        id: uuid(),
        title: title.trim(),
        author: author.trim(),
        category,
      };

      dispatch(addBookToAPI(newBook));

      setTitle('');
      setAuthor('');
      setCategory('Category');
    }
  };

  return (
    <form onSubmit={submitBook}>
      <label htmlFor="book-title">
        <input onChange={onChangeHandler} id="book-title" name="bookTitle" type="text" placeholder="Book Title" value={title} required />
      </label>
      <label htmlFor="book-author">
        <input onChange={onChangeHandler} id="book-author" name="bookAuthor" type="text" placeholder="Author" value={author} required />
      </label>
      <label htmlFor="category-select">
        <select onChange={onChangeHandler} id="category-select" name="category" value={category} required>
          <option disabled> Category </option>
          <option value="fiction"> Fiction </option>
          <option value="action"> Action </option>
          <option value="suspense"> Suspense </option>
          <option value="Romance"> Romance </option>
        </select>
      </label>
      <button type="submit"> Add Book </button>
    </form>
  );
};

export default AddBook;
