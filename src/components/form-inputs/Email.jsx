import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
}));

export default function EmailField() {
  const classes = useStyles();
  const [accountSettings, setAccountSettings] = React.useState({
    email: "gregory.murynmukha@gmail.com",
  });

  const handleChange = name => event => {
    setAccountSettings({ ...accountSettings, [name]: event.target.value });
  };
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel>
            Email
          </InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField className={classes.textField} value={accountSettings.email} onChange={handleChange("email")} variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </div>
  );
}
