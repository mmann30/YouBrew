import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class MySales extends Component {
  render() {
    return (
      
      <div>
        <h1>My Sales</h1>
        <div>
          <table id="example" className="table table-striped table-bordered table-responsive" cellSpacing={0} width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Style</th>
                <th>Quantity (Barrel)</th>
                <th>Client</th>
                <th>Sell date</th>
              </tr>
            </thead>
            <tfoot>
            </tfoot><tbody>
              <tr>
                <td>Beer xzy</td>
                <td>Lager</td>
                <td>4.5</td>
                <td>Beer Shop</td>
                <td>2017/04/25</td>
              </tr>
              <tr>
                <td>XYZ BEER</td>
                <td>Pilsen</td>
                <td>5.3</td>
                <td>Street Cafe</td>
                <td>2017/07/16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
  



export default MySales;
