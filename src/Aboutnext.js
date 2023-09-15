import React from 'react'

function Aboutnext() {
  return (
    <div>
    <div id='about' className='image'> 
      <img src='../eden-constantino-iJg1YzsEfqo-unsplash.jpg' alt='backgroundImage' className='background-image'/> 
    </div>
    <div className='content-overlay'>
        <h1>Welcome to Task Manager</h1>
        <p>Task Manager will help you to be more <strong> DISCIPLINED</strong></p>
    </div>
    <h2 className='center '>About the App</h2>
    <div className='my-3  '>
        
        <img src='../absolutvision-82TpEld0_e4-unsplash-removebg-preview.jpg' alt='wraperImage'className='col-md-5 float-md-start mb-5 '/>
        <p className='text'>A Todo app, short for "To-Do" app, is a software application or tool designed to help individuals or teams manage tasks and stay organized. Its primary purpose is to make it easy to create, organize, track, and complete tasks or to-do items.</p>
        <p className='text my-2'>Here are some common features and functionalities this app typically provides:</p>    
        <p>
            <ul>
                <li className='my-3 points'><strong>Task Creation:</strong> Users can create new tasks by entering a task description or title. </li>

                <li className='my-3 points'><strong>Task Editing:</strong> Users can edit task details, such as changing the title,  or description.</li>
                <li className='my-3 points'><strong>Task Deletion:</strong> Users can delete tasks they no longer need or want to track.</li>
                <li className='my-3 points'><strong>Task Search: </strong>Users can search for specific tasks or filter tasks based on criteria like due date, priority, or completion status.</li>
            </ul>
        </p>
    
    </div>
    </div>
  )
}

export default Aboutnext
