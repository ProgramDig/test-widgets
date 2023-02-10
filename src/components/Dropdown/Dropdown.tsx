import React, {useState, useEffect, FC} from 'react';

type DropdownProps = {
  index: number;
  dropdownsInfo: any;
  setDropdownsInfo: any;
  active: boolean;
  setCalendar: any;
  selectedRange: string;
  setSelectedRange: any;
}

const Dropdown: FC<DropdownProps> = ({
  index,
  dropdownsInfo,
  setDropdownsInfo,
  active,
  setCalendar,
  selectedRange,
  setSelectedRange,
}) => {

  const dates: string[] = ['Today', '7 days', '30 days', '6 months', '1 year'],
    [selectedDate, setSelectedDate] = useState<string>('');

  const setDate = (item: string) => {
    try {
      setSelectedDate(item);
      let newDropdownsInfo = [...dropdownsInfo];
      newDropdownsInfo[index].title = item;
      setDropdownsInfo(newDropdownsInfo);
      setSelectedRange('');
    } catch (e) {
      console.log(`Error ${e}`)
    }
  };

  useEffect(() => {
    if (selectedRange) setDate(selectedRange);
  }, [selectedRange]);

  const classActive = active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'

  return (
    <div
      className={`${classActive} absolute top-10 left-0 w-[189px] h-[241px] transition-all duration-500 z-10 bs-l-g-4-18`}
    >
      {dates.map((item, index) => (
        <button
          onClick={() => setDate(item)}
          key={index}
          className={` ${item === selectedDate
              ? 'bg-[#e8eff7] text-[#4078BC]'
              : 'bg-white text-[#6E6B7B] '
          } f-m-14-21 dropdownElem relative flex items-center w-[189px] h-[40px] text-left pl-4`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => setCalendar(true)}
        className={`${
          selectedRange !== '' && selectedRange === selectedDate
            ? 'bg-[#e8eff7] text-[#4078BC]'
            : 'text-[#6E6B7B]'
        } f-m-14-21 dropdownElem text-center absolute h-[42px] w-[189px] flex items-center justify-center`}
      >
        Select Date Range
      </button>
    </div>
  );
}
export default Dropdown