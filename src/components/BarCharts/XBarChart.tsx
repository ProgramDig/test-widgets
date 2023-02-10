import {FC, useState} from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


type XBarData = {
  name: string,
  pv: number
}

type XBarChartProps = {
  width: string
}

const XBarChart: FC<XBarChartProps> = ({ width }) => {
  const data: XBarData[] = [
    {
      name: 'Ref. 1',
      pv: 1300,
    },
    {
      name: 'Ref. 2',
      pv: 1208,
    },
    {
      name: 'Ref. 3',
      pv: 1098,
    },
    {
      name: 'Ref. 4',
      pv: 967,
    },
    {
      name: 'Ref. 5',
      pv: 800,
    },
    {
      name: 'Ref. 6',
      pv: 680,
    },
    {
      name: 'Ref. 7',
      pv: 450,
    },
  ];
  const [dropDown, setDropDown] = useState<boolean>(false);

  const margin = {top: 20, right: 20, bottom: 20, left: 20}

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md
      shrink-0 mt-4 w-[1155px] h-[383px] relative bs-l-g-4-18"
      style={{width: width}}
    >
      <ComponentHeader fontSize="15px" title="Aktivität (Websites)" dropDownActive={dropDown} setDropDown={setDropDown}/>
      <ResponsiveContainer width="98%" height="80%">
        <ComposedChart layout="vertical" width={600} height={400} data={data} margin={margin}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" padding={{left: 50}} tick={{ fill: '#C0C7CE' }} stroke="#C0C7CE"/>
          <YAxis dataKey="name" type="category" tick={{ fill: '#C0C7CE' }} stroke="#C0C7CE"/>
          <Tooltip />
          <Bar dataKey="pv" barSize={20} radius={3} fill="#4078BC" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
export default XBarChart