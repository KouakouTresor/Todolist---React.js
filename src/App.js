import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
function App() {
  return (
    <div className="todoApp">
      <h1 className="text-center mt-4">TodoList</h1>
      <TodoList />
    </div>
  );
}

export default App;
