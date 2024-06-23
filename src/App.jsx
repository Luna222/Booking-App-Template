import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Detail from './pages/detail/Detail.jsx';
import Search from './pages/search/Search.jsx';
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
