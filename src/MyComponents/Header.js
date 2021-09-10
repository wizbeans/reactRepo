import React from 'react'

export default function Header() {
    return (
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Connect with Studies</a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>

  <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <a className ="nav-link" href="#">Home <span className ="sr-only">(current)</span></a>
      </li>
      
      <li className ="nav-item dropdown">
        <a className ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Archive
        </a>
        <div className ="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className ="dropdown-item" href="https://forms.office.com/r/v1sv8hjVFg">PHYSICS TEST: Light</a>
          <a className ="dropdown-item" href="https://forms.office.com/r/qGV9tnD2ps">Science Practical Test</a>
          <a className ="dropdown-item" href="https://forms.office.com/r/G854nyN26p">MATHS TEST: assertion and reason</a>
          <a className="dropdown-item" href="https://forms.gle/RdD3SmLQgbXZ5obW6">MATHS TEST-1</a>
        </div>
      </li>
      
    </ul>
    <form className ="form-inline my-2 my-lg-0">
      <input className ="form-control mr-sm-2" type="search" placeholder="Search On Google" aria-label="Search"/>
      <a class="btn btn-outline-dark" href="https://www.google.com/" role="button"> Search</a>
    </form>
  </div>
</nav>
    )
}
