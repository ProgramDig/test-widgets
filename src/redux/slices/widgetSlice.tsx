import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import Header from "../../components/Header/Header";
import Statistics from "../../components/Statistics/Statistics";
import KindsOfEvents from "../../components/KindsOfEvents/KindsOfEvents";
import ChartArea from "../../components/ChartArea/ChartArea";
import SimpleWordCloud from "../../components/SimpleWorldCloud/SimpleWordCloud";
import ChartAreaYBarChart from "../../components/ChartAreaYBarChart/ChartAreaYBarChart";
import DonutWidgetList from "../../components/DonutWidgetList/DonutWidgetList";
import XBarChartPieWidget from "../../components/XBarChartPieWidget/XBarChartPieWidget";
import SimpleChartList from "../../components/SimpleChartList/SimpleChartList";

type widgetSlice = {
    id: number,
    component: any,
    height: number
}

const initialState: widgetSlice[] = [
    {
        id: 1,
        component: <Statistics/>,
        height: 160
    },
    {
        id: 2,
        component: <KindsOfEvents/>,
        height: 410
    },
    {
        id: 3,
        component: (
            <ChartArea
                title={'Conversation Length'}
                leftLabel={'Conversions'}
                bottomLabel={'Events'}
                width={'100%'}
                height={'383px'}
            />
        ),
        height: 410,
    },
    {
        id: 4,
        component: <SimpleWordCloud/>,
        height: 410
    },
    {
        id: 5,
        component: <ChartAreaYBarChart/>,
        height: 280,
    },
    {
        id: 6,
        component: <DonutWidgetList/>,
        height: 410,
    },
    {
        id: 7,
        component: <XBarChartPieWidget/>,
        height: 420,
    },
    {
        id: 8,
        component: <SimpleChartList/>,
        height: 500
    }
]

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        setWidget(state, action: PayloadAction<widgetSlice[]>) {
            action.payload.map((item, index) => state.splice(index, 1, item))
        },
        sortWidget(state, action: PayloadAction<number[]>) {
            state.sort((a, b) => action.payload.indexOf(a.id) - action.payload.indexOf(b.id))
        }
    },
})

export const {setWidget, sortWidget} = widgetSlice.actions
export default widgetSlice.reducer