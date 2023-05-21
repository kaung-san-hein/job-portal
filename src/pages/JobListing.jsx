import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CustomSelectBox from "../components/selectbox/CustomSelectBox";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import JobCard from "../components/job/JobCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getCompanies,
  getJobLocations,
  getJobTypes,
  getJobs,
} from "../store/actions/job";

const JobListing = () => {
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const { jobTypes, jobLocations, companies, jobs } = useSelector(
    (state) => state.job
  );
  const dispatch = useDispatch();

  const jobTypeOptions = jobTypes.map((element) => ({
    value: element.id,
    label: element.name,
  }));

  const jobLocationOptions = jobLocations.map((element) => ({
    value: element.id,
    label: element.name,
  }));

  useEffect(() => {
    dispatch(getJobTypes());
    dispatch(getJobLocations());
    dispatch(getCompanies());
    dispatch(getJobs());
  }, [dispatch]);

  const handleSearch = () => {
    let filterData = {};

    if (jobType) {
      filterData = {
        ...filterData,
        type: jobType,
      };
    }
    if (jobLocation) {
      filterData = {
        ...filterData,
        location: jobLocation,
      };
    }

    dispatch(getJobs(filterData));
  };

  return (
    <Box>
      <Container sx={{ mt: 2 }}>
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomSelectBox
              label="Job Type"
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              options={jobTypeOptions}
              onClear={() => setJobType("")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
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
              onClick={handleSearch}
            >
              Search
            </Button>
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
              onClick={(e) => {
                e.preventDefault();
                dispatch(getJobs());
              }}
            >
              All
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          {companies.map((company) => (
            <Chip
              onClick={(e) => {
                e.preventDefault();
                let filterData = {
                  company: company.id,
                };

                dispatch(getJobs(filterData));
              }}
              key={company.id}
              label={company.name}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
      </Container>
      <Divider sx={{ mt: 3 }} />
      <Container sx={{ mt: 3 }}>
        <Grid alignItems="center" container spacing={2}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobListing;
