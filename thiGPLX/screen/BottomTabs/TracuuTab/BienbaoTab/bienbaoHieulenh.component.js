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
    type: "Biển số 301a",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được đi thẳng (trừ xe được quyền ưu tiên theo quy định).",
  },
  {
    type: "Biển số 301b",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau  nơi đường giao nhau..",
  },
  {
    type: "Biển số 301c",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau nơi đường giao nhau.",
  },
  {
    type: "Biển số 301d",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.",
  },
  {
    type: "Biển số 301e",
    name: "Hướng đi phải theo",
    content:
      "Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định).  Biển này được đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.",
  },
  {
    type: "Biển số 301f",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được đi thẳng và rẽ phải (trừ xe được quyền ưu tiên theo quy định).",
  },
  {
    type: "Biển số 301h",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được đi thẳng và rẽ trái (trừ xe được quyền ưu tiên theo quy định).",
  },
  ,
  {
    type: "Biển số 301i",
    name: " Hướng đi phải theo ",
    content:
      "Các xe chỉ được rẽ phải và rẽ trái (trừ xe được quyền ưu tiên theo quy định).",
  },
];

const getImage = (name) => {
  switch (name) {
    case "Biển số 301a":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301a.jpg");
    case "Biển số 301b":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301b.jpg");
    case "Biển số 301c":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301c.jpg");
    case "Biển số 301d":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301d.jpg");
    case "Biển số 301e":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301e.jpg");
    case "Biển số 301f":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301f.jpg");
    case "Biển số 301h":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301h.jpg");
    case "Biển số 301i":
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301i.jpg");
    default:
      return require("../../../../src/assets/bienbao/bienbaohieulenh/301a.jpg");
  }
};
export const BienbaoHieulenhScreen = () => {
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
