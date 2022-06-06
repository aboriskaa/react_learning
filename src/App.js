import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {
  return <>
    <Header />
    <Navbar />
    <div className='wrapper_bg_img'>
      <Routes>
        <Route path="/dialogs" element={<DialogsConteiner />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </div>
    <Footer />
  </>
}

export default App;
