import React from "react";
// tried to make this a component but wound up being more trouble than it was worth
const NewRecipeModalContent = () =>
  <div>
    <h2>{this.state.name}</h2>

    <p>Available Barrels: <span>{this.state.availVol}</span></p>

    <form>
      <p>Customer:
        <select id="selectCustomer"></select>
      </p>
      <br />
      <p>Barrels Ordered:
        <input name="orderSize" id="orderSize"/>
      </p>
      <br />
      <input type="hidden" id="id" name="id" value={this.state._id}/>
    </form>

    <button onClick={this.closeModal}>Cancel</button>
    <button onClick={this.handleFormSubmit}>Submit</button>
  </div>

export default NewRecipeModalContent;
