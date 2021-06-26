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
    type: "Biển số 201a",
    name: "Chỗ ngoặt nguy hiểm vòng bên trái",
    content: "Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên trái.",
  },
  {
    type: "Biển số 201b",
    name: "Chỗ ngoặt nguy hiểm vòng bên phải",
    content: "Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên phải.",
  },
  {
    type: "Biển số W.201c",
    name: "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải",
    content:
      "Báo trước chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
  },
  {
    type: "Biển số W.201d",
    name: "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái",
    content:
      "Báo trước chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng bên phải.",
  },
  {
    type: "Biển số 202a",
    name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp trái",
    content:
      "Báo trước sắp đến nhiều chỗ ngoặt nguy hiểm liên tiếp trong đó chỗ ngoặt đầu tiên hướng vòng bên trái.",
  },
  {
    type: "Biển số 202b",
    name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp phải",
    content:
      "Báo trước sắp đến nhiều chỗ ngoặt nguy hiểm liên tiếp trong đó chỗ ngoặt đầu tiên hướng vòng bên phải.",
  },
  {
    type: "Biển số 203a",
    name: "Đường bị hẹp cả hai bên",
    content: "Báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên.",
  },
  {
    type: "Biển số 203b",
    name: "Đường bị hẹp về phía trái",
    content: "Báo trước sắp đến một đoạn đường bị hẹp đột ngột phía bên trái.",
  },
  {
    type: "Biển số 203c",
    name: "Đường bị hẹp về phía phải",
    content: "Báo trước sắp đến một đoạn đường bị hẹp đột ngột phía bên phải.",
  },
];

const getImage = (name) => {
  switch (name) {
    case "Biển số 201a":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/201a.jpg");
    case "Biển số 201b":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/201b.jpg");
    case "Biển số W.201c":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/w.201c.jpg");
    case "Biển số W.201d":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/w.201d.jpg");
    case "Biển số 202a":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/202a.jpg");
    case "Biển số 202b":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/202b.jpg");
    case "Biển số 203b":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/203b.jpg");
    case "Biển số 203a":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/203a.jpg");
    case "Biển số 203c":
      return require("../../../../src/assets/bienbao/bienbaonguyhiem/203c.jpg");
    default:
      return require("../../../../src/assets/bienbao/bienbaocam/bien-bao-cam-101.jpg");
  }
};

export const BienbaoNguyhiemScreen = () => {
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
          <Image
            source={getImage(item.type)}
            style={[styles.ImageIconStyle, { height: 64, width: 78 }]}
          />
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
            style={[
              styles.ImageStyle,
              { alignSelf: "center", width: 130, height: 100 },
            ]}
          />
          <Text style={[styles.meoStyle, { alignSelf: "center" }]}>
            {modal.content}
          </Text>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
};
