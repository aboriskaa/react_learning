import './index.css';
// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/redux-store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter >
    </React.StrictMode>
)

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBSJOAm1_xpePRYH1MkDMvvkoDLgF8LQpE",
//   authDomain: "project1-94727.firebaseapp.com",
//   projectId: "project1-94727",
//   storageBucket: "project1-94727.appspot.com",
//   messagingSenderId: "1033772386214",
//   appId: "1:1033772386214:web:c348f4659a7b7ae233b167",
//   measurementId: "G-DBW3TNTJZX"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
