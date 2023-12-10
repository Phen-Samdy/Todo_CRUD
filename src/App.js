import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState } from 'react';
import SearchTodo from './components/SearchTodo'
import data from './data';

function App() {
  const [todos, setTodos] = useState(data)
  const [searchTitle, setSearchTitle] = useState('')
  return (
    <div>
      <Header/>
      <SearchTodo handleSearchTodo={setSearchTitle}/>
      <div className="container">
      <TodoList
        todos={
            todos.filter((todo)=>
              todo.title.toLowerCase().includes(searchTitle)
          )
        }
        setTodos={setTodos}
      />  
      </div>
    </div>
  );
}

export default App;
