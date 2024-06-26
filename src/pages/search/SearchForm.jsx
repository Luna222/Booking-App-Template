export default function SearchForm() {
  return (
    <form action="" className="space-y-10">
      {/* control */}
      <div className="flex flex-col justify-start items-stretch text-left space-y-3">
        <div className="grow space-y-1">
          <label className="block txt-label">Destination</label>
          <input
            type="text"
            className="w-full p-3 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none placeholder-gray-400"
            placeholder="Where are you going?"
          />
        </div>

        <div className="grow space-y-1">
          <label className="block txt-label">Check-in Date</label>
          <input
            type="text"
            className="w-full p-3 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none placeholder-gray-400"
            placeholder="06/24/2022 to 06/24/2022"
          />
        </div>

        <div className="grow space-y-4">
          <label className="block txt-label">Options</label>

          <div className="flex flex-col justify-start items-stretch text-left space-y-4 ml-3">
            <div className="grow flex justify-between items-start space-x-5">
              <label className="sub-txt text-sm">Min price per night</label>
              <input
                type="text"
                className="grow tablet:grow-0 tablet:w-[80px] p-1 border-[1.5px] border-gray-700 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none"
              />
            </div>

            <div className="grow flex justify-between items-start space-x-5">
              <label className="sub-txt text-sm">Max price per night</label>
              <input
                type="text"
                className="grow tablet:grow-0 tablet:w-[80px] p-1 border-[1.5px] border-gray-700 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none"
              />
            </div>

            <div className="grow flex justify-between items-start space-x-5">
              <label className="sub-txt text-sm">Adult</label>
              <input
                type="number"
                className="grow tablet:grow-0 tablet:w-[80px] p-1 border-[1.5px] border-gray-700 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none"
              />
            </div>

            <div className="grow flex justify-between items-start space-x-5">
              <label className="sub-txt text-sm">Children</label>
              <input
                type="number"
                className="grow tablet:grow-0 tablet:w-[80px] p-1 border-[1.5px] border-gray-700 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none"
              />
            </div>

            <div className="grow flex justify-between items-start space-x-5">
              <label className="sub-txt text-sm">Room</label>
              <input
                type="number"
                className="grow tablet:grow-0 tablet:w-[80px] p-1 border-[1.5px] border-gray-700 rounded-sm hover:border-2 hover:border-rose-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* action */}
      <button className="w-full primaryBtn hover:bg-navyBlue-100">
        Search
      </button>
    </form>
  );
}
