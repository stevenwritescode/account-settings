import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: 64,
    padding: "0",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  searchButton: {
    backgroundColor: theme.palette.secondary[200],
    width: 64,
    height: 64,
    borderRadius: 0,
    marginRight: theme.spacing(3),
  },
}));

export default function TopBar(props) {
  const classes = useStyles();
  const { pageTitle } = props;
  console.log(pageTitle);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.searchButton}>
          <SearchIcon />
        </Button>
        <Typography variant="h6" noWrap>
          {pageTitle && pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
