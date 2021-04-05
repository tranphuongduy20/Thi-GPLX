import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
  Layout,
  Text,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import { styles } from "../../../style/styles";

export const BanglaiScreen = ({ navigation }) => {
  const [currentBanglai, setBanglai] = useState("A1");

  return (
    <ScrollView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Text category="h5" style={{ marginTop: "1%" }}>
          Mô tô
        </Text>
        <TouchableOpacity
          onPress={() => setBanglai("A1")}
          style={[
            currentBanglai === "A1"
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
        <TouchableOpacity
          onPress={() => setBanglai("A2")}
          style={[
            currentBanglai === "A2"
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
          onPress={() => setBanglai("A3")}
          style={[
            currentBanglai === "A3"
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
          onPress={() => setBanglai("A4")}
          style={[
            currentBanglai === "A4"
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
          onPress={() => setBanglai("B1")}
          style={[
            currentBanglai === "B1"
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
          onPress={() => setBanglai("B2")}
          style={[
            currentBanglai === "B2"
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
          onPress={() => setBanglai("C")}
          style={[
            currentBanglai === "C"
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
          onPress={() => setBanglai("D")}
          style={[
            currentBanglai === "D"
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
          onPress={() => setBanglai("E")}
          style={[
            currentBanglai === "E"
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
          onPress={() => setBanglai("F")}
          style={[
            currentBanglai === "F"
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
      </Layout>
    </ScrollView>
  );
};
