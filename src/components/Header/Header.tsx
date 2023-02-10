import React, {useState, useEffect, FC} from 'react';
import CountUp from 'react-countup';

import Dropdown from '../Dropdown/Dropdown';
import MultipleDropdown from '../MultipleDropdown/MultipleDropdown';
import Gear from '../../assets/Gear.svg';
import Pdf from '../../assets/ImportPdf.svg';
import SelectList from "./SelectList/SelectList";

import type {DropDownInfo} from "../../types";
import ButtonList from "./ButtonList/ButtonList";

const dropDownInitState: DropDownInfo[] = [
    {
        label: 'Select Date Range',
        title: 'Wähle einen Zeitraum',
        dropDown: Dropdown,
        dropDownActive: false,
    },
    {
        label: 'Refferer',
        title: 'Wähle einen Refferer',
        dropDown: MultipleDropdown,
        dropDownActive: false,
    },
    {
        label: 'Parameters/Values',
        title: 'Wähle eine Option',
        dropDown: MultipleDropdown,
        dropDownActive: false,
    },
]

const Header: FC = () => {
    const [dropdownsInfo, setDropdownsInfo] = useState<DropDownInfo[]>(dropDownInitState), buttons = [Pdf, Gear];

    function handleClick(e: any) {
        try {
            if (!e.target.className.includes('multiDropdown')) {
                let newDropdownsInfo = [...dropdownsInfo];
                for (let x = 0; x < newDropdownsInfo.length; x++) {
                    if (newDropdownsInfo[x].dropDownActive) {
                        newDropdownsInfo[x].dropDownActive = false;
                    }
                }
                setDropdownsInfo(newDropdownsInfo);
            }
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    useEffect(() => {
        addEventListener('click', handleClick);
        return () => removeEventListener('click', handleClick);
    }, [dropdownsInfo]);

    return (
        <div className="header_component flex items-center justify-between shrink-0 w-[1155px] h-[87px] relative mt-8">
            <div className="flex items-center justify-between bg-[#ffffff] pl-4 px-2 rounded-[1px] w-[258px]
                h-[45px] overflow-hidden bs-4-18">
                <h3 className="text-primary absolute f-b-18-24">
                    <CountUp end={215} duration={2.4}/>
                </h3>

                <h3 className="text-secondary justify-start items-start w-full f-l-18-20">
                    <div className="text-box flex justify-start items-center relative">
                        <div>Today's conversations</div>
                        <div>Live Conversations</div>
                    </div>
                </h3>

                <div className="ring-container flex items-center justify-center self-start mt-2 w-2 h-2`">
                    <div className="ringring absolute w-5 h-5 rounded-[50%] border-[2px] border-[#2cca3c]"/>
                    <div className="w-2 h-2 bg-[#2cca3c] rounded-[50%]"/>
                </div>
            </div>
            <SelectList dropdownsInfo={dropdownsInfo} setDropdownsInfo={setDropdownsInfo}/>
            <ButtonList buttons={buttons}/>
        </div>
    );
}
export default Header