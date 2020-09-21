import React from "react";
import { View, Modal, StyleSheet, TextInput, Button } from "react-native";
export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrap}>
        <TextInput />
        <Button title="Cancel" onPress={} />
        <Button title="Save" />
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
});
