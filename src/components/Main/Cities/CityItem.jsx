export default function CityItem(props) {
  return (
    <figure
      id="animated-city"
      className="grow shrink-0 group relative m-3 first-child:ml-0 last-child:mr-0 h-64 w-64 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <a href="#" target="_blank">
        <img
          src={props.image}
          alt="Delightful City"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="overlay absolute p-6 flex flex-col justify-end items-start inset-0 bg-gray-500/30 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105 rounded-xl">
          <h2 className="text-white font-medium txt-shadow">{props.name}</h2>
          <p className="text-white font-medium txt-shadow text-2xl">
            {props.subText}
          </p>
        </div>
      </a>
    </figure>
  );
}
