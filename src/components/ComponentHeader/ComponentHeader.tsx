import {FC, useEffect} from 'react';
import ComponentDropdown from '../ComponentDropdown/ComponentDropdown';

type ComponentHeaderProps = {
  fontSize?: string;
  title?: string;
  dropDownActive: boolean;
  setDropDown?: any;
}

const ComponentHeader: FC<ComponentHeaderProps> = ({fontSize, title, dropDownActive, setDropDown,}) => {
  const element: number[] = [0, 1, 2]

  const handleClick = (e: any) => {
    if (dropDownActive) {
      setDropDown(false);
    }
  }

  useEffect(() => {
    addEventListener('click', handleClick);
    return () => removeEventListener('click', handleClick);
  }, [dropDownActive]);

  const toggleDropdown = () => {
    setTimeout(() => {
      setDropDown(!dropDownActive);
    }, 50);
  }

  return (
    <header className={`${fontSize ? 'mt-0 mb-2' : 'mt-4'} flex justify-between  px-6 pr-2`}>
      <h3 className="m-0 f-b-20-54" style={{fontSize: fontSize ? fontSize : '20px'}}>{title}</h3>
      <span
        onClick={toggleDropdown}
        className={`${
          dropDownActive ? 'bg-white' : ''
        } dropdown flex flex-col items-center justify-between mt-2 py-[7px] h-[32px] w-[32px] relative transition-all duration-300 cursor-pointer`}
      >
        {element.map((item) => (
          <div key={item} className="h-[3px] w-[3px] rounded-[100%] bg-primary"/>
        ))}
        <ComponentDropdown dropDownActive={dropDownActive} setDropDown={setDropDown}/>
      </span>
    </header>
  );
}
export default ComponentHeader