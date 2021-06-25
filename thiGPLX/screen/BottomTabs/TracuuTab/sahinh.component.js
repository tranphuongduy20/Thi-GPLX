import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Text, Card, Button } from "@ui-kitten/components";
import { styles } from "../../../style/styles";
import * as EvaIcon from "../../../src/icon/EvaIcon";
const Header = (props) => (
  <View {...props}>
    <Text category="h6" style={{ fontWeight: "bold" }}>
      Các bước thi thực hành lái xe máy A1
    </Text>
    <Text category="s1">
      Phần này có các mục: Đi vòng số 8 , đường thẳng, zích zắc và đường mấp mô
    </Text>
    <Text category="s1">
      * Lưu ý: Bạn nên nổ sẵng xe máy và để số 3, xong xếp hàng đợi đến lượt
      mình thi nhé
    </Text>
  </View>
);

const Footer = (props) => (
  <View>
    <Text
      category="s1"
      style={[
        styles.meoStyle,
        { marginLeft: "8%", marginRight: "6%", fontWeight: "bold" },
      ]}
    >
      – Hình 01: xuất phát đi hình số 8
    </Text>
    <Text
      category="s1"
      style={[styles.meoStyle, { marginLeft: "8%", marginRight: "6%" }]}
    >
      Trên hình bạn cũng thấy rất rõ ràng điểm xuất phát và hướng mui tên hướng
      dẫn bạn đi đủ thành hình số 08. Phần bài thi này yêu cầu bạn đi tốc độ vừa
      phải, vòng tay lái dẻo, cà phanh cho tốt để không đi ra ngoài vạch.
    </Text>
    <Text
      category="s1"
      style={[
        styles.meoStyle,
        { marginLeft: "8%", marginRight: "6%", fontWeight: "bold" },
      ]}
    >
      – Hình 02: Đi đường thẳng
    </Text>
    <Text
      category="s1"
      style={[styles.meoStyle, { marginLeft: "8%", marginRight: "6%" }]}
    >
      Cứ giữ thẳng lái và đi qua
    </Text>
    <Text
      category="s1"
      style={[
        styles.meoStyle,
        { marginLeft: "8%", marginRight: "6%", fontWeight: "bold" },
      ]}
    >
      – Hình 03: Đường đi vòng vèo
    </Text>
    <Text
      category="s1"
      style={[styles.meoStyle, { marginLeft: "8%", marginRight: "6%" }]}
    >
      Gọi là đường vòng vèo nhưng nó không quanh co chút nào, ứng viên chỉ cần
      hơi lượn tay lái theo vạch vẽ sẵn là được. Hình này khi đi bạn cần chú ý
      về tốc độ.
    </Text>
    <Text
      category="s1"
      style={[
        styles.meoStyle,
        { marginLeft: "8%", marginRight: "6%", fontWeight: "bold" },
      ]}
    >
      – Hình 04: Đường thẳng gồ gề
    </Text>
    <Text
      category="s1"
      style={[styles.meoStyle, { marginLeft: "8%", marginRight: "6%" }]}
    >
      Đi xong hình một các bạn đi tiếp luôn hình 02, là đường thẳng ghồ ghề.
      Hình này thì dễ hơn, chỉ cần giữ vững tay lái thẳng lái là đi qua dễ dàng.
    </Text>
  </View>
);

export const TurtorialCard = () => (
  <React.Fragment>
    <Card header={Header} footer={Footer}>
      <Image
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").width / 2,
        }}
        resizeMode="contain"
        source={{
          uri: "https://i.imgur.com/jCEVUYJ.jpg",
        }}
      />
    </Card>
  </React.Fragment>
);

export const SahinhScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TurtorialCard />
      </ScrollView>
    </SafeAreaView>
  );
};
