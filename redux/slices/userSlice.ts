import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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

// Async action for registering the user
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: { name: string; email: string; mobile?: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/register', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

// Async action for logging in the user
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', loginData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.id = null;
      state.name = null;
      state.email = null;
      state.mobile = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.mobile = action.payload.mobile;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (_, action) => {
        console.error('Error during registration:', action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.mobile = action.payload.mobile;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (_, action) => {
        console.error('Error during login:', action.payload);
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
