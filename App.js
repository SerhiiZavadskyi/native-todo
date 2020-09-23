import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import TodoContext from "./src/context/TodoContext";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";


export default function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "read books",
    },
  ]);
  const [todoId, setTodoId] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState({});

  const addTodo = (title) => {
    const newTodo = {
      id:Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };


  const updateTodo = (id, title) => { 
      setTodos(prevTodos => {
        const toUpdate = [...prevTodos];
        const idx = toUpdate.findIndex(todo => todo.id === id);
        toUpdate[idx].title = title;
        return toUpdate;
      })
  }
  
  const removeTodo = (id) => {
    const { title } = todos.find((item) => (item.id = id));

    Alert.alert(
      "Delete",
      `Delete todo "${title}"?`,
      [
        {
          text: "Cancel",
          style: "positive",
        },
        {
          text: "Delete",
          style: "negative",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((item) => item.id !== id));
            
          },
        },
      ],
      { cancelable: false }
    );
   
  };

  const openTodo = (id) => {
    setTodoId(id);
    setSelectedTodo(todos.find((todo) => todo.id === id));
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
          updateTodo,
          todos,
          selectedTodo,
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
