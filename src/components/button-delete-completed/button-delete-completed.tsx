import { TodosProps } from "../../App"
import { Spacer } from "../../helpers/spacer"
import style from './button-delete-completed.module.css'

export const ButtonDeleteCompleted: React.FC<TodosProps> =
    ({ todos, setTodos }) => {

        const handleClearClick = () => {
            setTodos(todos => todos.filter(todo => !todo.isComplete))
        }

        return (
            <div>
                <Spacer height={30} />

                <button onClick={handleClearClick} className={style.todo_button}>
                    Delete completed
                </button>

                <Spacer height={40} />
            </div>
        )
    }