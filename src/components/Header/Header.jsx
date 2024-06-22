import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero.jsx';
import SearchBox from './SearchBox.jsx';

export default function Header() {
  return (
    <>
      <header className="min-h-[30vh] text-white bg-navyBlue-300 overflow-hidden">
        <div className="container-md flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </header>
      <SearchBox />
    </>
  );
}
