import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: string | null;
    name: string | null;
    email: string | null;
    mobile: string | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    id: null,
    name: null,
    email: null,
    mobile: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ email: string; mobile?: string; password?: string }>) {
            state.email = action.payload.email;
            if (action.payload.mobile) {
                state.mobile = action.payload.mobile; // Use OTP method for login
            } else if (action.payload.password) { // Use email and password for login
                state.mobile = null;
            }
            state.isLoggedIn = true;
        },
        register(state, action: PayloadAction<{ id: string; name: string; email: string; mobile: string }>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
            state.isLoggedIn = false; // User is not logged in after registration
        },
        logout(state) {
            state.id = null;
            state.name = null;
            state.email = null;
            state.mobile = null;
            state.isLoggedIn = false;
        },
    },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;