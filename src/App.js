import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AddTodo from './AddTodo';
import { TodoProvider } from './todoContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Add" element={<AddTodo />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
