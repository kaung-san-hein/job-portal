import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobDetail } from '../store/actions/job'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { NotificationManager } from "react-notifications";

const JobDetail = () => {
    const { id } = useParams();

    const { auth, job } = useSelector((state) => state)
    const { jobDetail } = job
    const { isAuthenticated } = auth
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobDetail(id))
    }, [dispatch, id])

    const {
        title,
        company,
        location,
        skills,
        type,
        description,
        createdAt
    } = jobDetail;

    // Apply function
    const handleApply = () => {
        if (isAuthenticated) {
            NotificationManager.success("Successfully Apply!");
        } else {
            NotificationManager.warning("Please register and login!");
        }
    }

    return (
        <Container sx={{ mt: 3 }}>
            {!Object.keys(jobDetail).length ? <Stack
                justifyContent="center"
                alignItems="center"
                direction="column"
                sx={{ minHeight: "550px" }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    There is no job.
                </Typography>
            </Stack> :
                <Grid alignItems="center" justifyContent="center" container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1">{company.name}</Typography>
                                <Typography variant="subtitle1" mb={1}>
                                    {location.name}
                                </Typography>
                                {skills.map((skill, index) => (
                                    <Chip
                                        label={skill}
                                        key={index}
                                        variant="outlined"
                                        sx={{ mr: 1, mb: 1 }}
                                    />
                                ))}
                                <Typography variant="subtitle2" mt={1} sx={{ fontWeight: "bold" }}>
                                    {type.name}
                                </Typography>
                                <Typography variant="body1" mt={2} mb={2} gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Responsibilities
                                </Typography>
                                <ul>
                                    <li>Execute full software development life cycle (SDLC)</li>
                                    <li>Develop flowcharts, layouts and documentation to identify requirements and solutions</li>
                                    <li>Write well-designed, testable code</li>
                                    <li>Produce specifications and determine operational feasibility</li>
                                    <li>Integrate software components into a fully functional software system</li>
                                    <li>Develop software verification plans and quality assurance procedures</li>
                                    <li>Document and maintain software functionality</li>
                                    <li>Troubleshoot, debug and upgrade existing systems</li>
                                    <li>Deploy programs and evaluate user feedback</li>
                                    <li>Comply with project plans and industry standards</li>
                                    <li>Ensure software is updated with latest features</li>
                                </ul>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Requirements and skills
                                </Typography>
                                <ul>
                                    <li>Proven work experience as a Software Engineer or Software Developer</li>
                                    <li>Experience designing interactive applications</li>
                                    <li>Ability to develop software in Java, Ruby on Rails, C++ or other programming languages</li>
                                    <li>Excellent knowledge of relational databases, SQL and ORM technologies (JPA2, Hibernate)</li>
                                    <li>Experience developing web applications using at least one popular web framework (JSF, Wicket, GWT, Spring MVC)</li>
                                    <li>Experience with test-driven development</li>
                                    <li>Proficiency in software engineering tools</li>
                                    <li>Ability to document requirements and specifications</li>
                                    <li>BSc degree in Computer Science, Engineering or relevant field</li>
                                </ul>
                                <Stack
                                    justifyContent="space-between"
                                    alignItems="center"
                                    direction="row"
                                >
                                    <Typography variant="subtitle2" sx={{ color: "#6F6F6F" }}>
                                        {createdAt}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            bgcolor: "var(--primary-color)",
                                            borderRadius: "8px",
                                        }}
                                        onClick={handleApply}
                                    >
                                        Apply
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </Container>
    )
}

export default JobDetail