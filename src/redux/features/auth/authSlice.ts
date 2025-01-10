import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
    role: 'admin' | 'manager' | 'user'| null;
}
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        role: null
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = {email: '', password: '', role: null};
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;