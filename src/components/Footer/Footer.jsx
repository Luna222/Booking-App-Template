import RegisterForm from './RegisterForm/RegisterForm.jsx';
import Info from './Info/Info.jsx';

export default function Footer({ onAddUser, userList }) {
  return (
    <footer className="overflow-hidden mt-11">
      <div className="w-full flex flex-col space-y-5">
        <RegisterForm onAddUserFw={onAddUser} userList={userList} />
        <Info />
      </div>
    </footer>
  );
}
