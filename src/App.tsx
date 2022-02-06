import './App.css';
import { useState } from "react"
import { TodoForm } from './components/todo-form/todo-form';
import { ButtonDeleteCompleted } from './components/button-delete-completed/button-delete-completed';
import { TodoList } from './components/todo-list/todo-list';

export type Todo = {
  id: string
  label: string
  isComplete: boolean
}
export type TodosProps = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const App = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoLabel, setNewTodoLabel] = useState<string>('')

  return (
    <div className="todo-app">
      <div className='todo-container'>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          newTodoLabel={newTodoLabel}
          setNewLabel={(newTodoLabel) => { setNewTodoLabel(newTodoLabel) }} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          setNewLabel={(newTodoLabel) => { setNewTodoLabel(newTodoLabel) }} />

        <ButtonDeleteCompleted
          todos={todos}
          setTodos={setTodos} />
      </div >
    </div>
  )
}

