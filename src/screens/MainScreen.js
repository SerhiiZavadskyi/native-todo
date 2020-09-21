import React, {  useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo} from '../components/AddTodo';
import { Todo } from "./../components/Todo";
import TodoContext from "../context/TodoContext";

export const MainScreen = () => {

    const { todos } = useContext(TodoContext);
  return (
    <View>
      <AddTodo />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
