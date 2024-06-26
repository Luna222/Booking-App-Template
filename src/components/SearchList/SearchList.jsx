import SEARCH_DATA from '../../../data/search.json';
import SearchListItem from './SearchListItem';

export default function SearchList() {
  return (
    <ul className="flex flex-col justify-start items-stretch space-y-6">
      {SEARCH_DATA.map((item, idx) => (
        <SearchListItem
          key={idx}
          name={item.name}
          distance={item.distance}
          tag={item.tag}
          type={item.type}
          description={item.description}
          free_cancel={item['free_cancel']}
          price={item.price}
          rate={item.rate}
          rate_text={item['rate_text']}
          image_url={item['image_url']}
        />
      ))}
    </ul>
  );
}
