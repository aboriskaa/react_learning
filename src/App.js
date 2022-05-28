import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return <><Header /><Navbar /><div className='wrapper_bg_img'>
    <Routes>
      <Route path="/dialogs" element={<DialogsConteiner />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<UsersContainer />} />
    </Routes>
  </div><Footer /></>
}

export default App;
