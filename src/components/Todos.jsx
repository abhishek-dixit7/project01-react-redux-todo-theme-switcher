import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos() {
  let todos = useSelector(state => state.todos.todos);

  const dispatch = useDispatch();
  return (
    <div>
      {todos.length > 0 && <h1 className="my-2">Todos:</h1>}
      {todos.map(todo => (
        <div
          className="min-w-[24rem] flex justify-between items-center mb-1"
          key={todo.id}
        >
          <li
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${todo.active ? '' : 'line-through'}`}
          >
            {todo.text}
          </li>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
            className="ml-2 border px-2 bg-blue-200 dark:bg-slate-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
