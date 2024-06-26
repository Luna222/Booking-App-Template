import Navbar from '../../components/Header/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchPopup from './SearchPopup';
import SearchList from './SearchList';
import SEARCH_DATA from '../../../data/search.json';

const SearchPage = ({ onAddUser, userList }) => {
  return (
    <div className="page-wrapper page-wrapper-detail">
      <div className="text-white bg-navyBlue-300 overflow-hidden">
        <div className="container-md">
          <Navbar />
        </div>
      </div>

      <div className="container-md grid grid-cols-1 tablet:grid-cols-3 justify-center items-start gap-7 font-medium text-gray-600">
        <SearchPopup />
        <SearchList />
      </div>

      <Footer onAddUser={onAddUser} userList={userList} />
    </div>
  );
};

export default SearchPage;
