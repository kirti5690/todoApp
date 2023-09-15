import React from 'react'

function Navbar() {
  return (
    <div>
       <nav id='home'className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <img src="../Screenshot__145_-removebg-preview.png" alt='my image'width="40" height="28" class="d-inline-block align-text-top" style={{filter:'invert(100%)'}}/>
    <a className="navbar-brand" href="#">Todo App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#app">TodoApp</a>
        </li>
       
      </ul>
      <form className="d-flex">
       
        <button className="btn btn-success me-3" type="submit">Login</button>
        <button className="btn btn-success me-4" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar
