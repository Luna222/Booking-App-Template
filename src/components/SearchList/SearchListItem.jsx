export default function SearchListItem(props) {
  return (
    <li className="group relative border-[1.5px] border-gray-300 p-3 rounded transition-all delay-150 duration-500 ease-out hover:scale-[.98] text-wrap">
      <a href="#" className="flex justify-start items-start space-x-5">
        <div className="relative">
          <img
            src={props['image_url']}
            alt="Delightful Hotel"
            className="w-[168px] h-[180px] tablet:w-[210px] tablet:h-[225px] object-cover"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
        </div>

        <div className="grow">
          <div className="flex flex-col justify-start items-stretch space-y-1">
            <div className="grow flex justify-start items-start space-x-11">
              <h3 className="tablet:grow text-navyBlue-50/95">{props.name}</h3>
              <p className="grow flex justify-between items-start space-x-4">
                <span className="txt-label text-lg">{props['rate_text']}</span>
                <span className="text-white bg-navyBlue-300 p-1">
                  {props.rate}
                </span>
              </p>
              {/* <p className="grow ml-20 txt-label">{props['rate_text']}</p> */}
            </div>

            <p></p>

            <p></p>

            <p></p>

            <div className="flex"></div>

            <div className="flex"></div>

            <div className="flex"></div>
          </div>
        </div>
      </a>
    </li>
  );
}
