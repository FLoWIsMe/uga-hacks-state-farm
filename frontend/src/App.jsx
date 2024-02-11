//import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
//import { Box, Text } from "@chakra-ui/react"
import Home from "./Home"

function App() {
  return (

    <ChakraProvider>
      <div className="App">
        <Home/>
      </div>

    </ChakraProvider>
  );
}

export default App;
