import React from 'react';
import '../styles/progressBar.scss';

const ProgressBar = () => (
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
);

export default ProgressBar;
