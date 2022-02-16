import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form/Form'
import ContactList from './components/contactList/ContactList'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/f' element={<Form/>}/>
        <Route exact path='/list' element={<ContactList/>}/>
      </Routes>

    </div>
  );
}

export default App;
