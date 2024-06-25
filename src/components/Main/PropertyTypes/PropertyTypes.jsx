import PropItem from './PropItem';
import PROPERTY_DATA from '../../../../data/type.json';

export default function PropertyTypes() {
  return (
    <section id="types">
      <div className="container-md pt-0">
        <h2 className="mb-6">Browse by property type</h2>
        <div className="flex items-start overflow-x-auto">
          {PROPERTY_DATA.map(({ name, count, image }, idx) => (
            <PropItem key={idx} name={name} count={count} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
