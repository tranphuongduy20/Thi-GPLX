import React, { memo, useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Card } from "@ui-kitten/components";
import { styles } from "../style/styles";

const cauTraloi = Array(30).fill("E");

const renderItemHeader = (headerProps, index) => (
  <SafeAreaView {...headerProps}>
    <Text category="h6">Câu hỏi {index}</Text>
  </SafeAreaView>
);

const renderItemFooter = (footerProps, index, traLoi, ghiNhanCautraloi) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          ghiNhanCautraloi(index - 1, "A");
        }}
        style={
          traLoi == "A" ? styles.CautraloiOnclick : styles.CautraloiUnclick
        }
      >
        <Text>A.Lorem Ipsum is simply dummy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          ghiNhanCautraloi(index - 1, "B");
        }}
        style={
          traLoi == "B" ? styles.CautraloiOnclick : styles.CautraloiUnclick
        }
      >
        <Text>B.Lorem Ipsum is simply dummy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          ghiNhanCautraloi(index - 1, "C");
        }}
        style={
          traLoi == "C" ? styles.CautraloiOnclick : styles.CautraloiUnclick
        }
      >
        <Text>C.Lorem Ipsum is simply dummy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          ghiNhanCautraloi(index - 1, "D");
        }}
        style={
          traLoi == "D" ? styles.CautraloiOnclick : styles.CautraloiUnclick
        }
      >
        <Text>D.Lorem Ipsum is simply dummy</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const CauhoiForm = memo((props) => {
  return (
    <Card
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, props.index)}
      footer={(footerProps) =>
        renderItemFooter(
          footerProps,
          props.index,
          props.traLoi,
          props.ghiNhanCautraloi
        )
      }
    >
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Card>
  );
});
