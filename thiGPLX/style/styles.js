import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ImageIconStyle: {
    margin: 32,
    height: 64,
    width: 64,
    resizeMode: "stretch",
  },
  TextStyle: {
    marginBottom: 4,
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  ButtonTrangchuStyle: {
    width: "94%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#ccccff",
    height: 72,
    borderRadius: 100,
    margin: 5,
    marginBottom: "1%",
  },
  ButtonBanglaiStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderColor: "#ccccff",
    height: 72,
  },
  ButtonBanglaiPressedStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#ff1a1a",
    height: 72,
  },
  CauhoiStyle: {
    flex: 1,
  },
});
