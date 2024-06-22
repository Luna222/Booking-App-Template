import HOTEL_DATA from '../../../../data/hotel_list.json';
import HomeItem from './HomeItem';

export default function Homes() {
  return (
    <section id="homes">
      <div className="container-md pt-0">
        <h2 className="mb-6">Home guests love</h2>
        <div className="flex items-start overflow-x-auto">
          {HOTEL_DATA.map(
            ({ name, city, price, rate, type, image_url }, idx) => (
              <HomeItem
                key={idx}
                name={name}
                city={city}
                price={price}
                rate={rate}
                type={type}
                imageUrl={image_url}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
