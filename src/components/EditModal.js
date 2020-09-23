import React,{ useState} from "react";
import { View, Modal, StyleSheet, Alert, TextInput, Button } from "react-native";

import { THEME } from "../thema";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);
  
 
  const saveHandler = () => {
    if(title.trim().length < 3){
      Alert.alert('Error', "Minimum length of title three characters")
    } else {
      onSave(title)
    }
  }
  
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Enter title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onCancel} />
          <Button
            color={THEME.DANGER_COLOR}
            style={styles.btnSave}
            title="Save"
            onPress={saveHandler}
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
