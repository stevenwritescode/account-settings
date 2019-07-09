import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  titleSection: {
    color: "#949494",
    fontSize: 14,
    fontWeight: 600,
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
  },
  buttonSection: {
    display: "flex",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
}));

export default function SettingsPanel(props) {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper className={classes.grow}>
        <Grid container direction="column">
          <Typography className={classes.titleSection}>{title}</Typography>
          <Divider />
          {children}
          <Divider />
          <div className={classes.buttonSection}>
            <div className={classes.grow} />
            <Button variant="contained" color="secondary">
              Save Changes
            </Button>
          </div>
        </Grid>
      </Paper>
    </form>
  );
}
