export default function HomeItem(props) {
  return (
    <article
      id="animated-property"
      className="grow shrink-0 flex flex-col justify-start items-start space-y-2 group relative m-3 first-child:ml-0 last-child:mr-0 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up hover:border-2 hover:border-navyBlue-100"
    >
      <div className="relative">
        <img
          src={props.imageUrl}
          alt="Delightful Hotel"
          className="grow w-[242px] h-[270px] object-cover"
        />
        <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
      </div>

      <div className="font-medium">
        <p className="text-xl">{props.name}</p>
        <p className="text-gray-500">{props.city}</p>
      </div>
    </article>
  );
}
