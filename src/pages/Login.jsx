import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PhoneNumberTextField } from "../components/input/withPhoneNumberTextField";
import { PasswordTextField } from "../components/input/withPasswordTextField";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/actions/auth'

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogin = () => {
    const data = {
      phoneNumber,
      password,
    }

    dispatch(login(data))
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
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Login'}
              </Button>
              <Typography align="center" mt={3}>
                Don't have an account yet?
                <span>
                  <Link to="/register"> Register</Link>
                </span>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
