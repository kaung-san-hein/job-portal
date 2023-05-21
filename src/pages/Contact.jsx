import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ContactCard from "../components/contact/ContactCard";

const Contact = () => {
    return (
        <Container sx={{ mt: 3 }}>
            <Stack
                display="flex"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    What are you having trouble with?
                </Typography>

                <Grid alignItems="center" container spacing={2} mt={3}>
                    <ContactCard label="For hiring companies" />
                    <ContactCard label="job search" />
                    <ContactCard label="company page" />
                    <ContactCard label="resume and profile" />
                    <ContactCard label="general questions" />
                    <ContactCard label="Application" />
                </Grid>
            </Stack>
        </Container>
    );
};

export default Contact;
