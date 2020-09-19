import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AddTodo } from "./src/AddTodo";
import  TodoContext  from "./src/TodoContext";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };


  const removeTodo =(id) => setTodos(prev => prev.filter(item => item.id !== id))
  
  

  return (
    <View>
      <TodoContext.Provider value={{ addTodo, removeTodo }}>
        <Navbar />
        <View style={styles.container}>
          <AddTodo />
          <FlatList
            data={todos}
            renderItem={({ item }) => <Todo todo={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </TodoContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
