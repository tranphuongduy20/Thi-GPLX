import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  List,
  ListItem,
  Card,
} from "@ui-kitten/components";
import Swiper from "react-native-web-swiper";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import { styles } from "../../../style/styles";

export const OntapScreen = ({ navigation }) => {
  const renderItemHeader = (headerProps, info) => (
    <SafeAreaView {...headerProps}>
      <Text category="h6">Câu hỏi {info.index + 1}</Text>
    </SafeAreaView>
  );

  const renderItemFooter = (footerProps) => (
    <Text {...footerProps}>By Wikipedia</Text>
  );

  const renderItem = (info) => (
    <Card
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
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
  return (
    <FlatList
      data={Array.from({ length: 30 }).map((_, i) => String(i))}
      renderItem={renderItem}
      keyExtractor={(i) => i}
    />
  );
};
