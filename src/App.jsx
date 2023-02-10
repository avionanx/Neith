import React,{ useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom' 
import loadable from '@loadable/component';
import Background from './components/Background';
const Main = loadable(()=>import('./components/pages/Main'));
const Navigation = loadable(()=>import('./components/pages/Navigation'));
const Solaris = loadable(()=>import('./components/pages/Solaris'));
const Foundation = loadable(()=>import('./components/pages/Foundation'));
const About = loadable(()=>import('./components/pages/About'));
function App() {

  return (
    <>
    <Background/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
      <Route path="/solaris" element={<Solaris/>}/>
      <Route path="/foundation" element={<Foundation/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
