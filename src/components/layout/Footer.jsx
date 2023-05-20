import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container>
      <Stack justifyContent="center" sx={{ minHeight: "100px" }}>
        <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
          &copy;2023 Job Portal
        </Typography>
      </Stack>
    </Container>
  );
};

export default Footer;
