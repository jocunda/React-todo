import './App.css';
import CardList from "./components/CardList"
import { useState } from 'react';
import CardForm from './components/CardForm';


export default function App() {

  const [todos, setTodos] = useState<Array<Todo>>([])

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, check: false }])
    }
  }

  const toogleComplete: ToogleComplete = selectedTodo => {
    const updateTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, check: !todo.check }
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const delTodo: delTodo = () => {
    const newToDoItems = todos.filter(todo => todo.check === false)
    setTodos(newToDoItems)
  }



  return <>
    <div className="App">
      <h1 className="title">To do List</h1>
      <CardForm addTodo={addTodo} />
      <CardList todos={todos} toogleComplete={toogleComplete} delTodo={delTodo} />
    </div>
  </>
};

