import React, {useState} from 'react';
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import LazyLoad from "react-lazy-load";
import {chartSliceData} from "../../types";

const data: chartSliceData = {
    mainTitle: 'Simple Chart',
    chartData: [
        {
            title: 'Business',
            label: '65%',
            value: 224,
            color: '#895BF1',
        },
        {
            title: 'Travel',
            label: '35%',
            value: 245,
            color: '#F3654A',
        },
        {
            title: 'Design',
            label: '35%',
            value: 251,
            color: '#0794FF',
        },
        {
            title: 'Finance',
            label: '35%',
            value: 763,
            color: '#DC60EF',
        },
        {
            title: 'Material',
            label: '35%',
            value: 1775,
            color: '#99B2C6',
        },
    ],
    title: '',
    percentage: '69%',
}

const SimpleChart = () => {
    const [dropDown, setDropDown] = useState<boolean>(false)

    return (
        <div className="donut bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[32%]
        h-[488px] relative bs-l-g-4-18">
            <ComponentHeader fontSize="15px" title={data.mainTitle} dropDownActive={dropDown} setDropDown={setDropDown}/>
            <div className="flex justify-between items-center mx-auto w-[80%] mt-2">
                <LazyLoad threshold={0.45} height={227} className="flex flex-col items-center h-[227px] w-full">
                    <>
                        <div
                            className="absolute top-[26.3%] border-[1px] border-[#D9E1E7] rounded-[100%]
                            p-[20%] flex flex-col justify-center items-center w-[80px] h-[80px]"
                        >
                            <h1 className="f-l-36-18">
                                {data.percentage}
                            </h1>
                            <h3 className="mt-2 f-b-15-18">
                                {data.title}
                            </h3>
                        </div>
                        <div className="absolute top-[80%] flex flex-wrap justify-between w-[90%] pt-4 px-4">
                            {data.chartData.map((item: any, index: number) => (
                                <h4 key={index} className="flex items-center">
                                    <div
                                        className="mr-2 w-[12px] h-[15px] rounded-[100%] flex-col"
                                        style={{ background: item.color }}
                                    />
                                    {item.title} {item.value}
                                </h4>
                            ))}
                        </div>
                    </>
                </LazyLoad>
            </div>
        </div>
    );
}

export default SimpleChart;