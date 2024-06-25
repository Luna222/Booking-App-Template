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
      <DetailArticle
        name={DETAIL_DATA.name}
        address={DETAIL_DATA.address}
        distance={DETAIL_DATA.distance}
        price={DETAIL_DATA.price}
        photos={DETAIL_DATA.price}
        title={DETAIL_DATA.title}
        description={DETAIL_DATA.description}
        nine_night_price={DETAIL_DATA['nine_night_price']}
      />
      <Footer onAddUser={onAddUser} userList={userList} />
    </div>
  );
};

export default DetailPage;
