import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ImageIconStyle: {
    margin: 32,
    height: 64,
    width: 64,
    resizeMode: "stretch",
  },
  ImageStyle: {
    margin: 16,
    height: 100,
    width: 100,
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
    borderColor: "#8c1aff",
    height: 72,
  },
  ButtonBienbaoStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 2,
    borderColor: "#ccccff",
    height: 100,
    borderRadius: 0,
  },
  CauhoiStyle: {
    flex: 1,
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    fontSize: 20,
  },
});
