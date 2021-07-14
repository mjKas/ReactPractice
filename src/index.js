import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CityList = [
  {id:"1", name: "Kandy" ,user:"Joe"},
  {id:"2", name: "Colombo", user:"Jane"},
  {id:"3", name: "Gall", user: "Sarah"}
];

function App({cities}){
  return (
   <div>
     {cities.map(city =>(
       <div key={city.id}>
         <h2>{city.name}</h2>
         <p>Acessed by: {city.user}</p>
    </div>
     ))}
   </div>
  );
}
  
ReactDOM.render(
    <App cities = { CityList} />,
    document.getElementById('root')
);


