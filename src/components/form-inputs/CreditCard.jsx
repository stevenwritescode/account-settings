import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: `0 ${theme.spacing(2)}px`,
    maxHeight: 60
  },
  cardNumberField: {
    margin: theme.spacing(),
    width: 140,
  },
  expirationField: {
    margin: theme.spacing(),
    width: 60,
  },
  cvcField: {
    margin: theme.spacing(),
    width: 40,
  },
}));

export default function PhoneField() {
  const classes = useStyles();
  const [accountSettings, setAccountSettings] = React.useState({
    paymentInfo: [{ type: "", cardNumber: "", lastFour: "", expiration: "", cvc: "" }],
  });

  let newPaymentInfo;

  const handleChange = name => event => {
    newPaymentInfo = [{ ...accountSettings.paymentInfo, [name]: event.target.value }];
    setAccountSettings({ ...accountSettings, paymentInfo: newPaymentInfo });
  };
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <InputLabel>Card Details</InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            className={classes.cardNumberField}
            value={accountSettings.paymentInfo.cardNumber}
            onChange={handleChange("creditCard")}
            variant="outlined"
            placeholder="0000  0000  0000  0000"
          />
          <TextField
            className={classes.expirationField}
            value={accountSettings.paymentInfo.expiration}
            onChange={handleChange("expiration")}
            variant="outlined"
            placeholder="MM / YY"
          />
          <TextField className={classes.cvcField} value={accountSettings.paymentInfo.cvc} onChange={handleChange("cvc")} variant="outlined" placeholder="CVC" />
        </Grid>
      </Grid>
    </div>
  );
}
