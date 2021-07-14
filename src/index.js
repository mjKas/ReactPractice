import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BeachResort({name}){
  return(
    <div>
      <h1>Welcome to {name}!</h1>
    </div>
  );
}

function LakeResort({name}){
  return(
    <div>
      <h1>Welcome to {name}</h1>
    </div>
  );
}

function App(props){
  return(
    <div>
      /**if else short form */
      {(props.season==="summer")?<BeachResort name="Welcome to Marble Beach Resort"/>:
      (props.season==="winter")?<LakeResort name="Lake Gregory Resort"/>:<h1>"Come back on winter or summer"</h1>}
    </div>
  );
  }
  

  
ReactDOM.render(
    <App season = "summer"/>, /*here in app season we pass what season if it is winter or summer */
    document.getElementById('root')
);


