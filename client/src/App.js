import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form/Form'
import ContactList from './components/contactList/ContactList'
import Home from './pages/Home/Home'
import OpenDialog from './components/dialog/OpenDialog'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/d' element={<OpenDialog/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/contacts' element={<ContactList/>}/>
      </Routes>

    </div>
  );
}

export default App;
