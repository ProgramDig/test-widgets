import {FC, useState} from 'react';

import ComponentHeader from '../ComponentHeader/ComponentHeader';
import PieChartList from "./PieChartList/PieChartList";

import {Chart} from "../../types";

const KindsOfEvents: FC = () => {
  const data: Chart[] = [
    {
      chartData: [
        {
          title: '65%',
          value: 12,
          color: '#40bc97',
        },
        {
          title: '35%',
          value: 32,
          color: '#4179bd',
        },
      ],
      title: 'Message vs Analytics',
      labels: [
        {
          title: 'Message',
          color: '#C13C37',
        },
        {
          title: 'Analytics',
          color: '#40bc97',
        },
      ],
    },
    {
      chartData: [
        {
          title: '65%',
          value: 32,
          color: '#BC406D',
        },
        {
          title: '35%',
          value: 22,
          color: '#4179bd',
        },
      ],
      title: 'Free text vs Click options',
      labels: [
        {
          title: 'Free text',
          color: '#4179bd',
        },
        {
          title: 'Click options',
          color: '#BC406D',
        },
      ],
    },
    {
      chartData: [
        {
          title: '65%',
          value: 11,
          color: '#B43DAF',
        },
        {
          title: '35%',
          value: 3,
          color: '#4179bd',
        },
      ],
      title: 'Dialogplans',
      labels: [
        {
          title: 'Dialogplan',
          color: '#4179bd',
        },
        {
          title: 'No Dialogplan',
          color: '#B43DAF',
        },
      ],
    },
  ];

  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <div
      className="kinds bg-light-solidcolor-extra-cardbackground shrink-0 mt-4 w-[1155px] h-[383px] relative bs-l-g-4-18"
    >
      <ComponentHeader title="Kinds of events" dropDownActive={dropDown} setDropDown={setDropDown}/>
      <PieChartList data={data}/>
    </div>
  );
}
export default KindsOfEvents
