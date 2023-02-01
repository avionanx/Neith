import React from 'react'
import TextContent from '../TextContent';
import CSS from './BaseModal.module.css'
const BaseModal = (props) => {
  const [modalState,setModalState] = React.useState(false)
  return (
    <>
    <span onClick={()=>setModalState((p)=>!p)} style={{color:"blue",cursor:"pointer",display:"inline"}}>{props.text}</span>
    {modalState && <div className={CSS.modal} onClick={()=>setModalState(false)}>
      <div className={CSS.modal_content} onClick={e => e.stopPropagation()}>
        <p>Title</p>
        <p>Some text</p>
        <TextContent/>
        <button className={CSS.close_button} onClick={()=>setModalState((p)=>!p)}>Return</button>
      </div>
    </div>
}
    </>
    );
}

export default BaseModal
