import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import {
  Layout,
  Text,
  TopNavigation,
  Button,
  Divider,
  ButtonGroup,
} from "@ui-kitten/components";
import Swiper from "react-native-swiper";
import * as EvaIcon from "../../../src/icon/EvaIcon";

export const TracuuScreen = ({ navigation }) => {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Tra cứu" alignment="center" />
      <Divider />
      <Layout style={{ alignItems: "center" }}>
        <ButtonGroup
          size="giant"
          appearance="outline"
          style={{ width: "100%" }}
        >
          <Button
            accessoryLeft={EvaIcon.CarIcon}
            onPress={() => navigateScreen("Sa hình")}
            style={{ width: "33.3%" }}
          >
            Sa hình
          </Button>
          <Button
            accessoryLeft={EvaIcon.SignIcon}
            onPress={() => navigateScreen("Biển báo")}
            style={{ width: "33.3%" }}
          >
            Biển báo
          </Button>
          <Button
            accessoryLeft={EvaIcon.BookIcon}
            onPress={() => navigateScreen("Pháp luật")}
            style={{ width: "33.3%" }}
          >
            Pháp luật
          </Button>
        </ButtonGroup>
      </Layout>
      <Layout style={{ flex: 1 }}>
        <Swiper autoplay={true} autoplayTimeout={6}>
          <Layout
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(20,20,200,0.3)",
            }}
          >
            <Text>Mẹo thứ nhất: .....</Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(20,200,20,0.3)",
            }}
          >
            <Text>Mẹo thứ hai: ....</Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(200,20,20,0.3)",
            }}
          >
            <Text>Mẹo thứ 3: ....</Text>
          </Layout>
        </Swiper>
      </Layout>
    </SafeAreaView>
  );
};
