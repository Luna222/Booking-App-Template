export default function CityItem(props) {
  return (
    <figure
      id="animated-city"
      className="grow shrink-0 group relative m-3 first-child:ml-0 last-child:mr-0 h-64 w-64 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <img
        src={props.image}
        alt="Delightful City"
        className="h-full w-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
    </figure>
  );
}
