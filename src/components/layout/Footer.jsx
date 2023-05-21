import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box mt={5}>
      <Divider />
      <Container>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          sx={{ minHeight: "100px" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            &copy;2023 Job Portal
          </Typography>
          <Box>
            <FacebookIcon sx={{ mr: 2 }} />
            <TwitterIcon sx={{ mr: 2 }} />
            <LinkedInIcon sx={{ mr: 2 }} />
            <YouTubeIcon sx={{ mr: 2 }} />
            <InstagramIcon />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
