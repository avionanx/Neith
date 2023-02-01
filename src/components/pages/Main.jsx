import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CSS from './Main.module.css'
import NavigationButton from '../NavigationButton'
const Main = () => {
  return (
    <>
      <div className={CSS.main_container}>
        <h2 style={{fontWeight:"lighter",marginBottom:"1rem"}}>Welcome to Neith.</h2>
        <p style={{marginBottom:"1rem"}}>Neith is the largest extraterrestrial subject database on planet Earth.</p>
        <NavigationButton to='./navigation' text='Proceed'/>
      </div>
    </>
  )
}

export default Main
