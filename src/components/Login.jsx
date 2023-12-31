import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { GoogleAuth } from "./googleAuth";

import { setToLocalStorage } from "../hooks/useLocalStorage";

const Copyright = props => (
  <Typography align="center" color="text.secondary" variant="body2" {...props}>
    {"Copyright © "}
    Casa {new Date().getFullYear()}
  </Typography>
);

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {
  const location = useLocation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          md={12}
          sm={12}
          xs={false}
          sx={{
            backgroundImage:
              "url(https://ik.imagekit.io/gaagultest/CASA/home-bg_YN9qVyIcci.jpg?updatedAt=1685880520112)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Grid item component={Paper} elevation={22} md={3} sm={8} xs={12}>
            <Box
              sx={{
                mt: 6,
                mx: 2,
                mb: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                noValidate
                className="!max-w-[60%]"
                component="form"
                sx={{ mt: 1 }}
              >
                <GoogleAuth redirectPath="/listing" />
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </ThemeProvider>
  );
};

export default Login;
