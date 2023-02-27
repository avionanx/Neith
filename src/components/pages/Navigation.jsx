import React, {lazy} from 'react'
import { Link } from 'react-router-dom'
import CSS from './Navigation.module.css'
import loadable from '@loadable/component';
import { LinearToneMapping } from 'three';
const CanvasBox = loadable(()=>import('../CanvasBox'),{fallback:<p>Loading 3D object, please standby.</p>});
const NavigationButton = loadable(()=>import('../NavigationButton'));
const BaseModal = loadable(()=>import('../modals/BaseModal'));
const ImageBox = loadable(()=>import('../ImageBox'),{fallback:<p>Loading image, please standby.</p>});
const Clock = loadable(()=>import('../Clock'));
const Navigation = () => {
  return (
    <div className={CSS.main_ctn}>
        <p className={CSS.logo}>Navigation</p>
        <div className={CSS.navigation_ctn}>
          <ul>
            <li><NavigationButton to="/about" text="About" /></li>
            <li><NavigationButton to="/solaris" text="Solaris" /></li>
            <li><NavigationButton to="/foundation" text="Foundation" /></li>
            <CanvasBox 
            text={<><p style={{display:"inline"}}>{'Moon. '}</p> <BaseModal text="button"/></>}
            filePath='../Moon.gltf'
            />
            <ImageBox filePath='../placeholder.svg' text={"Placeholder text"}/>
            <Clock/>
          </ul>
        </div>
    </div>
  )
}

export default Navigation
