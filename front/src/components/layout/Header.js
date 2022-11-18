import React, { Fragment } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand"></div>
          <img src="./images/logo70f.png" alt="Logo Postres Low Carbs"></img>
        </div>
        <div className="col-12 col-md-4 mt-2 mt-md-0">
          <div className="input-group">
            <button id="search-btn" class="btn">
              <i class="fa fa-search fa-2x text-white" aria-hidden="true"></i>
            </button>
            <input
              type="text"
              id="search_field"
              class="form-control"
              placeholder="Buscar Producto"
            ></input>
            <div class="input-group-append"></div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center btn-group dropstart">
          <Link to="/carrito">
            <i
              class="fa fa-shopping-cart fa-2x text-white"
              aria-hidden="false"
            ></i>
            <span className="ml-1" id="cart_count">
              2
            </span>
          </Link>

          <div className="ml-4 dropdown d-inline">
            <Link
              to="#!"
              className="btn dropdown-toggle text-black mr-4"
              type="button"
              id="dropDownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Panel de Control</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropDownMenu">
              <Link className="dropdown-item" to="/dashboard">
                Admin Productos
              </Link>
              <Link className="dropdown-item" to="/">
                Pedidos
              </Link>
              <Link className="dropdown-item" to="/">
                Mi cuenta
              </Link>
              <Link className="dropdown-item" to="/">
                Cerrar Sesion
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
