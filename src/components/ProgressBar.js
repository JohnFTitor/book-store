import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/progressBar.scss';

const ProgressBar = (props) => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const { limit } = props;

  const updateProgress = () => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 40);
    setIntervalId(id);
  };

  if (count === limit) {
    clearInterval(intervalId);
  }

  useEffect(updateProgress, []);

  return (
    <div className="chapter-progress">
      <div className="circular">
        <div className="inner" />
        <div className="circle">
          <div className="bar left">
            <div className="progress" />
          </div>
          <div className="bar right">
            <div className="progress" />
          </div>
        </div>
      </div>
      <div className="status-number">
        <p className="number">
          {count}
          %
        </p>
        <p className="status"> Completed </p>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  limit: PropTypes.number.isRequired,
};
