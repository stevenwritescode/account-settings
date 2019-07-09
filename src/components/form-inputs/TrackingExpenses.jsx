import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  caption: {
    fontSize: 12,
    color: "#949494",
    display: "inline",
    margin: theme.spacing(),
  },
}));

export default function TrackingExpensesField() {
  const classes = useStyles();
  const [accountSettings, setAccountSettings] = React.useState({
    trackingExpenses: "0.00",
  });

  const handleChange = name => event => {
    setAccountSettings({ ...accountSettings, [name]: event.target.value });
  };
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel htmlFor="tracking-expenses">Tracking Expenses</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="outlined-adornment-amount"
            className={classes.textField}
            variant="outlined"
            value={accountSettings.trackingExpenses}
            onChange={handleChange("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span style={{ fontSize: 10 }}>$</span>
                </InputAdornment>
              ),
            }}
          />

          <Typography className={classes.caption}>per each install</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
