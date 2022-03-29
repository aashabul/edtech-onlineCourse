import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
      <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          color: "#de5499",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ width: "90vw" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            // noWrap
            // component="div"
            // sx={{ display: { xs: "block", sm: "block" } }}
          >
            Ed-Tech
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                color: "#de5499",
              },
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#de5499",
                marginRight: 20,
              }}
            >
              <Typography variant="h6">Home</Typography>
            </NavLink>
            <NavLink
              to="/service"
              style={{
                textDecoration: "none",
                color: "#de5499",
                marginRight: 20,
              }}
            >
              <Typography variant="h6">Service</Typography>
            </NavLink>

            {/* <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "#de5499",
                marginRight: 15,
              }}
            >
              <Typography variant="h6">Dashboard</Typography>
            </NavLink> */}
            {user.email ? (
              <Button
                onClick={handleSignOut}
                sx={{
                  color: "#de5499",
                  textTransform: "none",
                }}
              >
                <Typography variant="h6">Logout</Typography>
              </Button>
            ) : (
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#de5499",
                  marginRight: 20,
                }}
              >
                <Typography variant="h6">Login</Typography>
              </NavLink>
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user.photoURL ? (
                <img
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    marginRight: 10,
                  }}
                  src={user.photoURL}
                  alt="user"
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            {user.email && (
              <Typography sx={{ fontSize: "18px", color: "#264143" }}>
                {user.displayName}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
