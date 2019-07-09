import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SettingsPanel from "../components/SettingsPanel";
import EmailField from "../components/form-inputs/Email.jsx";
import CommissionCharges from "../components/form-inputs/CommissionCharges.jsx";
import TrackingExpenses from "../components/form-inputs/TrackingExpenses.jsx";
import AppsflyerUpload from "../components/AppsflyerUpload";
import Moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

export default function AccountSettings() {
  const [accountSettings, setAccountSettings] = React.useState({
    appsflyerReports: {
      lastUpdated: Moment()
        .subtract("7,d")
        .format("MMM DD, YYYY HH:MM A"),
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="h6">System</Typography>
          <Typography variant="caption">Configure external fees and email that will be used as default address for notifications.</Typography>
        </Grid>
        <Grid item xs>
          <SettingsPanel title={"General settings"}>
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
    </div>
  );
}
