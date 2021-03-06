import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./containers/Home.jsx";
import theme from "./styles/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/options" component={Home} />
        <Route path="/settings" component={Home} />
        <Route path="/notifications" component={Home} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
