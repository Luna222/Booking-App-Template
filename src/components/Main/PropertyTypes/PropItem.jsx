export default function PropItem(props) {
  return (
    <figure
      id="animated-property"
      className="grow shrink-0 group relative m-3 first-child:ml-0 last-child:mr-0 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <a href="#" className="flex flex-col justify-start items-start space-y-2">
        <div className="relative">
          <img
            data-src={props.image}
            alt="Delightful Property"
            className="w-[211px] h-[171px] object-cover rounded-t-xl lazy-load"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105 rounded-t-xl"></div>
        </div>

        <div className="font-medium">
          <p className="text-xl">{props.name}</p>
          <p className="sub-txt">{props.count}&nbsp;hotels</p>
        </div>
      </a>
    </figure>
  );
}
