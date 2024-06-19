import Cities from './Cities/Cities.jsx';
import PropertyTypes from './PropertyTypes/PropertyTypes.jsx';
import Homes from './Homes/Homes.jsx';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Cities />
      <PropertyTypes />
      <Homes />
    </main>
  );
}
