import React, {FC} from 'react';
import XBarChart from "../BarCharts/XBarChart";
import PieWidget from "../PieWidget/PieWidget";

const XBarChartPieWidget: FC = () => {
    return (
        <div className="flex justify-between w-full">
            <XBarChart width={'66%'}/>
            <PieWidget/>
        </div>
    );
};

export default XBarChartPieWidget;