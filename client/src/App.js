import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormContact from './components/form/FormContact';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/form' element={<FormContact/>}/>
      </Routes>

    </div>
  );
}

export default App;
