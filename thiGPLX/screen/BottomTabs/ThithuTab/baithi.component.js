import React, {
  PureComponent,
  useRef,
  useState,
  useEffect,
  useCallback,
  memo,
} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { Select, SelectItem, Button } from "@ui-kitten/components";
import { TaoBaithi } from "../../../function/taoBaithi.component";
import * as EvaIcon from "../../../src/icon/EvaIcon";

const QuestionList = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Text> Câu {parseInt(props.order) + 1}</Text>
      </TouchableOpacity>
    </View>
  );
};
memo(QuestionList);
export const BaithiScreen = () => {
  const trigger = useRef(null);
  const [jump, setJump] = useState(1);
  const NextQuestion = (index) => {
    if (index > 1) {
      trigger.current.scrollBy(jump >= index ? -(jump - index) : index - jump);
      setJump(index);
    } else {
      trigger.current.scrollBy(-(jump - 1));
      setJump(1);
    }
  };
  const TaodanhsachCauhoi = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState();
    if (props.loaiBanglai == "A1") {
      return (
        <Select
          selectedIndex={selectedIndex}
          placeholder="Chọn câu hỏi"
          onSelect={(index) => setSelectedIndex(index)}
        >
          <SelectItem title="Câu 1" onPress={() => NextQuestion(1)} />
          <SelectItem title="Câu 2" onPress={() => NextQuestion(2)} />
          <SelectItem title="Câu 3" onPress={() => NextQuestion(3)} />
          <SelectItem title="Câu 4" onPress={() => NextQuestion(4)} />
          <SelectItem title="Câu 5" onPress={() => NextQuestion(5)} />
          <SelectItem title="Câu 6" onPress={() => NextQuestion(6)} />
          <SelectItem title="Câu 7" onPress={() => NextQuestion(7)} />
          <SelectItem title="Câu 8" onPress={() => NextQuestion(8)} />
          <SelectItem title="Câu 9" onPress={() => NextQuestion(9)} />
          <SelectItem title="Câu 10" onPress={() => NextQuestion(10)} />
          <SelectItem title="Câu 11" onPress={() => NextQuestion(11)} />
          <SelectItem title="Câu 12" onPress={() => NextQuestion(12)} />
          <SelectItem title="Câu 13" onPress={() => NextQuestion(13)} />
          <SelectItem title="Câu 14" onPress={() => NextQuestion(14)} />
          <SelectItem title="Câu 15" onPress={() => NextQuestion(15)} />
          <SelectItem title="Câu 16" onPress={() => NextQuestion(16)} />
          <SelectItem title="Câu 17" onPress={() => NextQuestion(17)} />
          <SelectItem title="Câu 18" onPress={() => NextQuestion(18)} />
          <SelectItem title="Câu 19" onPress={() => NextQuestion(19)} />
          <SelectItem title="Câu 20" onPress={() => NextQuestion(20)} />
          <SelectItem title="Câu 21" onPress={() => NextQuestion(21)} />
          <SelectItem title="Câu 22" onPress={() => NextQuestion(22)} />
          <SelectItem title="Câu 23" onPress={() => NextQuestion(23)} />
          <SelectItem title="Câu 24" onPress={() => NextQuestion(24)} />
          <SelectItem title="Câu 25" onPress={() => NextQuestion(25)} />
          <SelectItem title="Câu 26" onPress={() => NextQuestion(26)} />
          <SelectItem title="Câu 27" onPress={() => NextQuestion(27)} />
          <SelectItem title="Câu 28" onPress={() => NextQuestion(28)} />
          <SelectItem title="Câu 29" onPress={() => NextQuestion(29)} />
          <SelectItem title="Câu 30" onPress={() => NextQuestion(30)} />
        </Select>
      );
    }
  };
  return (
    <View style={styles.container}>
      <TaodanhsachCauhoi loaiBanglai={"A1"} style={{ width: "100%" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Button
          accessoryLeft={EvaIcon.ArrowBackIcon}
          onPress={() => NextQuestion(jump > 1 ? jump - 1 : jump)}
          style={{ width: "1%", height: "1%" }}
        ></Button>
        <TaoBaithi loaiBanglai={"A1"} jump={jump} trigger={trigger} />
        <Button
          accessoryLeft={EvaIcon.ArrowForwardIcon}
          onPress={() => NextQuestion(jump < 30 ? jump + 1 : jump)}
          style={{ width: "1%", height: "1%" }}
        ></Button>
      </View>
    </View>
  );
};
/*      <ScrollBottomSheet
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
        extraData={jump}
        contentContainerStyle={styles.contentContainerStyle}
      />*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 5,
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
    padding: 15,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 5,
  },
});
