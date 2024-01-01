import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import TodoList from './component/TodoList';
import ViewTodo from './component/ViewTodo';
import UpdateTodo from './component/UpdateTodo';
import CreateTodo from './component/CreateTodo';

const App = () => {
  return (
    <BrowserRouter>
    <div className='w-full h-screen bg-black flex items-center justify-center '>
      <div className='flex items-center'>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/todo/:id" element={<ViewTodo />} />
          <Route exact path="/todo/:id/update" element={<UpdateTodo />} />
          <Route exact path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

