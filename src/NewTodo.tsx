import {
    RecoilState,
    useRecoilState,
} from 'recoil';
import { useState } from 'react';

import { todosAtom } from './atoms';

const NewTodo = () => {
    const [newTodoText, setNewTodoText] = useState<string>('');
    const [todos, setTodos] = useRecoilState(todosAtom);

    return (
        <div className='new-todo'>
          <input 
            value={newTodoText}
            onChange={event => setNewTodoText(event.currentTarget.value)}
          />
          <button
            onClick={() => {
                setTodos([
                    {
                        id: Math.random(),
                        text: newTodoText,
                        completed: false
                    },
                    ...todos
                ])

                setNewTodoText('');
            }}
          >
            Add
          </button>
        </div>
    )
}

export default NewTodo;
