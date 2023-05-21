import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import jobReducer from "./reducers/job"

const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer,
    },
});

export default store;