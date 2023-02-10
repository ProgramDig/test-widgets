import React, {FC} from 'react';
import SimpleChart from "./SimpleChart";

const SimpleChartList: FC = () => {
    return (
        <div className="flex justify-between w-full">
            <SimpleChart/>
            <SimpleChart/>
            <SimpleChart/>
        </div>
    );
};

export default SimpleChartList;