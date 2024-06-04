import React from 'react';
import './Terminal.css';

const Terminal = ({ code }) => {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="header-buttons">
          <div className="button" style={{ backgroundColor: '#ff5f56' }}></div>
          <div className="button" style={{ backgroundColor: '#ffbd2e' }}></div>
          <div className="button" style={{ backgroundColor: '#27c93f' }}></div>
        </div>
      </div>
      <div className="terminal-body">
        <code className='code'>
          {code}
        </code>
      </div>
    </div>
  );
};

export default Terminal;