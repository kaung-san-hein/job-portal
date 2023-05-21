import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { routes } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";

const drawerWidth = 240;

const NavigationMenu = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "end" }}>
      <CloseIcon
        sx={{ margin: "5px", fontSize: "24px", cursor: "pointer" }}
        onClick={handleDrawerToggle}
      />
      <List>
        {routes.map((route, index) =>
          isAuthenticated &&
          (route.path === "/register" || route.path === "/login") ? null : (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={route.path}
            >
              <ListItem disablePadding>
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemText sx={{ color: "#000" }} primary={route.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
        {isAuthenticated && (
          <ListItem disablePadding>
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--primary-color)",
                borderRadius: "8px",
                m: 2,
              }}
              onClick={(e) => {
                handleDrawerToggle();
                e.preventDefault();
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="inherit"
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: "1px solid #E4E2E0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { sm: "block", fontWeight: "bold" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              JOB PORTAL
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {routes.map((route, index) =>
              isAuthenticated &&
              (route.path === "/register" || route.path === "/login") ? null : (
                <Link key={index} to={route.path}>
                  <Button
                    sx={{
                      color: "#000",
                      mr: 1,
                      pl: 2,
                      pr: 2,
                      pt: 3,
                      pb: 3,
                      borderRadius: 0,
                      borderBottom:
                        route.path === location.pathname
                          ? "2px solid var(--primary-color)"
                          : "",
                    }}
                  >
                    {route.name}
                  </Button>
                </Link>
              )
            )}
            {isAuthenticated && (
              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--primary-color)",
                  borderRadius: "8px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(logout());
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ mt: 3, width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default NavigationMenu;
