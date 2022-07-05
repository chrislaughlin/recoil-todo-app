import { useSetRecoilState } from "recoil";
import { Todo, todosAtom } from "./atoms";

interface Props {
    todo: Todo;
}

const TodoItem = ({
    todo,
}: Props) => {
    const updateTodos = useSetRecoilState(todosAtom);

    return (
        <li>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => {
                updateTodos(current => {
                    return current.map(item => {
                        if (item.id === todo.id) {
                            return {
                                ...item,
                                completed: !todo.completed
                            }
                        }

                        return item
                    })
                })
              }}
            />
            <span>
              {todo.text}
            </span>
            <button
                onClick={() => {
                    updateTodos(current => {
                        return current.filter(item => item.id !== todo.id)
                    })
                }}
            >
              X
            </button>
          </li>
    )
}

export default TodoItem;
