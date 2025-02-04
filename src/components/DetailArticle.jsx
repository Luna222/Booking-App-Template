export default function DetailArticle(props) {
  const BookingCTA = () => {
    return (
      <a href="#" className="primaryBtnRound hover:bg-navyBlue-100">
        Reserve or Book Now!
      </a>
    );
  };

  return (
    <article>
      <div className="container-md flex flex-col space-y-6 tablet:space-y-10 font-medium">
        {/* 1st section */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start text-wrap">
            <h2>{props.name}</h2>
            <BookingCTA />
          </div>

          <div className="space-y-2">
            <p className="space-x-2">
              <span>
                <i
                  className="fa fa-map-marker scale-110"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="sub-txt text-sm">{props.address}</span>
            </p>
            <p className="text-navyBlue-50">{props.distance}</p>
            <p className="text-leafGreen-50">{props.price}</p>
          </div>

          <div className="grid grid-cols-2 tablet:grid-cols-3 justify-center items-stretch gap-1.5">
            {props.photos.map((photoItem, idx) => (
              <img
                data-src={photoItem}
                alt="Photo"
                key={idx}
                className="lazy-load"
              />
            ))}
          </div>
        </div>

        {/* 2nd section */}
        <div className="tablet:flex tablet:items-start tablet:space-x-5 space-y-4 tablet:space-y-0 text-wrap">
          <div className="space-y-3">
            <h2>{props.title}</h2>
            <p className="txt-gray">{props.description}</p>
          </div>

          <div className="tablet:shrink-0 tablet:w-[300px] flex flex-col justify-start items-stretch bg-navyBlue-50/20 space-y-6 p-5 txt-gray">
            <p className="text-xl font-semibold">Perfect for a 9-night stay!</p>

            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>

            <p className="text-3xl">
              <span className="txt-label font-extrabold">
                ${props['nine_night_price']}
              </span>
              &nbsp;(9 nights)
            </p>
            <BookingCTA />
          </div>
        </div>
      </div>
    </article>
  );
}
