import React, { useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView, View, Image } from "react-native";
import { Text, Card, Button } from "@ui-kitten/components";
import { styles } from "../style/styles";
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
  BottomModal,
  ModalPortal,
} from "react-native-modals";
import { cos } from "react-native-reanimated";

const renderItemHeader = (headerProps, index, question) => (
  <SafeAreaView {...headerProps}>
    <Text category="h6">
      Câu hỏi {index}:{" "}
      {question == undefined
        ? "Loading . . . "
        : question.url != undefined
        ? question.content
        : ""}
    </Text>
  </SafeAreaView>
);

const renderItemFooter = (
  footerProps,
  index,
  question,
  test,
  setTest,
  dapAn,
  nopBai,
  baiThi
) => {
  const [modal, setModal] = useState(false);
  const showExplain = (nopBai) => {
    if (nopBai == true)
      return <Button onPress={() => setModal(true)}>Giải thích</Button>;
  };

  const saveAnswer = async (answer) => {
    if (
      ((baiThi == true && nopBai == false) || baiThi == false) &&
      test != answer
    )
      setTest(answer);
  };

  const chamBai = (hienTai) => {
    if (baiThi == true) {
      if (hienTai == test && nopBai == false) {
        return styles.CautraloiOnclick;
      } else if (
        (hienTai != test && nopBai == false) ||
        (hienTai != test && hienTai != dapAn && nopBai == true)
      ) {
        return styles.CautraloiUnclick;
      } else if (hienTai == dapAn && nopBai == true) {
        return styles.CautraloiDung;
      } else if (hienTai != dapAn && hienTai == test && nopBai == true) {
        return styles.CautraloiSai;
      }
    }
  };
  const traLoiSection = () => {
    switch (question.answer.length) {
      case 2:
        return (
          <View>
            <TouchableOpacity
              onPress={() => saveAnswer("A")}
              style={chamBai("A")}
            >
              <Text>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text>2. {question.answer[1][0]}</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View>
            <TouchableOpacity
              onPress={() => saveAnswer("A")}
              style={chamBai("A")}
            >
              <Text>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text>2. {question.answer[1][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("C")}
              style={chamBai("C")}
            >
              <Text>3. {question.answer[2][0]}</Text>
            </TouchableOpacity>
          </View>
        );
      case 4:
        return (
          <View>
            <TouchableOpacity
              onPress={() => saveAnswer("A")}
              style={chamBai("A")}
            >
              <Text>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text>2. {question.answer[1][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("C")}
              style={chamBai("C")}
            >
              <Text>3. {question.answer[2][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("D")}
              style={chamBai("D")}
            >
              <Text>4. {question.answer[3][0]}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  return (
    <View>
      {question == undefined ? <Text>Wait . . .</Text> : traLoiSection()}
      {showExplain(nopBai)}
      <Text>
        Chọn câu: {test} --- Câu đúng: {dapAn}
      </Text>
      <Modal
        onTouchOutside={() => {
          setModal(false);
        }}
        width={0.9}
        visible={modal}
        onSwipeOut={() => setModal(false)}
        modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log("onHardwareBackPress");
          setModal(false);
          return true;
        }}
        modalTitle={<ModalTitle title="Giải thích" hasTitleBar={false} />}
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => {
              setModal(false);
            }}
            key="button-1"
          />,
        ]}
      >
        <ModalContent
          style={{
            backgroundColor: "#FFF",
            flexDirection: "row",
          }}
        >
          <Text
            style={[
              styles.TextStyle,
              { alignSelf: "center", marginLeft: "5%" },
            ]}
          >
            {question == undefined ? "Wait" : question.explanation}
          </Text>
        </ModalContent>
      </Modal>
    </View>
  );
};

export const CauhoiForm = (props) => {
  const [test, setTest] = useState("E");
  const cauhoiSection = () => {
    if (props.question != undefined && props.question.url != undefined) {
      return (
        <View>
          <Image
            style={{
              width: props.question.type == "Biển báo" ? 400 : 350,
              height: props.question.type == "Biển báo" ? 150 : 200,
              alignSelf: "center",
            }}
            source={{
              uri: props.question.url,
            }}
          />
        </View>
      );
    } else return <Text>{props.question.content}</Text>;
  };
  return (
    <Card
      status="basic"
      header={(headerProps) =>
        renderItemHeader(headerProps, props.index, props.question)
      }
      footer={(footerProps) =>
        renderItemFooter(
          footerProps,
          props.index,
          props.question,
          test,
          setTest,
          props.dapAn,
          props.nopBai,
          props.baiThi
        )
      }
    >
      {cauhoiSection()}
    </Card>
  );
};
