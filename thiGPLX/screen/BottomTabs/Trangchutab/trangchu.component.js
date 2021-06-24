import React, { useEffect } from "react";
import { TouchableOpacity, Image, ScrollView, View } from "react-native";
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
import { useSelector, useDispatch } from "react-redux";
import { currentLicense } from "../../../redux/banglaiSlice";
import { chonPhanOnTap } from "../../../redux/ontapSlice";
import { db, stringGenerator } from "../../../database/userData";

export const TrangchuScreen = ({ navigation }) => {
  const navigateScreen = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  const Selectedbanglai = useSelector(currentLicense);
  const dispatch = useDispatch();
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists toanBo (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists diemLiet (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists khaiNiemQuyTac (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists vanHoaDaoDuc (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists kiThuatLaiXe (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists bienBao (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "create table if not exists saHinh (id integer, answer text,right text, UNIQUE(id));"
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO toanBo (id,answer,right) VALUES " +
            stringGenerator(200)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO diemLiet (id,answer,right) VALUES " +
            stringGenerator(20)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO khaiNiemQuyTac (id,answer,right) VALUES " +
            stringGenerator(83)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO vanHoaDaoDuc (id,answer,right) VALUES " +
            stringGenerator(5)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO kiThuatLaiXe (id,answer,right) VALUES " +
            stringGenerator(12)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO bienBao (id,answer,right) VALUES " +
            stringGenerator(65)
        );
        tx.executeSql(
          "INSERT OR IGNORE INTO saHinh (id,answer,right) VALUES " +
            stringGenerator(35)
        );
      },
      (e) => console.log("Error: " + e)
    );
    console.log("Rerendered !");
  }, []);
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
          onPress={() => {
            dispatch(chonPhanOnTap("toanBo"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/book.gif")}
            style={styles.ImageIconStyle}
          />
          <Layout>
            <Text style={styles.TextStyle}>Ôn tập tất cả các câu hỏi</Text>
            <ProgressBar progress={1.0} color="#8c1aff" />
            <Text>200/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        <Text category="h5" style={{ marginTop: "1%", marginBottom: "2%" }}>
          Ôn tập theo chủ đề
        </Text>

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("diemLiet"));
            navigateScreen("Câu hỏi ôn tập");
          }}
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
            <Text>20/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("khaiNiemQuyTac"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/scroll.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Khái niệm và qui tắc</Text>
            <ProgressBar progress={0.5} color="#8c1aff" />
            <Text>83/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        {Selectedbanglai != "A1" && (
          <TouchableOpacity
            onPress={() => {
              dispatch(chonPhanOnTap("nghiepVuVanTai"));
              navigateScreen("nghiepVuVanTai");
            }}
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
        )}

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("vanHoaDaoDuc"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.415}
        >
          <Image
            source={require("../../../src/image/icons8-public1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Văn hóa và đạo đức</Text>
            <ProgressBar progress={0.025} color="#8c1aff" />
            <Text>5/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("kiThuatLaiXe"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-car2.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Kĩ thuật lái xe</Text>
            <ProgressBar progress={0.06} color="#8c1aff" />
            <Text>12/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        {Selectedbanglai != "A1" && (
          <TouchableOpacity
            onPress={() => {
              dispatch(chonPhanOnTap("cauTaoSuaChua"));
              navigateScreen("Câu hỏi ôn tập");
            }}
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
        )}

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("bienBao"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-sign1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Biển báo</Text>
            <ProgressBar progress={0.325} color="#8c1aff" />
            <Text>65/200 câu</Text>
          </Layout>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(chonPhanOnTap("saHinh"));
            navigateScreen("Câu hỏi ôn tập");
          }}
          style={styles.ButtonTrangchuStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../../src/image/icons8-road1.png")}
            style={styles.ImageIconStyle}
          />

          <Layout>
            <Text style={styles.TextStyle}>Sa hình</Text>
            <ProgressBar progress={0.175} color="#8c1aff" />
            <Text>35/200 câu</Text>
          </Layout>
        </TouchableOpacity>
      </Layout>
    </ScrollView>
  );
};
