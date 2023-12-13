import React, { useState } from "react";
import Select from "react-dropdown-select";

const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];

const FormComponent = () => {
  const [values, setValues] = useState([]);
  return (
    <form className="card p-4" style={{ width: "38rem" }}>
      <div className=" mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          required
        />
      </div>

      <div className=" mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Sector <span className="text-danger">*</span>
        </label>
        <Select
          options={options}
          onChange={(values) => setValues(values)}
          multi="true"
          required="true"
        />
        {console.log(values)}
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Agree to terms <span className="text-danger">*</span>
        </label>
      </div>

      <button type="button" class="btn btn-outline-primary">
        Save
      </button>
    </form>
  );
};
export default FormComponent;
