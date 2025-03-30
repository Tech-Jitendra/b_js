import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: string | null;
    name: string | null;
    emailOrMobile: string | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    id: null,
    name: null,
    emailOrMobile: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ id: string; name: string; emailOrMobile: string }>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.emailOrMobile = action.payload.emailOrMobile;
            state.isLoggedIn = true;
        },
        register(state, action: PayloadAction<{ id: string; name: string; emailOrMobile: string }>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.emailOrMobile = action.payload.emailOrMobile;
            state.isLoggedIn = false; // User is not logged in after registration
        },
        logout(state) {
            state.id = null;
            state.name = null;
            state.emailOrMobile = null;
            state.isLoggedIn = false;
        },
    },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;