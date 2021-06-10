import React from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Divider,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import ProgressBar from "react-native-progress/Bar";
import { styles } from "../../../style/styles";

export const TrangchuScreen = ({ navigation }) => {
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
        title="Trang chủ"
        alignment="center"
        accessoryRight={renderRightActions}
      />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigateScreen("Câu hỏi ôn tập")}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/book.gif")}
            style={styles.ImageIconStyle}
          />
          <Layout>
            <Text style={styles.TextStyle}>Ôn tập tất cả các câu hỏi</Text>
            <ProgressBar progress={0.69} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <Text category="h5" style={{ marginTop: "1%", marginBottom: "2%" }}>
          Ôn tập theo chủ đề
        </Text>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-fire2.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Câu hỏi điểm liệt</Text>
            <ProgressBar progress={0.1} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/scroll.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Khái niệm và qui tắc</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-truck2.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Nghiệp vụ vận tải</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-public1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Văn hóa và đạo đức</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-car2.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Kĩ thuật lái xe</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-drill2.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Cấu tạo và sửa chữa</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-sign1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Biển báo</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-road1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Sa hình</Text>
            <ProgressBar progress={0.3} color="#8c1aff" />
          </Layout>
        </TouchableOpacity>
      </Layout>
    </ScrollView>
  );
};
