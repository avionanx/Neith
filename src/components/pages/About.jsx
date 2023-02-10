import React from 'react'
import NavigationButton from '../NavigationButton'
import CSS from './About.module.css'
const About = () => {
  return (
    <div className={CSS.main_ctn}>
      <p className={CSS.logo}>About</p>
      <p>Neith is a science-fiction project about the Solar System.</p>
      <p>All the objects and renders were made with Blender 3 by me.</p>
      <p>Inspired by the <i>SCP Foundation</i></p>
      <NavigationButton to="/navigation" text="Return to Navigation"/>
    </div>
  )
}

export default About
