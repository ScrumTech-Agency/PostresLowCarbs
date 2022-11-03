import React, { Fragment } from 'react'
import MetaData from './layout/MetaData'
import Table from "react-bootstrap/Table";



export const Carrito = () => {

  return (
    <Fragment>
      <MetaData title="Productos WA"> </MetaData>

      <nav class="nav navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto nav nav-tabs">
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
                  href="http://localhost:3000/ProductDetails"
                >
                  Carrito
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="contenedor d-flex flex-wrap">
        
        <div className="table responsive text-center align-middle">
        
          <Table bordered hover>
          
            <thead className="table-danger">
              <tr>
                <th>Imagen</th>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    className="card-img-top mx-auto"
                    src="./images/harinaAlmendras.jpg"
                    alt="Harina Almendra"
                  ></img>
                </td>
                <td>2</td>
                <td>Harina de Almendra 250 gr</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>
                  <img
                    className="card-img-top mx-auto"
                    src="./images/harinadeCoco.jpg"
                    alt="Harina de coco"
                  ></img>
                </td>
                
                <td>2</td>
                <td>Harina de Coco 250 gr</td>
                <td>20000</td>
                
              </tr>
            </tbody>
            <tfoot>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>$40000</td>
            </tfoot>
          </Table>
          
          <div className="d-grid gap-2 col-4 mx-auto">
            <a
              href="http://localhost:3000"
              id="view_btn"
              className="btn btn-block"
            >
              {" "}
              Finalizar Compra{" "}
            </a>
            <a
              href="http://localhost:3000"
              id="view_btn"
              className="btn btn-block"
            >
              {" "}
              Cancelar{" "}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Carrito