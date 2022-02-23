import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;

  return (
    <li className="book">
      <div className="info">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">
          Remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
