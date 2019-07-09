import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import OptionsIcon from "@material-ui/icons/Tune";
import AccountIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

const drawerWidth = 64;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function NavBar(props) {
  const classes = useStyles();
  const { children } = props;
  const navLinks = [
    { route: "/home", text: "Dashboard", icon: <DashboardIcon /> },
    { route: "/options", text: "Options", icon: <OptionsIcon /> },
    { route: "/settings", text: "Settings", icon: <AccountIcon /> },
    { route: "/notifications", text: "Notifications", icon: <NotificationsIcon /> },
  ];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <MenuList>
          {navLinks.map((link, index) => (
            <NavLink to={link.route} key={index}>
              <ListItem button>
                <ListItemIcon>{link.icon}</ListItemIcon>
              </ListItem>
            </NavLink>
          ))}
        </MenuList>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
