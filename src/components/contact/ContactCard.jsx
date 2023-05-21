import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ContactCard = ({ label }) => {
  return (
    <Grid item xs={12}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        borderTop="1px solid #E4E2E0"
        pt={2}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {label}
        </Typography>
        <ArrowForwardIosIcon />
      </Stack>
    </Grid>
  );
};

export default ContactCard;
