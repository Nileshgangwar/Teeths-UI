import React from 'react';
import Teeth from './Components/teeth';
import Info from './Components/Info';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Teeth />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
