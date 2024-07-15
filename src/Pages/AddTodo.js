import React, { useRef, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useHistory } from 'react-router-dom';

const AddTodo = () => {
  const { setTodos } = useContext(TodoContext);
  const todoRef = useRef();
  const history = useHistory();

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos((previousTodos) => [...previousTodos, todoRef.current.value]);
    history.push('/');
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" ref={todoRef} placeholder="New Todo" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
