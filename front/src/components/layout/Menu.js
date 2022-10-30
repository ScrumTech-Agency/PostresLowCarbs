import React, { Fragment } from 'react'

export const Menu = () => {
  return (
    <Fragment>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/HomeAdmin">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/ProductDetails">Modificar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/Ventas">Ventas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </Fragment>
  )
}

export default Menu;
