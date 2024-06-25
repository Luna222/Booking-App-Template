export default function DetailArticle(props) {
  return (
    <article>
      <div className="container-md flex flex-col space-y-6 tablet:space-y-10 font-medium">
        {/* 1st section */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start text-wrap">
            <div className="space-y-2">
              <h2>{props.name}</h2>
              <p className="space-x-2">
                <span>
                  <i
                    className="fa fa-map-marker scale-110"
                    aria-hidden="true"
                  ></i>
                </span>
                <span className="text-gray-500 text-sm">{props.address}</span>
              </p>
              <p className="text-navyBlue-50">{props.distance}</p>
              <p className="text-green-700">{props.price}</p>
            </div>

            <a href="#" className="primaryBtnRound hover:bg-navyBlue-100">
              Reserve or Book Now!
            </a>
          </div>

          <div className="grid grid-cols-2 tablet:grid-cols-3 justify-center items-stretch gap-1.5">
            {props.photos.map((photoItem, idx) => (
              <img src={photoItem} alt="Photo" key={idx} />
            ))}
          </div>
        </div>

        {/* 2nd section */}
        <div className="tablet:flex tablet:justify-start tablet:items-start space-x-4 text-wrap">
          <div className="tablet:shrink desktop:grow space-y-3">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="tablet:grow-0 tablet:shrink bg-navyBlue-50/50"></div>
        </div>
      </div>
    </article>
  );
}
