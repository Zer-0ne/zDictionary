import './App.css';
import './css/fontawesome-free-6.2.1-web/css/all.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import Dictionary from './Component/Dictionary/Dictionary';

function App() {
  
  return (
    <>
      <Dictionary/>
    </>
  );
}
export default App;