import logo from './logo.svg';
import React from 'react';

import './App.css';
import Counters from './components/counters'
import NavBar from './components/Navbar';



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
