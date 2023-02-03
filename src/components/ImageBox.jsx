import React from 'react'
import CSS from './ImageBox.module.css'
const ImageBox = (props) => {
  return (
    <div>
      <div style={{width:`${props.width}`}} className={CSS.main_ctn}>
          <div  className={CSS.img_ctn}>
                  <img  src={props.filePath}/>
          </div>
      </div>
      <div style={{width:`${props.width}`}} className={CSS.desc_ctn}>
              {props.text}
      </div>
    </div>
  )
}

export default ImageBox
