import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/User";
import { USER_LOCALESTORAGE_KEY } from "shared/const/localeStorage";



const initialState: UserSchema = {};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload; 
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALESTORAGE_KEY);
            if (user) {
                state.userData = JSON.parse(user);
            } 
        },
        logout: (state) => {
            state.userData = null;
            localStorage.removeItem(USER_LOCALESTORAGE_KEY);
        }
    }
});


export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;