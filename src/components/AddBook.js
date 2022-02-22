import React from 'react';

const AddBook = () => (
  <form>
    <label htmlFor="book-title">
      <input id="book-title" name="bookTitle" type="text" placeholder="Book Title" />
    </label>
    <label htmlFor="category-select">
      <select id="category-select" name="category">
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

export default AddBook;
