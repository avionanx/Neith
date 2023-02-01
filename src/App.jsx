import React,{ useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom' 
import loadable from '@loadable/component';
import Background from './components/Background';
const Main = loadable(()=>import('./components/pages/Main'));
const Navigation = loadable(()=>import('./components/pages/Navigation'));
function App() {

  return (
    <>
    <Background/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
    </Routes>
    </>
  )
}

export default App
