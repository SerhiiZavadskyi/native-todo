import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import TodoContext from "../context/TodoContext";
import { THEME } from "../thema";

export const TodoScreen = () => {
  const {
    onBack,
    selectedTodo: { title, id },
  } = useContext(TodoContext);
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color={THEME.GREY_COLOR} title="Back" onPress={() => onBack()} />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.DANGER_COLOR}
            title="Delete"
            onPress={() => console.log("remove")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  button: {
    width: "40%",
  },
});
