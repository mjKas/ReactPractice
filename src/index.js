import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(){
  return(
    <div>
      <h1 id="heading"className="cool-text"> WElcome to Sri Lanka</h1>
    </div>
  );
  }
ReactDOM.render(
   <Hello/>,
    document.getElementById('root')
);


