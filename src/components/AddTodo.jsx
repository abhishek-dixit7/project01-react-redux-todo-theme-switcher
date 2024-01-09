import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addTodoHandler = e => {
    e.preventDefault();
    input && dispatch(addTodo(input));
    setInput('');
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="px-2 bg-transparent border-2 border-blue-200 dark:border-slate-600"
        />
        <button
          type="submit"
          className="border px-2 ml-2 bg-blue-200 dark:bg-slate-600 "
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
