import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero.jsx';

export default function Header() {
  return (
    <header className="min-h-[40vh] text-white bg-navyBlue-300 relative overflow-hidden">
      <Navbar />
      <Hero />
    </header>
  );
}
