import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/themes';
import { Login } from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
