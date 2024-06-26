export default function SearchListItem(props) {
  return (
    <li className="group relative border-[1.5px] border-gray-300 p-3 rounded transition-all delay-150 duration-500 ease-out hover:scale-[.98]">
      <a href="#" className="flex justify-start items-start space-x-5">
        <div className="relative">
          <img
            src={props['image_url']}
            alt="Delightful Hotel"
            className="w-[195px] h-[205px] tablet:w-[215px] tablet:h-[230px] object-cover"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
        </div>

        <div>
          <div className="grow flex flex-col justify-start items-start space-y-2">
            <div className="flex">
              <h3>{props.name}</h3>
              <p className="txt-label">{props['rate_text']}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
