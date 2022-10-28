import React from "react";
import Table from "react-bootstrap/Table";

const Ventas = () => {
  return (

    

    <div className="table responsive text-center py-5 mb-5">
      <Table bordered hover>
        <thead className ="table-danger">
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
  );
};

export default Ventas;
