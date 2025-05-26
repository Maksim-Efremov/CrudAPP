import { useState } from "react";
import { Button } from "../components/button";
import { Box, Typography, Paper, useTheme } from "@mui/material";

export const MainPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const theme = useTheme();

  const handleAboutClick = () => {
    console.log("About Us clicked");
    setClickCount((prev) => prev + 1);
  };

  const handleSignInClick = () => {
    console.log("Sign In clicked");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
          background: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 4,
          }}
        >
          A short history about the company
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
        ></Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 3 }}>
          <Button
            onClick={handleAboutClick}
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
            }}
          >
            About Us
          </Button>

          <Button
            onClick={handleSignInClick}
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              boxShadow: theme.shadows[4],
            }}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 2,
            color: theme.palette.text.secondary,
            fontStyle: "italic",
          }}
        >
          About Us button clicked {clickCount} times
        </Typography>
      </Paper>
    </Box>
  );
};
