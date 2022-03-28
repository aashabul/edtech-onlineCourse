import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";

const Service = (props) => {
  const { name, price, duration, level, img } = props.service;
  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      columns={{ lg: 12, md: 12, sm: 10, xs: 10 }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card sx={{ minWidth: 250, maxWidth: 300, maxHeight: 470 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={img} alt={name} />
          <Divider />
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ textAlign: "center", fontWeight: 600 }}
              >
                {name}
              </Typography>
              <Divider></Divider>
              <Typography gutterBottom variant="h6">
                Duration: {duration}
              </Typography>
              <Typography gutterBottom variant="h6">
                Level: {level}
              </Typography>
              <Typography variant="h6">
                Fees:{" "}
                <span style={{ color: "green", fontWeight: 600 }}>
                  $ {price}
                </span>
              </Typography>
            </Box>
            <Divider />
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Tooltip title="add to cart">
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{ background: "#de5499" }}
            >
              <AddShoppingCartIcon />
            </Button>
          </Tooltip>

          <Tooltip title="add to wishlist">
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{
                background: "#de5499",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </Tooltip>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
};

export default Service;
