import NavBarItem from './NavBarItem';
import NAVBAR_DATA from '../../../../data/navBar.json';

export default function Navbar() {
  return (
    <div className="mb-11">
      <div className="flex justify-between items-start mb-6">
        <a href="/" className="text-xl font-medium">
          Booking Website
        </a>
        <div className="group-btns space-x-4">
          <a href="#register" className="secondaryBtn hover:bg-[#ced4da]">
            Register
          </a>
          <a href="#" className="secondaryBtn hover:bg-[#ced4da]">
            Login
          </a>
        </div>
      </div>

      <nav className="flex justify-center tablet:justify-start items-center flex-nowrap space-x-4 overflow-x-auto">
        {NAVBAR_DATA.map(({ type, icon, active }) => (
          <NavBarItem key={type} type={type} icon={icon} active={active} />
        ))}
      </nav>
    </div>
  );
}
