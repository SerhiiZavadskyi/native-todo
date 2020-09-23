import React from "react";
import { View, Modal, StyleSheet, TextInput, Button } from "react-native";
import { THEME } from "../thema";
export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onCancel} />
          <Button
            color={THEME.DANGER_COLOR}
            style={styles.btnSave}
            title="Save"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  input: {
    padding: 10,
    backgroundColor: THEME.WHITE_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
