import React, {useState} from 'react';
/**useState hook is imported */
import ReactDOM from 'react-dom';
import './index.css';


function App(){
  const[status,setStatus] = useState("Open");
  return(
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open") }>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Resume")}>Resume</button>
      </div>
      
  );   
  }
  

ReactDOM.render(
    <App/> ,
    document.getElementById('root') 
);
 
  
