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
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import { styles } from "../../../style/styles";

export const ThithuScreen = ({ navigation }) => {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  const renderRightActions = () => (
    <TopNavigationAction
      icon={EvaIcon.ListIcon}
      onPress={() => navigateScreen("Chọn loại GPLX")}
    />
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <TopNavigation
        title="Thi thử"
        alignment="center"
        accessoryRight={renderRightActions}
      />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigateScreen("Bài thi")}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Icon name="shuffle" />
          <Text style={styles.TextStyle}>Tạo đề ngẫu nhiên</Text>
        </TouchableOpacity>
      </Layout>
    </ScrollView>
  );
};
