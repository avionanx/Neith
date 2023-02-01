import React, {useRef} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
const R3FObject = (props) => {
    const model = useLoader(GLTFLoader,props.filePath);
    const boxRef = useRef();
    useFrame(()=>{
        boxRef.current.rotation.y += 0.001;
    })
  return (
    <mesh ref={boxRef}>
        <primitive object={model.scene} />
    </mesh>
  )
}

export default R3FObject
