import { useState, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { formatDate } from '../utils/common.js';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function DateInput({ dateInputClasses, dateIconClasses }) {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      // endDate: addDays(new Date(), 0),
      endDate: new Date(), //ensure the end date is not pre-selected
      key: 'selection',
    },
  ]);

  const dateRangeRef = useRef(null);
  const checkInRef = useRef(null);
  const checkoutRef = useRef(null);

  const handleSelect = item => {
    setDateState([item.selection]);

    checkInRef.current.value = formatDate(item.selection.startDate);
    checkoutRef.current.value = formatDate(item.selection.endDate);
  };

  const handleMouseEnter = () => {
    dateRangeRef.current.classList.remove('hidden');
  };

  const handleMouseLeave = () => {
    dateRangeRef.current.classList.add('hidden');
  };

  return (
    <div
      className={dateInputClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={dateIconClasses}></i>
      <div ref={dateRangeRef} className="hidden">
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={dateState}
          className="absolute top-full left-0 shadow-lg z-[3] w-full tablet:w-[420px]"
        />
      </div>
      <input
        type="text"
        placeholder="Check-in date"
        ref={checkInRef}
        className="grow tablet:grow-0 tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
      />
      <span className="grow tablet:grow-0">—</span>
      <input
        type="text"
        placeholder="Check-out date"
        ref={checkoutRef}
        className="grow tablet:grow-0 tablet:w-[130px] outline-none bg-transparent p-2 placeholder-gray-400"
      />
    </div>
  );
}
