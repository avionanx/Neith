import React from 'react'
import ImageBox from '../ImageBox'
import CSS from './BaseModalContent.module.css'
const BaseModalContent = (props ) => {
  return (
    <>
    <p className={CSS.title}>{props.title?props.title:"Default Title"}</p>
    <p>There will be custom modal content and CSS here.</p>
    <ImageBox width={"200px"} filePath={'/placeholder.svg'} text={'placeholder text'}/>
    </>
  )
}

export default BaseModalContent
