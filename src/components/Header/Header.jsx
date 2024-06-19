import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="h-[40vh] text-white bg-navyBlue-300 relative ">
      <Navbar />
      <Hero />
    </header>
  );
}
