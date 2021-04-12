import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  Layout,
  Text,
  Divider,
  TopNavigation,
  Icon,
} from "@ui-kitten/components";
import { styles } from "../../../style/styles";

export const ThithuScreen = ({ navigation }) => {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Thi thử" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigateScreen("Bài thi")}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-random1.png")}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}>Tạo đề ngẫu nhiên</Text>
        </TouchableOpacity>
      </Layout>
    </SafeAreaView>
  );
};
