import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city ={
  name: "Kandy",
  country: "Sri Lanka"
};
ReactDOM.render(
    <h1 id="heading" className="cool-text">
      {city.name} is in {city.country}
      <br></br>
      Welcome to {city.name}
    </h1>,
    document.getElementById('root')
);


