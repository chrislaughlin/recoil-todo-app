import TodoItem from "./TodoItem";
import { Todo } from "./types";

interface Props {
    todos: Todo[],
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}
const TodoList = ({ 
    todos,
    onToggleTodo,
    onDeleteTodo, 
}: Props) => {
    return (
        <ul>
          {
            todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onToggleTodo={onToggleTodo}
                        onDeleteTodo={onDeleteTodo} 
                    />
                )
            })
          }
        </ul>
    )
}

export default TodoList;