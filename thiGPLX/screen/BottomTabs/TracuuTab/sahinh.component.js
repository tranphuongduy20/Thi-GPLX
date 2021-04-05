import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";

export const SahinhScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">Sa hình Sa hình</Text>
      </Layout>
    </SafeAreaView>
  );
};
