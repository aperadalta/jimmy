import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header.js';
import Lang from './components/Lang.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Videos from './components/Videos.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Lang />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/videos" component={Videos}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
