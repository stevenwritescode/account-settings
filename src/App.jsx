import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./containers/Home.jsx";
import theme from "./styles/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/options" component={Home} />
          <Route path="/settings" component={Home} />
          <Route path="/notifications" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
