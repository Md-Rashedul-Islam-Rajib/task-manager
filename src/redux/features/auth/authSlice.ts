import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * @function login is a reducer function of the authSlice that sets the isAuthenticated to true and sets the user to as actions payload
 * @function logout is a reducer function of the authSlice that sets the isAuthenticated to false and sets the user to an empty object
 * @function register is a reducer function of the authSlice that sets the isAuthenticated to true and sets the user to as actions payload
 * @constant initialState is an object with the default auth / user state
 */
interface User {
  email: string;
  password: string;
  role: "admin" | "manager" | "user" | "";
}
interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return { email: "", password: "", role: "" };
  }
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: getUser(),
};

/**
  * @constant authSlice is a part / slice of the redux store that contains the auth / user state and the login logout actions
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
      login(state, action: PayloadAction<User>) {
          const user = getUser();
      if (
        user &&
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        state.isAuthenticated = true;
        state.user = user;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = { email: "", password: "", role: "" };
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
