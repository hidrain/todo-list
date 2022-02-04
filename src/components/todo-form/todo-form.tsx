import { nanoid } from "nanoid"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import { Todo, TodosProps } from "../../types/types"
import { DeleteIcon } from "../icons/delete-icon"
import { Spacer } from "../../helpers/spacer"


type PropsType = TodosProps & {}

export const TodoForm: React.FC<PropsType> = ({ todos, setTodos }) => {

    const [newTodoLabel, setNewTodoLabel] = useState<string>('')

    const handleNewTodoLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodoLabel(e.target.value)
    }
    const handleNewTodoKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTodoLabel !== '') {
            setTodos(todos => [
                ...todos,
                { id: nanoid(), label: newTodoLabel, isComplete: false }
            ])
            setNewTodoLabel('')
        }
    }
    const handleTodoCompleteChange = (handleTodo: Todo) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setTodos(todos =>
                todos.map(todo => {
                    if (todo.id === handleTodo.id) {
                        return { ...todo, isComplete: e.target.checked }
                    }
                    return todo
                }))

            setNewTodoLabel(e.target.value)
        }

    const handleTodoDeleteClick = (handleTodo: Todo) => () => {
        setTodos(todos => todos.filter(todo => todo.id !== handleTodo.id))
    }

    const handleClearClick = () => {
        setTodos(todos => todos.filter(todo => !todo.isComplete))
    }

    return (
        <div className='todo-container'>
            <input
                type="text"
                value={newTodoLabel}
                onChange={handleNewTodoLabelChange}
                onKeyPress={handleNewTodoKeyPress}
                className='todo-input'
                placeholder='Add a new todo...'
            />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type='checkbox'
                            value={''}
                            checked={todo.isComplete}
                            onChange={handleTodoCompleteChange(todo)}
                        />

                        <Spacer width={10} />
                        {todo.label}
                        <Spacer flex={1} />

                        <button onClick={handleTodoDeleteClick(todo)} className='icon-button'>
                            <DeleteIcon />
                        </button>
                    </li>
                ))}
            </ul>

            <Spacer height={30} />

            <button onClick={handleClearClick} className='todo-button' >
                Delete completed
            </button>

            <Spacer height={40} />

        </div >
    )
}

