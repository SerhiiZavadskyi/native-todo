import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "./../components/Todo";
import TodoContext from "../context/TodoContext";

export const MainScreen = () => {
  const { todos } = useContext(TodoContext);

  let content = todos.length ? (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} />}
      keyExtractor={(item) => item.id}
    />
  ) : (
    <View style={styles.imgWrap}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/no-items.png')}
      />
    </View>
  );
  return (
    <View>
      <AddTodo />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({imgWrap:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  height:300
},
tinyLogo:{
  width: '100%',
  height: "100%",
  resizeMode: 'contain'
}});
