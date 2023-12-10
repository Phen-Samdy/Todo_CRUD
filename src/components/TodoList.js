import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import {nanoid} from 'nanoid'
import Todo from './Todo'


function TodoList({todos, setTodos}) {
    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')

    const [editTodo,setEditTodo] = useState(null)


    const editHandler = (id,title, text) =>{
        setEditTodo(id)
        setInputTitle(title)
        setInputText(text)
    }

    const saveHandler = () =>{
        if(editTodo){
            setTodos(todos.map((todo)=>(
                todo.id === editTodo ? {
                    ...todo, title: inputTitle,text: inputText
                }:todo
            )))
        }else{
            setTodos((prevTodos)=>[
                ...prevTodos,{
                    id: nanoid(),
                    title: inputTitle,
                    text: inputText
                }
            ])
        }
        setInputTitle('')
        setInputText('')
        setEditTodo(null)
    }

    const deletehandler=(id)=>{
        const newTodos = todos.filter(todo=> todo.id !== id)
        setTodos(newTodos)
    }
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Todos"))
        if(data){
            setTodos(data)
        }
    },[])
    useEffect(()=>{
        window.localStorage.setItem("Todos",JSON.stringify(todos))
    },[todos,setTodos])

    // const searchTodo = ()=>{
    //     const newTodos = todos.filter((todo)=>
    //         todo.title.toLowerCase().includes(searchTitle)
    //     )
    //     setSearchTitle(newTodos)
    // }

  return (
    <>
        <div className='todo-list'>
            {
                todos.map((todo)=>(
                    editTodo === todo.id ?
                    <AddTodo
                        inputText = {inputText}
                        inputTitle = {inputTitle}
                        setInputTitle = {setInputTitle}
                        setInputText = {setInputText}
                        saveHandler = {saveHandler}
                    />:
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        text={todo.text}
                        editHandler={editHandler}
                        deletehandler={deletehandler}
                    />
                ))
            }
            {
                editTodo === null?
                <AddTodo
                    inputTitle={inputTitle}
                    inputText = {inputText}
                    setInputTitle={setInputTitle}
                    setInputText = {setInputText}
                    saveHandler = {saveHandler}
                />:<></>
            }
            
        </div>
    </>
    
  )
}

export default TodoList