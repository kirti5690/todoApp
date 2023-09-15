import React from 'react'

function About() {
    
  return (
    <div>
         <div className="container overflow-hidden my-5 bodyy" id='Services'>
    <h2 className='my-3'>Services</h2>
  <div className="row gy-5">
    <div className="col-6">
      <div className="p-3 border bg-light">
      <a href='#' className='link-secondary'>Add the task</a>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
      <a href='#' className='link-secondary'>Delete the task</a>
    </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light"><a href='#' className='link-secondary'>Edit the task</a></div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light"> <a href='#' className='link-secondary'>Filter the task</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
