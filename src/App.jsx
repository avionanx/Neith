import React,{ useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom' 
import loadable from '@loadable/component';
const Main = loadable(()=>import('./components/pages/Main'));
const Navigation = loadable(()=>import('./components/pages/Navigation'));
function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
    </Routes>
  )
}

export default App
