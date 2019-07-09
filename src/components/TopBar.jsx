import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    height: 64,
    padding: `0 ${theme.spacing(3)}px 0 0`,
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    left: 1,
  },
  searchButton: {
    backgroundColor: theme.palette.secondary[300],
    width: 64,
    height: 64,
    borderRadius: 0,
    marginRight: theme.spacing(3),
    color: "#FFF",
    "&:hover": { backgroundColor: theme.palette.secondary[800] },
  },
  pageTitle: { fontWeight: 400 },
}));

export default function TopBar(props) {
  const classes = useStyles();
  const { pageTitle } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Button color="secondary" className={classes.searchButton}>
          <SearchIcon />
        </Button>
        <Typography variant="h4" noWrap className={classes.pageTitle}>
          {pageTitle && pageTitle}
        </Typography>
        <div className={classes.grow} />
        <Button variant="contained" color="secondary" onClick={() => alert("You are now logged out.")}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
