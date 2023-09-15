import React, { useState } from 'react';

function Form(props) {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editInput, setEditInput] = useState('');
  const [filterText, setFilterText] = useState('');

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const newTask = (event) => {
    event.preventDefault();
    setList([...list, input]);
    setInput('');
  };

  const removeTask = (i) => {
    const updatedList = list.filter((elem, id) => {
      return i !== id;
    });
    setList(updatedList);
  };

  const editTask = (i) => {
    setEditingIndex(i);
    setEditInput(list[i]);
  };

  const saveEditedTask = () => {
    if (editingIndex !== -1) {
      const updatedList = [...list];
      updatedList[editingIndex] = editInput;
      setList(updatedList);
      setEditingIndex(-1);
    }
  };

  const filterTasks = (text) => {
    setFilterText(text);
  };

  const filteredList = list.filter((task) =>
    task.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div id='app' className='todo-app'>
      <form className='task-input' onSubmit={newTask}>
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
      <div>
        <input
          type='text'
          placeholder='Filter tasks...'
          className='filter-input form-control'
          value={filterText}
          onChange={(e) => filterTasks(e.target.value)}
        />
        {filteredList.map((data, i) => {
          return (
            <div key={i} className='task-list'>
              {editingIndex === i ? (
                <>
                  <input
                    type='text'
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button onClick={saveEditedTask}>Save</button>
                </>
              ) : (
                <>
                  <div className='task-text'>{data}</div>
                  <div className='task-buttons'>
                    <button onClick={() => editTask(i)}>Edit</button>
                    <button onClick={() => removeTask(i)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
