import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormContact from './components/form/FormContact';
import Form from './components/form/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/form' element={<FormContact/>}/>
        <Route exact path='/f' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
