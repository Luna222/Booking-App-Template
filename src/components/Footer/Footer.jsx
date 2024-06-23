import RegisterForm from './RegisterForm/RegisterForm.jsx';
import Info from './Info/Info.jsx';

export default function Footer({ onAddUser, userList }) {
  return (
    <footer className="bg-navyBlue-300 overflow-hidden mt-11">
      <div className="container-md flex flex-col space-y-5">
        <RegisterForm onAddUserFw={onAddUser} userList={userList} />
        <Info />
      </div>
    </footer>
  );
}
