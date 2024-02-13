import React, { useState } from 'react'
import'./index.css'

function Form (props) {

    const [value, setValue] = useState("");

  return (
    <>
        <form onSubmit={
          e => {
              e.preventDefault();
              props.putTodo(value);
              setValue("");
          }
      }>
            <input type='text' placeholder='Введите заметку...' value={value} onChange={ e => setValue(e.target.value) } />
            <button className='dob'>Добавить</button>
          </form>

    </>
  )
}

export default Form