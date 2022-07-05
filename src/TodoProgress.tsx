import { useRecoilValue } from "recoil";
import { todoProgressSelector } from "./atoms";

const TodoProgress = () => {
    const progress = useRecoilValue(todoProgressSelector);

    return (
        <section className="todo-progress">
            <span>
                {progress}            
            </span>
        </section>
    )
}

export default TodoProgress;