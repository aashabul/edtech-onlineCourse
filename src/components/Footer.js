import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#264143",
        // color: "#1F1F1F",
        // color: "#1F1F1F",
        color: "white",
      }}
    >
      <Container sx={{ pt: 5, pb: 3 }}>
        <Grid container>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                EdTech
              </Typography>
              <Typography variant="subtitle1">About</Typography>
              <Typography variant="subtitle1">Investors</Typography>
              <Typography variant="subtitle1">Careers</Typography>
              <Typography variant="subtitle1">Catalog</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Community
              </Typography>
              <Typography variant="subtitle1">Learners</Typography>
              <Typography variant="subtitle1">Blog</Typography>
              <Typography variant="subtitle1">Developers</Typography>
              <Typography variant="subtitle1">Testers</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                HELP
              </Typography>
              <Typography variant="subtitle1">Accessibility</Typography>
              <Typography variant="subtitle1">Contact Us</Typography>
              <Typography variant="subtitle1">Terms</Typography>
              <Typography variant="subtitle1">Privacy Policy</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                SOCIAL
              </Typography>
              <Typography variant="subtitle1">Instagram</Typography>
              <Typography variant="subtitle1">Twitter</Typography>
              <Typography variant="subtitle1">Facebook</Typography>
              <Typography variant="subtitle1">Pinterest</Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={{ mt: 4, textAlign: "center" }}>
          &copy; 2022 Aashabul Imam All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
