import React, { Component } from "react";
import HomeScreen from "./HolidayPackage.js";
import MainScreenNavigator from "../AttractionScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import MyTrips from "../TripScreen/index.js";
import Video from "../VideosScreen/index.js";
import Reviews from "../ReviewScreen/index.js";
import Term from "../TermsScreen/index.js";
import Faq from "../FAQScreen/index.js";
import ShareApp from "../ShareScreen/index.js";
import Support from "../HelpScreen/index.js";
import PackageDetails from "./HolidayPackageDetails.js";

import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
	MyTrips: { screen: MyTrips },
    Attractions: { screen: MainScreenNavigator },
    Videos: { screen: Video },
	Review: { screen: Reviews},
	Terms: { screen: Term },
	FAQ: { screen: Faq },
	Support: { screen: Support },
	Share: { screen: ShareApp },
	Login: { screen: ProfileScreen },
	PackageDetails:{screen:PackageDetails},

	
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
