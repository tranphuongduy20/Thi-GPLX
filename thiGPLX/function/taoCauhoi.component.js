import React, { memo, useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
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

const renderItemHeader = (headerProps, index) => (
  <SafeAreaView {...headerProps}>
    <Text category="h6">Câu hỏi {index}</Text>
  </SafeAreaView>
);

const renderItemFooter = (
  footerProps,
  index,
  traLoi,
  dapAn,
  nopBai,
  baiThi,
  ghiNhanCautraloi
) => {
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [questionData, setQuestion] = useState({ cauHoi: "", giaiThich: "" });
  const [answerData, setAnswer] = useState({ cau1: "", cau2: "", cau3: "" });
  const showExplain = (nopBai) => {
    if (nopBai == true)
      return <Button onPress={() => setModal(true)}>Giải thích</Button>;
  };
  useEffect(() => {
    const quesData = ["Cau hoi", "Giai thich"];
    const ansData = ["Cau 1", "Cau 2", "Cau 3"];
    setQuestion({ cauHoi: quesData[0], giaiThich: quesData[1] });
    setAnswer({ cau1: ansData[0], cau2: ansData[1], cau3: ansData[2] });
    setUpdate(true);
  }, [update]);
  return (
    <SafeAreaView>
      <Text>{questionData.cauHoi}</Text>
      <TouchableOpacity
        onPress={() => {
          if ((baiThi == true && nopBai == false) || baiThi == false)
            ghiNhanCautraloi(index - 1, "A");
        }}
        style={chamBai("A", traLoi, dapAn, nopBai, baiThi)}
      >
        <Text>1.{answerData.cau1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if ((baiThi == true && nopBai == false) || baiThi == false)
            ghiNhanCautraloi(index - 1, "B");
        }}
        style={chamBai("B", traLoi, dapAn, nopBai, baiThi)}
      >
        <Text>2.{answerData.cau2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if ((baiThi == true && nopBai == false) || baiThi == false)
            ghiNhanCautraloi(index - 1, "C");
        }}
        style={chamBai("C", traLoi, dapAn, nopBai, baiThi)}
      >
        <Text>3.{answerData.cau3}</Text>
      </TouchableOpacity>
      {showExplain(nopBai)}
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
            Giải thích . . .
          </Text>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
};

export const CauhoiForm = memo((props) => {
  return (
    <Card
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, props.index)}
      footer={(footerProps) =>
        renderItemFooter(
          footerProps,
          props.index,
          props.traLoi,
          props.dapAn,
          props.nopBai,
          props.baiThi,
          props.ghiNhanCautraloi
        )
      }
    >
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
    </Card>
  );
});
