export default function SearchListItem(props) {
  return (
    <li className="group relative border-[1.5px] border-gray-300 p-3 rounded transition-all delay-150 duration-500 ease-out hover:scale-[.98] text-wrap">
      <a href="#" className="flex justify-start items-start space-x-5 relative">
        <div className="relative">
          <img
            src={props['image_url']}
            alt="Delightful Hotel"
            className="max-w-[168px] min-h-[180px] tablet:max-w-[210px] tablet:min-h-[225px] object-cover"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
        </div>

        <div className="grow">
          <div className="flex flex-col justify-start items-stretch space-y-2">
            <div className="grow flex justify-start items-start space-x-11">
              <h3 className="tablet:grow text-navyBlue-50/95">{props.name}</h3>
              <p className="grow flex justify-between items-start space-x-4">
                <span className="txt-label text-lg">{props['rate_text']}</span>
                <span className="text-white bg-navyBlue-300 p-1">
                  {props.rate}
                </span>
              </p>
            </div>
            <p>{props.distance} from center</p>
            <p className="self-start px-1 py-[0.125rem] text-white text-center font-normal bg-leafGreen-50 rounded-lg">
              {props.tag}
            </p>
            <p className="txt-label font-bold">{props.description}</p>

            <p>{props.type}</p>

            {props['free_cancel'] ? (
              <>
                <p className="text-leafGreen-50 font-bold">Free cancellation</p>
                <p className="text-leafGreen-50">
                  You can cancel later, so lock in this great price today!
                </p>
              </>
            ) : (
              ''
            )}

            <p className="txt-label font-normal text-3xl absolute right-0 bottom-20">
              ${props.price}
            </p>
            <p className="text-gray-400 text-sm absolute right-0 bottom-[3.2rem]">
              Includes taxes and fees
            </p>
            <a
              href="#"
              className="primaryBtnRound py-[0.65rem] px-7 hover:bg-navyBlue-100 absolute bottom-0 right-0"
            >
              See availability
            </a>
            <div className="grow flex justify-start items-start space-x-11"></div>
            <div className="grow flex justify-start items-start space-x-11"></div>
          </div>
        </div>
      </a>
    </li>
  );
}
