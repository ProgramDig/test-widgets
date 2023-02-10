import ReactWordcloud from 'react-wordcloud';
import {FC, useState} from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';

type Word = {
  text: string,
  value: number
}

const SimpleWordCloud: FC = () => {
  const words: Word[] = [
    {
      text: 'told',
      value: 25,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 42,
    },
    {
      text: 'word',
      value: 64,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 17,
    },
    {
      text: 'message',
      value: 20,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 17,
    },
    {
      text: 'News',
      value: 42,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 17,
    },
    {
      text: 'contact',
      value: 34,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 17,
    },
    {
      text: 'desicion',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'good',
      value: 17,
    },
    {
      text: 'thought',
      value: 17,
    },
  ];
  const options = {
    rotations: 0,
    rotationAngles: [0],
    fontSizes: [20, 100],
    padding: 10,
    fontFamily: 'Public Sans',
  } as any;

  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-[12px] shrink-0 mt-4
      w-[1155px] h-[383px] relative bs-l-g-4-18"
    >
      <ComponentHeader title={'Word cloud'} dropDownActive={dropDown} setDropDown={setDropDown}/>
      <div className="mt-2">
        <ReactWordcloud words={words} options={options} />
      </div>
    </div>
  );
}
export default SimpleWordCloud