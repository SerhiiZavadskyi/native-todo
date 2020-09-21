import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import TodoContext from "./src/context/TodoContext";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(true);
  const [selectedTodo, setSelectedTodo ] = useState({})
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((item) => item.id !== id));

  const openTodo = (id) => {
    setTodoId(id);
    setSelectedTodo(todos.find(todo => todo.id === id))
  };

  const onBack = () => {
    setTodoId(null);
  };

  const content = todoId ? <TodoScreen /> : <MainScreen />;
  return (
    <View>
      <TodoContext.Provider
        value={{
          addTodo,
          removeTodo,
          openTodo,
          onBack,
          todos,
          selectedTodo
        }}
      >
        <Navbar />
        <View style={styles.container}>{content}</View>
      </TodoContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
