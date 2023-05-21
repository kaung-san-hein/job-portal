import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PhoneNumberTextField } from "../components/input/withPhoneNumberTextField";
import { PasswordTextField } from "../components/input/withPasswordTextField";
import CustomTextField from "../components/input/CustomTextField";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../store/actions/auth";
import { NotificationManager } from "react-notifications";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (name && phoneNumber && password) {
      const data = {
        name,
        phoneNumber,
        password,
      };

      dispatch(register(data));
      navigate('/login')
    } else {
      NotificationManager.warning("Please enter data!");
    }
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
                Register
              </Typography>
              <CustomTextField
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
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
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Loading..." : "Register"}
              </Button>
              <Typography align="center" mt={3}>
                Already have an account?
                <span>
                  <Link to="/login"> Login</Link>
                </span>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
