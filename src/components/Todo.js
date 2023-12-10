import React, { useState } from 'react'

function Todo({id,title, text,editHandler,deletehandler}) {
  return (
    <div className='todo'>
        <input type='text' className='todo-input' value={title}/>
        <textarea className='todo-textarea' value={text}></textarea>
        <div>
            <div 
                className='todo-footer' 
                style={{justifyContent: "flex-end"}}
            >
            <button className='save' onClick={()=>deletehandler(id)}>Delete</button>
            <button className='save' onClick={()=>editHandler(id,title,text)}>Edit</button>
            </div>
            </div>
        
    </div>
  )
}

export default Todo