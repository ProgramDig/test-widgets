import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {chartSliceData} from "../../types";

const initialState: chartSliceData[] = [
    {
        mainTitle: 'Userfeedback (Antworten)',
        chartData: [
            {
                title: 'Positive',
                label: '65%',
                value: 12,
                color: '#40bc97',
            },
            {
                title: 'Negative',
                label: '35%',
                value: 10,
                color: '#BC406D',
            },
            {
                title: 'Neutral',
                label: '35%',
                value: 4,
                color: '#4179bd',
            },
        ],
        title: 'bewertete Antworten',
        percentage: '77%',
    },
    {
        mainTitle: 'Redakteurbewertungen (Antworten)',
        chartData: [
            {
                title: 'Name 1',
                label: '65%',
                value: 12,
                color: '#40bc97',
            },
            {
                title: 'Name 2',
                label: '35%',
                value: 32,
                color: '#BC406D',
            },
            {
                title: 'Name 3',
                label: '35%',
                value: 32,
                color: '#FFB536',
            },
            {
                title: 'Name 4',
                label: '35%',
                value: 32,
                color: '#4179bd',
            },
        ],
        title: 'bewertete Antworten',
        percentage: '64%',
    },
    {
        mainTitle: 'Userfeedback (Converstations)',
        chartData: [
            {
                title: 'Positive',
                label: '65%',
                value: 12,
                color: '#40bc97',
            },
            {
                title: 'Negative',
                label: '35%',
                value: 32,
                color: '#BC406D',
            },
            {
                title: 'Neutral',
                label: '35%',
                value: 32,
                color: '#4179bd',
            },
        ],
        title: 'bewertete Antworten',
        percentage: '36%',
    },
]

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        setChart(state, action: PayloadAction<chartSliceData>) {
            state.push(action.payload)
        },
    },
})

export const {setChart} = chartSlice.actions
export default chartSlice.reducer