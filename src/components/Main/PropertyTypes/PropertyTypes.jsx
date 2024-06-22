import PROPERTY_DATA from '../../../../data/type.json';
import PropItem from './PropItem';

export default function PropertyTypes() {
  return (
    <section id="types">
      <div className="container-md">
        <p>Browse by property type</p>
        <div className="flex items-start overflow-x-auto">
          {PROPERTY_DATA.map(({ name, count, image }, idx) => (
            <PropItem key={idx} name={name} count={count} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
