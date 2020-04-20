import React from 'react';

export default function SmurfAdd() {
  return (
    <div>
      <form
        className="add-item-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
