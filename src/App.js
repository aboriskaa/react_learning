import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const MP = (props) => {
  // let path = "";
  return <div>ЖОПКА</div>
}


const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className='wrapper_bg_img'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs state={props.state.messagesPage} />} />
          <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
