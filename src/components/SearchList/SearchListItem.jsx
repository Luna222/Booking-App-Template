export default function SearchListItem(props) {
  return (
    <li className="group relative border-[1.5px] border-gray-300 p-3 rounded transition-all delay-150 duration-500 ease-out hover:scale-[.98] text-wrap">
      <div className="desktop:flex desktop:justify-start desktop:items-start space-y-7 desktop:space-y-0 desktop:space-x-5 desktop:relative">
        <a href="#" className="">
          <img
            data-src={props['image_url']}
            alt="Delightful Hotel"
            className="w-full h-[305px] desktop:w-[230px] desktop:h-[245px] object-cover lazy-load"
          />
          <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
        </a>

        <div className="desktop:grow">
          <div className="flex flex-col justify-start items-stretch space-y-2">
            <div className="grow tablet:flex tablet:items-start tablet:justify-between desktop:justify-start desktop:space-x-20">
              <a href="#" className="desktop:grow">
                <h3 className="text-navyBlue-50/95 hover:text-purple-900 hover:underline">
                  {props.name}
                </h3>
              </a>
              <p className="desktop:grow flex justify-end tablet:justify-between items-start space-x-16 desktop:space-x-4">
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
              <div className="space-y-2">
                <p className="text-leafGreen-50 font-bold">Free cancellation</p>
                <p className="text-leafGreen-50 font-normal">
                  You can cancel later, so lock in this great price today!
                </p>
              </div>
            ) : (
              ''
            )}

            <p className="txt-label font-normal text-3xl desktop:absolute desktop:right-0 desktop:bottom-20">
              ${props.price}
            </p>

            <p className="text-gray-400 text-sm desktop:absolute desktop:right-0 desktop:bottom-[3.2rem]">
              Includes taxes and fees
            </p>

            <a
              href="#"
              className="primaryBtnRound py-[0.65rem] px-7 hover:bg-navyBlue-100 desktop:absolute desktop:bottom-0 desktop:right-0"
            >
              See availability
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
