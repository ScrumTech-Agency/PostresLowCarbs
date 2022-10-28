import React, { Fragment } from 'react'

export const Menu = () => {
  return (
    <Fragment>

<nav class="class="contenedor d-flex justify-content-evenly">
      
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/HomeAdmin">Lista Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/ProductDetails">Modificar Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/Ventas">Lista Ventas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </Fragment>
  )
}
