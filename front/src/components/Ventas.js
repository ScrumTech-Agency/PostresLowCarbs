import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";

const Ventas = () => {
  return (
    <Fragment>
      <nav class="nav navbar navbar-expand-lg navbar-light bg-white py-5">
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
                  Modificar Productos
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

      <div className="contenedor d-flex flex-wrap align-content-center m-4 mt-4 py-4">
        <div className="table responsive text-center">
          <Table bordered hover>
            <thead className="table-danger">
              <tr>
                <th>Fecha</th>
                <th>Id Venta</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>27/09/2022</td>
                <td>123</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>28/09/2022</td>
                <td>234</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>29/09/2022</td>
                <td>543</td>
                <td>$10</td>
              </tr>
            </tbody>
            <tfoot>
              <td></td>
              <td>Total</td>
              <td>$95</td>
            </tfoot>
          </Table>
        </div>
      </div>
    </Fragment>
  );
};



export default Ventas;
