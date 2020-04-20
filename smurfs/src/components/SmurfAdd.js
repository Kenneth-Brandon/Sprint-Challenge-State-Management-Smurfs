import React from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../store/smurfActions';
import e from 'express';

function SmurfAdd(props) {
  function addSmurf(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    props.postSmurf(data);
  }

  return (
    <div>
      <form className="add-item-form" onSubmit={addSmurf}>
        <label className="form-item">
          Name:
          <input name="name" type="text" />
        </label>
        <label className="form-item">
          Age:
          <input name="age" type="text" />
        </label>
        <label className="form-item">
          Height:
          <input name="height" type="text" />
        </label>
        <button className="form-button">Add</button>
      </form>
    </div>
  );
}

function mapToProps() {
  return {};
}

export default connect(mapToProps, { postSmurf })(SmurfAdd);
