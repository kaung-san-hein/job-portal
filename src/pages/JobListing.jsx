import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CustomSelectBox from "../components/selectbox/CustomSelectBox";
import Divider from "@mui/material/Divider";
import { jobTypes } from "../mock/jobTypes";
import { jobLocations } from "../mock/jobLocations";
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip'
import { companies } from "../mock/companies";
import JobCard from "../components/job/JobCard";

const JobListing = () => {
    const [jobType, setJobType] = useState("");
    const [jobLocation, setJobLocation] = useState("");

    const jobTypeOptions = jobTypes.map((element) => ({
        value: element.id,
        label: element.name,
    }));

    const jobLocationOptions = jobLocations.map((element) => ({
        value: element.id,
        label: element.name,
    }));

    return (
        <Box>
            <Container sx={{ mt: 2 }}>
                <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <CustomSelectBox
                            label="Job Type"
                            value={jobType}
                            onChange={(event) => setJobType(event.target.value)}
                            options={jobTypeOptions}
                            onClear={() => setJobType("")}
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CustomSelectBox
                            label="Job Location"
                            value={jobLocation}
                            onChange={(event) => setJobLocation(event.target.value)}
                            options={jobLocationOptions}
                            onClear={() => setJobLocation("")}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "var(--primary-color)",
                                borderRadius: "8px",
                            }}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                    {companies.map((company) => <Chip key={company.id} label={company.name} sx={{ mr: 1, mb: 1 }} />)}
                </Box>
            </Container>
            <Divider sx={{ mt: 3 }} />
            <Container sx={{ mt: 3 }}>
                <Grid alignItems="center" container spacing={2}>
                    {[...Array(10).keys()].map((job) => <JobCard key={job} />)}
                </Grid>
            </Container>
        </Box>
    );
};

export default JobListing;
