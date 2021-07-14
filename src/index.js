import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library,message,number1,number2}){
  return(
   <div>
     <h1 id = "heading">Welcome to {library} !</h1>
   <p>{message}</p>
   Total = (number1+number2)
   </div>
  );
  }
ReactDOM.render(
   <Hello library = "React" 
   message = "Have Fun"
   number1 = {20}
   number2 = {10}/>,
    document.getElementById('root')
);


