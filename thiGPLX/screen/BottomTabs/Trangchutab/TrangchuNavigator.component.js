import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TrangchuScreen } from "./trangchu.component";
import { BanglaiScreen } from "./banglai.component";
import { OntapScreen } from "./ontap.component";
const { Navigator, Screen } = createStackNavigator();

export const TrangchuNavigator = () => (
  <Navigator>
    <Screen
      name="Trang chủ"
      component={TrangchuScreen}
      options={{ headerShown: false }}
    />
    <Screen name="Chọn loại GPLX" component={BanglaiScreen} />
    <Screen name="Câu hỏi ôn tập" component={OntapScreen} />
  </Navigator>
);
