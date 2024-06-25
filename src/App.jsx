import { useState } from 'react';
import { KEY_USER, setLocalStorage, getLocalStorage } from './utils/common.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import DetailPage from './pages/detail/DetailPage.jsx';
import SearchPage from './pages/search/SearchPage.jsx';

import HOTEL_DATA from '../data/hotel_list.json';
import './App.css';

function App() {
  const [filteredHomes, setFilteredHomes] = useState(HOTEL_DATA);
  //Get data from local storage
  const [userArr, setUserArr] = useState(getLocalStorage(KEY_USER, []));

  const handleAddUser = newUsrEmail => {
    userArr.push(newUsrEmail);
    setUserArr(userArr);
    setLocalStorage(KEY_USER, userArr);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          index
          element={<HomePage onAddUser={handleAddUser} userList={userArr} />}
        />
        <Route
          path="search"
          element={<SearchPage onAddUser={handleAddUser} userList={userArr} />}
        />
        <Route
          path="detail"
          element={<DetailPage onAddUser={handleAddUser} userList={userArr} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
