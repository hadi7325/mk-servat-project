import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Router from './components/Route';
import  {AppProvider}  from "./context/context"
import ScrollToTop from './components/ScrollTop';

console.log(ScrollToTop)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
    <Router>
      <ScrollToTop/>
    </Router>
    </AppProvider>
  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

