import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITask {
    title: string,
    description: string,
    priority: "high" | 'medium' | 'low',
    dueDate: Date,
    assignee: string
}

const initialState: ITask[] = [];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;