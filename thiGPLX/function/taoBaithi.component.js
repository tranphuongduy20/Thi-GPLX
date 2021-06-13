import React, { memo, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Button, Image } from "react-native";
import Swiper from "react-native-swiper";
import { CauhoiForm } from "./taoCauhoi.component";
import { DotIndicator } from "react-native-indicators";
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
  return props.questionList[1].content == "Loading" ? (
    <DotIndicator color="#8c1aff" />
  ) : (
    <View style={{ flex: 1 }} removeClippedSubviews={true}>
      <Swiper
        loop={false}
        ref={props.trigger}
        showsPagination={false}
        scrollEnabled={true}
      >
        {props.questionList.map((currentQuesiton, index) => {
          if (index != 0) {
            return (
              <ScrollView key={index}>
                <CauhoiForm
                  index={index}
                  question={currentQuesiton}
                  dapAn={props.questionList[0].answer[index - 1]}
                  nopBai={
                    props.nopBai == false ||
                    (props.nopBai == true && props.state == false)
                      ? false
                      : true
                  }
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
