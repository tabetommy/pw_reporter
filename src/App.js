import React from 'react';
import Projekt from './components/projektComponent/projektComponent';

import './App.css';

function App() {
  return (
    <div className="App"> 
      <div className='App-con'>
        <p className='pr-page'>Neues Projekt esrtellen</p>
        <Projekt />
      </div>
    </div>
  );
}

export default App;
