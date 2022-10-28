import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MetaData from '../layout/MetaData';
import { useParams} from 'react-router-dom';
import { getProductDetails, clearErrors } from '../../actions/productActions';
import {useAlert} from 'react-alert';
import {Carousel} from 'react-bootstrap';


export const ProductDetails = () => {
    const {loading, product, error} = useSelector(state =>state.productDetails);
    const {id} = useParams();
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductDetails(id))
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }

    }, [dispatch, alert, error, id])
    

  return (
    <Fragment>
        {loading ? <i className='fa fa-refresh fa-spin fa-3x fa-fw'></i> :(
            <Fragment>
            <MetaData title={product.nombre}></MetaData>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                    <img src='..\images\harinaAlmendra.jpeg' alt="imagen del proucto" height="450" width="450"></img> 
                    <Carousel pause='hover'>
                        {product.imagen && product.imagen.map(img =>(
                            <Carousel.Item key={img.public_id}>
                                <img className='d-block w-100' src={img.url} alt={product.nombre}></img>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

    
                <div className='col-12 col-lg mt-5'>
                    <h3>Harina de Almendra 300 gr</h3>
                    <p id='product_id'>Product #123456789</p>
                </div>
            </div> 
            </Fragment>
        )}
    </Fragment>
    )
}
