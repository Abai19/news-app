import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import NewsPage from './components/NewsPage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import SingleNew from './components/SIngleNew';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/newsPage" element={<NewsPage/>} />
        <Route path="/newsPage/:id" element={<SingleNew/>} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);