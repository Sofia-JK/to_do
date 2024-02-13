import { useState } from 'react'
import './index.css'
import Form from './form'

function App() {
  const [todos, setTodos] = useState([])

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert("Введите текст")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div className='zametka'>
        <p>ЗАМЕТКИ</p>
        <Form putTodo={putTodo} />
        <p>Мои заметки</p>
        <ul>
          {
            todos.map(todo => {
              return (
                <li >
                  <div className={todo.done ? "todo done" : "todo"} key={todos.id} onClick={() => toggleTodo(todo.id)}>{todo.text}</div>
                  <button className='dob' onClick={e => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}>Удалить</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
