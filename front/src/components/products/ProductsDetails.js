import React, { Fragment, useEffect, useState } from 'react';
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
    const [quantity, setQuantity] = useState(1); 


    useEffect(() => {
      dispatch(getProductDetails(id))
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }
    }, [dispatch, alert, error, id])

    /*Esta funcion permite aumentar la cantidad de productos que se piensa agregar al carrito */

    const increaseQty = () => {
        const contador = document.querySelector('.count')

        if(contador.valueAsNumber >= product.inventario) return;

        const qty = contador.valueAsNumber + 1;
        setQuantity(qty)
    }
    
    /*Esta funcion permite disminuir la cantidad de productos que se piensa agregar al carrito */
    const decreaseQty = () => {
        const contador = document.querySelector('.count')

        if(contador.valueAsNumber <= 1) return;

        const qty = contador.valueAsNumber - 1;
        setQuantity(qty)
    }
    

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
                                <img className='d-block w-100' src={"../"+ img.url} alt={product.nombre}></img>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

    
                <div className='col-12 col-lg mt-5'>
                    <h3>{product.nombre}</h3>
                    <p id='product_id'>ID del producto {product._id}</p>
                    <hr /> {/*para separar o dejar una linea de por medio    */}  
                 
                    <div className='rating-outer'>
                        <div className='rating-inner' style={{width: `${(product.calificacion/5)*100}%`}}></div>
                    </div>
                    <span id='No_de_reviews'>({product.numCalificaciones} Reviews)</span>
                    <hr />
                    <p id='precio_producto'>${product.precio}</p>
                    <div className='stockCounter d-inline'>
                        <span className='btn btn-danger minus' onClick={decreaseQty}>-</span> {/*Boton para restar producto */}
                        <input type='number' className='form-control count d-inline' value={quantity} readOnly></input> {/*readOnly sirve para evitar que el cliente escriba y deba pulsar el boton para elegir la cantidad de productos a llevar*/}
                        <span className='btn btn-primary plus' onClick={increaseQty}>+</span> {/*Boton para sumar producto */} 
                    </div>
                    <button type="button" id='carrito_btn' className='btn btn-primary d-inline ml-4'disabled={product.inventario===0}>Agregar al Carrito</button>{/*Boton que se activa s??lo cuando el inventario de productos sea diferente de cero */}
                    <hr />
                    <p>Estado: <span id='stock_estado' className={product.inventario > 0 ? 'greenColor' : 'redColor'}></span>{product.inventario > 0 ? 'En existencia' : 'Agotado'}</p>
                    <hr />
                    <h4 className='mt-2'>Descripcion:</h4>
                    <p>{product.descripcion}</p>
                    <hr />
                    <p id='vendedor'>Vendido por: <strong>{product.vendedor}</strong></p>       
                    <button id='btn_review' type='button' className='btn btn-primary mt-4' data-toggle='modal' data-target='#calificacionModal'>Deja tu Opinion</button> 
                    <div className='alert alert-danger mt-5' type='alert'>Inicia Sesion para dejar tu review</div>
                    
                    {/*Mensaje emergente para dejar opinion y calificaciones */}
                    <div className='row mt-2 mb-5'>
                        <div className='rating w-50'>
                            <div className='modal fade' id='ratingModal' tabIndex='-1' role='dialog' aria-labelledby='ratingModalLabel' aria-hidden='true'>
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <div className='model-header'>
                                            <h5 className='modal-title' id='ratingModalLabel'>Enviar review</h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                                <span aria-hidden='true'>NOMBRE DUMMIEN POR AHORA</span>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            <ul className='stars'>
                                                <li className='star'><i className='fa fa-star'></i></li>
                                                <li className='star'><i className='fa fa-star'></i></li>
                                                <li className='star'><i className='fa fa-star'></i></li>
                                                <li className='star'><i className='fa fa-star'></i></li>
                                                <li className='star'><i className='fa fa-star'></i></li>
                                            </ul>

                                            <textarea name="review" id='review' className='form-control mt3'></textarea>

                                            <button className='btn my-3 float-right review-btn px-4 text-white' data-dismiss='modal' aria-label='Close'>Enviar</button>
                                        </div>
                                    </div>
                            </div>        
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </Fragment>
        )}
    </Fragment>
    )
}
