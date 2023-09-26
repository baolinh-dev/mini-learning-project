import React, { ChangeEvent, useState } from 'react'

function App() {
  const [todo, setTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<string[]>([]) 

  function handleChangeTodo(e: ChangeEvent<HTMLInputElement>): void {
    setTodo(e.target.value)
  }
  function handleAddTodo() {
    setTodoList((prevList) => [...prevList, todo])
    setTodo('')
  } 
  function handleDeleteTodo(todoItem: string) {
    setTodoList((prevList) => prevList.filter(item => item !== todoItem))
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input style={{ border: '1px solid black' }} type='text' value={todo} onChange={handleChangeTodo} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todoItem) => (
          <div>
            <li key={todoItem}>{todoItem}</li>
            <button onClick={() => handleDeleteTodo(todoItem)}>Delete</button>  

          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
