import React, { memo, useEffect, useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Text, Card, Button } from "@ui-kitten/components";
import { styles } from "../style/styles";
import Modal, {
  ModalTitle,
  ModalFooter,
  ModalContent,
  ModalButton,
  ScaleAnimation,
} from "react-native-modals";

import { cos } from "react-native-reanimated";
import { db } from "../database/userData";

const renderItemHeader = (headerProps, index, question, nopBai) => {
  const IsImportant = () => {
    if (question.important == true) {
      return (
        <Image
          source={require("../src/image/flame.gif")}
          style={{ width: 24, height: 24 }}
        />
      );
    }
  };
  const HasImage = () => {
    if (question == undefined) {
      return <Text>"Loading . . ."</Text>;
    } else if (question.url != undefined && question.important != true) {
      return <Text style={styles.meoStyle}>{question.content}</Text>;
    }
  };
  return (
    <SafeAreaView {...headerProps}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text category="h6">Câu hỏi {index}: </Text>
        {IsImportant()}
      </View>
      {HasImage()}
    </SafeAreaView>
  );
};

const renderItemFooter = (
  footerProps,
  index,
  question,
  test,
  setTest,
  dapAn,
  nopBai,
  baiThi,
  chuDe
) => {
  const [modal, setModal] = useState(false);

  const quesExplain = question.explanation.split(". ");

  const showExplain = () => {
    if (nopBai == true || baiThi == false)
      return (
        <Button
          onPress={() => setModal(true)}
          appearance="outline"
          style={{ width: "100%" }}
        >
          Giải thích
        </Button>
      );
  };

  const saveAnswer = async (answer) => {
    if (
      ((baiThi == true && nopBai == false) || baiThi == false) &&
      test != answer
    ) {
      setTest(answer);
      if (baiThi == true) {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `update answers set right = ? , important = ? where id = ?;`,
              [
                answer == dapAn ? "true" : "false",
                question.important.toString(),
                index,
              ]
            );
          },
          (e) => console.log("Error: " + e)
        );
      } else if (baiThi == false) {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `update ` + chuDe + ` set answer = ?,right=? where id = ?;`,
              [answer, answer == dapAn ? "true" : "false", index]
            );
          },
          (e) => console.log("Error: " + e)
        );
      }
    }
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
    } else {
      if (hienTai == dapAn && hienTai == test) {
        return styles.CautraloiDung;
      } else if (hienTai != dapAn && hienTai == test) {
        return styles.CautraloiSai;
      } else return styles.CautraloiUnclick;
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
              <Text style={styles.meoStyle}>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text style={styles.meoStyle}>2. {question.answer[1][0]}</Text>
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
              <Text style={styles.meoStyle}>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text style={styles.meoStyle}>2. {question.answer[1][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("C")}
              style={chamBai("C")}
            >
              <Text style={styles.meoStyle}>3. {question.answer[2][0]}</Text>
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
              <Text style={styles.meoStyle}>1. {question.answer[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("B")}
              style={chamBai("B")}
            >
              <Text style={styles.meoStyle}>2. {question.answer[1][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("C")}
              style={chamBai("C")}
            >
              <Text style={styles.meoStyle}>3. {question.answer[2][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveAnswer("D")}
              style={chamBai("D")}
            >
              <Text style={styles.meoStyle}>4. {question.answer[3][0]}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  return (
    <View>
      {question == undefined ? <Text>Wait . . .</Text> : traLoiSection()}
      {/*<Text>
        Chọn câu: {test} --- Câu đúng: {dapAn}
      </Text>*/}
      {showExplain()}
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
        footer={
          <ModalFooter>
            <ModalButton
              text="Đóng"
              bordered
              onPress={() => {
                setModal(false);
              }}
              key="button"
            />
          </ModalFooter>
        }
      >
        <ModalContent
          style={{
            backgroundColor: "#FFF",
            flexDirection: "column",
          }}
        >
          {quesExplain.map((explanation, index) => (
            <Text
              style={[styles.meoStyle, { fontSize: 16, marginLeft: "5%" }]}
              key={index}
            >
              {explanation}
            </Text>
          ))}
        </ModalContent>
      </Modal>
    </View>
  );
};

export const CauhoiForm = memo((props) => {
  const [test, setTest] = useState("E");
  useEffect(() => {
    if (props.baiThi == false)
      db.transaction(
        (tx) => {
          tx.executeSql(
            "select answer from " + props.chuDe + " where id=?",
            [props.index],
            (_, { rows }) => {
              if (test != rows.item(0)["answer"])
                setTest(rows.item(0)["answer"]);
            }
          );
        },
        (e) => console.log("Error: " + e)
      );
  }, [test]);
  const cauhoiSection = () => {
    if (props.question != undefined && props.question.url != undefined) {
      return (
        <View>
          <Image
            style={{
              width: Dimensions.get("window").width - 10,
              height: Dimensions.get("window").height / 3,
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={{
              uri: props.question.url,
            }}
          />
        </View>
      );
    } else return <Text style={styles.meoStyle}>{props.question.content}</Text>;
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
          props.baiThi,
          props.chuDe
        )
      }
    >
      {cauhoiSection()}
    </Card>
  );
});
