import {configureStore} from '@reduxjs/toolkit';

import dndSlice from './slices/dndSlice';
import widgetSlice from "./slices/widgetSlice";
import calendarSlice from "./slices/calendarSlice";
import chartSlice from "./slices/chartSlice";

const store = configureStore({
    reducer: {
        appEdit: dndSlice,
        calendar: calendarSlice,
        widgets: widgetSlice,
        charts: chartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch