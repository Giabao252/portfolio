import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Routes instead of switch
import { Home, Resume } from "./components/components"

const App = () => {
  return (
    <div className='home_wrapper'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
