// UpdateTodo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTodo = () => {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch the existing Todo data by its ID
    axios.get(`http://localhost:3000/todo/${id}`)
      .then((response) => {
        const { title, isCompleted } = response.data;
        setTitle(title);
        setIsCompleted(isCompleted);
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  }, [id]);

  const handleUpdate = () => {
    // Make a PUT request to update the Todo item
    axios.put(`http://localhost:3000/todo/${id}`, {
      title,
      isCompleted,
    })
      .then(() => {
        navigate(`/`); // Navigate back to view the updated Todo
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  return (
    <div className='text-white items-center justify-center'>
      <h2 className='item-center text-2xl font-bold text-white py-5'>Update Todo</h2>
      <div>
        <label className='py-2'>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='text-black'
          />
        </label>
      </div>
      <div>
        <label className='py-8'>
          Completed:
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleUpdate} className='text-black bg-gray-100 px-10 py-2 my-6 rounded items-center justify-center'>Update</button>
    </div>
  );
};

export default UpdateTodo;
