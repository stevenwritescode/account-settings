import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SettingsPanel from "../components/SettingsPanel";
import EmailField from "../components/form-inputs/Email.jsx";
import NameField from "../components/form-inputs/Name.jsx";
import PhoneField from "../components/form-inputs/Phone.jsx";
import ZipField from "../components/form-inputs/Zip.jsx";
import CommissionCharges from "../components/form-inputs/CommissionCharges.jsx";
import TrackingExpenses from "../components/form-inputs/TrackingExpenses.jsx";
import ResetPassword from "../components/form-inputs/ResetPassword.jsx";
import AppsflyerUpload from "../components/AppsflyerUpload";
import ApiCertificateUpload from "../components/ApiCertificateUpload";
import AdAccountCards from "../components/AdAccountCards";
import Moment from "moment";
import CreditCardPanel from "../components/CreditCardPanel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  margin: {
    margin: `${theme.spacing()}px 0`,
  },
}));

export default function AccountSettings() {
  const accountSettings = React.useState({
    name: "Steven Williams",
    email: "stevenwritescode@gmail.com",
    appsflyerReports: {
      lastUpdated: Moment()
        .subtract(7, "days")
        .format("MMM DD, YYYY HH:MM A"),
    },
  });
  const form = React.useState();
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">System</Typography>
          <Typography variant="caption">Configure external fees and email that will be used as default address for notifications.</Typography>
          <div className={classes.margin}>
            <Typography variant="caption">
              <Link component="button">How does Apple commission influence my statistic?</Link>
            </Typography>
            <br />
            <Typography variant="caption">
              <Link component="button">What do attribution tracking expenses mean?</Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <SettingsPanel title={"General settings"} valid={form.email !== accountSettings.email}>
            <EmailField />
            <CommissionCharges />
            <TrackingExpenses />
          </SettingsPanel>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">Appsflyer reports</Typography>
          <Typography variant="caption">Last updated {accountSettings.appsflyerReports.lastUpdated}</Typography>
        </Grid>
        <Grid item xs>
          <AppsflyerUpload />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">Search ads accounts</Typography>
          <Typography variant="caption">Manage your search ads accounts. Once an account is disabled the system will stop updating data for the account.</Typography>
          <div className={classes.margin}>
            <Typography variant="caption">
              <Link component="button">Where can I get API Certificates?</Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <AdAccountCards />
          <ApiCertificateUpload />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">Billing</Typography>
          <Typography variant="caption">Setup your billing data and payment details.</Typography>
        </Grid>
        <Grid item xs>
          <SettingsPanel title={"Billing information"} link={{ url: "/#", text: "View Billing History" }} valid={form.name !== accountSettings.name}>
            <NameField />
            <PhoneField />
            <ZipField />
          </SettingsPanel>
          <CreditCardPanel />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">Access to the system</Typography>
          <Typography variant="caption">Do not use a simple password. It must contain at least 6 characters.</Typography>
        </Grid>
        <Grid item xs>
          <SettingsPanel title={"Password"} valid={form.password && form.password.length > 5}>
            <ResetPassword />
          </SettingsPanel>
        </Grid>
      </Grid>
    </div>
  );
}
