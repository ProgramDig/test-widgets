import {useState, FC} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import ComponentHeader from '../ComponentHeader/ComponentHeader';
import useAppSelector from "../../hooks/useAppSelector.hook";

import {toggleLabel} from "../../utils/toggleLabel";

const PieWidget: FC = () => {
  const chartItem = useAppSelector(state => state.charts[0])
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
      chartItem && (
      <div
        className="donut bg-light-solidcolor-extra-cardbackground rounded-md
        shrink-0 mt-4 w-[32%] h-[383px] relative bs-l-g-4-18"
      >
        <ComponentHeader
          fontSize="15px"
          title="Userfeedback (Suchergebnisse)"
          dropDownActive={dropDown}
          setDropDown={setDropDown}
        />
        <div className="flex justify-between items-center mx-auto w-[90%] mt-2">
          <div className="flex flex-col items-center h-[227px] w-full">
            <PieChart
              animate
              animationDuration={1000}
              center={[52, 52]}
              data={chartItem.chartData}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              onMouseOver={(e) => toggleLabel(e, true)}
              onMouseOut={(e) => toggleLabel(e, false)}
              segmentsShift={1}
              viewBoxSize={[104, 104]}
              startAngle={-90}
              labelPosition={50}
              labelStyle={{
                fontSize: '10px',
                background: 'white',
                fill: 'black',
                width: '100px',
                height: '100px',
                fontWeight: '800',
                filter: 'url(#solid)',
                color: 'white',
              }}
              lengthAngle={360}
              paddingAngle={0}
            />
            <div className="absolute top-[80%] flex flex-wrap justify-between w-[90%] pt-4 px-4">
              {chartItem.chartData.map((item: any, index: number) => (
                <h4 key={index} className="flex items-center">
                  <div className="mr-2 w-[12px] h-[12px] rounded-[100%]" style={{ background: item.color }}/>
                  {item.title}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default PieWidget