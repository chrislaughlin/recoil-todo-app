import React, { useState } from 'react';

import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoProgress from './TodoProgress';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        React TODO Application
      </header>
      <NewTodo 
        onAddTodo={todo => {
          setTodos([todo, ...todos]);
        }}
      />
      <TodoList 
        todos={todos} 
        onToggleTodo={id => {
          setTodos(todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }

            return todo;
          }))
        }}
        onDeleteTodo={id => {
          setTodos(todos.filter(todo => todo.id !== id))
        }}
      />
      <TodoProgress 
        todos={todos}
      />
    </div>
  );
}

export default App;
