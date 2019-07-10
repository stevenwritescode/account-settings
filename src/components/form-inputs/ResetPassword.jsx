import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(),
  },
}));

export default function ResetPassword() {
  const classes = useStyles();
  const [form, setForm] = React.useState({ showPassword: [false, false, false] });

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  const handleClickShowPassword = index => {
    const showPassword = form.showPassword;
    showPassword[index] = !showPassword[index];
    setForm({ ...form, showPassword });
  };

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel>Current Password</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            placeholder="Enter password"
            type={form.showPassword[0] ? "text" : "password"}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="Toggle password visibility" disableRipple onClick={() => handleClickShowPassword(0)}>
                    {form.showPassword[0] ? <VisibilityOff style={{ width: 16 }} /> : <Visibility style={{ width: 16 }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          {form.password && form.password !== "bacon" && <Typography variant="caption" color="error">The password you've entered is incorrect.</Typography>}
        </Grid>
        <Grid item xs={3}>
          <InputLabel>New Password</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            placeholder="At least 6 characters"
            type={form.showPassword[1] ? "text" : "password"}
            onChange={handleChange("newPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="Toggle password visibility" disableRipple onClick={() => handleClickShowPassword(1)}>
                    {form.showPassword[1] ? <VisibilityOff style={{ width: 16 }} /> : <Visibility style={{ width: 16 }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />{" "}
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Confirm Password</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            placeholder="Re-enter the password above"
            type={form.showPassword[2] ? "text" : "password"}
            onChange={handleChange("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="Toggle password visibility" disableRipple onClick={() => handleClickShowPassword(2)}>
                    {form.showPassword[2] ? <VisibilityOff style={{ width: 16 }} /> : <Visibility style={{ width: 16 }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}
