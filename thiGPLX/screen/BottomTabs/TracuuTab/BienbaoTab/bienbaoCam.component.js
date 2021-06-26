import React, { useState } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import { Text } from "@ui-kitten/components";
import { styles } from "../../../../style/styles";
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
const rawData = [
  {
    type: "Biển số P.101",
    name: "Đường cấm",
    content:
      "Báo đường cấm các loại phương tiện đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định.",
  },
  {
    type: "Biển số P.102",
    name: "Cấm đi ngược chiều",
    content:
      "Báo đường cấm các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo quy định; người đi bộ được phép đi trên vỉa hè hoặc lề đường.",
  },
  {
    type: "Biển số P.103a",
    name: "Cấm xe ô tô",
    content:
      "Báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng đi qua, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
  },
  {
    type: "Biển số P.103b",
    name: "Cấm xe ô tô rẽ trái",
    content:
      "Báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng rẽ phải hay rẽ trái, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
  },
  {
    type: "Biển số P.103c",
    name: "Cấm xe ô tô rẽ phải",
    content:
      "Báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng rẽ phải hay rẽ trái, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
  },
  {
    type: "Biển số P.104",
    name: "Cấm xe mô tô",
    content:
      "Báo đường cấm các loại xe máy, trừ các xe được ưu tiên theo quy định.",
  },
];

const getImage = (name) => {
  switch (name) {
    case "Biển số P.101":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-101.jpg");
    case "Biển số P.102":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-102.jpg");
    case "Biển số P.103a":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103a.jpg");
    case "Biển số P.103b":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103c.jpg");
    case "Biển số P.103c":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103b.jpg");
    case "Biển số P.104":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-104.jpg");
    default:
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-101.jpg");
  }
};

export const BienbaoCamScreen = () => {
  const [modal, setModal] = useState({
    condition: false,
    type: "",
    name: "",
    content: "",
  });
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {rawData.map((item, key) => (
        <TouchableOpacity
          onPress={() =>
            setModal({
              condition: true,
              type: item.type,
              name: item.name,
              content: item.content,
            })
          }
          style={styles.ButtonBienbaoStyle}
          activeOpacity={0.5}
          key={key}
        >
          <Image source={getImage(item.type)} style={styles.ImageIconStyle} />
          <Text style={styles.TextStyle}>{item.type}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        onTouchOutside={() => {
          setModal({ ...modal, condition: false });
        }}
        width={0.9}
        visible={modal.condition}
        onSwipeOut={() => setModal({ ...modal, condition: false })}
        modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log("onHardwareBackPress");
          setModal({ ...modal, condition: false });
          return true;
        }}
        modalTitle={
          <ModalTitle
            title={modal.type + " : " + modal.name}
            hasTitleBar={false}
          />
        }
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => {
              setModal({ ...modal, condition: false });
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
          <Image
            source={getImage(modal.type)}
            style={[styles.ImageStyle, { alignSelf: "center" }]}
          />
          <Text style={[styles.meoStyle, { alignSelf: "center" }]}>
            {modal.content}
          </Text>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
};
