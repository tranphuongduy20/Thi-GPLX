import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TrangchuScreen } from "./trangchu.component";
import { BanglaiScreen } from "./banglai.component";
import { OntapScreen } from "./ontap.component";
const { Navigator, Screen } = createStackNavigator();

export const TrangchuNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="TrangchuScreen" component={TrangchuScreen} />
    <Screen name="BanglaiScreen" component={BanglaiScreen} />
    <Screen name="OntapScreen" component={OntapScreen} />
  </Navigator>
);
