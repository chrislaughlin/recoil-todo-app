import { useRecoilValue } from "recoil"
import { todosAtom } from "./atoms"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useRecoilValue(todosAtom);

    return (
        <ul>
          {
            todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                    />
                )
            })
          }
        </ul>
    )
}

export default TodoList;