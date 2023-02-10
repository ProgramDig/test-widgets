import {FC} from "react";

import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";

import {edit, noEdit} from "../../redux/slices/dndSlice";

type ComponentDropdownProps = {
  dropDownActive?: boolean;
  setDropDown?: (value: boolean) => void;
}

const ComponentDropdown: FC<ComponentDropdownProps> =({dropDownActive, setDropDown}) => {
  const dispatch = useAppDispatch()

  const {isEdit} = useAppSelector(state => state.appEdit)
  const widgets = useAppSelector(state => state.widgets)

  const content: string[] = isEdit?
      ['Edit', 'Remove', 'Export CSV', 'Export PDF', 'Export PNG', 'Save'] :
      ['Edit', 'Remove', 'Export CSV', 'Export PDF', 'Export PNG']

  const clickHandler = (item: string) => {
    if(item === 'Edit') {
      dispatch(edit())
    } else if (item === 'Save') {
      localStorage.setItem('widgets', JSON.stringify(widgets.map(item => item.id)))
      dispatch(noEdit())
    }
  }

  return (
    <div
      className={`${
        dropDownActive
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      }  w-[213px] absolute right-0 top-8 z-10 transition-all duration-300 bs bs-l-g-4-18`}
    >
      {content.map((item, index) => (
          <div
            key={index}
            onClick={() => clickHandler(item)}
            className="dropdownElem bg-white flex items-center
            text-_1-themecolor-body-text text-left relative h-[40px] pl-5"
          >
            <h3 className={"f-m-14-21"}>{item}</h3>
          </div>
        ))}
    </div>
  );
}
export default ComponentDropdown