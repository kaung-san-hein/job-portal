import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import about from "../assets/images/about.png";

const About = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid alignItems="center" container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: "w600" }}>
            About Job Portal
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

export default About;
