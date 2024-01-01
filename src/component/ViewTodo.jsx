// ViewTodo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ViewTodo = () => {
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/todo/${id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  }, [id]);

  const handleUpdateClick = () => {
    navigate(`/todo/${id}/update`);
  };

  const handleDeleteClick = () => {
    axios.delete(`http://localhost:3000/todo/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  return (
    <div className='text-white items-center justify-center'>
      {todo ? (
        <div>
          <h2 className='text-xl text-white py-5'>{todo.title}</h2>
          <p>Completed: {todo.isCompleted ? 'Yes' : 'No'}</p>
          <button onClick={handleUpdateClick} className='flex text-black bg-gray-100 px-10 py-2 my-8 rounded items-center justify-center'>Update</button>
          <button onClick={handleDeleteClick} className='flex text-black bg-gray-100 px-10 py-2 my-8 rounded items-center justify-center'>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewTodo;
