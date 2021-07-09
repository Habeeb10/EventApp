import { StyleSheet } from "react-native";
import * as colors from "../../../common/colors";

export const Eventstyles = StyleSheet.create({
  contentcont: {
    width: "90%",
    height: 200,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "skyblue",
  },
  add: {
    color: colors.deepblue,
    fontSize: 17,
  },
  touch: {
    width: 100,
    height: 50,
    backgroundColor: "skyblue",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  create: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.deepblue,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
