import {FC, useState} from 'react';
import { Calendar } from 'react-multi-date-picker';

import useAppSelector from "../../hooks/useAppSelector.hook";
import useAppDispatch from "../../hooks/useAppDispatch.hook";

import {setCalendar, setSelectRange} from "../../redux/slices/calendarSlice";

const CalendarPopUp: FC = () => {
  const {calendar} = useAppSelector(state => state.calendar)
  const dispatch = useAppDispatch()

  const [date, setDate] = useState<any>(new Date())

  const CustomRangeInput = (value: any) => {
    let from = value[0] || '';
    let to = value[1] || '';
    function getDateFormat(date: any) {
      const d = new Date(date);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }
    let response = from && to ? getDateFormat(from) + ' - ' + getDateFormat(to) : 'Select range';
    return response;
  }

  const clickCalendarHandler = () => dispatch(setCalendar(false))

  const clickCustomRangeHandler = () => {
    setCalendar(false);
    CustomRangeInput(date) !== 'Select range' &&
    dispatch(setSelectRange(CustomRangeInput(date)));
  }

  return (
    <div
      className={`${
        calendar
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      }transition-all duration-500 fixed top-12 w-full min-h-screen h-screen flex items-center justify-center pb-24 z-10`}
    >
      <div onClick={clickCalendarHandler} className="absolute cursor-pointer bg-black/30 w-full h-full"/>
      <Calendar multiple range numberOfMonths={2} showOtherDays value={date} onChange={setDate}>
        <footer>
          <span className={"m-5"}>{CustomRangeInput(date)}</span>
          <button className={"m-5"} onClick={clickCalendarHandler}>
            Cancel
          </button>
          <button className={"m-5"} onClick={clickCustomRangeHandler}>
            Apply
          </button>
        </footer>
      </Calendar>
    </div>
  );
}
export default CalendarPopUp
