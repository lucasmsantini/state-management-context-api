import React from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Nav from './Nav.js'
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie.js'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
