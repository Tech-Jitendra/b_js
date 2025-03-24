import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
    id: string | null;
    name: string | null;
    email: string | null;
    isLoggedIn: boolean;
}
const initialState: UserState = {
    id: null,
    name: null,
    email: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.id = null;
            state.name = null;
            state.email = null;
            state.isLoggedIn = false;
        },
        updateUser(state, action: PayloadAction<{ name?: string; email?: string }>) {
            if (action.payload.name) {
                state.name = action.payload.name;
            }
            if (action.payload.email) {
                state.email = action.payload.email;
            }
        },
    },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;