import React, {FC} from 'react';

import {Chart} from "../../../types";
import PieChartItem from "./PieChartItem";

type PieChartListProps = {
    data: Chart[]
}

const PieChartList: FC<PieChartListProps> = ({data}) => {
    return (
        <div className="flex justify-between items-center mx-auto w-[90%] mt-6">
            {data.map((item, index) => (
                <PieChartItem item={item} index={index} key={index}/>
            ))}
        </div>
    );
};

export default PieChartList;