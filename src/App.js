import logo from './logo.svg';
import './App.css'; 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home'; 
import OpeningPage from './pages/OpeningPage'; 




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/openings/:id' element={<OpeningPage/>} /> 
         


      </Routes>
    </Router>
    </>
  );

}

export default App; 


