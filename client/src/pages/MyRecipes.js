import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Modal from 'react-modal';
import { EditBtn } from "../components/Buttons";

// ============react-modal styles=================


const editModalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.73)'
  },
  content : {
	width			  : '80%',
	input			  : '100%',
    top               : '40%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
	background        : '#FF13C2',
	inputwidth		  : '100%'
  }
};
// ===================================================

class MyRecipes extends Component {

 
  // =============================================

 state = {
    modalIsOpen: false
  };


  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

 
  openModal() {
    this.setState({
      modalIsOpen: true,
      recipe: "Somehow it should load the concerning recipe into the fields as sample text",
    });
  };

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      
      <div>
        <div className="containermyrecipes">
          <div className="row">
            <div id="recipeHeader" className="text-center">Recipe xyz</div>
            <p id="style" className="text-center">Style</p>
            <p id="abv" className="text-center">6.4%</p>
            <p id="description" className="text-center">As our only year-round lager, Unseasonal Lager transcends all seasons. A beer outside of all traditional style guidelines, it creates a style of its own.  Our flagship lager was specially crafted by the team at Arches Brewing to be a lager that calls Atlanta home.  A simple American grain bill is treated with old-world techniques creating a distinct color and body which is light enough for summer and strong enough for winter.  All noble hops provide a classic mild and spicy bitterness.</p>
            <p id="brewtime" className="text-center">6 weeks</p>
            <p id="season" className="text-center">March - April</p>
            <p id="notes" className="text-center">bla bla bla...</p>
			<EditBtn onClick={this.openModal}>Edit</EditBtn>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={editModalStyles}
                      contentLabel="edit"
                    >
                    <h2>{this.state.name}</h2>
		
                    <form>
                      <p>Recipe: <input id="recipeinput"/></p><br />
                      <p>Style: <input id="recipeinput"/></p><br />
					            <p>ABV: <input id="recipeinput"/></p><br />
					            <p>Description: <textarea rows="4" id="recipeinput"/></p><br />
          					  <p>Brewtime: <input id="recipeinput"/></p><br />
          					  <p>Season: <input id="recipeinput"/></p><br />
          					  <p>Notes: <input id="recipeinput"/></p><br />
                    </form>
                    <button onClick={this.closeModal}>Cancel</button>
                    <button onClick={this.closeModal}>Submit</button>
                    </Modal>
          </div>
        </div>
      </div>
    );
  }
};

var containermyrecipes = {
        
      };
  



export default MyRecipes;
