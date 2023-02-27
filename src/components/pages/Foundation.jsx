import React from 'react'
import NavigationButton from '../NavigationButton'
import CSS from './Foundation.module.css'
const Foundation = () => {
  return (
    <div className={CSS.main}>
      <p className={CSS.logo}>Foundation</p>
      <div className={CSS.foundation_ctn}>hi</div>
      <NavigationButton to="/navigation" text="Return to Navigation"/>
    </div>
  )
}

export default Foundation
