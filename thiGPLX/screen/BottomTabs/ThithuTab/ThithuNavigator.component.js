import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThithuScreen } from "./thithu.component";
import { BaithiScreen } from "./baithi.component";

const { Navigator, Screen } = createStackNavigator();

export const ThithuNavigator = () => (
  <Navigator>
    <Screen
      name="Thi thử"
      component={ThithuScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen name="Bài thi" component={BaithiScreen} />
  </Navigator>
);
