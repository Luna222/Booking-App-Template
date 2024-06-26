export default function HomeItem(props) {
  return (
    <article
      id="animated-hotel"
      className="grow shrink-0 group relative m-3 first-child:ml-0 last-child:mr-0 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <a
        href={'/detail'}
        target="_blank"
        className="flex flex-col justify-start items-start space-y-2 hover:border-2 hover:border-navyBlue-50/30 visited:text-purple-900 visited:underline"
      >
        <div className="relative">
          <img
            src={props.imageUrl}
            alt="Delightful Hotel"
            className="w-[244px] h-[270px] object-cover"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
        </div>

        <div className="font-medium flex flex-col justify-start items-start space-y-2">
          <p className="text-xl hover:text-purple-900 hover:underline">
            {props.name}
          </p>
          <p className="sub-txt">{props.city}</p>
          <p className="text-lg txt-label">Starting from ${props.price}</p>

          <p className="flex items-center">
            <span className="text-white bg-navyBlue-300 p-1 mr-2">
              {props.rate}
            </span>
            <span className="txt-gray">{props.type}</span>
          </p>
        </div>
      </a>
    </article>
  );
}
