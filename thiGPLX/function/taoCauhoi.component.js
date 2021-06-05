import React, {
  memo,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { ghiNhanCautraloi, currentCauhoi } from "../redux/cauhoiSlice";

const setCautraloi = (index, traLoi) => {
  return {
    order: index,
    answer: traLoi,
  };
};

const cauhoiSection = (question) => {
  if (question != undefined && question.url != undefined) {
    return (
      <View>
        <Image
          style={{
            width: question.type == "Biển báo" ? 400 : 350,
            height: question.type == "Biển báo" ? 150 : 200,
            alignSelf: "center",
          }}
          source={{
            uri: question.url,
          }}
        />
      </View>
    );
  } else return <Text>{question.content}</Text>;
};
const chamBai = (hienTai, traLoi, dapAn, nopBai, baiThi) => {
  if (baiThi == true) {
    if (hienTai == traLoi && nopBai == false) {
      return styles.CautraloiOnclick;
    } else if (
      (hienTai != traLoi && nopBai == false) ||
      (hienTai != traLoi && hienTai != dapAn && nopBai == true)
    ) {
      return styles.CautraloiUnclick;
    } else if (hienTai == dapAn && nopBai == true) {
      return styles.CautraloiDung;
    } else if (hienTai != dapAn && hienTai == traLoi && nopBai == true) {
      return styles.CautraloiSai;
    }
  }
};
const traLoiSection = (answer, index, test, setTest, dapAn, nopBai, baiThi) => {
  switch (answer.length) {
    case 2:
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("A");
            }}
            style={chamBai("A", test, dapAn, nopBai, baiThi)}
          >
            <Text>1. {answer[0][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("B");
            }}
            style={chamBai("B", test, dapAn, nopBai, baiThi)}
          >
            <Text>2. {answer[1][0]}</Text>
          </TouchableOpacity>
        </View>
      );
    case 3:
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("A");
            }}
            style={chamBai("A", test, dapAn, nopBai, baiThi)}
          >
            <Text>1. {answer[0][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false) {
                setTest("B");
              }
            }}
            style={chamBai("B", test, dapAn, nopBai, baiThi)}
          >
            <Text>2. {answer[1][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("C");
            }}
            style={chamBai("C", test, dapAn, nopBai, baiThi)}
          >
            <Text>3. {answer[2][0]}</Text>
          </TouchableOpacity>
        </View>
      );
    case 4:
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("A");
            }}
            style={chamBai("A", test, dapAn, nopBai, baiThi)}
          >
            <Text>1. {answer[0][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("B");
            }}
            style={chamBai("B", test, dapAn, nopBai, baiThi)}
          >
            <Text>2. {answer[1][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("C");
            }}
            style={chamBai("C", test, dapAn, nopBai, baiThi)}
          >
            <Text>3. {answer[2][0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if ((baiThi == true && nopBai == false) || baiThi == false)
                setTest("D");
            }}
            style={chamBai("D", test, dapAn, nopBai, baiThi)}
          >
            <Text>4. {answer[3][0]}</Text>
          </TouchableOpacity>
        </View>
      );
  }
};
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
  const SelectedTraloi = useSelector(currentCauhoi);
  const [modal, setModal] = useState(false);
  const showExplain = (nopBai) => {
    if (nopBai == true)
      return <Button onPress={() => setModal(true)}>Giải thích</Button>;
  };

  return (
    <View>
      {question == undefined ? (
        <Text>Wait . . .</Text>
      ) : (
        traLoiSection(
          question.answer,
          index,
          test,
          setTest,
          dapAn,
          nopBai,
          baiThi
        )
      )}
      {showExplain(nopBai)}
      <Text>
        Chọn câu: {SelectedTraloi[index - 1]} --- Câu đúng: {dapAn}
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

export const CauhoiForm = forwardRef((props, ref) => {
  const SelectedTraloi = useSelector(currentCauhoi);
  const [test, setTest] = useState(SelectedTraloi[props.index - 1]);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    sendAnswer() {
      dispatch(ghiNhanCautraloi(setCautraloi(props.index - 1, test)));
    },
  }));
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
      {cauhoiSection(props.question)}
    </Card>
  );
});
