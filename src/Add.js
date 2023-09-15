import React, { useState } from 'react'

function Add() {
    const[input,setinput]=useState('');
    const[list,setlist]=useState([]);
    
    const onInputChange =(event)=>{
        setinput(event.target.value);
    }
    const newtask =(event)=>{
        event.preventDefault();
        setlist([...list,input]);
        setinput('');
    }
  return (
    <div className='todo-app'>
      <form className='task-input' onSubmit={newtask}>
        <input
          type='text'
          placeholder='Enter a task..'
          className='text1'
          value={input}
          onChange={onInputChange}
        />
        <button className='btn me-4' type='submit'>
          Add Task
        </button>
      </form>
    </div>
  )
}

export default Add
