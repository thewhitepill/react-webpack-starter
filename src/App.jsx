import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import React from "react";

const defaultTheme = createTheme();

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Hello, World!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Welcome to React Webpack Starter template
        </Typography>
      </Container>
    </Box>
  </ThemeProvider>
);

export default App;
