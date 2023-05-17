import {useState} from 'react'
import './App.css';

function App() {

  const deleteTodo = function (id){
    const removed = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(removed)
  }
  const [todos, setTodos] = useState ([
    { id: 1, name: "Buy shopping", priority: false},
    { id: 2, name: "Clean bathroom", priority: true },
    { id: 3, name: "Car's MOT", priority: false },
  ]);

  const [newTodo, setNewTodo] = useState("")
  const [radio, setRadio] = useState(false)

  const list = todos.map((todo) => {
    return (
      <li key= {todo.id} className={todo.priority ? 'red' : 'green'}>{todo.name}
      <button onClick={() => deleteTodo(todo.id)}>X</button></li>
    )
  })

  const handleInput = function(event) {
    setNewTodo(event.target.value)
  }

  const radioHandler = function(event) {
    setRadio(event.target.checked)
  }

  const saveNewTodo = function(event){
    event.preventDefault()

    const newTodoObj = { id: Date.now(), name: newTodo, priority: radio }
    const newList = [...todos, newTodoObj]

    setTodos(newList)
    setNewTodo("")
    setRadio(false)
  }




  return (
    <div className="App">
    <h1>To Do List</h1>
    <form onSubmit={saveNewTodo}>
      <label htmlFor='new-item'>Add new</label>
      <input type= "text" value={newTodo} onChange={handleInput}></input>
      <label htmlFor='new-item'>Priority</label>
      <input type='checkbox' checked ={true} onChange={radioHandler}></input>
      <input type='submit' value="Add"></input>
    </form>
    <ul>
      {list}
    </ul>
    </div>
  );
}

export default App;
