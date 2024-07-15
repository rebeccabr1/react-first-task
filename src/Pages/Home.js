import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <Link to="/add">Add Todo</Link>
    </div>
  );
};

export default Home;
