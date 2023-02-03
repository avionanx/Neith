import React, {lazy} from 'react'
import { Link } from 'react-router-dom'
import CSS from './Navigation.module.css'
import loadable from '@loadable/component';
import { LinearToneMapping } from 'three';
const CanvasBox = loadable(()=>import('../CanvasBox'),{fallback:<p>Loading 3D object, please standby.</p>});
const NavigationButton = loadable(()=>import('../NavigationButton'));
const BaseModal = loadable(()=>import('../modals/BaseModal'));
const ImageBox = loadable(()=>import('../ImageBox'),{fallback:<p>Loading image, please standby.</p>});
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
