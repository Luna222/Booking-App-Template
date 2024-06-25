import Navbar from '../../components/Header/Navbar/Navbar.jsx';
import DetailArticle from './DetailArticle.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import DETAIL_DATA from '../../../data/detail.json';

const DetailPage = ({ onAddUser, userList }) => {
  return (
    <div className="page-wrapper page-wrapper-detail">
      <div className="text-white bg-navyBlue-300 overflow-hidden">
        <div className="container-md">
          <Navbar />
        </div>
      </div>
      <DetailArticle />
      <Footer onAddUser={onAddUser} userList={userList} />
    </div>
  );
};

export default DetailPage;
