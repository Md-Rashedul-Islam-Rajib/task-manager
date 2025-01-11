import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import taskReducer from './features/tasks/taskSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        task: taskReducer
    }
});


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;