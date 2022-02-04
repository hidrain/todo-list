import { useState } from 'react';
import './App.css';
import { TodoForm } from './components/todo-form/todo-form';
import { Todo } from './types/types';

export const App = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const todosProps = { todos, setTodos }

  return (
    <div className="todo-app">
      <TodoForm {...todosProps} />
    </div>
  );
}

