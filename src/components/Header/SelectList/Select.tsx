import React, {FC} from 'react';

import {setCalendar, setSelectRange} from "../../../redux/slices/calendarSlice";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../hooks/useAppSelector.hook";

import {DropDownInfo} from "../../../types";

type SelectProps = {
    item: DropDownInfo,
    index: number,
    dropdownsInfo: DropDownInfo[],
    setDropdownsInfo: (state:DropDownInfo[]) => void
}

const Select: FC<SelectProps> = ({item, index, dropdownsInfo, setDropdownsInfo}) => {
    const dispatch = useAppDispatch()
    const {selectedRange} = useAppSelector(state => state.calendar)

    function toggleDropdown(index: number, active: boolean) {
        setTimeout(() => {
            let newDropdownsInfo = [...dropdownsInfo];
            for (let x = 0; x < newDropdownsInfo.length; x++) {
                newDropdownsInfo[x].dropDownActive = false;
            }
            newDropdownsInfo[index].dropDownActive = active;
            setDropdownsInfo(newDropdownsInfo);
        }, 50);
    }

    return (
        <div className="relative">
            <label className="text-[#525252] text-left absolute bottom-[40px] label-v">{item.label}</label>
            <button
                onClick={() => toggleDropdown(index, !item.dropDownActive)}
                className="flex items-center justify-between bg-white
                border w-[213px] h-[38px] pl-[5px] pr-[15px] overflow-hidden"
                style={{
                    border: 'solid var(--light-solidcolor-primary-primary-500-base-, #4078bc)',
                    borderWidth: '1px',
                    boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
                }}
            >
                <h4 className="text-[#a5a3ae] label-h">{item.title}</h4>
                <svg
                    className={`${item.dropDownActive ? 'rotate-90' : ''} shrink-0 
                    overflow-visible transition-all duration-500 `}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#4B465C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="white"
                        strokeOpacity="0.2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <item.dropDown
                index={index}
                dropdownsInfo={dropdownsInfo}
                setDropdownsInfo={setDropdownsInfo}
                active={item.dropDownActive}
                setCalendar={() => dispatch(setCalendar)}
                selectedRange={selectedRange}
                setSelectedRange={() => dispatch(setSelectRange)}
            />
        </div>
    );
};

export default Select;