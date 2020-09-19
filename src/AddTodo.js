import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import  TodoContext  from "./TodoContext";

export const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");
      const [disabled, setDisabled] = useState(true)

  const onPressHandler = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
      setDisabled(true)
    }
  };

  const onChangeTextHandler = (text) => {
      setValue(text);
        if(text.trim().length > 2){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
      
  }
  
 

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        onChangeText={(text) =>onChangeTextHandler(text)}
        value={value}
        placeholder="Enter text..."
        autoCorrect={false}
      />
      <Button disabled={disabled} title="Add Todo" onPress={onPressHandler} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flexGrow: 1,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    marginRight: 10,
  },
});
