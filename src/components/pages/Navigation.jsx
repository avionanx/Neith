import React, {lazy} from 'react'
import { Link } from 'react-router-dom'
/*
import CanvasBox from '../CanvasBox';
import NavigationButton from '../NavigationButton';
import BaseModal from '../modals/BaseModal';
*/
import CSS from './Navigation.module.css'
import loadable from '@loadable/component';
import ImageBox from '../ImageBox';
import { LinearToneMapping } from 'three';
const CanvasBox = loadable(()=>import('../CanvasBox'));
const NavigationButton = loadable(()=>import('../NavigationButton'));
const BaseModal = loadable(()=>import('../modals/BaseModal'));
const Navigation = () => {
  return (
    <div className={CSS.main_ctn}>
        <p className={CSS.logo}>Neith 1.8.1</p>
        <div className={CSS.navigation_ctn}>
          <ul>
            <li><NavigationButton to="/about" text="About" /></li>
            <li><NavigationButton to="/solaris" text="Solaris" /></li>
            <li><NavigationButton to="/foundation" text="Foundation" /></li>
            <CanvasBox 
            text={<><p style={{display:"inline"}}>{'The moon, also heres a sick inline modal '}</p> <BaseModal text="button"/></>}
            filePath='../Moon.gltf'
            />
            <ImageBox filePath='../fourpixels.png' text={"lorem ipsum stuff"}/>
          </ul>
        </div>
    </div>
  )
}

export default Navigation
