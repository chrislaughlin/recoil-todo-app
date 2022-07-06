import { Todo } from "./types";

interface Props {
    todo: Todo;
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem = ({
    todo,
    onToggleTodo,
    onDeleteTodo,
}: Props) => {
    return (
        <li>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => {
                onToggleTodo(todo.id)
              }}
            />
            <span>
              {todo.text}
            </span>
            <button
                onClick={() => {
                    onDeleteTodo(todo.id)
                }}
            >
              X
            </button>
          </li>
    )
}

export default TodoItem;
