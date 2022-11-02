import React, { Fragment } from 'react'
import MetaData from './layout/MetaData'
import Table from "react-bootstrap/Table";



export const Carrito = () => {

  return (
    <Fragment>
        <MetaData title="Productos WA">  </MetaData>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://localhost:3000/HomeAdmin">Lista producto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://localhost:3000/ProductDetails">Carrito</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

        
        <div className="contenedor d-flex flex-wrap align-content-center">
    <div className="table responsive text-center">
      <Table bordered hover>
        <thead className ="table-danger">
          <tr>
            <th>imagen</th>
            <th>Cantidad</th>
            <th>producto</th>
            <th>Valor</th>
            

          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img className='card-img-top mx-auto' src = './images/harinaAlmendras.jpg' alt='Harina Almendra'></img></td>
            <td>2</td>
            <td>Harina de Almendra 250 gr</td>
            <td>20000</td>
          </tr>
          <tr>
          <td><img className='card-img-top mx-auto' src = './images/harinadeCoco.jpg' alt='Harina de coco'></img></td>
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
      <div  className='d-grid gap-2 col-6 mx-auto' >
      <a href='http://localhost:3000'id='view_btn' className='btn btn-block'> Finalizar Compra </a>
      <a href='http://localhost:3000'id='view_btn' className='btn btn-block'> Cancelar </a>

      </div>
    </div>
  </div>  

        
    </Fragment>
  )
}

export default Carrito