import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Harina de Almendra 300 gr"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src='..\images\harinaAlmendra.jpeg' alt="imagen del proucto" height="450" width="450"></img>
            </div>
            <div className='col-12 col-lg mt-5'>
                <h3>Harina de Almendra 300 gr</h3>
                <p id='product_id'>Product #123456789</p>
            </div>
        </div>
        
    </Fragment>
  )
}
