import React, { useState } from 'react'

function AddTodo({inputTitle,setInputTitle, inputText, setInputText, saveHandler}) {
  const [showInput, setShowInput] = useState()

  const handleClickShow = e =>{
    if(e.target.className==='todo add-new'){
      setShowInput(showInput)
    }
  }
  return (
    <>
      <div className='todo add-new' onClick={handleClickShow}>
        {showInput ? (
          <>
          <input
              type='text'
              placeholder='Write the title...'
              className='add-input'
              value={inputTitle}
              onChange={(event)=>setInputTitle(event.target.value)}
          />
          <textarea
              rows={8}
              cols={20}
              placeholder='Write the details...'
              className='add-textarea'
              value={inputText}
              onChange={(event)=>setInputText(event.target.value)}
          ></textarea>
          <div className='todo-footer'>
              <button 
                className='save'
                onClick={saveHandler}
              >Save</button>
          </div>
        </>) : (
              <button onClick={()=>setShowInput(true)} className="show">+</button>
        )}     
      </div>
    </>
  )
}

export default AddTodo