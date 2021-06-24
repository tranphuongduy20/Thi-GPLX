import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { Input } from "@ui-kitten/components";
import { CauhoiForm } from "../../../function/taoCauhoi.component";
import { PulseIndicator } from "react-native-indicators";
import { currentPart } from "../../../redux/ontapSlice";
import { useSelector } from "react-redux";
import { findMaxLength } from "../../../database/userData";

const url = "https://thi-gplx.herokuapp.com/A1";

export const OntapScreen = ({ navigation }) => {
  const SelectedPart = useSelector(currentPart);
  const [questionList, setQuestionList] = useState([]);
  const trigger = useRef(null);
  const [page, setPage] = React.useState(0);

  const scrollList = (value) => {
    if (value >= 0 && value <= findMaxLength(SelectedPart)) {
      setPage(value);
      trigger.current.scrollToIndex({ index: value });
    }
  };
  useEffect(() => {
    fetch(url + "/" + SelectedPart)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setQuestionList(response);
      });
  }, []);

  return questionList[0] == null ? (
    <PulseIndicator color="#8c1aff" size={200} />
  ) : (
    <FlatList
      initialNumToRender={5}
      legacyImplementation={true}
      ref={trigger}
      removeClippedSubviews={true}
      data={Array.from({ length: questionList.length - 1 }).map((_, i) =>
        String(i)
      )}
      renderItem={(info) => (
        <CauhoiForm
          index={info.index + 1}
          question={questionList[info.index + 1]}
          dapAn={questionList[0].answer[info.index]}
          nopBai={true}
          baiThi={false}
          chuDe={SelectedPart}
        />
      )}
      keyExtractor={(i) => i}
    />
  );
};

/*<Input
            placeholder="Tìm"
            value={value}
            onChangeText={(nextValue) =>
              setValue(nextValue.replace(/[^0-9]/g, ""))
            }
            style={{ width: 70 }}
          />
          <Text style={{ marginTop: 10, marginRight: 5 }}>
            /{findMaxLength(SelectedPart)}
          </Text> 
              {questionList[0] != null && (
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffffff",
            alignSelf: "flex-end",
            marginTop: 13,

            position: "absolute",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              scrollList(page - 1);
            }}
            activeOpacity={0.5}
            style={{ marginRight: 10 }}
          >
            <Image
              source={require("../../../src/image/icons8-search.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              scrollList(page + 1);
            }}
            activeOpacity={0.5}
            style={{ marginRight: 10 }}
          >
            <Image
              source={require("../../../src/image/icons8-search.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      )}*/
