import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

export const Dashboard = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>

        <div className="col-12 col-md-9 py-5">
          <h1 className="my-4">Panel de Control</h1>

          <Fragment>
            <MetaData title={"Panel de Control"} />
            <div className="row pr-4">
              <div className="col-xl-12 col-sm-12 mb-3 py-3">
                <div className="card1 text-black o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Monto Total
                      <br /> <b>$2.000.000</b>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-black card2 o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Productos
                      <br /> <b>250</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer clearfix small z-1"
                    to="/"
                  >
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-black card3  h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Pedidos
                      <br /> <b>80</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer clearfix small z-1"
                    to="/"
                  >
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-black card4 o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Usuarios
                      <br /> <b>512</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer clearfix small z-1"
                    to="/"
                  >
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-black card5 o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Agotados
                      <br /> <b>14</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer clearfix small z-1"
                    to="/"
                  >
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
