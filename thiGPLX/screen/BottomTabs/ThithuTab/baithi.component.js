import React, {
  useRef,
  useState,
  memo,
  useLayoutEffect,
  useEffect,
  createRef,
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
import TaoBaithi from "../../../function/taoBaithi.component";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import * as EvaIcon from "../../../src/icon/EvaIcon";
import { db } from "../../../database/userData";

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

const url = "https://thi-gplx.herokuapp.com/A1";

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
  const [diem, setDiem] = useState(0);
  const [nopBai, setNopbai] = useState(false);
  const [taoData, setTaodata] = useState(true);
  const trigger = useRef(null);
  const [key, setKey] = useState(0);
  const [questionList, setQuestionList] = useState(
    Array(30).fill({
      content: "Loading . . .",
      explanation: "Loading . . .",
      answer: [
        ["", false],
        ["", false],
        ["", false],
      ],
    })
  );

  useEffect(() => {
    fetch(url + "/TaoDe")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        //setQuestionList((prevState) => ({ ...prevState, section1: response }));
        setQuestionList(response);
        // console.log(questionList);
      });
  }, [taoData]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setNopbai(true);
            getData();
          }}
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
  const getData = () => {
    try {
    } catch (e) {}
  };
  /*const TaodanhsachCauhoi = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState();
    if (props.loaiBanglai == "A1") {
      return (
        <Select
          selectedIndex={selectedIndex}
          placeholder="Chọn câu hỏi"
          onSelect={(index) => setSelectedIndex(index)}
          size="medium"
        >
          <SelectItem title="Câu 1" onPress={() => NextQuestion(1)} />
          <SelectItem title="Câu 10" onPress={() => NextQuestion(10)} />
          <SelectItem title="Câu 20" onPress={() => NextQuestion(20)} />
        </Select>
      );
    }
  };
  memo(TaodanhsachCauhoi);*/

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
          onPress={() => NextQuestion(1)}
          style={{
            width: "27%",
            height: "1%",
            borderRadius: 100,
            marginRight: "11%",
          }}
        >
          <Text>Câu 1</Text>
        </Button>
        <CountdownCircleTimer
          key={key}
          {...timerProps}
          duration={6000}
          colors={[
            nopBai == false
              ? ["#8c1aff", 1]
              : [diem < 15 ? "#ff1a1a" : "#00ff00", 1],
          ]}
          onComplete={() => {
            setNopbai(true);
            getData();
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
              return <Text>{diem}/25</Text>;
            }
          }}
        </CountdownCircleTimer>
        <Button
          onPress={() => NextQuestion(25)}
          accessoryRight={EvaIcon.ArrowForwardIcon}
          style={{
            width: "27%",
            height: "1%",
            borderRadius: 100,
            marginLeft: "11%",
          }}
        >
          <Text>Câu {questionList.length - 1}</Text>
        </Button>
      </View>
      <TaoBaithi
        trigger={trigger}
        questionList={questionList}
        nopBai={nopBai}
      />
      <Button
        onPress={() =>
          db.transaction(
            (tx) => {
              tx.executeSql("select * from Answer", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
              );
            },
            () => console.log("Error"),
            () => console.log("success")
          )
        }
        accessoryRight={EvaIcon.ArrowForwardIcon}
        style={{
          width: "27%",
          height: "1%",
          borderRadius: 100,
          marginLeft: "11%",
        }}
      >
        <Text>Nhấp em đi anh</Text>
      </Button>
    </View>
  );
};

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
