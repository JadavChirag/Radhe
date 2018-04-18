import React, { Component } from "react";
import HelpSupport from "./HelpSupport.js";
import HelpDetails from "./HelpDetailsScreen.js";

import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    HelpSupport: { screen: HelpSupport },
    HelpDetails: { screen: HelpDetails }
  },
  {
    initialRouteName: "HelpSupport"
  }
));
