import React from "react";
import Covid from "./Components/covid";
import Statewise from "./Statewise";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Covid/>}/>
      <Route path='/statewise' element={<Statewise/>}/>
      </Routes>
      
    </Router>
  );
};

export default App;
