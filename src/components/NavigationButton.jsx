import React from 'react'
import { Link } from 'react-router-dom'
import CSS from './props.module.css'
const NavigationButton = (props) => {
  return (
    <>
    <div className={CSS.button_container}>
      <Link className={CSS.button} to={props.to}>{props.text}</Link>
      {/*<div className={CSS.button_underline}></div>*/}
    </div>
    </>
  )
}

export default NavigationButton
