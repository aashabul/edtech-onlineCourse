import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import TypewriterComponent from "typewriter-effect";
import Roboto from "@fontsource/roboto";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#eddcd9",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid
              item
              sx={{ lineHeight: "2rem", my: 3 }}
              md={6}
              sm={12}
              xs={12}
            >
              <Typography
                variant="h2"
                sx={{
                  textShadow: "4px 5px 9px #666666",
                  WebkitTextFillColor: "#264143",
                  mb: 2,
                }}
              >
                Change is the end result of all true learning
              </Typography>

              <Typography variant="h5" sx={{ color: "#264143" }}>
                Buy Courses. Earn Certificate. Get Hired.
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Link to="/explore" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#de5499",
                      boxShadow: "5px 10px 8px #525252",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: 2,
                    }}
                  >
                    Explore Courses
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              // sx={{ my: 3 }}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                width="80%"
                src="https://i.ibb.co/6Jb61n9/banner.png"
                alt="banner"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
