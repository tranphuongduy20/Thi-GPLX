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
        title: "Thời gian",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => alert("Kết thúc làm bài!")}
            activeOpacity={0.5}
            style={{ marginRight: 18 }}
          >
            <Text>Nộp bài</Text>
          </TouchableOpacity>
        ),
      }}
    />
  </Navigator>
);
