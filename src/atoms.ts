import {
    atom, selector,
} from 'recoil';

export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export const todosAtom = atom({
    key: 'todos',
    default: [] as Todo[]
});

export const todoProgressSelector = selector({
    key: 'completeProgress',
    get: ({ get }) => {
        const todos = get(todosAtom);
        const completeCount = todos.filter(todo => todo.completed).length;
        return `${completeCount} out of ${todos.length} Todos Complete`;
    }
})
