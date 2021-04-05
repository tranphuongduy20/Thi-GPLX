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

const data = new Array(8).fill({
  title: "tem",
});

export const OntapScreen = ({ navigation }) => {
  const [currentChude, setcurrentChude] = useState(0);
  const renderItemHeader = (headerProps, info) => (
    <SafeAreaView {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
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
  const BackAction = () => (
    <TopNavigationAction
      icon={EvaIcon.BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  const getHeader = () => (
    <TopNavigation
      title="Câu hỏi ôn tập"
      alignment="left"
      accessoryLeft={BackAction}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      ListHeaderComponent={getHeader}
    />
  );
};
