import React, { Fragment } from 'react';

const CrearProducto = () => {
  return (
    <Fragment>

      <nav class="nav navbar navbar-expand-lg navbar-light bg-white py-5">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 me-auto nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="http://localhost:3000/HomeAdmin"
                >
                  Lista Productos
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="http://localhost:3000/Ventas"
                >
                  Lista Ventas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row d-flex justify-content-around">
        <div className="col-4 col-lg-2">
          <strong className="mt-2"> Productos</strong>
          <hr />

          <li>Granola Vainilla</li>
          <li>Granola Chocolate</li>
          <li>Cranola Coco</li>
          <li>Harina Almendras</li>
          <li>Harina de Coco</li>
          <li>Chocolate</li>
        </div>
        <div className="col-12 col-lg mt-2 img-fluid" id="imagen_producto">
          <img
            src="..\images\granolaChocolate.jpg"
            alt="imagen del proucto"
            height="350"
            width="350"
          ></img>
          <button
            type="button"
            id="carrito_btn"
            className="btn btn-success  mt-4 ml-4"
          >
            Subir Imagen
          
          </button>
          
        </div>
        <div className="col-12 col-lg">
          <h5 className="mt-0">Nombre del producto:</h5>
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder=""
          ></input>
          <h5 className="mt-4">Descripción:</h5>
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder=""
          ></input>
          <h5 className="mt-4">Precio:</h5>
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="0"
          ></input>
          <h5 className="mt-4">Stock:</h5>
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="0"
          ></input>
          <hr />
          <button
            type="button"
            id="carrito_btn"
            className="btn btn-danger d-inline ml-4"
          >
            Cancelar
          </button>

          <button
            type="button"
            id="carrito_btn"
            className="btn btn-success d-inline ml-4"
          >
            Crear Producto
          </button>
          

          
          
        </div>
      </div>


    </Fragment>
  )
}

export default CrearProducto