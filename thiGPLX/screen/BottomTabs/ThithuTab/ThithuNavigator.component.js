import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "@ui-kitten/components";
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
    <Screen
      name="Bài thi"
      component={BaithiScreen}
      options={{
        headerTitleAlign: "center",
        title: "Bài làm",
      }}
    />
  </Navigator>
);
