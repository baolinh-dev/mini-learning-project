import { useState, ChangeEvent} from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  function handleChangeTodo(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value)
    console.log('todo', todo)
  }
  function handleSaveTodo() {
    setTodoList((prevTodoList) => [...prevTodoList, todo])
  }

  // đoạn này là giao diênhjtức
  return (
    <div>
      <input
        placeholder='Nhập công việc của bạn vào đây'
        style={{ border: '1px solid #ddd' }}
        type='text'
        value={todo}
        onChange={handleChangeTodo}
      />
      <button onClick={handleSaveTodo}>Thêm</button>
      <ul className='pl-4'>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
