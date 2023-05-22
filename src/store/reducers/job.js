import { createSlice } from '@reduxjs/toolkit'
import { getCompanies, getJobDetail, getJobLocations, getJobTypes, getJobs } from '../actions/job'

const initialState = {
    loading: false,
    jobTypes: [],
    jobLocations: [],
    companies: [],
    jobs: [],
    jobDetail: {},
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    extraReducers: (builder) => {
        // getJobTypes
        builder.addCase(getJobTypes.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getJobTypes.fulfilled, (state, action) => {
            state.loading = false
            state.jobTypes = action.payload
        })
        builder.addCase(getJobTypes.rejected, (state) => {
            state.loading = false
            state.jobTypes = []
        })
        // getJobLocations
        builder.addCase(getJobLocations.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getJobLocations.fulfilled, (state, action) => {
            state.loading = false
            state.jobLocations = action.payload
        })
        builder.addCase(getJobLocations.rejected, (state) => {
            state.loading = false
            state.jobLocations = []
        })
        // getCompanies
        builder.addCase(getCompanies.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCompanies.fulfilled, (state, action) => {
            state.loading = false
            state.companies = action.payload
        })
        builder.addCase(getCompanies.rejected, (state) => {
            state.loading = false
            state.companies = []
        })
        // getJobs
        builder.addCase(getJobs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getJobs.fulfilled, (state, action) => {
            state.loading = false
            state.jobs = action.payload
        })
        builder.addCase(getJobs.rejected, (state) => {
            state.loading = false
            state.jobs = []
        })
        // getJobDetail
        builder.addCase(getJobDetail.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getJobDetail.fulfilled, (state, action) => {
            state.loading = false
            state.jobDetail = action.payload
        })
        builder.addCase(getJobDetail.rejected, (state) => {
            state.loading = false
            state.jobDetail = {}
        })
    },
})

export default jobSlice.reducer