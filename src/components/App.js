import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
