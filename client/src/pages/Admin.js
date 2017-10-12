import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Admin extends Component {
  render() {
    return (
      
          
   
      <div>
        <h1>Access control</h1>
        <div>
          <table id="access" className="table table-bordered table-responsive" cellSpacing={0} width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Administrator</th>
                <th />
              </tr>
            </thead>
            <tfoot>
            </tfoot><tbody>
              <tr>
                <td>Michael</td>
                <td>michael@github.com</td>
                <td><input type="checkbox" defaultChecked data-toggle="toggle" /></td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <td>Andrew</td>
                <td>andrew@gmail.com</td>
                <td><input type="checkbox" defaultChecked data-toggle="toggle" /></td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUser">Add new user</button>
        <div id="addUser" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title" id="selectedBeer">Add new user</h4>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name" className="form-control" id="availablequantity" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="availablequantity" placeholder="Email" />
              </div>
              <div>
                <p>Register as administrator?</p><input type="checkbox" defaultChecked data-toggle="toggle" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" id="save">Save</button>
                <button type="button" className="btn btn-danger" id="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#startbatch">Start new batch</button>
        <div id="startbatch" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title" id="startbatch">Start a new batch</h4>
              </div>
              <div className="btn-group">
                <button className="btn btn-mini">Select a beer to brew</button>
                <button className="btn btn-mini dropdown-toggle" data-toggle="dropdown">
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Beer 1</a></li>
                  <li><a href="#">Beer 2</a></li>
                </ul>
              </div>
              <div className="form-group">
                <label htmlFor="volume">Volume (Barrel)</label>
                <input type="volume" className="form-control" id="volume" placeholder={40} />
              </div>
              <span className="glyphicon glyphicon-calendar" aria-hidden="true">Projected end date:</span>
              <p>Date imput</p>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" id="Brew">Brew</button>
                <button type="button" className="btn btn-danger" id="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addRecipe">Add new recipe</button>
        <div id="addRecipe" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title" id="selectedBeer">Add new recipe</h4>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name" className="form-control" id="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="style">Style:</label>
                <input type="style" className="form-control" id="style" placeholder="Style" />
              </div>
              <div className="form-group">
                <label htmlFor="abv">ABV:</label>
                <input type="abv" className="form-control" id="abv" placeholder="ABV" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="description" className="form-control" id="description" placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="brewtime">Brew Time (weeks):</label>
                <input type="brewtime" className="form-control" id="brewtime" placeholder="Brew time" />
              </div>
              <div className="form-group">
                <label htmlFor="production">Production:</label>
                <input type="production" className="form-control" id="production" placeholder="Production" />
              </div>
              <div className="form-group">
                <label htmlFor="notes">Notes:</label>
                <input type="notes" className="form-control" id="notes" placeholder="Notes" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" id="recipe">Add recipe</button>
                <button type="button" className="btn btn-danger" id="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
     




export default Admin;
