import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserComponent from './Components/UserComponent.js';
import BookComponent from './Components/BookComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import CartComponent from './Components/CartComponent';
import OrderComponent from './Components/OrderComponent';
import OrderItemsComponent from './Components/OrderItemsComponent';
import UserAddComponent from './Components/UserAddComponent';
import BookAddComponent from './Components/BookAddComponent';
import Layout from './Layout';
import HomePageComponent from './Components/HomePageComponent';
import LoginComponent from './LoginComponent';
import { UserContext} from './UserCOntext/UserContext'
// const [context, setContext] = useState({});
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
