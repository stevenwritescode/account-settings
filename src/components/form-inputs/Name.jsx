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

export default function NameField() {
  const classes = useStyles();
  const accountSettings = React.useState();
  const [form, setForm] = React.useState({
    name: accountSettings.name,
  });

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel>Name</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField className={classes.textField} value={form.name} onChange={handleChange("name")} variant="outlined" fullWidth placeholder="Enter name" />
        </Grid>
      </Grid>
    </div>
  );
}
