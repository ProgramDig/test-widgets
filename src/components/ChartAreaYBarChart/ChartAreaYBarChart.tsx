import React, {FC} from 'react';

import ChartArea from "../ChartArea/ChartArea";
import YBarChart from "../BarCharts/YBarChart";

const ChartAreaYBarChart: FC = () => {
    return (
        <div className="flex justify-between w-full">
            <ChartArea fontSize="15px" title="Bot Most Active Hours" leftLabel="Users" width="66%" height="255px"/>
            <YBarChart width="32%"/>
        </div>
    );
};
export default ChartAreaYBarChart;