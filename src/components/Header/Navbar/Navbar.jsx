import NavBarItem from './NavBarItem';
import NAVBAR_DATA from '../../../../data/navBar.json';

export default function Navbar() {
  return (
    <div className="mb-11">
      <div className="flex justify-between items-start mb-6">
        <p className="text-xl font-medium">Booking Website</p>
        <div className="group-btns space-x-4">
          <button className="secondaryBtn hover:bg-[#ced4da]">Register</button>
          <button className="secondaryBtn hover:bg-[#ced4da]">Login</button>
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
