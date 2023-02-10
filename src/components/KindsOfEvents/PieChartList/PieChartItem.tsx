import React, {FC} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import {Chart} from "../../../types";

type PieChartItemProps = {
    item: Chart
    index: number
}

const PieChartItem: FC<PieChartItemProps> = ({item, index}) => {

    function togglePathsStyle(e: any, state) {
        const elems = Array.from(e.target.parentNode.children) as any;
        for (let x = 0; x < elems.length / 2; x++) {
            elems[x].style.strokeWidth = 17.5;
        }
        if (state) e.target.style.strokeWidth = 24;
        else e.target.style.strokeWidth = 17.5;
    }

    return (
        <div key={index} className="kind flex flex-col items-center border-[1px] border-[#ECEEF7]  h-[227px] w-[289px]">
            <h3 className="mt-4 mb-[5px] f-b-15-18 ">{item.title}</h3>
            <PieChart
                animate
                animationDuration={1000}
                animationEasing="ease-out"
                center={[60, 60]}
                data={item.chartData}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                onMouseOver={(e: any) => togglePathsStyle(e, true)}
                onMouseOut={(e: any) => togglePathsStyle(e, false)}
                viewBoxSize={[120, 120]}
                startAngle={-90}
                labelPosition={100}
                labelStyle={{
                    fontSize: '14px',
                    background: 'white',
                    fill: 'black',
                    width: '100px',
                    height: '100px',
                    fontWeight: '800',
                    filter: 'url(#solid)',
                    color: 'white',
                }}
                lengthAngle={360}
                lineWidth={35}
                paddingAngle={0}
            />
            <div className="flex justify-between w-full px-4">
                {item.labels.map((item, index) => (
                    <h4 key={index} className="flex items-center">
                        <div className="mr-2 w-[5px] h-[5px] rounded-[100%]" style={{ background: item.color }}/>
                        {item.title}
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default PieChartItem;