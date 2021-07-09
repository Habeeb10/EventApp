import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Exit, Vector } from "../../../../assets/svg";
import * as colors from "../../../common/colors";
import { useNavigation } from "@react-navigation/core";

export const MapCard = ({ title, description, onDelete, id }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.vectorbox}>
        <Vector />

        <View style={styles.titlebox}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>

      <View style={styles.svgbox}>
        <TouchableOpacity onPress={onDelete}>
          <Exit />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editbox}
          onPress={() =>
            navigation.navigate("edit", { title, description, id })
          }
        >
          <Text style={styles.edit}>EDIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
  titlebox: {
    marginLeft: 20,
    alignItems: "flex-start",
  },
  svgbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  vectorbox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  edit: {
    color: colors.deepblue,
    fontSize: 12,
  },
  editbox: {
    width: 60,
    height: 30,
    backgroundColor: "skyblue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  container: {
    borderWidth: 1,
    width: "95%",
    height: 80,
    backgroundColor: colors.wheat,
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});
