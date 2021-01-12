import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Lang from './components/Lang.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Lang />
      <div id="mainPage"></div>
      <div style={{
        width: "100%",
        height: "200vh",
      }}></div>
    </div>
  );
}

export default App;
