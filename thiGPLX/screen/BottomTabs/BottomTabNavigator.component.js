import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import * as EvaIcon from "../../src/icon/EvaIcon";
const { Navigator, Screen } = createBottomTabNavigator();

import ThithuScreen from "./ThithuTab/thithu.component";
import { TracuuNavigator } from "./TracuuTab/TracuuNavigator.component";
import { TrangchuNavigator } from "./Trangchutab/TrangchuNavigator.component";

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Trang chủ" icon={EvaIcon.HomeIcon} />
    <BottomNavigationTab title="Thi thử" icon={EvaIcon.TestIcon} />
    <BottomNavigationTab title="Tra cứu" icon={EvaIcon.SearchIcon} />
  </BottomNavigation>
);

export const BottomTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="TrangchuNavigator" component={TrangchuNavigator} />
    <Screen name="ThithuScreen" component={ThithuScreen} />
    <Screen name="TracuuNavigator" component={TracuuNavigator} />
  </Navigator>
);
