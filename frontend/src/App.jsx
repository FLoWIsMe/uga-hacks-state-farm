//import logo from './logo.svg';
import React from 'react';
import {Routes, Route} from "react-router-dom" 
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
//import { Box, Text } from "@chakra-ui/react"

import HomePage from "./pages/Homepage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Potential from "./pages/Potential"
import Breakdown from "./pages/Breakdown"



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
      </Routes> 
      </div>

    </ChakraProvider>
  );
}

export default App;
