import { Todo } from "./types";

interface Props {
    todos: Todo[]
}

const TodoProgress = ({todos}:Props) => {
    const completeCount = todos.filter(todo => todo.completed).length;
    const progress = `${completeCount} out of ${todos.length} Todos Completed`

    return (
        <section className="todo-progress">
            <span>
                {progress}            
            </span>
        </section>
    )
}

export default TodoProgress;