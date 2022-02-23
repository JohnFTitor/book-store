import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;

  const dispatch = useDispatch();

  const removeSelf = () => {
    dispatch(removeBook(id));
  };

  return (
    <li id={id} className="book">
      <div className="info">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button" onClick={removeSelf}>
          Remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
