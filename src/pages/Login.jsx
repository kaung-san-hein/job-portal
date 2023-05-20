import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PhoneNumberTextField } from "../components/input/withPhoneNumberTextField";
import { PasswordTextField } from "../components/input/withPasswordTextField";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(phoneNumber, password);
  };

  return (
    <Box>
      <Container sx={{ mt: 2, minHeight: 450 }}>
        <Grid alignItems="center" justifyContent="center" container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                margin: "30px",
                padding: "0px 30px 30px 30px",
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: "bold",
                  marginTop: "30px",
                }}
              >
                Login
              </Typography>
              <PhoneNumberTextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <PasswordTextField
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  marginTop: "18px",
                  bgcolor: "var(--primary-color)",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
