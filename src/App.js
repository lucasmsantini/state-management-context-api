import React from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Nav from './Nav.js'
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
