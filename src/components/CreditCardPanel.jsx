import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CreditCard from "../components/form-inputs/CreditCard";
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
    color: "#949494",
  },
  cardPanel: {
    padding: theme.spacing(2),
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
  indicator: {
    margin: theme.spacing(),
    width: 10,
    height: 10,
    borderRadius: "50%",
    alignSelf: "flex-start",
  },
  button: {
    width: 90,
    backgroundColor: theme.palette.primary[100],
    color: "#949494",
  },
  titleSection: {
    color: "#949494",
    fontSize: 14,
    fontWeight: 600,
    display: "inline",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  buttonSection: {
    display: "flex",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
}));

export default function CreditCardPanel(props) {
  const classes = useStyles();
  const [panelState, setPanelState] = React.useState({ editing: false });
  const [accountSettings, setAccountSettings] = React.useState({
    paymentInfo: [
      {
        type: "MasterCard",
        lastFour: "4482",
        expiration: "07-2020",
      },
    ],
  });

  function handleEditCard() {
    const newPanelState = { editing: !panelState.editing };
    setPanelState(newPanelState);
  }

  function renderExistingCard() {
    return accountSettings.paymentInfo.map((card, index) => {
      return (
        <Grid key={index} container direction="row" alignItems="center" className={classes.cardPanel}>
          <div className={classes.indicator} style={{ backgroundColor: "green" }} />

          <Grid item xs>
            <Typography>
              {card.type} ending in {card.lastFour}
            </Typography>
            <Typography variant="overline">{Moment(card.expiration, "MM-YYYY").format("MM/YY")}</Typography>
          </Grid>

          <Grid item xs="auto">
            <Button
              className={classes.button}
              onClick={() => {
                handleEditCard();
              }}
            >
              Edit Card
            </Button>
          </Grid>
        </Grid>
      );
    });
  }

  function renderAddNewCard() {
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="column">
          <Grid container direction="row">
            <Typography className={classes.titleSection}>Edit Card</Typography>
          </Grid>
          <Divider />
          <CreditCard />
          <Divider />
          <div className={classes.buttonSection}>
            <div className={classes.grow} />
            <Button
              className={classes.button}
              onClick={() => {
                handleEditCard();
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="secondary">
              Save Changes
            </Button>
          </div>
        </Grid>
      </form>
    );
  }

  return <Paper className={classes.paper}>{panelState.editing ? renderAddNewCard() : renderExistingCard()}</Paper>;
}
