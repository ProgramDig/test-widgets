import React, {FC} from 'react'

import {DropDownInfo} from "../../../types";
import Select from "./Select";

type SelectListProps = {
    dropdownsInfo: DropDownInfo[]
    setDropdownsInfo: (state:DropDownInfo[]) => void
}

const SelectList: FC<SelectListProps> = ({dropdownsInfo, setDropdownsInfo}) => {
    return (
        <>
            {dropdownsInfo.map((item, index) => (
                <Select
                    item={item}
                    index={index}
                    key={index}
                    dropdownsInfo={dropdownsInfo}
                    setDropdownsInfo={setDropdownsInfo}
                />
            ))}
        </>
    );
};

export default SelectList;