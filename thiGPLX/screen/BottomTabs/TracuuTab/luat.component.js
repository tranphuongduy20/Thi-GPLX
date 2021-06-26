import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
} from "@ui-kitten/components";
import * as EvaIcon from "../../../src/icon/EvaIcon";

const Header = (props, name) => (
  <View {...props}>
    <Text category="h6" style={{ fontWeight: "bold" }}>
      {name}
    </Text>
  </View>
);

export const LuatScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Cấm uống rượu bia khi lái xe")
        }
      >
        <Text style={{ fontSize: 17 }}>
          Cấm hoàn toàn người điều khiển phương tiện tham gia giao thông đường
          bộ mà trong máu hoặc hơi thở có nồng độ cồn (khoản 8 Điều 8 Luật Giao
          thông đường bộ số 23/2008/QH12 sửa đổi tại Luật Phòng, chống tác hại
          của rượu bia số 44/2019/QH14, có hiệu lực từ ngày 01/01/2020).
        </Text>
        <Text style={{ fontSize: 17 }}>
          Người vi phạm có thể bị phạt tới 40 triệu đồng, tước Giấy phép lái xe
          từ 22 - 24 tháng.
        </Text>
      </Card>
      <Card
        header={(headerProps) => Header(headerProps, "7 nơi không được lùi xe")}
      >
        <Text style={{ fontSize: 17 }}>
          Điều 16 quy định, không được lùi xe tại các địa điểm sau:
        </Text>
        <Text style={{ fontSize: 17 }}>- Ở khu vực cấm dừng;</Text>
        <Text style={{ fontSize: 17 }}>
          + Trên phần đường dành cho người đi bộ qua đường;
        </Text>
        <Text style={{ fontSize: 17 }}>+ Nơi đường bộ giao nhau;</Text>
        <Text style={{ fontSize: 17 }}>+ Nơi đường bộ giao với đường sắt;</Text>
        <Text style={{ fontSize: 17 }}>+ Nơi tầm nhìn bị che khuất;</Text>
        <Text style={{ fontSize: 17 }}>+ Trong hầm đường bộ;</Text>
        <Text style={{ fontSize: 17 }}>+ Đường cao tốc.</Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Xe chữa cháy được đi trước tiên")
        }
      >
        <Text style={{ fontSize: 17 }}>
          Theo Điều 22, trong số các xe ưu tiên thì xe chữa cháy đi làm nhiệm vụ
          được ưu tiên đi trước các xe khác. Sau đó là lần lượt là
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Xe quân sự, xe công an đi làm nhiệm vụ khẩn cấp;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Xe cứu thương đang thực hiện nhiệm vụ cấp cứu;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Xe hộ đê, xe làm nhiệm vụ khắc phục sự cố thiên tai; Đoàn xe tang.
        </Text>
        <Text style={{ fontSize: 17 }}>
          Khi có tín hiệu của xe được quyền ưu tiên, người tham gia giao thông
          phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên
          phải để nhường đường.
        </Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Dừng, đỗ xe không cách lề đường phố quá 0,25m")
        }
      >
        <Text style={{ fontSize: 17 }}>
          - Dừng xe là trạng thái đừng yên tạm thời của xe trong một khoảng thời
          gian cần thiết để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực
          hiện công việc khác (khoản 1 Điều 18);
        </Text>
        <Text style={{ fontSize: 17 }}>
          - Đỗ xe là trạng thái đứng yên của xe không giới hạn thời gian (khoản
          2 Điều 18).
        </Text>
        <Text style={{ fontSize: 17 }}>
          Theo đó, nguyên tắc dừng, đỗ xe trên đường phố được quy định tại Điều
          19 Luật Giao thông đường bộ như sau:
        </Text>
        <Text style={{ fontSize: 17 }}>
          Phải cho xe dừng, đỗ sát theo lề đường, hè phố phía bên phải theo
          chiều đi của mình; bánh xe gần nhất không được cách lề đường, hè phố
          quá 0,25m; trường hợp đường phố hẹp, phải dừng xe, đỗ xe ở vị trí cách
          xe ô tô đang đỗ bên kia đường tối thiểu 20m.
        </Text>
        <Text style={{ fontSize: 17 }}>
          Không được dừng xe, đỗ xe trên đường xe điện, trên miệng cống thoát
          nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho
          xe chữa cháy lấy nước.
        </Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(
            headerProps,
            "Nhận biết hiệu lệnh của người điều khiển giao thông"
          )
        }
      >
        <Text style={{ fontSize: 17 }}>
          Theo khoản 2 Điều 10 Luật Giao thông đường bộ, hiệu lệnh của người
          điều khiển giao thông bao gồm:
        </Text>
        <Text style={{ fontSize: 17 }}>
          - Tay giơ thẳng đứng: Báo hiệu cho người tham giao thông ở các hướng
          dừng lại;
        </Text>
        <Text style={{ fontSize: 17 }}>
          - Hai tay hoặc một tay dang ngang: Báo hiệu cho người tham gia giao
          thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng
          lại;
        </Text>
        <Text style={{ fontSize: 17 }}>
          Người tham gia giao thông ở phía bên phải và bên trái của người điều
          khiển giao thông được đi.
        </Text>
        <Text style={{ fontSize: 17 }}>
          - Tay phải giơ về phía trước: Báo hiệu cho người tham gia giao thông ở
          phía sau và bên phải người điều khiển giao thông phải dừng lại;
        </Text>
        <Text style={{ fontSize: 17 }}>
          Người tham gia giao thông ở phía trước người điều khiển giao thông
          được rẽ phải;
        </Text>
        <Text style={{ fontSize: 17 }}>
          Người tham gia giao thông ở phía bên trái người điều khiển giao thông
          được đi tất cả các hướng; người đi bộ phải đi sau lưng người điều
          khiển giao thông.
        </Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Nhận diện biển báo hiệu đường bộ")
        }
      >
        <Text style={{ fontSize: 17 }}>
          Nếu như tín hiệu đèn giao thông có 03 màu thì biển báo hiệu đường bộ
          có 05 nhóm, gồm:
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Biển báo cấm để biểu thị các điều cấm;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Biển báo nguy hiểm để cánh báo các tình huống nguy hiểm có thể xảy
          ra;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Biển hiệu lệnh để báo các hiệu lệnh phải thi hành;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Biển chỉ dẫn để chỉ dần hướng đi hoặc các điều cần biết;
        </Text>
        <Text style={{ fontSize: 17 }}>
          + Biển phụ để thuyết minh bổ sung các loại biển báo cấm, biển báo nguy
          hiểm, biển hiệu lệnh và biển chỉ dẫn.
        </Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Vượt xe phải báo hiệu bằng đèn hoặc còi")
        }
      >
        <Text style={{ fontSize: 17 }}>
          Điều 14 quy định, xe xin vượt phải có báo hiệu bằng đèn hoặc còi;
          trong đô thị và khu đông dân cư từ 22 giờ đến 5 giờ chỉ được báo hiệu
          xin vượt bằng đèn.
        </Text>
        <Text style={{ fontSize: 17 }}>
          Khi vượt, các xe phải vượt về bên trái, trừ khi xe phía trước có tín
          hiệu rẽ trái hoặc đang rẽ trái; khi xe điện đang chạy giữa đường; khi
          xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái
          được.
        </Text>
      </Card>
      <Card
        header={(headerProps) =>
          Header(headerProps, "Chuyển hướng phải bật đèn xi nhan")
        }
      >
        <Text style={{ fontSize: 17 }}>
          Khi muốn chuyển hướng, người điều khiển phương tiện phải giảm tốc độ
          và có tín hiệu báo hướng rẽ (khoản 1 Điều 15).
        </Text>
        <Text style={{ fontSize: 17 }}>
          Khi chuyển hướng phải nhường quyền đi trước cho: Người đi bộ, người đi
          xe đạp đang đi trên phần đường dành riêng cho họ và các xe đi ngược
          chiều.
        </Text>
        <Text style={{ fontSize: 17 }}>
          Lưu ý, chỉ được rẽ khi quan sát thấy không gây trở ngại hoặc nguy hiểm
          cho người và phương tiện khác.
        </Text>
      </Card>
    </ScrollView>
  );
};
