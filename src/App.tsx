import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

/*
TODO:
- Create a list comp that uses useRecoilValue
- update progress to use a selector 
*/

import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoProgress from './TodoProgress';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          Recoil TODO Application
        </header>
        <NewTodo />
        <TodoList />
        <TodoProgress />
      </div>
    </RecoilRoot>
  );
}

export default App;
