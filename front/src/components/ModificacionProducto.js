import React, { Fragment } from 'react'


 export const ModificacionProducto = () => {

  return (
   <Fragment>
     
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://localhost:3000/HomeAdmin">Lista Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://localhost:3000/Ventas">Lista Ventas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div className='row d-flex justify-content-around'>
            <div className='col-4 col-lg-2'><strong className='mt-2'> Productos</strong>
            <hr />
            
            <li>Producto #1</li>
            <li>Producto #2</li>
            <li>Producto #3</li>
            <li>Producto #4</li>
            <li>Producto #5</li>
            <li>Producto #6</li>
            
            </div>
            <div className='col-12 col-lg mt-2 img-fluid' id="imagen_producto">
                <img src='..\images\granolaChocolate.jpg' alt="imagen del proucto" height="350" width="350"></img>
                <button type="button" id='carrito_btn' className='btn btn-success  mt-2 ml-6'>Subir una Imagen</button>
            </div>
            <div className='col-12 col-lg mt-2'>
                <h4 className='mt-2'>Nombre del producto:</h4>   
                <input
                type="text"
                id="search_field"
                class="form-control"
                placeholder=""
                ></input>
                <h4 className='mt-2'>Descripción:</h4>
                <input
                type="text"
                id="search_field"
                class="form-control"
                placeholder=""
                ></input>
                <h4 className='mt-2'>Precio:</h4>
                <input
                type="text"
                id="search_field"
                class="form-control"
                placeholder="0"
                ></input>
                <h4 className='mt-2'>Stock:</h4>
                <input
                type="text"
                id="search_field"
                class="form-control"
                placeholder="0"
                ></input>
                <hr />
                <button type="button" id='carrito_btn' className='btn btn-primary d-inline ml-4'>Guardar</button>
                <button type="button" id='carrito_btn' className='btn btn-danger d-inline ml-4'>Cancelar</button>
            </div>
        </div> 
   </Fragment>
  )
}

    