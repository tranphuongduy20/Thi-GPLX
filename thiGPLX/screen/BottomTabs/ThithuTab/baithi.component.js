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
import { useSelector } from "react-redux";
import { currentCauhoi } from "../../../redux/cauhoiSlice";

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
  const Diemso = useSelector(currentCauhoi);
  const [nopBai, setNopbai] = useState(false);
  const [taoData, setTaodata] = useState(true);
  const trigger = useRef(null);
  const triggerAnswer = useRef(Array(30).fill(createRef()));
  const [key, setKey] = useState(0);
  const [questionList, setQuestionList] = useState(
    Array(25).fill({
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
            handleFinish();
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

  const handleFinish = () => {
    for (let i = 0; i < questionList.length - 1; i++) {
      triggerAnswer.current[i].current.sendAnswer();
    }
    setNopbai(true);
  };
  const getResult = () => {
    let result = 0;

    /*for (let i = 0; i < Diemso.length; i++) {
      if (Diemso[i].result == true) {
        result++;
      }
    }*/
    return result;
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
          <SelectItem title="Câu 1" onPress={() => NextQuestion(1)} />
          <SelectItem title="Câu 10" onPress={() => NextQuestion(10)} />
          <SelectItem title="Câu 20" onPress={() => NextQuestion(20)} />
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
              : [getResult() < 15 ? "#ff1a1a" : "#00ff00", 1],
          ]}
          onComplete={() => {
            handleFinish();
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
              return <Text>{getResult()}/25</Text>;
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
        trigger={trigger}
        innerRef={triggerAnswer}
        questionList={questionList}
        nopBai={nopBai}
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
          <Text>
            {Diemso[0].toString()}-/
            {Diemso[1].toString()}
          </Text>
          <TaodanhsachCauhoi loaiBanglai={"A1"} />
        </View>
      </View>
    </View>
  );
};
/*                {Diemso[0].answer.toString()}-{Diemso[0].result.toString()}/
            {Diemso[1].answer.toString()}-{Diemso[1].result.toString()}/
            {Diemso[2].answer.toString()}-{Diemso[2].result.toString()}
<ScrollBottomSheet
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
