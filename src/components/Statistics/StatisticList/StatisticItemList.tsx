import React, {FC} from 'react';
import {Statistic} from "../../../types";
import StatisticItem from "./StatisticItem";

type StatisticItemListProps = {
    data: Statistic[]
}
const StatisticItemList: FC<StatisticItemListProps> = ({data}) => {
    return (
        <div className="flex w-[1155px] h-[90px] relative left-0 px-6 pb-0">
            {data.map((item, index) => (
                <StatisticItem item={item} index={index} key={index}/>
            ))}
        </div>
    );
};

export default StatisticItemList;