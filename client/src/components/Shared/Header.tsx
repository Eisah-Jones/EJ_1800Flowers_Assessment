import React, { Component } from "react";
import logo from '../../assets/flowers_logo.png';
import "../../stylesheets/components/Shared/Header.css";

class SharedHeader extends Component {
  render() {
    return (
      <div id={"shared-header"} className={"noselect"}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id={"user-type-badge"}>{"Admin"}</h1>
      </div>
    );
  }
}

export default SharedHeader;