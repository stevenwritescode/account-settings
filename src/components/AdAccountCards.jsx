import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    margin: `${theme.spacing()}px 0`,
    padding: theme.spacing(2),
    color: "#949494",
  },
  cloudUploadIcon: {
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  text: {
    color: "#949494",
    margin: theme.spacing(),
  },
  progressBar: {
    margin: theme.spacing(),
  },
  indicator: {
    margin: theme.spacing(),
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  button: {
    width:90,
    backgroundColor: theme.palette.primary[100],
    color: "#949494",
  },
}));

export default function AdAccountCard(props) {
  const classes = useStyles();
  const [adAccounts, setAdAccounts] = React.useState([
    { name: "Linus Torvalds", dateAdded: "05-21-2017", enabled: true },
    { name: "Les Paul", dateAdded: "06-10-2017", enabled: false },
  ]);

  function toggleAccountEnable(index) {
    const accounts = adAccounts;
    accounts[index].enabled = !accounts[index].enabled;
    setAdAccounts([...accounts]);
  }

  return adAccounts.map((account, index) => {
    return (
      <Paper className={classes.paper} key={index}>
        <Grid container direction="row" alignItems="flex-start">
          <div className={classes.indicator} style={{ backgroundColor: account.enabled ? "green" : "lightgrey" }} />

          <Grid item xs>
            <Typography>{account.name}</Typography>
            <Typography variant="caption">Added {Moment(account.dateAdded, "MM-DD-YYYY").format("MMM DD, YYYY")}</Typography>
          </Grid>

          <Grid item xs="auto">
            <Button
              className={classes.button}
              onClick={() => {
                toggleAccountEnable(index);
              }}
            >
              {account.enabled ? "Disable" : "Enable"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  });
}
