import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/f' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
