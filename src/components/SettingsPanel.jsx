import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
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
    display: "inline",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  link: {
    fontSize: 14,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  buttonSection: {
    display: "flex",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
}));

export default function SettingsPanel(props) {
  const classes = useStyles();
  const { title, link, valid, children } = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper className={classes.grow}>
        <Grid container direction="column">
          <Grid container direction="row">
            <Typography className={classes.titleSection}>
              {title}
            </Typography>
            <div className={classes.grow} />
            {link && (
              <Typography className={classes.link}>
                <Link href={link.url}>
                  {link.text}
                </Link>
              </Typography>
            )}
          </Grid>
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
