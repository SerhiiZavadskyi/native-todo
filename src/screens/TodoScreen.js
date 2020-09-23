import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import TodoContext from "../context/TodoContext";
import { THEME } from "../thema";

export const TodoScreen = () => {
  const {
    removeTodo,
    onBack,
    updateTodo,
    selectedTodo: { title, id },
  } = useContext(TodoContext);

  const [modal, setModal] = useState(false);
  const onSave = (titleTodo) => {
    updateTodo(id, titleTodo);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        onSave={onSave}
        value={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            color={THEME.GREY_COLOR}
            title="Back"
            onPress={() => onBack()}
          />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.DANGER_COLOR}
            title="Delete"
            onPress={() => removeTodo(id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    width: '85%'
  },
});
