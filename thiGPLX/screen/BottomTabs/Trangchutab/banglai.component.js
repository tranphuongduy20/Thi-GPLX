import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, TouchableOpacity, Image, View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { thaydoiBanglai, currentLicense } from "../../../redux/banglaiSlice";
import { styles } from "../../../style/styles";
import { useToast } from "react-native-fast-toast";
import { db, stringGenerator } from "../../../database/userData";
import Modal, {
  ModalTitle,
  ModalFooter,
  ModalContent,
  ModalButton,
  ScaleAnimation,
} from "react-native-modals";

export const BanglaiScreen = ({ navigation }) => {
  const Selectedbanglai = useSelector(currentLicense);
  const [modal, setModal] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Text category="h5" style={{ marginTop: "1%" }}>
          Mô tô
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("A1"))}
          style={[
            Selectedbanglai === "A1"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng A1</Text>
            <Text>Mô tô 2 bánh từ 50 - 175 cm3</Text>
          </Layout>
        </TouchableOpacity>
        <Text category="h5" style={{ marginTop: "1%" }}>
          Cài đặt
        </Text>
      </Layout>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
        style={{
          ...styles.ButtonTrangchuStyle,
          justifyContent: "center",
          alignSelf: "center",
          borderColor: "#e62e00",
        }}
        activeOpacity={0.5}
      >
        <Layout>
          <Text style={{ fontSize: 16, marginRight: 20 }}>
            Tạo lại câu trả lời
          </Text>
        </Layout>
        <Image
          source={require("../../../src/image/refresh.gif")}
          style={{ width: 40, height: 40, padding: 10 }}
        />
      </TouchableOpacity>
      <Modal
        onTouchOutside={() => {
          setModal(false);
        }}
        width={0.9}
        visible={modal}
        onSwipeOut={() => setModal(false)}
        modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log("onHardwareBackPress");
          setModal(false);
          return true;
        }}
        modalTitle={<ModalTitle title="Xác nhận" hasTitleBar={false} />}
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => {
              setModal(false);
            }}
            key="button-1"
          />,
        ]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Từ chối"
              bordered
              onPress={() => {
                setModal(false);
              }}
              key="button-1"
            />
            <ModalButton
              text="Đồng ý"
              bordered
              onPress={() => {
                db.transaction(
                  (tx) => {
                    tx.executeSql("DROP TABLE IF EXISTS toanBo;");
                    tx.executeSql("DROP TABLE IF EXISTS diemLiet;");
                    tx.executeSql("DROP TABLE IF EXISTS khaiNiemQuyTac;");
                    tx.executeSql("DROP TABLE IF EXISTS vanHoaDaoDuc;");
                    tx.executeSql("DROP TABLE IF EXISTS kiThuatLaiXe;");
                    tx.executeSql("DROP TABLE IF EXISTS bienBao;");
                    tx.executeSql("DROP TABLE IF EXISTS saHinh;");
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
                setModal(false);
                toast.show("Đã tạo lại các câu trả lời !", { type: "success" });
              }}
              key="button-2"
            />
          </ModalFooter>
        }
      >
        <ModalContent
          style={{
            backgroundColor: "#FFF",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 16, alignSelf: "center", marginLeft: "5%" }}>
            Bạn có đồng ý xóa toàn bộ dữ liệu câu trả lời ?
          </Text>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
};
/*
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("A2"))}
          style={[
            Selectedbanglai === "A2"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng A2</Text>
            <Text>Mô tô 2 trên 175 cm3</Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("A3"))}
          style={[
            Selectedbanglai === "A3"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng A3</Text>
            <Text>Mô tô 3 bánh, xe lam, xích lô máy</Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("A4"))}
          style={[
            Selectedbanglai === "A4"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng A4</Text>
            <Text>Máy kéo có trọng tải đến 1000kg</Text>
          </Layout>
        </TouchableOpacity>

        <Text category="h5" style={{ marginTop: "2%" }}>
          Ô tô
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("B1"))}
          style={[
            Selectedbanglai === "B1"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng B1</Text>
            <Text>Ô tô chở người đến 9 chỗ ngồi, ô ô có trọng tải ...</Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("B2"))}
          style={[
            Selectedbanglai === "B2"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng B2</Text>
            <Text>Tương tự B1 dành cho xe số sàn</Text>
          </Layout>
        </TouchableOpacity>

        <Text category="h5" style={{ marginTop: "2%" }}>
          Xe lớn
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("C"))}
          style={[
            Selectedbanglai === "C"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng C</Text>
            <Text>Ô tô, đầu kéo rơ moóc trọng tải từ 35000kg </Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("D"))}
          style={[
            Selectedbanglai === "D"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng D</Text>
            <Text>Ô tô chở người từ 10 - 30 chỗ</Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("E"))}
          style={[
            Selectedbanglai === "E"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng E</Text>
            <Text>Ô tô chở người trên 30 chỗ </Text>
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(thaydoiBanglai("F"))}
          style={[
            Selectedbanglai === "F"
              ? styles.ButtonBanglaiPressedStyle
              : styles.ButtonBanglaiStyle,
          ]}
          activeOpacity={0.5}
        >
          <Layout style={{ marginLeft: 16 }}>
            <Text style={styles.TextStyle}>Hạng F</Text>
            <Text>Các loại B1, B2, C, D, E có rơ moóc ...</Text>
          </Layout>
        </TouchableOpacity>
*/
