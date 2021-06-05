import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <div className="app"> */}
        <Router />
        {/* </div> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
