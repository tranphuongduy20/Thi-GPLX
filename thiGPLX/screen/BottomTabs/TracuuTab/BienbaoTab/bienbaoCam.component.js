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
    type: "Đường cấm",
    content: "Nội dung biển",
  },
  {
    type: "Cấm đi ngược chiều",
    content: "Nội dung biển cấm",
  },
  {
    type: "Cấm xe ô tô",
    content: "Nội dung biển cấm",
  },
  {
    type: "Cấm xe ô tô rẽ trái",
    content: "Nội dung biển cấm",
  },
  {
    type: "Cấm xe ô tô rẽ phải",
    content: "Nội dung biển cấm",
  },
  {
    type: "Cấm xe mô tô",
    content: "Nội dung biển cấm",
  },
];

const getImage = (name) => {
  switch (name) {
    case "Đường cấm":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-101.jpg");
    case "Cấm đi ngược chiều":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-102.jpg");
    case "Cấm xe ô tô":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103a.jpg");
    case "Cấm xe ô tô rẽ trái":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103c.jpg");
    case "Cấm xe ô tô rẽ phải":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-103b.jpg");
    case "Cấm xe mô tô":
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-104.jpg");
    default:
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-101.jpg");
  }
};

export const BienbaoCamScreen = () => {
  const [modal, setModal] = useState({
    condition: false,
    name: "",
    content: "",
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      {rawData.map((item, key) => (
        <TouchableOpacity
          onPress={() =>
            setModal({
              condition: true,
              name: item.type,
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
        modalTitle={<ModalTitle title={modal.name} hasTitleBar={false} />}
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => {
              setModal({ ...modal, condition: false });
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
          <Image source={getImage(modal.name)} style={styles.ImageStyle} />
          <Text
            style={[
              styles.TextStyle,
              { alignSelf: "center", marginLeft: "5%" },
            ]}
          >
            {modal.content}
          </Text>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
};
