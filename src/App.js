//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Coutrycity from './component/countryapi';




// export let context=React.createContext(data);


function App() {
  return (
    <>
    <div className='header'>
      <div className='container'>
        <h3 style={{color:'white'}}>Select Country</h3>
      </div>
    </div>
        
    <div className="container">
      <Coutrycity></Coutrycity>
      </div>
   
     <style>{'body { background-color: hsl(207 , 26% , 17%); }'}</style>
    
    </>
  );
}

export default App;
