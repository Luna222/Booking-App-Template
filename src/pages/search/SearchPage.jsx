import Navbar from '../../components/Header/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import SearchList from '../../components/SearchList/SearchList';

const SearchPage = ({ onAddUser, userList }) => {
  return (
    <div className="page-wrapper page-wrapper-detail">
      <div className="text-white bg-navyBlue-300 overflow-hidden">
        <div className="container-md">
          <Navbar />
        </div>
      </div>

      <div className="container-md grid grid-cols-1 tablet:grid-cols-[28%_72%] justify-center items-start gap-6 font-medium txt-gray">
        <SearchPopup />
        <SearchList />
      </div>

      <Footer onAddUser={onAddUser} userList={userList} />
    </div>
  );
};

export default SearchPage;
