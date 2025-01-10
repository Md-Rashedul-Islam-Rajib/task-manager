import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * @constant authSlice is a part / slice of the redux store that contains the auth / user state and the login logout actions
 * @function login is a reducer function of the authSlice that sets the isAuthenticated to true and sets the user to as actions payload
 * @function logout is a reducer function of the authSlice that sets the isAuthenticated to false and sets the user to an empty object
* @constant initialState is an object with the default auth / user state 

 */
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