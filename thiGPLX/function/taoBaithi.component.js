import React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import Swiper from "react-native-swiper";
import { CauhoiForm } from "./taoCauhoi.component";
import { styles } from "../style/styles";

export const TaoBaithi = (props) => {
  if (props.loaiBanglai == "A1") {
    return (
      <View style={{ flex: 1 }} removeClippedSubviews={true}>
        <Swiper
          loop={false}
          ref={props.trigger}
          showsPagination={false}
          scrollEnabled={false}
        >
          <View>
            <CauhoiForm
              index={1}
              ghiNhanCautraloi={props.ghiNhanCautraloi}
              traLoi={props.data.cauTraloi[0]}
              dapAn={props.data.cauDapan[0]}
              nopBai={props.nopBai}
              baiThi={true}
            />
          </View>
          <View>
            <CauhoiForm
              index={2}
              ghiNhanCautraloi={props.ghiNhanCautraloi}
              traLoi={props.data.cauTraloi[1]}
              dapAn={props.data.cauDapan[1]}
              nopBai={props.nopBai}
            />
          </View>
          <View>
            <CauhoiForm
              index={3}
              ghiNhanCautraloi={props.ghiNhanCautraloi}
              traLoi={props.data.cauTraloi[2]}
              dapAn={props.data.cauDapan[2]}
              nopBai={props.nopBai}
            />
          </View>
          <View>
            <CauhoiForm
              index={4}
              ghiNhanCautraloi={props.ghiNhanCautraloi}
              traLoi={props.data.cauTraloi[3]}
            />
          </View>
          <View>
            <CauhoiForm index={5} />
          </View>
          <View>
            <CauhoiForm index={6} />
          </View>
          <View>
            <CauhoiForm index={7} />
          </View>
          <View>
            <CauhoiForm index={8} />
          </View>
          <View>
            <CauhoiForm index={9} />
          </View>
          <View>
            <CauhoiForm index={10} />
          </View>
          <View>
            <CauhoiForm index={11} />
          </View>
          <View>
            <CauhoiForm index={12} />
          </View>
          <View>
            <CauhoiForm index={13} />
          </View>
          <View>
            <CauhoiForm index={14} />
          </View>
          <View>
            <CauhoiForm index={15} />
          </View>
          <View>
            <CauhoiForm index={16} />
          </View>
          <View>
            <CauhoiForm index={17} />
          </View>
          <View>
            <CauhoiForm index={18} />
          </View>
          <View>
            <CauhoiForm index={19} />
          </View>
          <View>
            <CauhoiForm index={20} />
          </View>
          <View>
            <CauhoiForm index={21} />
          </View>
          <View>
            <CauhoiForm index={22} />
          </View>
          <View>
            <CauhoiForm index={23} />
          </View>
          <View>
            <CauhoiForm index={24} />
          </View>
          <View>
            <CauhoiForm index={25} />
          </View>
          <View>
            <CauhoiForm index={26} />
          </View>
          <View>
            <CauhoiForm index={27} />
          </View>
          <View>
            <CauhoiForm index={28} />
          </View>
          <View>
            <CauhoiForm index={29} />
          </View>
          <View>
            <CauhoiForm index={30} />
          </View>
        </Swiper>
      </View>
    );
  }
};
