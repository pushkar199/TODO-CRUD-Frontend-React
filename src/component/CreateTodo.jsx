import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    axios.post('http://localhost:3000/todo', {
      title: title,
      isCompleted: isCompleted,
    })
      .then(() => {
        navigate('/'); // Navigate back to the todo list after creation
      })
      .catch((error) => {
        console.error('Error creating todo:', error);
      });
  };

  return (
    <div className='text-white items-center justify-center'>
      <h2 className='item-center text-2xl font-bold text-white py-5'>Create Todo</h2>
      <div>
        <label className='py-5'>
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
        <label>
          Completed:
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleCreate} className='text-black bg-gray-100 px-10 py-2 my-6 rounded items-center justify-center'>Create</button>
    </div>
  );
};

export default CreateTodo;
