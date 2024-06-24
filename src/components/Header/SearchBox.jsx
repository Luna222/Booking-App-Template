import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SearchBox = () => {
  const navigate = useNavigate();
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const handleSelect = item => {
    setDateState([item.selection]);
  };

  return (
    <div className="container-md tablet:absolute tablet:left-[50%] tablet:translate-x-[-50%] tablet:translate-y-[-95px] desktop:translate-y-[-54px] tablet:z-[1] overflow-visible">
      <form action="">
        <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:items-center flex-wrap desktop:flex-nowrap p-1 bg-[#FFB700] rounded-md shadow-md">
          {/* control */}
          <div className="flex grow shrink basis-auto items-center flex-nowrap border rounded-tl rounded-tr tablet:rounded-l tablet:rounded-tr-none p-2 bg-white text-gray-600 whitespace-nowrap hover:border-2 hover:border-rose-600">
            <i className="fa fa-bed pl-2 py-2"></i>
            <input
              type="text"
              placeholder="Where are you going?"
              className="grow outline-none bg-transparent p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex grow shrink basis-auto items-center flex-nowrap border p-2 bg-white text-gray-600 z-[2] relative whitespace-nowrap hover:border-2 hover:border-rose-600">
            <i className="fa fa-calendar pl-2 py-2"></i>
            <DateRange
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={dateState}
              className="absolute top-full left-0 shadow-lg z-[3] w-full tablet:w-[420px]"
            />
            <input
              type="text"
              placeholder="Check-in date"
              className="grow tablet:grow-0 tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
            />
            <span className="grow tablet:grow-0">—</span>
            <input
              type="text"
              placeholder="Check-out date"
              className="grow tablet:grow-0 tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex grow shrink basis-auto items-center flex-nowrap border rounded-bl rounded-br tablet:rounded-r tablet:rounded-bl-none p-2 bg-white text-gray-600 whitespace-nowrap hover:border-2 hover:border-rose-600">
            <i className="fa fa-female pl-2 py-2"></i>
            <input
              type="text"
              placeholder="2 adults · 0 children · 1 room"
              className="grow outline-none bg-transparent p-2 placeholder-gray-400"
            />
          </div>

          {/* action */}
          <button
            className="primaryBtn grow shrink p-4 mt-1 desktop:mt-0 tablet:ml-1 hover:bg-navyBlue-100"
            onClick={() => navigate('/search')}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
