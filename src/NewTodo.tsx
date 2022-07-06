import { useState } from 'react';
import { Todo } from './types';

interface Props {
    onAddTodo: (todo: Todo) => void
}

const NewTodo = ({ onAddTodo }: Props) => {
    const [newTodoText, setNewTodoText] = useState<string>('');

    return (
        <div className='new-todo'>
            <input
                value={newTodoText}
                onChange={event => setNewTodoText(event.currentTarget.value)}
            />
            <button
                onClick={() => {
                    onAddTodo({
                        id: Math.random(),
                        text: newTodoText,
                        completed: false
                    })

                    setNewTodoText('');
                }}
            >
                Add
            </button>
        </div>
    )
}

export default NewTodo;
