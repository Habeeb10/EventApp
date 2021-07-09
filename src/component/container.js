import { SafeAreaView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export const Container = ({ children, barColor, backgroundColor }) => {
  return (
    <>
      <StatusBar style={"dark"} />
      <SafeAreaView style={{ backgroundColor: barColor }} />
      <View style={{ flex: 1, backgroundColor }}>{children}</View>
    </>
  );
};
