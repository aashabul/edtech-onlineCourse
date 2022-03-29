import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mb: 3, color: "#264143", fontWeight: 600 }}
      >
        Student Reviews
      </Typography>
      <Grid container gap={2}>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
