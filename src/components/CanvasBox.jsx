import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CSS from './CanvasBox.module.css'
import R3FObject from './R3FObject'

const CanvasBox = (props) => {
    const camera = {
        position:[0,0,2]
    }
  return (
    <div>
    <div className={CSS.main_ctn}>
        <div className={CSS.canvas_ctn}>
                <Canvas camera={camera}>
                    <directionalLight color={"white"} position={[4,4,3]}  intensity={3}/>
                    <R3FObject filePath={props.filePath}/>
                </Canvas>
        </div>
    </div>
    <div className={CSS.desc_ctn}>
            {props.text}
    </div>
    </div>
  )
}
const Loading = () => {
    return(
        <p>Loading 3D object, please standby.   </p>
    )
}
export default CanvasBox
