import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './HomePage.css';

const HomePage = ({ onAddUser, userList }) => {
  return (
    <div className="page-wrapper page-wrapper-home tablet:relative tablet:z-0">
      <Header />
      <Main />
      <Footer onAddUser={onAddUser} userList={userList} />
    </div>
  );
};

export default HomePage;
