import React, {FC} from 'react';

import Messaging from '../../assets/Messaging.svg';
import Users from '../../assets/Users.svg';
import Clock from '../../assets/Clock.svg';
import MultipleMessages from '../../assets/MultipleMessages.svg';

import StatisticItemList from "./StatisticList/StatisticItemList";

import {Statistic} from "../../types";

const Statistics: FC = () => {
  const statData: Statistic[] = [
    {
      background: 'rgba(115, 103, 240, 0.08)',
      icon: Messaging,
      title: 'Total Conversations',
      value: 215,
    },
    {
      background: 'rgba(0, 207, 232, 0.08)',
      icon: Users,
      title: 'Unique users',
      value: 14,
    },
    {
      background: 'rgba(234, 84, 85, 0.08)',
      icon: Clock,
      title: 'Total chat time spent',
      value: 472,
    },
    {
      background: 'rgba(40, 199, 111, 0.08)',
      icon: MultipleMessages,
      title: 'Total Events',
      value: 159,
    },
  ];

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[1155px]
      h-[134px] relative bs-l-g-4-18"
    >
      <header className="flex justify-between mt-4 px-4 pt-3">
        <h3 className="text-statText" style={{font: "600 18px/24px 'Public Sans', sans-serif"}}>
          Statistics
        </h3>
        <span style={{font: "400 13px/20px 'Public Sans', sans-serif"}} className="text-secondary">
          Updated 1 minute ago
        </span>
      </header>
      <StatisticItemList data={statData}/>
    </div>
  );
}
export default Statistics