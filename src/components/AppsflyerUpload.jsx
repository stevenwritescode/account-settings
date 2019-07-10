import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
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
}));

export default function AppsflyerUpload(props) {
  const classes = useStyles();

  const [uploading, setUploading] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [accountSettings, setAccountSettings] = React.useState({
    appsflyerReports: {
      lastUpdated: Moment()
        .subtract(7, "days")
        .format("MMM DD, YYYY HH:MM A"),
    },
  });

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          setUploading(false);
          return 0;
        }
        const diff = Math.random() * 30;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function mockUpload() {
    setUploading(true);
    setCompleted(0);
    setAccountSettings({ ...accountSettings, appsflyerReports: { lastUpdated: Moment().format("MMM DD, YYYY HH:MM A") } });
  }
  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <CloudUploadIcon className={classes.cloudUploadIcon} color={uploading ? "secondary" : "inherit"} />
        </Grid>
        <Grid item xs>
          {uploading && (
            <div className={classes.root}>
              <Typography variant="caption" className={classes.text}>
                Uploading report_file_Q32017.csv
              </Typography>
              <div className={classes.grow} />
              <Typography variant="caption" className={classes.text}>
                &lt;1 minute left
              </Typography>
            </div>
          )}
          {!uploading && (
            <Typography className={classes.text}>
              Drop .csv document here or{" "}
              <Link variant="body1" component="button" onClick={() => mockUpload()}>
                choose file
              </Link>{" "}
              to upload Appsflyer statistics
            </Typography>
          )}
          {uploading && <LinearProgress color="secondary" variant="determinate" value={completed} className={classes.progressBar} />}
        </Grid>
      </Grid>
    </Paper>
  );
}
