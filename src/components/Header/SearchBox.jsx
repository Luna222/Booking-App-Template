import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';

const SearchBox = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  return (
    <div className="container-md max-w-[1100px] tablet:w-full tablet:absolute tablet:left-[50%] tablet:translate-x-[-50%] tablet:translate-y-[-135px] tablet:z-[1] overflow-visible">
      <form action="">
        <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:items-center flex-wrap desktop:flex-nowrap p-1 bg-[#FFB700] rounded-md shadow-md mt-6 mb-4">
          {/* control */}
          <div className="flex grow shrink basis-auto items-center flex-nowrap border rounded-tl rounded-tr tablet:rounded-l tablet:rounded-tr-none p-2 bg-white text-gray-600 whitespace-nowrap hocus:border-2 hocus:border-rose-600">
            <i className="fa fa-bed pl-2 py-2"></i>
            <input
              type="text"
              placeholder="Where are you going?"
              className="outline-none bg-transparent p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex grow shrink basis-auto items-center flex-nowrap border p-2 bg-white text-gray-600 z-[2] relative whitespace-nowrap hocus:border-2 hocus:border-rose-600">
            <i className="fa fa-calendar pl-2 py-2"></i>
            {/* <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="tablet:w-[calc(1100px / 3)] absolute top-full left-0 shadow-lg z-[3]"
            /> */}
            <input
              type="text"
              placeholder="Check-in date"
              className="tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
            />
            <span className="text-gray-400">—</span>
            <input
              type="text"
              placeholder="Check-out date"
              className="tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
            />
          </div>

          <div className="grow shrink basis-auto border rounded-bl rounded-br tablet:rounded-r tablet:rounded-bl-none p-2 bg-white text-gray-600 whitespace-nowrap hocus:border-2 hocus:border-rose-600">
            <button className="flex justify-between items-center flex-nowrap w-full outline-none bg-transparent p-2 placeholder-gray-400">
              <div>
                <i className="fa fa-female pr-2"></i>
                <span>2 adults · 0 children · 1 room</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-full"
              >
                <path d="M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642"></path>
              </svg>
            </button>
          </div>

          {/* action */}
          <button className="primaryBtn grow shrink p-4 mt-1 desktop:mt-0 tablet:ml-1 hover:bg-navyBlue-100">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
