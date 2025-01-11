import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITask {
    id: string,
    title: string,
    description: string,
    priority: "high" | 'medium' | 'low',
    dueDate: Date,
    assignee: string
}
type IUpdateTask = Partial<ITask>;

const initialState: ITask[] = [];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.push(action.payload)
        },
        getTasks(state) {
            return state;
        },
        updateTask(state, action: PayloadAction<IUpdateTask>) {
            // const index = state.findIndex((item) => item.id === action.payload.id);
            // if (index !== -1) {
            //     state[index] = {
            //         ...state[index],
            //         ...action.payload
            //     };
            // }
            const task = state.find((item) => item.id === action.payload.id);
            if (task) {
              Object.assign(task, action.payload); // Update the task in place
            }
        },
        deleteTask(state, action: PayloadAction<string>) {
            const task = state.find((item) => item.id === action.payload);
            if (task) {
                return state.filter((item) => item.id !== action.payload)
            }
        }
    }
})

export const { addTask, getTasks, updateTask,deleteTask } = taskSlice.actions;
export default taskSlice.reducer;