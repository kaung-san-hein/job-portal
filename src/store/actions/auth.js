import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRegister, getToken, removeToken, setRegister, setToken } from '../../services/cache';
import { NotificationManager } from 'react-notifications'

// can change api call code instead of mock data getting functions

export const logout = createAsyncThunk('auth/logout', () => {
    // delete token from localstorage
    removeToken()
})

export const register = createAsyncThunk('auth/register', (data, thunkAPI) => {
    try {
        // change register API

        const convertString = JSON.stringify(data); // convert object to string to save in localstorage

        setRegister(convertString);
        NotificationManager.success('Account has been successfully created!')
        return data;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const login = createAsyncThunk('auth/login', (data, thunkAPI) => {
    try {
        // change login API

        const getString = getRegister(); // Get data from localstorage to check
        const convertObj = JSON.parse(getString); // convert string to object

        if (convertObj.phoneNumber === data.phoneNumber && convertObj.password === data.password) {
            setToken(JSON.stringify(data))
            NotificationManager.success('Successfully Login!')
            return data;
        } else {
            NotificationManager.error('Invalid Credentials!')
            return thunkAPI.rejectWithValue('Invalid Credentials!')
        }
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const autoLogin = createAsyncThunk('auth/autoLogin', (_, thunkAPI) => {
    try {
        // change Get User API

        const getString = getToken(); // get data from localstorage
        const convertObj = JSON.parse(getString); // convert string to object

        return convertObj;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})
