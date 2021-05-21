import { Route, BrowserRouter ,Switch ,useLocation} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import LoginComponent from "../src/Login/login"; 
import FirstPage from "../src/firstpage/index.jsx"; 
import SignupComponent from "../src/Signup/signup";
import DashboardComponent from "../src/Dashboard/dashboard";
import { AnimatePresence} from "framer-motion";


var firebaseConfig = {
  apiKey: "AIzaSyDj7H-R7cteLlnsBAWyroM8yry7tg3ga3A",
  authDomain: "chat-db414.firebaseapp.com",
  projectId: "chat-db414",
  storageBucket: "chat-db414.appspot.com",
  messagingSenderId: "1059035242667",
  appId: "1:1059035242667:web:0a2105c392c8e2587a17ee",
  measurementId: "G-G59QNHR3HJ"
};

firebase.initializeApp(firebaseConfig);

export default function App () {
  

  return(
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
    <Switch 
    
    id="routing-container">
 
    <Route exact  path="/" component={FirstPage}></Route>  
    <Route path="/login" component={LoginComponent}></Route>
    <Route path="/signup" component={SignupComponent}></Route>
    <Route path="/dashboard" component={DashboardComponent}></Route>
 
    </Switch>
   </AnimatePresence>
    </BrowserRouter>
    );
  }

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();




