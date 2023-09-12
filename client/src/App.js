import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, } from 'react-router-dom';
import HomeWithAppbar from './components/Home/HomeWithAppbarAndRout'

  function App() {
    return (
      <BrowserRouter >
        <HomeWithAppbar/>
      </BrowserRouter>
    );
  }



export default App;
