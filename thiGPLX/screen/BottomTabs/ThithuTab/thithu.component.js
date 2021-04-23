import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Image } from "react-native";
import {
  Layout,
  Text,
  Divider,
  TopNavigation,
  Icon,
} from "@ui-kitten/components";
import Spinner from "react-native-loading-spinner-overlay";
import { styles } from "../../../style/styles";

export const ThithuScreen = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  useEffect(() => {
    const interval1 = setInterval(() => {
      if (spinner != false) {
        setSpinner((spinner) => !spinner);
        navigateScreen("Bài thi");
      }
    }, 1000);
    return () => {
      clearInterval(interval1);
    };
  }, [spinner]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Thi thử" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Spinner
          visible={spinner}
          textContent={"Đang tạo bài thi..."}
          textStyle={{ color: "#FFF" }}
        />
        <TouchableOpacity
          onPress={() => {
            setSpinner((spinner) => true);
            /*navigateScreen("Bài thi");*/
          }}
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
