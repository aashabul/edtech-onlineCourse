import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Sponsor = () => {
  return (
    <Box sx={{ my: 7, background: "#F2EBE9" }}>
      <Container sx={{ py: 5 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "600", color: "#264143" }}
          >
            We collaborate with{" "}
            <span style={{ color: "#e99f4c" }}>
              100+ leading universites and companies
            </span>
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: "wrap",
            alignItems: "center",
            textAlign: "center",
            my: 5,
          }}
        >
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <img
              style={{ width: "50%" }}
              src="https://www.bubt.edu.bd/assets/componats/new-image/BUBT-Logo.png"
              alt=""
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <img
              style={{ width: "60%" }}
              src="https://www.buet.ac.bd/web/assets/img/BImages/logoBIRN.png"
              alt=""
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <img
              style={{ width: "60%" }}
              src="https://www.sust.edu/images/logo.png"
              alt=""
            />
          </Grid>

          <Grid item lg={3} md={3} sm={6} xs={12}>
            <img
              style={{ width: "60%" }}
              src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponsor;
