import { useState, useEffect } from 'react';
import {
  KEY_USER,
  setLocalStorage,
  getLocalStorage,
  lazyLoading,
} from './utils/common.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import DetailPage from './pages/detail/DetailPage.jsx';
import SearchPage from './pages/search/SearchPage.jsx';

import './App.css';

function App() {
  //Get data from local storage
  const [userArr, setUserArr] = useState(getLocalStorage(KEY_USER, []));
  const location = useLocation();
  //DOM selection logic after this React component is mounted/rendered
  useEffect(lazyLoading, [location]);

  const handleAddUser = newUsrEmail => {
    userArr.push(newUsrEmail);
    setUserArr(userArr);
    setLocalStorage(KEY_USER, userArr);
  };

  return (
    <Routes>
      <Route
        path="/"
        index
        element={<HomePage onAddUser={handleAddUser} userList={userArr} />}
      />
      <Route
        path="/search"
        element={<SearchPage onAddUser={handleAddUser} userList={userArr} />}
      />
      <Route
        path="/detail"
        element={<DetailPage onAddUser={handleAddUser} userList={userArr} />}
      />
    </Routes>
  );
}

export default App;
