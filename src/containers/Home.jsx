import React from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import TopBar from "../components/TopBar.jsx";
import AccountSettings from "./AccountSettings.jsx";

function Home(props) {
  console.log(props);
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
  console.log(props.location.pathname);
  return (
    <div>
      <TopBar pageTitle={pageTitle()} />
      <NavBar>{path === "/settings" && <AccountSettings />}</NavBar>
    </div>
  );
}

export default withRouter(Home);
