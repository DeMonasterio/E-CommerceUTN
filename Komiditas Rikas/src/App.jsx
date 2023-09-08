import React from 'react';
import { ContextProvider } from './UseContext';
import './App.css'
import Menu from "./components/Menu.jsx";

function App() {
  return (
    <ContextProvider>
      <Menu/>
    </ContextProvider>
  );
}

export default App;