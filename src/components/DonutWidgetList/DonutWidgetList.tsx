import React, {FC} from 'react';

import DonutWidget from "./DonutWidget";
import useAppSelector from "../../hooks/useAppSelector.hook";

import type {chartSliceData} from "../../types/index"

const DonutWidgetList: FC = () => {
    const data = useAppSelector(state => state.charts)

    return (
        <div className="flex justify-between w-full">
            {data.map((item: chartSliceData, index: number) => (
                <DonutWidget data={item} key={index}/>
            ))}
        </div>
    );
};
export default DonutWidgetList;