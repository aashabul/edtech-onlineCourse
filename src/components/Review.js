import { AccountCircle } from "@material-ui/icons";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const Review = (props) => {
  const { comment, star, name, email, image, date } = props.review;
  return (
    <Grid item md={3.8} sm={12} xs={12}>
      <Card sx={{ alignSelf: "center", minHeight: "230px" }}>
        <CardContent
          sx={{
            minHeight: "28vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <Box sx={{ alignSelf: "center" }}>
              {image ? (
                <img
                  style={{ borderRadius: "50%", width: "45px" }}
                  src={image}
                  alt="user"
                />
              ) : (
                <AccountCircle fontSize="large" />
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">{name}</Typography>
              <Typography variant="body2">{email}</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              // variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              <cite>"{comment}"</cite>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                my: 1,
              }}
            >
              <Box>
                <Rating name="simple-controlled" value={star} readOnly />
              </Box>
              <Box>
                <Typography>(Rated {star} star)</Typography>
              </Box>
            </Box>
            <Typography sx={{ textAlign: "center" }}>Date: {date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
