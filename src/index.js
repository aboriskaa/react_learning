import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'POST 1', likesCount: 12 },
  { id: 2, message: 'POST 2', likesCount: 102 }
]
let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' },
  { id: 7, name: 'Gul' }
]

let messagesData = [
  { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
  { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
  { id: 3, message: '3 Lorem, ipsum dolor.' },
  { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
