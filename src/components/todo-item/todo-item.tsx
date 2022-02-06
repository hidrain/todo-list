import { ChangeEvent } from "react"
import { Todo } from "../../App"
import { Spacer } from "../../helpers/spacer"
import { DeleteIcon } from "../icons/delete-icon"
import style from './todo-item.module.css'

type TodoItemProps = {
    todo: Todo
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setNewLabel: (newTodoLabel: string) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodos, setNewLabel }) => {

    const handleTodoCompleteChange = (handleTodo: Todo) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setTodos(todos =>
                todos.map(todo => {
                    if (todo.id === handleTodo.id) {
                        return { ...todo, isComplete: e.target.checked }
                    }
                    return todo
                }))
            setNewLabel(e.target.value)
        }

    const handleTodoDeleteClick = (handleTodo: Todo) => () => {
        setTodos(todos => todos.filter(todo => todo.id !== handleTodo.id))
    }

    return (
        <li key={todo.id}>
            <input
                type='checkbox'
                value={''}
                checked={todo.isComplete}
                onChange={handleTodoCompleteChange(todo)} />

            <Spacer width={10} />
            {todo.label}
            <Spacer flex={1} />

            <button
                onClick={handleTodoDeleteClick(todo)}
                className={style.icon_button}>
                <DeleteIcon />
            </button>
        </li>
    )
}