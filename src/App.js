import './App.css';
import React from 'react'
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
