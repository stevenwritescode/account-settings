import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme();

const palette = {
  primary: grey,
  secondary: blue,
};

const overrides = {
  ...theme.overrides,
  MuiDrawer: {
    paper: {
      backgroundColor: blue[700],
    },
  },
  MuiList: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  MuiListItem: {
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing(),
      justifyContent: "center",
    },
    gutters: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  MuiListItemIcon: {
    root: {
      justifyContent: "center",
      color: "#fff",
    },
  },
  MuiToolbar: {
    root: {
      backgroundColor: "#fff",
      color: "#777",
    },
  },
};

export default createMuiTheme({ palette, overrides });
