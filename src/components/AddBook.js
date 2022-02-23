import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Category');

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

  return (
    <form>
      <label htmlFor="book-title">
        <input onChange={onChangeHandler} id="book-title" name="bookTitle" type="text" placeholder="Book Title" value={title} required />
      </label>
      <label htmlFor="book-author">
        <input onChange={onChangeHandler} id="book-author" name="bookAuthor" type="text" placeholder="Author" value={author} required />
      </label>
      <label htmlFor="category-select">
        <select onChange={onChangeHandler} id="category-select" name="category" value={category} required>
          <option disabled selected> Category </option>
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
