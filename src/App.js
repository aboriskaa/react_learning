import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className='wrapper_bg_img'>
        <Routes>
          <Route path="/profile" element={<Profile postsData={props.postsData} />} />
          <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
