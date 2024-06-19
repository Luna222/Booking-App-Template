import NavBarItem from './NavBarItem';
import NAVBAR_DATA from '../../../../data/navBar.json';

export default function Navbar() {
  return (
    <div className="container-md mb-12">
      <div className="flex justify-between items-start mb-8">
        <p className="text-xl font-medium">Booking Website</p>
        <div className="group-btns space-x-6">
          <button className="primaryBtn hover:bg-[#ced4da]">Register</button>
          <button className="primaryBtn hover:bg-[#ced4da]">Login</button>
        </div>
      </div>

      <nav className="flex flex-wrap">
        {NAVBAR_DATA.map(({ type, icon, active }) => (
          <NavBarItem key={type} type={type} icon={icon} active={active} />
        ))}
      </nav>
    </div>
  );
}
