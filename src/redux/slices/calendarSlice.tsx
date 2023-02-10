import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type calendarSlice = {
    calendar: boolean,
    selectedRange: string
}

const initialState: calendarSlice = {
    calendar: false,
    selectedRange: ''
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendar(state, action: PayloadAction<boolean>) {
            state.calendar = action.payload
        },
        setSelectRange(state, action: PayloadAction<string>) {
            state.selectedRange = action.payload
        }
    },
})

export const {setCalendar, setSelectRange} = calendarSlice.actions
export default calendarSlice.reducer