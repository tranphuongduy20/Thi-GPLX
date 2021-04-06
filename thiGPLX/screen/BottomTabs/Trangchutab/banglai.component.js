import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { thaydoiBanglai, currentBanglai } from "../../../redux/banglaiSlice";
import { styles } from "../../../style/styles";

export const BanglaiScreen = ({ navigation }) => {
  const Selectedbanglai = useSelector(currentBanglai);
  const dispatch = useDispatch();

  return (
    <ScrollView style={{ flex: 1 }}>
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
      </Layout>
    </ScrollView>
  );
};
