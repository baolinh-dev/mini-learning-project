import React, { ChangeEvent, useState } from 'react';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [editingTodo, setEditingTodo] = useState<string | null>(null);
  const [editedTodo, setEditedTodo] = useState<string>(''); // Sử dụng biến mới để lưu trữ trường chỉnh sửa

  function handleChangeTodo(e: ChangeEvent<HTMLInputElement>): void {
    setTodo(e.target.value);
  }

  function handleAddTodo() {
    setTodoList((prevList) => [...prevList, todo]);
    setTodo('');
  }

  function handleEditTodo(todoItem: string) {
    setEditingTodo(todoItem);
    setEditedTodo(todoItem); // Khởi tạo trường chỉnh sửa với giá trị hiện tại của todo
  }

  function handleUpdateTodo() {
    setTodoList((prevList) =>
      prevList.map((item) => (item === editingTodo ? editedTodo : item))
    );
    setEditingTodo(null);
  }

  function handleCancelEdit() {
    setEditingTodo(null);
  }

  function handleDeleteTodo(todoItem: string) {
    setTodoList((prevList) => prevList.filter((item) => item !== todoItem));
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input
        style={{ border: '1px solid black' }}
        type='text'
        value={todo}
        onChange={handleChangeTodo}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todoItem) => (
          <div key={todoItem}>
            {editingTodo === todoItem ? (
              <div>
                {/* Trường chỉnh sửa bây giờ sẽ thay đổi giá trị chỉ khi người dùng thực sự cập nhật */}
                <input
                  type='text'
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <li>{todoItem}</li>
                <button onClick={() => handleEditTodo(todoItem)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todoItem)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
