export type Todo = {
    id: string
    label: string
    isComplete: boolean
}
export type TodosProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

