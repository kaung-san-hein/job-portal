import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRegister, getToken, removeToken, setRegister, setToken } from '../../services/cache';
import { NotificationManager } from 'react-notifications'

export const logout = createAsyncThunk('auth/logout', () => {
    removeToken()
})

export const register = createAsyncThunk('auth/register', (data, thunkAPI) => {
    try {
        const convertString = JSON.stringify(data);

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
        const getString = getRegister();
        const convertObj = JSON.parse(getString);

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
        const getString = getToken();
        const convertObj = JSON.parse(getString);

        return convertObj;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})
