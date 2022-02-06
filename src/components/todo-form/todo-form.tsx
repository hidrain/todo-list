import { nanoid } from "nanoid"
import { ChangeEvent, KeyboardEvent } from "react"
import { Todo } from "../../App"
import style from './todo-form.module.css'

type TodoFormProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    newTodoLabel: string
    setNewLabel: (newTodoLabel: string) => void
}

export const TodoForm: React.FC<TodoFormProps> =
    ({ todos, setTodos, newTodoLabel, setNewLabel }) => {

        const handleNewTodoLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
            setNewLabel(e.target.value)
        }
        const handleNewTodoKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && newTodoLabel !== '') {
                setTodos(todos => [
                    ...todos,
                    { id: nanoid(), label: newTodoLabel, isComplete: false }
                ])
                setNewLabel('')
            }
        }

        return (
            <input
                type="text"
                value={newTodoLabel}
                onChange={handleNewTodoLabelChange}
                onKeyPress={handleNewTodoKeyPress}
                className={style.todo_input}
                placeholder='Add a new todo...'
            />
        )
    }

