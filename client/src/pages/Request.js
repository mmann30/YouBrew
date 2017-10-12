import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { ReactTableDefaults } from 'react-table'



class Request extends Component {

  render() {
    return (
      <Container fluid>
        <Row className="inventory-row">
          <Col size="md-9">
            <h1>Inventory</h1>
        		<table id="inventory" className="table table-bordered table-responsive" cellspacing="0" width="100%">
        			<thead>
        				<tr>
        					<th>Name</th>
        					<th>Style</th>
        					<th>Quantity (Barrel)</th>
        					<th></th>
        					<th></th>
        				</tr>
        			</thead>
            			<tfoot></tfoot>
        					<tbody>
        						<tr>
        							<td>Beer xzy</td>
        							<td>Lager</td>
        							<td>4.5</td>
        							<td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#orderModal">Order</button></td>
        							<td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#editModal">Edit</button></td>
        						</tr>

        						<tr>
        							<td>XYZ BEER</td>
        							<td>Pilsen</td>
        							<td>5.3</td>
        							<td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#orderModal">Order</button></td>
        							<td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#editModal">Edit</button></td>
        						</tr>
        					</tbody>
        		</table>
          </Col>
        </Row>
        <Row className="process-row">
          <Col size="md-9">
            <h1>In process</h1>
        			<table id="inProcess" className="table table-bordered table-responsive" cellspacing="0" width="100%">
            		<thead>
        					<tr>
        						<th>Name</th>
        						<th>Style</th>
        						<th>Batch Volume</th>
        						<th>Volume Available</th>
        						<th>Ready by</th>
        						<th></th>
        						<th></th>
        					</tr>
            		</thead>
          			<tfoot></tfoot>
        				<tbody>
        					<tr>
        						<td>Beer xzy</td>
        						<td>Lager</td>
        						<td>40</td>
        						<td>34</td>
        						<td>2017/04/25</td>
        						<td></td>
        						<td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#orderModal">Order</button></td>
        					</tr>
        					<tr>
        						<td>XYZ BEER</td>
        						<td>Pilsen</td>
        						<td>38</td>
        						<td>38</td>
        						<td>2017/07/16</td>
        						<td></td>
        						<td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#orderModal">Order</button></td>
        					</tr>
        				</tbody>
        			</table>
          </Col>
          {/* Edit modal */}
          <div id="editModal" className="modal fade" role="dialog">
    			  <div className="modal-dialog">
      				<div className="modal-content">
      				  <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title" id="selectedBeer">Edit</h4>
      				  </div>
      					<div className="form-group">
      	    			<label for="Quantity">49 barrels</label>
      	    			<input type="Quantity" className="form-control" id="availablequantity" placeholder="Put in the new available amount"></input>
    	  				</div>
    					  <div className="modal-footer">
    					   <button type="button" className="btn btn-success">Edit</button>
    					   <button type="button" className="btn btn-danger">Cancel</button>
    					  </div>
    				  </div>
    			  </div>
    			</div>

          {/* Order modal */}
          <div id="orderModal" className="modal fade" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title" id="selectedBeer">Beer XYZ</h4>
                </div>
                <div className="modal-body">
                  <p>Available quantity: 40 barrel</p>
                  <div className="btn-group">
                    <button className="btn btn-mini">Who is you Buyer?</button>
                    <button className="btn btn-mini dropdown-toggle" data-toggle="dropdown">
                    <span className="caret"></span>
                    </button>
          					  <ul className="dropdown-menu">
            						<li><a href="#">Corner Beer Shop</a></li>
            						<li><a href="#">Beer World</a></li>
          					  </ul>
      						  <div className="form-group">
      							  <label for="usr">How many Barrels do you want to sell?:</label>
      							  <input type="text" className="form-control" id="usr"></input>
      						  </div>
				          </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success">Order</button>
                  <button type="button" className="btn btn-danger">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Request;
