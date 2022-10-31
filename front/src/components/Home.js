import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {
 const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

  return (
    <Fragment>
        <MetaData title="Productos WA">  </MetaData>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="http://localhost:3000/HomeAdmin">Productos</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>

        <h1 id="encabezado_producto">Ultimos productos</h1>

        <section id="productos" className='container-mt-5'>

            <div className='row'>
                {/* producto 1 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src = './images/harinaAlmendras.jpg' alt='Harina Almendra'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000/Carrito'>Harina de Almendra 250 gr</a></h5>
                            <div className='rating mt-auto '>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'> $ 20.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin producto 1 */}

                {/* producto 2 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src = './images/harinadeCoco.jpg' alt='Harina de coco'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3001'>Harina de coco 250 gr</a></h5>
                            <div className='rating mt-auto '>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 2 reviews</span>
                            </div>
                            <p className='card-text'> $ 25.000</p><a href='http://localhost:3001'id='view_btn' className='btn btn-block'>
                                ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin producto 2 */}

                {/* producto 3 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src = './images/granolaVainilla.jpg' alt='Granola Keto Vainilla Canela'></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Granola KETO Vainilla Canela 250 gr</a></h5>
                                            <div className='rating mt-auto '>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner'></div>
                                                </div>
                                                <span id='No_de_opiniones'> 12 reviews</span>
                                            </div>
                                            <p className='card-text'> $ 30.000</p><a href='http://localhost:3000'id='view_btn' className='btn btn-block'>
                                                ver detalles
                                            </a>
                                        </div>
                                    </div>
                                </div>
                {/*Fin  producto 3 */}

                  {/* producto 4 */}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src = './images/granolaChocolate.jpg' alt='Granola KETO Chocolate'></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'><a href='http://localhost:3000'> Granola KETO Chocolate 250 gr</a></h5>
                                            <div className='rating mt-auto '>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner'></div>
                                                </div>
                                                <span id='No_de_opiniones'> 15 reviews</span>
                                            </div>
                                            <p className='card-text'> $35.000</p><a href='http://localhost:3000'id='view_btn' className='btn btn-block'>
                                                ver detalles
                                            </a>
                                        </div>
                                    </div>
                                </div>
                {/*Fin  producto 4 */}
            </div>
         </section>


        
    </Fragment>
  )
}

export default Home