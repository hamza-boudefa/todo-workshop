import './App.css';
import { useState } from 'react';
import { Data } from './components/Data';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  // data as initial value 
  const [todos, setTodos] = useState(Data)


  // add the new todo to old todos in Data 
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <div className="App">
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;

