import { createAsyncThunk } from '@reduxjs/toolkit'
import { NotificationManager } from 'react-notifications'
import { jobTypes } from '../../mock/jobTypes';
import { jobLocations } from '../../mock/jobLocations';
import { companies } from '../../mock/companies';
import { jobs } from '../../mock/jobs';

// can change api call code instead of mock data getting functions

export const getJobTypes = createAsyncThunk('job/jobTypes', (_, thunkAPI) => {
    try {
        return jobTypes;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const getJobLocations = createAsyncThunk('job/jobLocations', (_, thunkAPI) => {
    try {
        return jobLocations;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const getCompanies = createAsyncThunk('job/companies', (_, thunkAPI) => {
    try {
        return companies;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const getJobs = createAsyncThunk('job/jobs', (filterData, thunkAPI) => {
    try {
        let filterJobs = jobs;
        if (filterData) {
            if (filterData.hasOwnProperty('type')) {
                filterJobs = filterJobs.filter((filterJob) => filterJob.type.id === filterData.type)
            }
            if (filterData.hasOwnProperty('location')) {
                filterJobs = filterJobs.filter((filterJob) => filterJob.location.id === filterData.location)
            }
            if (filterData.hasOwnProperty('company')) {
                filterJobs = filterJobs.filter((filterJob) => filterJob.company.id === filterData.company)
            }
        }
        return filterJobs;
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const getJobDetail = createAsyncThunk('job/jobDetail', (id, thunkAPI) => {
    try {
        const job = jobs.find((job) => job.id === Number(id));

        // don't want to return undefined when id is invalid
        return job ? job : {}
    } catch (error) {
        NotificationManager.error(error)
        return thunkAPI.rejectWithValue(error)
    }
})