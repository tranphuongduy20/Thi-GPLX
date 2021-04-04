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
  Button,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import Swiper from "react-native-web-swiper";
import ProgressBar from "react-native-progress/Bar";
import { styles } from "../../../style/styles";
export default function TrangchuScreen({ navigation }) {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <TopNavigation title="Trang chủ" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-book.png")}
            style={styles.ImageIconStyle}
          />
          <Layout>
            <Text style={styles.TextStyle}>Ôn tập tất cả các câu hỏi</Text>
            <ProgressBar progress={0.69} width={210} />
          </Layout>
        </TouchableOpacity>

        <Text category="h5" style={{ marginTop: "1%", marginBottom: "2%" }}>
          Ôn tập theo chủ đề
        </Text>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-fire.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Câu hỏi điểm liệt</Text>
            <ProgressBar progress={0.1} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-traffic.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Khái niệm và qui tắc</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-truck.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Nghiệp vụ vận tải</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-public.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Văn hóa và đạo đức</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-car.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Kĩ thuật lái xe</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-drill.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Cấu tạo và sửa chữa</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-sign.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Biển báo</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/icons8-road.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Sa hình</Text>
            <ProgressBar progress={0.3} width={210} />
          </Layout>
        </TouchableOpacity>
      </Layout>
    </ScrollView>
  );
}