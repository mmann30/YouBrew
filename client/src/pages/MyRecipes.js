import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class MyRecipes extends Component {
  render() {
    return (
      
      <div>
        <div className="container">
          <div className="row">
            <div id="recipeHeader" className="text-center">Recipe xyz</div>
            <button type="button" className="btn btn-danger center-block" data-toggle="modal" data-target="#editrecipe" id>Edit</button>
            <p id="style" className="text-center">Style</p>
            <p id="abv" className="text-center">6.4%</p>
            <p id="recipe" className="text-center">As our only year-round lager, Unseasonal Lager transcends all seasons. A beer outside of all traditional style guidelines, it creates a style of its own.  Our flagship lager was specially crafted by the team at Arches Brewing to be a lager that calls Atlanta home.  A simple American grain bill is treated with old-world techniques creating a distinct color and body which is light enough for summer and strong enough for winter.  All noble hops provide a classic mild and spicy bitterness.</p>
            <p id="brewtime" className="text-center">6 weeks</p>
            <p id="season" className="text-center">March - April</p>
            <p id="notes" className="text-center">bla bla bla...</p>
          </div>
        </div>
        <div id="editrecipe" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title" id="selectedBeer">Edit recipe</h4>
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
                <button type="button" className="btn btn-success" id="recipe">Edit recipe</button>
                <button type="button" className="btn btn-danger" id="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
  



export default MyRecipes;
