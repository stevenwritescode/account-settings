import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  checkbox: {
    margin: theme.spacing(),
  },
}));

export default function EmailField() {
  const classes = useStyles();
  const [accountSettings, setAccountSettings] = React.useState({
    commissionCharges: false,
  });

  const handleChange = name => event => {
    setAccountSettings({ ...accountSettings, [name]: !event.target.value });
  };
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel>Commission Charges</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <FormControlLabel
            control={<input type="checkbox" value="commissionCharges" onChange={handleChange("commissionCharges")} className={classes.checkbox} />}
            label="Take into account Apple commission charge (30%)"
          />
        </Grid>
      </Grid>
    </div>
  );
}
