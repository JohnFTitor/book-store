import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import ProgressBar from './ProgressBar';

const Book = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;

  const dispatch = useDispatch();
  const limit = Math.floor(Math.random() * 100);

  const removeSelf = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li id={id} className="book">
      <div className="info">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="text">{author}</p>
        <div className="buttons">
          <button className="text" type="button">
            Comments
          </button>
          <button className="text" type="button" onClick={removeSelf}>
            Remove
          </button>
          <button className="text" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="chapter">
        <ProgressBar limit={limit} />
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
