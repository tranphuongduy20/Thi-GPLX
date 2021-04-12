import React, { PureComponent } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import Swiper from "react-native-web-swiper";

class QuestionList extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>Câu {parseInt(this.props.order) + 1}</Text>
      </TouchableOpacity>
    );
  }
}

export const BaithiScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Swiper
          from={0}
          minDistanceForAction={0.1}
          controlsEnabled={false}
          controlsProps={{
            dotsTouchable: true,
            prevPos: "left",
            nextPos: "right",
            nextTitle: ">",
            nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
            PrevComponent: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text
                  style={{ color: "white", fontSize: 24, fontWeight: "500" }}
                >
                  {"<"}
                </Text>
              </TouchableOpacity>
            ),
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(20,20,200,0.3)",
            }}
          >
            <Text>Slide 1</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(20,200,20,0.3)",
            }}
          >
            <Text>Slide 2</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(200,20,20,0.3)",
            }}
          >
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View>
      <ScrollBottomSheet // If you are using TS, that'll infer the renderItem `item` type
        componentType="FlatList"
        snapPoints={["35%", "74%"]}
        initialSnapIndex={1}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={Array.from({ length: 30 }).map((_, i) => String(i))}
        keyExtractor={(i) => i}
        renderItem={({ item }) => <QuestionList order={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: "#F3F4F9",
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 10,
  },
});
