import {createSlice} from '@reduxjs/toolkit'

type dndSlice = {
    isEdit: boolean
}

const initialState: dndSlice = {
    isEdit: false
}

const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {
        edit(state) {
            state.isEdit = true
        },
        noEdit(state) {
            state.isEdit = false
        }
    },
})

export const {edit, noEdit} = dndSlice.actions

export default dndSlice.reducer