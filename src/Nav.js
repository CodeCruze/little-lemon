import React from 'react';
import logo from './Logo .svg';


function Navig(){
    return(
        // <Navbar>
        //     <img src={logo} alt="Logo"></img>
        //     <ul>
        //         <li><a href='/'>HOME</a></li>
        //         <li><a href='/'>ABOUT</a></li>
        //         <li><a href='/'>MENU</a></li>
        //         <li><a href='/'>RESERVATIONS</a></li>
        //         <li><a href='/'>ORDER ONLINE</a></li>
        //         <li><a href='/'>LOGIN</a></li>
        //     </ul>
        // </Navbar>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/"><img src={logo} alt="Logo"></img></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">RESERVATIONS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ORDER ONLINE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">LOGIN</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navig;