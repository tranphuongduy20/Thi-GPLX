import React, {
  useRef,
  useState,
  memo,
  useLayoutEffect,
  useEffect,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { Select, SelectItem, Button, SelectGroup } from "@ui-kitten/components";
import { TaoBaithi } from "../../../function/taoBaithi.component";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import * as EvaIcon from "../../../src/icon/EvaIcon";

const timerProps = {
  isPlaying: true,
  size: 70,
  strokeWidth: 8,
};
const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};

const url =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/thigplx-ofrhb/service/thiGPLXapi/incoming_webhook/questionAPI";

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

export const BaithiScreen = ({ navigation }) => {
  const [data, setData] = useState({
    cauTraloi: Array(30).fill("E"),
    cauDapan: Array(30).fill("A"),
  });
  const [cauDung, setCaudung] = useState(20);
  const [nopBai, setNopbai] = useState(false);
  const [taoData, setTaodata] = useState(true);
  const trigger = useRef(null);
  const [key, setKey] = useState(0);
  const [questionList, setQuestionList] = useState({
    section1: [{ content: "" }],
    section2: [],
  });
  useEffect(() => {
    fetch(url + "?type=Câu hỏi điểm liệt-A1")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setQuestionList((prevState) => ({ ...prevState, section1: response }));
        //console.log(questionList.section1[0].content);
      });
  }, [taoData]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setNopbai(true)}
          activeOpacity={0.5}
          style={{ marginRight: 18 }}
        >
          <Text>Nộp bài</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, nopBai]);

  const NextQuestion = (index) => {
    trigger.current.scrollTo(index - 1);
  };
  const ghiNhanCautraloi = (index, value) => {
    if (value != data.cauTraloi[index]) {
      const copyCautraloi = data.cauTraloi.slice(); //copy the array
      copyCautraloi[index] = value; //execute the manipulations
      setData((prevData) => ({ ...prevData, cauTraloi: copyCautraloi })); //set the new state
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
          size="medium"
        >
          <SelectItem
            title="Phần 1: Từ Câu 1 đến Câu 10"
            onPress={() => NextQuestion(1)}
          />
          <SelectItem
            title="Phần 2: Từ Câu 11 đến Câu 20"
            onPress={() => NextQuestion(11)}
          />
          <SelectItem
            title="Phần 3: Từ Câu 21 đến Câu 30"
            onPress={() => NextQuestion(21)}
          />
        </Select>
      );
    }
  };
  memo(TaodanhsachCauhoi);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          accessoryLeft={EvaIcon.ArrowBackIcon}
          onPress={() => trigger.current.scrollBy(-1)}
          style={{
            width: "20%",
            height: "1%",
            borderRadius: 100,
            marginRight: "11%",
          }}
        ></Button>
        <CountdownCircleTimer
          key={key}
          {...timerProps}
          duration={600}
          colors={[
            nopBai == false
              ? ["#8c1aff", 1]
              : [cauDung < 15 ? "#ff1a1a" : "#00ff00", 1],
          ]}
          onComplete={() => {
            setNopbai(true);
            setKey((prevKey) => prevKey + 1);
          }}
        >
          {({ remainingTime, animatedColor }) => {
            if (nopBai == false)
              return (
                <Text>
                  {Math.floor(remainingTime / 60)}:{remainingTime % 60}
                </Text>
              );
            else {
              return <Text>{cauDung}/30</Text>;
            }
          }}
        </CountdownCircleTimer>
        <Button
          accessoryLeft={EvaIcon.ArrowForwardIcon}
          onPress={() => trigger.current.scrollBy(1)}
          style={{
            width: "20%",
            height: "1%",
            borderRadius: 100,
            marginLeft: "11%",
          }}
        ></Button>
      </View>
      <TaoBaithi
        loaiBanglai={"A1"}
        trigger={trigger}
        data={data}
        nopBai={nopBai}
        ghiNhanCautraloi={ghiNhanCautraloi}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "1%",
        }}
      >
        <View style={{ flex: 1, marginRight: "1%" }}>
          <Text>{questionList.section1[0].content}</Text>
          <TaodanhsachCauhoi loaiBanglai={"A1"} />
        </View>
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
