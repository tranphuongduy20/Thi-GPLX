import React from "react";
import { FlatList } from "react-native";
import { CauhoiForm } from "../../../function/taoCauhoi.component";

export const OntapScreen = ({ navigation }) => {
  return (
    <FlatList
      removeClippedSubviews={true}
      data={Array.from({ length: 30 }).map((_, i) => String(i))}
      renderItem={(info) => <CauhoiForm index={info.index + 1} />}
      keyExtractor={(i) => i}
    />
  );
};
