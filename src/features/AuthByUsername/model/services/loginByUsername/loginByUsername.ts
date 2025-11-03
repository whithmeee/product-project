import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALESTORAGE_KEY } from "shared/const/localeStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}


export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
    "login/loginByUsername",
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:3001/login", {
            username,
            password
        });
 
        if (!response.data) {
            throw new Error();
        }


        localStorage.setItem(USER_LOCALESTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
        } catch (e) {
            console.log(e);
           return thunkAPI.rejectWithValue("Вы ввели неправильный логин или пароль"); 
        }
    }
);