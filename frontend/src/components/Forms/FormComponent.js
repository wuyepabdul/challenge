import React, { useEffect, useState } from "react";
import { addUser } from "../../api/usersApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropDown from "../Dropdown/DropDown";

const FormComponent = ({ sectorsData }) => {
  const [name, setName] = useState("");
  const [terms, setTerms] = useState(false);
  const [dropDownData, setDropDownData] = useState([]);
  const [options, setOptions] = useState([]);

  const getDataFromDropdown = (data) => {
    setDropDownData([...dropDownData, data]);
    setOptions([...options, { value: data, label: data }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { name, terms, dropDownData };

      if (name.length < 3) {
        toast.error("Name length must be greater than 3", {
          position: toast.POSITION.TOP_LEFT,
        });
      } else if (name.length < 0) {
        toast.error("Name field is required !", {
          position: toast.POSITION.TOP_LEFT,
        });
      } else if (terms !== true) {
        toast.error("Please accept the terms agreement !", {
          position: toast.POSITION.TOP_LEFT,
        });
      } else if (dropDownData.length < 1) {
        toast.error("Please select atleast 1 sector !", {
          position: toast.POSITION.TOP_LEFT,
        });
      } else {
        await addUser(formData);
        toast.success("User Created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload();
      }
    } catch (error) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  const handleRemoveItem = (item) => {
    const filteredList = dropDownData.filter((listItem) => listItem !== item);
    setDropDownData(filteredList);
  };

  useEffect(() => {}, [dropDownData]);

  return (
    <div className="card border col-md-6 col-12">
      <ToastContainer />
      {sectorsData !== null ? (
        <form className=" p-4">
          <div className=" mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleFormControlInput1" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control "
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className=" mb-3 col-md-12 col-12">
            <label for="exampleFormControlInput1" className="form-label">
              Sectors <span className="text-danger">*</span>
            </label>
            <div>
              {dropDownData.map((item) => (
                <div
                  key={item}
                  className=" position-relative badge bg-primary text-wrap mx-2 my-2 py-2 px-3"
                  style={{ width: "6rem;" }}
                >
                  {item}
                  <span
                    onClick={() => handleRemoveItem(item)}
                    className="position-absolute top-0 start-100 translate-middle  p-2 bg-danger border border-light rounded-circle"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="visually-hidden">New alerts</span>x
                  </span>
                </div>
              ))}
            </div>
            <DropDown
              sectorsData={sectorsData}
              getDataFromDropdown={getDataFromDropdown}
            />
          </div>
          <div className="form-check mb-3">
            <input
              name="terms"
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => setTerms(!terms)}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Agree to terms <span className="text-danger">*</span>
            </label>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      ) : (
        "loading form.."
      )}
    </div>
  );
};
export default FormComponent;
