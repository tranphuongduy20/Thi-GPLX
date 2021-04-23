import React from "react";
import { TabBar, Tab, Layout, Text } from "@ui-kitten/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as EvaIcon from "../../../../src/icon/EvaIcon";
import { BienbaoCamScreen } from "./bienbaoCam.component";
import { BienbaoHieulenhScreen } from "./bienbaoHieulenh.component";
import { BienbaoNguyhiemScreen } from "./bienbaoNguyhiem.component";
const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="Biển báo cấm" />
    <Tab title="Biển báo nguy hiểm" />
    <Tab title="Biển báo hiệu lệnh" />
  </TabBar>
);

export const BienbaoNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="Biển báo cấm" component={BienbaoCamScreen} />
    <Screen name="Biển báo nguy hiểm" component={BienbaoNguyhiemScreen} />
    <Screen name="Biển báo hiệu lệnh" component={BienbaoHieulenhScreen} />
  </Navigator>
);
