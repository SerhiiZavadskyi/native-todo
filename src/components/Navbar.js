import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../thema";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
});
