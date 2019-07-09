import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme();

const palette = {
  primary: grey,
  secondary: blue,
};

const globalFont = {
  fontFamily: '"Open Sans"',
  lineHeight: "normal",
};

const typography = {
  h4: {
    ...globalFont,
    fontSize: 20,
    fontWeight: 600,
    color: "#6a6a6a",
  },
  h6: {
    ...globalFont,
    fontSize: 14,
    fontWeight: 600,
    color: "#565656",
  },
  caption: { ...globalFont, color: "#939393" },
};

const overrides = {
  ...theme.overrides,
  MuiButton: {
    root: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  MuiCheckbox: {
    root: {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  MuiDrawer: {
    paper: {
      backgroundColor: blue[700],
    },
  },
  MuiFormControlLabel: {
    label: {
      fontSize: 12,
      color: "#939393",
    },
  },
  MuiInputLabel: {
    root: {
      marginLeft: theme.spacing(2),
      fontSize: 12,
      fontWeight: 600,
      color: "#AFAFAF",
    },
  },
  MuiLink: {
    root:{
        color: palette.secondary[700]
    }
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
  MuiPaper: {
    elevation1: { boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.02), 0px 1px 1px 0px rgba(0,0,0,0.02), 0px 2px 1px -1px rgba(0,0,0,0.02)" },
  },
  MuiOutlinedInput: {
    input: {
      fontSize: 12,
      color: "#808080",
      padding: theme.spacing(0.75),
    },
  },
  MuiToolbar: {
    root: {
      backgroundColor: "#fff",
      color: "#777",
    },
  },
};

const props = {
  MuiAppBar: {
    elevation: 1,
  },
  MuiTextField: {
    variant: "outlined",
  },
  MuiCheckbox: {
    disableRipple: true,
  },
};

export default createMuiTheme({ palette, typography, overrides, props });
