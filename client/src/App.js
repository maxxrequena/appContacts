import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form/Form'
import ContactList from './components/contactList/ContactList'
import Home from './pages/Home/Home'
import AboutMe from './pages/aboutMe/AboutMe';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/aboutme' element={<AboutMe/>}/>
        <Route exact path='/addcontact' element={<Form/>}/>
        <Route exact path='/contacts' element={<ContactList/>}/>
      </Routes>

    </div>
  );
}

export default App;
