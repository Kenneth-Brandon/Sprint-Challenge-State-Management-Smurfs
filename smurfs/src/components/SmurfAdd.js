import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/smurfActions';

function SmurfAdd(props) {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(null);
  // const [height, setHeight] = useState('');

  const [formData, setFormData] = useState({});

  function addSmurf(event) {
    event.preventDefault();
    // const data = new FormData(e.target);
    console.log('data: ', formData);
    props.postSmurf(formData);
  }

  function formChangeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // console.log(formData)
  }

  return (
    <div>
      <form className="add-item-form" onSubmit={(event) => addSmurf(event)}>
        <label className="form-item">
          Name
          <input name="name" type="text" onChange={formChangeHandler} />
        </label>
        <label className="form-item">
          Age
          <input name="age" type="text" onChange={formChangeHandler} />
        </label>
        <label className="form-item">
          Height
          <input name="height" type="text" onChange={formChangeHandler} />
        </label>
        <button className="form-button">Add</button>
      </form>
    </div>
  );
}

function mapToProps() {
  return {};
}

export default connect(mapToProps, {
  postSmurf,
})(SmurfAdd);
