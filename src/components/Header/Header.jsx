import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero.jsx';

export default function Header() {
  return (
    <header className="min-h-[30vh] relative text-white bg-navyBlue-300 overflow-hidden mb-14 z-0">
      <div className="container-md flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}
