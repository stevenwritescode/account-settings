import React from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import TopBar from "../components/TopBar.jsx";
import AccountSettings from "./AccountSettings.jsx";

function Home(props) {
  document.body.style.backgroundColor = "#eceef3";

  const path = props.location.pathname;
  const pageTitle = () => {
    switch (props.location.pathname) {
      case "/home":
        return "Dashboard";
      case "/options":
        return "Options";
      case "/settings":
        return "Settings";
      case "/notifications":
        return "Notifications";
      default:
        return "";
    }
  };
  return (
    <div>
      <TopBar pageTitle={pageTitle()} />
      <NavBar>{path === "/settings" && <AccountSettings />}</NavBar>
    </div>
  );
}

export default withRouter(Home);
