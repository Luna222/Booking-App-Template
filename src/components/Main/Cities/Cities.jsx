import CITY_DATA from '../../../../data/city.json';
import CityItem from './CityItem';

export default function Cities() {
  return (
    <section id="city">
      <div className="container-md flex pt-0 tablet:pt-6 tablet:mt-8 overflow-x-auto">
        {CITY_DATA.map(({ name, subText, image }, idx) => (
          <CityItem key={idx} name={name} subText={subText} image={image} />
        ))}
      </div>
    </section>
  );
}
