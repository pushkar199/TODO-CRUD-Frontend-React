// TodoList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <div className='text-white items-center justify-center'>
      <h1 className='item-center text-3xl font-bold text-white py-10'>Todo List</h1>
      <table>
        <thead className='py-5'>
          <tr>
            <th>ID</th>
            <th className='px-7'>Title</th>
            <th className='px-7'>Completed</th>
          </tr>
        </thead>
        <tbody className='py-5'>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td className='px-7'>
                <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
              </td>
              <td className='px-7'>{todo.isCompleted ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create">
        <button className='text-black bg-gray-100 px-10 py-2 my-16 rounded items-center justify-center'>Create</button>
      </Link>
    </div>
  );
};

export default TodoList;
