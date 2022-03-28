import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";
import Service from "../components/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setServices(data);
        }
      });
    return () => {
      isMount = false;
    };
  }, []);
  return (
    <Container sx={{ my: 7 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", my: 5, fontWeight: 600 }}
      >
        Available Courses
      </Typography>
      <Grid container spacing={{ md: 2, xs: 3, lg: 6 }}>
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
