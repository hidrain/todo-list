import { Todo } from "../../App"
import { TodoItem } from "../todo-item/todo-item"

type TodoListProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setNewLabel: (newTodoLabel: string) => void
}

export const TodoList: React.FC<TodoListProps> =
    ({ todos, setTodos, setNewLabel }) => {

        return (
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        setTodos={setTodos}
                        setNewLabel={setNewLabel}
                        key={todo.id} />
                ))}
            </ul>
        )
    }