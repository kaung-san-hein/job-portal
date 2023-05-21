import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import about from "../assets/images/about.png";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Review Your CV',
    'Interview',
    'Accepted',
];

const Home = () => {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant="h3" align="center">
                Welcome to Job Portal
            </Typography>
            <Box sx={{ width: '100%', mb: 5, mt: 5 }}>
                <Stepper activeStep={3}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Grid alignItems="center" container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ fontWeight: "w600" }}>
                        Job Portal
                    </Typography>
                    <Typography variant="subtitle1" mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#595959" }}
                        mt={4}
                    >
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" alt="About" image={about} title="about" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
