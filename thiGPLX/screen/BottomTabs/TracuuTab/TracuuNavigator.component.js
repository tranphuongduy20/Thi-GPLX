import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SahinhScreen } from "./sahinh.component";
import { BienbaoScreen } from "./bienbao.component";
import { LuatScreen } from "./luat.component";
import { TracuuScreen } from "./tracuu.component";

const { Navigator, Screen } = createStackNavigator();

export const TracuuNavigator = () => (
  <Navigator>
    <Screen
      name="Tra cứu"
      component={TracuuScreen}
      options={{ headerShown: false }}
    />
    <Screen name="Sa hình" component={SahinhScreen} />
    <Screen name="Biển báo" component={BienbaoScreen} />
    <Screen name="Pháp luật" component={LuatScreen} />
  </Navigator>
);
