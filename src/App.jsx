import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Search from './pages/search/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
