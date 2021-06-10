import React, { memo, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import Swiper from "react-native-swiper";
import { CauhoiForm } from "./taoCauhoi.component";
import { styles } from "../style/styles";
import { Layout } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

export default function TaoBaithi(props) {
  /*const getData = async (index) => {
    try {
      const value = await AsyncStorage.getItem("result");
      if (value != null) {
        setResult(value);
      }
    } catch (e) {
      // error reading value
      console.log("Error while getting Data" + e);
    }
  };*/
  return (
    <View style={{ flex: 1 }} removeClippedSubviews={true}>
      <Swiper
        loop={false}
        ref={props.trigger}
        showsPagination={false}
        scrollEnabled={true}
      >
        {props.questionList.map((currentQuesiton, index) => {
          if (index != 0 && index < 4) {
            return (
              <ScrollView key={index}>
                <CauhoiForm
                  index={index}
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
