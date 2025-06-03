import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id:1, title:"go to gym",status:false}
  ])
  const addTask = () => {
    setTodos([...todos,{
      id:document.getElementById('id').value,
      title:document.getElementById('title').value,
      status:document.getElementById('status').value,
    }])
  }
  return (
    <>
      <input id='id' type='text' placeholder='id'></input>
      <br/>
      <input id='title' type='text' placeholder='title'></input>
      <br/>
      <input id='status' type='text' placeholder='status'></input>
      <br/>
      <button onClick={addTask}>Add task</button>
      <br/>
      {/* {JSON.stringify(todos)} */}
      {
        todos.map((todo) => {
          return <>
          <h3>{todo.id}</h3>
          <h3>{todo.title}</h3>
          <h3>{todo.status?"True":"False"}</h3>
          </>
        })
      }
    </>
  )
}

export default App
