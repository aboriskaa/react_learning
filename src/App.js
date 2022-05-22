import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';


const App = (props) => {
  return <><Header /><Navbar /><div className='wrapper_bg_img'>
    <Routes>
      <Route path="/dialogs" element={<Dialogs state={props.state.messagesPage} />} />
      <Route path="/profile" element={<Profile
        profilePage={props.state.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />} />
    </Routes>
  </div><Footer /></>
}

export default App;
