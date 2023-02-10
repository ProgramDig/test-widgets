import './styles/App.scss';
import './styles/styles.scss';

import LazyLoad from 'react-lazy-load';
import {Reorder} from 'framer-motion'
import {FC, useEffect} from "react";

import CalendarPopUp from './components/CalendarPopUp/CalendarPopUp';
import useAppSelector from "./hooks/useAppSelector.hook";
import useAppDispatch from "./hooks/useAppDispatch.hook";

import {setWidget, sortWidget} from "./redux/slices/widgetSlice";
import Header from "./components/Header/Header";

const App: FC = () => {
    const dispatch = useAppDispatch()

    const widgets = useAppSelector(state => state.widgets)
    const {isEdit} = useAppSelector(state => state.appEdit)

    useEffect(() => {
        const data: string | null = localStorage.getItem('widgets')
        if (data) {
            dispatch(sortWidget(JSON.parse(data)))
        }
    }, [])

    const reorderHandler = (state: any[]) => {
        if (isEdit) dispatch(setWidget(state))
    }

    return (
        <div className=" justify-center bg-[#f8f7fa] ">
            <div className="flex flex-col items-center w-[1155px] m-auto">
                <Header/>
                <Reorder.Group as="ul" axis="y" values={widgets} onReorder={reorderHandler}>
                    {widgets.map((widget) => (
                        <LazyLoad key={widget.id} className="w-full" height={widget.height} threshold={0.1}>
                            <Reorder.Item value={widget} whileDrag={{scale: 1.1, opacity: 0.8}}>
                                {widget.component}
                            </Reorder.Item>
                        </LazyLoad>
                    ))}
                </Reorder.Group>
                <div className="svg-border flex flex-col items-center justify-center
                border-[3px] w-[1150px] h-[355px] mt-10 mb-12">
                    <svg
                        className="relative overflow-visible cursor-pointer"
                        width="65"
                        height="65"
                        viewBox="0 0 65 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.0625 32.5C4.0625 16.7944 16.7944 4.0625 32.5 4.0625C48.2056 4.0625 60.9375 16.7944 60.9375 32.5C60.9375 48.2056 48.2056 60.9375 32.5 60.9375C16.7944 60.9375 4.0625 48.2056 4.0625 32.5ZM32.5 8.125C45.9619 8.125 56.875 19.0381 56.875 32.5C56.875 45.9619 45.9619 56.875 32.5 56.875C19.0381 56.875 8.125 45.9619 8.125 32.5C8.125 19.0381 19.0381 8.125 32.5 8.125ZM44.6875 30.4688H34.5312V20.3125H30.4688V30.4688H20.3125V34.5312H30.4688V44.6875H34.5312V34.5312H44.6875V30.4688Z"
                            fill="#4078BC"
                        />
                    </svg>
                    <h1 className="text-[#4078bc] text-left mt-4 f-m-24-18">WIDGET HINZUFÜGEN</h1>
                </div>
            </div>
            <CalendarPopUp/>
            <svg style={{filter: 'drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4))'}} className="absolute h-0">
                <defs>
                    <filter x="-0.2" y="-0.2" width="1.4" height="1.4" id="solid">
                        <feFlood floodColor="white"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComponentTransfer>
                            <feFuncA type="table" tableValues="0 0 0 1"/>
                        </feComponentTransfer>

                        <feComponentTransfer>
                            <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1"/>
                        </feComponentTransfer>
                        <feComposite in="SourceGraphic"/>

                        <feMerge>
                            <feMergeNode in="bg"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.09"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default App;
