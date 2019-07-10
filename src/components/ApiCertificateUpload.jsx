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
}));

export default function ApiCertificateUpload(props) {
  const classes = useStyles();
  const { title, children } = props;

  const [uploading, setUploading] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [adAccounts, setAdAccounts] = React.useState([
    { name: "Joshua Moody", dateAdded: "05-21-2017", enabled: true },
    { name: "Bernard Rhodes", dateAdded: "06-10-2017", enabled: false },
  ]);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          setUploading(false);
          const newAdAccounts = [...adAccounts, { name: "Another Person", dateAdded: Moment().format("MM-DD-YYYY"), enabled: true }];
          setAdAccounts(newAdAccounts);
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
  }, [adAccounts]);

  function mockUpload() {
    setUploading(true);
    setCompleted(0);
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
                Uploading api_certificates.zip
              </Typography>
              <div className={classes.grow} />
              <Typography variant="caption" className={classes.text}>
                &lt;1 minute left
              </Typography>
            </div>
          )}
          {!uploading && (
            <Typography className={classes.text}>
              Drop archive with API Certificate here or{" "}
              <Link variant="body1" component="button" onClick={() => mockUpload()}>
                choose file
              </Link>{" "}
              to add new account
            </Typography>
          )}
          {uploading && <LinearProgress color="secondary" variant="determinate" value={completed} className={classes.progressBar} />}
        </Grid>
      </Grid>
    </Paper>
  );
}
