//import logo from './logo.svg';
import React from 'react';
import {Routes, Route} from "react-router-dom" 
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
//import { Box, Text } from "@chakra-ui/react"

import HomePage from "./pages/Homepage.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Potential from "./pages/Potential.jsx"
import Breakdown from "./pages/Breakdown.jsx"
import Calculating from "./pages/Calculating.jsx";
import Q1 from "./pages/Q1.jsx";
import Q2 from "./pages/Q2.jsx";
import Q3 from "./pages/Q3.jsx";
import Accounts from "./pages/Accounts.jsx";
import AccountCreation from "./pages/AccountCreation.jsx";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/potential" element={<Potential/>}/>
        <Route path="/breakdown" element={<Breakdown/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/calc" element={<Calculating/>}/>
        <Route path="/q1" element={<Q1/>}/>
        <Route path="/q2" element={<Q2/>}/>
        <Route path="/q3" element={<Q3/>}/>
        <Route path="/accounts" element={<Accounts/>}/>
        <Route path="/accountcreation" element={<AccountCreation/>}/>
      </Routes> 
      {/* <HomePage/> */}
      </div>

    </ChakraProvider>
  );
}

export default App;
