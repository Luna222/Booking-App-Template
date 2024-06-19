import { useState } from 'react';
import {
  KEY_USER,
  setLocalStorage,
  getLocalStorage,
} from '../../utils/common.js';
import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import CITY_LIST from '../../../data/city.json';
import PROPERTY_TYPES from '../../../data/type.json';
import HOTEL_LIST from '../../../data/hotel_list.json';
import './Home.css';

const Home = () => {
  const [filteredHomes, setFilteredHomes] = useState(HOTEL_LIST);
  //Get data from local storage
  const [userArr, setUserArr] = useState(getLocalStorage(KEY_USER, []));

  return (
    <div className="page-wrapper page-wrapper-home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
