import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'


const App = () => {
  return <>
    <HeaderContainer />
    <Navbar />
    <div className='wrapper_bg_img'>
      <Routes>
        <Route path="/dialogs" element={<DialogsConteiner />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    <Footer />
  </>
}

export default App;
