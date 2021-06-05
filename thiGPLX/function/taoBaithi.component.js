import React, { memo, useCallback, useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import Swiper from "react-native-swiper";
import { CauhoiForm } from "./taoCauhoi.component";
import { styles } from "../style/styles";
import { ScrollView } from "react-native-gesture-handler";

export default function TaoBaithi(props) {
  /*const [traLoi, setTraloi] = useState(Array(30).fill("F"));
  const ghiNhanCautraloi = (index, value) => {
    if (value != traLoi[index]) {
      const copyCautraloi = traLoi.slice(); //copy the array
      copyCautraloi[index] = value; //execute the manipulations
      setTraloi(copyCautraloi); //set the new state
    }
  };*/
  return (
    <View style={{ flex: 1 }} removeClippedSubviews={true}>
      <Swiper
        loop={true}
        ref={props.trigger}
        showsPagination={false}
        scrollEnabled={true}
      >
        {props.questionList.map((currentQuesiton, index) => {
          if (index != 0 && index < 3) {
            return (
              <ScrollView key={index}>
                <CauhoiForm
                  index={index}
                  ref={props.innerRef.current[index - 1]}
                  question={currentQuesiton}
                  dapAn={props.questionList[0].answer[index - 1]}
                  nopBai={props.nopBai}
                  baiThi={true}
                />
              </ScrollView>
            );
          }
        })}
      </Swiper>
    </View>
  );
}
