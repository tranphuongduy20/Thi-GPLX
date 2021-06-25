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
  TopNavigation,
  Button,
  Divider,
  ButtonGroup,
} from "@ui-kitten/components";
import Swiper from "react-native-swiper";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import { styles } from "../../../style/styles";

export const TracuuScreen = ({ navigation }) => {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Tra cứu" alignment="center" />
      <Divider />
      <Layout style={{ flexDirection: "column" }}>
        <Layout
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center",
            width: "96%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigateScreen("Biển báo")}
            style={styles.ButtonTracuuStyle}
            activeOpacity={0.5}
          >
            <Image
              source={require("../../../src/image/icons8-sign2.png")}
              style={styles.ImageIconSmallStyle}
            />
            <Layout>
              <Text style={styles.TextStyle}>Biển báo</Text>
            </Layout>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateScreen("Pháp luật")}
            style={styles.ButtonTracuuStyle}
            activeOpacity={0.5}
          >
            <Image
              source={require("../../../src/image/icons8-book.png")}
              style={styles.ImageIconSmallStyle}
            />
            <Layout>
              <Text style={styles.TextStyle}>Pháp luật</Text>
            </Layout>
          </TouchableOpacity>
        </Layout>
        <Layout
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center",
            width: "96%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigateScreen("Sa hình")}
            style={[styles.ButtonTracuuStyle, { width: "98%" }]}
            activeOpacity={0.5}
          >
            <Image
              source={require("../../../src/image/icons8-road1.png")}
              style={styles.ImageIconSmallStyle}
            />
            <Layout>
              <Text style={styles.TextStyle}>Thực hành Sa hình</Text>
            </Layout>
          </TouchableOpacity>
        </Layout>
      </Layout>
      <Layout style={{ flex: 1 }}>
        <TouchableOpacity style={styles.hintStyle} activeOpacity={0.5}>
          <Image
            source={require("../../../src/image/idea.gif")}
            style={styles.ImageIconSmallStyle}
          />
          <Layout>
            <Text style={[styles.TextStyle, { marginTop: 5 }]}>
              Mẹo thi lý thuyết
            </Text>
          </Layout>
        </TouchableOpacity>
        <Swiper style={{ borderWidth: 5, borderColor: "red" }}>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Luật
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi nhường phương tiện nào đi trước: Ưu tiên chọn đáp án
              <Text style={{ fontWeight: "bold" }}>
                “nhường cho phương tiện đường sắt”, “người đi bộ đang đi trên
                phần đường ưu tiên người đi bộ”
              </Text>{" "}
              và{" "}
              <Text style={{ fontWeight: "bold" }}>
                “xe đang đi trên đường chính”
              </Text>
              .
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi có 2 <Text style={{ fontWeight: "bold" }}>ĐÁP ÁN</Text>:
              Nếu câu hỏi có từ{" "}
              <Text style={{ fontWeight: "bold" }}>“những”</Text> hoặc{" "}
              <Text style={{ fontWeight: "bold" }}>“các”</Text>, hãy chọn luôn
              cả 2 đáp án đó
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi có 3 <Text style={{ fontWeight: "bold" }}>ĐÁP ÁN</Text>:
              2 đáp án dài, 1 ngắn. Các bạn hãy đọc đáp án ngắn trước nếu đúng
              hãy chọn luôn đáp án đấy. Còn ngược lại chọn cả đáp án là cả 2.
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Luật
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi tuân theo hiệu lệnh của ai: Chọn đáp án{" "}
              <Text style={{ fontWeight: "bold" }}>
                “hiệu lệnh của người điều khiển giao thông”
              </Text>{" "}
              và{" "}
              <Text style={{ fontWeight: "bold" }}>"biển báo giao thông"</Text>.
            </Text>
            <Text style={styles.meoStyle}>
              - Những câu hỏi liên quan đến khuân vác, vận chuyển chất gây hại,
              vật nặng: Chọn ngay{" "}
              <Text style={{ fontWeight: "bold" }}>“bị nghiêm cấm”</Text>.
            </Text>
            <Text style={styles.meoStyle}>
              - Những câu hỏi có đáp án chứa các từ:{" "}
              <Text style={{ fontWeight: "bold" }}>
                “bị nghiêm cấm”, “không được”, “UBND cấp tỉnh”, “Cơ quan, tổ
                chức, cá nhân”
              </Text>{" "}
              thì mình chọn luôn đáp án đó.
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Luật
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi về{" "}
              <Text style={{ fontWeight: "bold" }}>VÒNG XUYẾN</Text>: Nếu{" "}
              <Text style={{ fontWeight: "bold" }}>
                “có báo hiệu đi theo vòng xuyến”
              </Text>{" "}
              nhường bên tay trái,{" "}
              <Text style={{ fontWeight: "bold" }}>
                “không có dấu hiệu đi theo vòng xuyến”
              </Text>{" "}
              nhường bên tay phải.
            </Text>
            <Text style={styles.meoStyle}>
              - Các câu hỏi về{" "}
              <Text style={{ fontWeight: "bold" }}>CON SỐ</Text>: Các đáp án
              đúng 5m, 5 năm, 18 tuổi, 40 km/h, nhỏ hơn 70 km/h.
            </Text>
            <Text style={styles.meoStyle}>
              - Câu hỏi về{" "}
              <Text style={{ fontWeight: "bold" }}>VÒNG XUYẾN</Text>: Có báo
              hiệu đi theo vòng xuyến thì nhường bên tay{" "}
              <Text style={{ fontWeight: "bold" }}>TRÁI</Text>. Không có báo
              hiệu đi theo vòng xuyến thì nhường bên tay{" "}
              <Text style={{ fontWeight: "bold" }}>PHẢI</Text>.
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Biển báo
            </Text>
            <Text style={styles.meoStyle}>
              Biển báo giao nhau với đường không ưu tiên:
            </Text>
            <Text style={styles.meoStyle}>
              - Khi gặp biển báo này các bạn đang ở trên đường ưu tiên và được
              phchuyển hướng sang nơi giao nhau.
            </Text>
            <Text style={styles.meoStyle}>
              - Còn ngược lại nếu bạn gặp biển báo giao nhau với đường ưu tiên,
              bắt buộc phải chờ cho xe trên đường ưu tiên đi trước.
            </Text>
            <Text style={styles.meoStyle}>
              - Còn các biển báo khác yêu cầu mỗi học viên phải học nhận dạng và
              trải nghiệm nên các bạn phải xem hình thật kỹ.
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Sa hình
            </Text>
            <Text style={[styles.meoStyle, { fontWeight: "bold" }]}>
              Thứ tự đi phần sa hình:
            </Text>
            <Text style={styles.meoStyle}>
              - Thứ 1: Xe nào vào nơi giao nhau đi trước.
            </Text>
            <Text style={styles.meoStyle}>
              - Thứ 2: Xe ưu tiên đi trước: Quân sự, công an, cứu thương…
            </Text>
            <Text style={styles.meoStyle}>
              - Thứ 3: Xe nào đi trên đường ưu tiên thì được đi trước.
            </Text>
            <Text style={styles.meoStyle}>
              - Thứ 4: Xe bên phải không vướng đi trước.
            </Text>
            <Text style={styles.meoStyle}>
              - Thứ 5: Rẽ phải – Đi thẳng – Rẽ trái.
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              backgroundColor: "#e6e6ff",
            }}
          >
            <Text
              category="h5"
              style={{ color: "red", marginTop: 5, alignSelf: "center" }}
            >
              Phần Sa hình
            </Text>
            <Text style={styles.meoStyle}>
              <Text style={{ fontWeight: "bold" }}> XE CON LUÔN ĐÚNG</Text>: Tức
              là xe con là từ khóa, xe con luôn chấp hành đúng quy tắc giao
              thông.
            </Text>
            <Text style={styles.meoStyle}>
              - Khi đề bài hỏi xe nào được quyền đi trước, xe nào chấp hành đúng
              luật giao thông {"=>"} Chọn đáp án có xe con.
            </Text>
            <Text style={styles.meoStyle}>
              - Khi đề bài hỏi xe nào vi phạm quy tắc giao thông {"=>"} Chọn đáp
              án không có xe con (Vì xe con luôn đúng).
            </Text>
            <Text style={styles.meoStyle}>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                Có chữ Xe con (E) và “Xe xích lô”
              </Text>
              : chọn đáp án đúng luôn.
            </Text>
          </Layout>
        </Swiper>
      </Layout>
    </SafeAreaView>
  );
};
