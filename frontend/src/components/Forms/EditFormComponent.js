import React, { useEffect, useState } from "react";
import { getAllUsers, updateUser } from "../../api/usersApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSectors } from "../../api/sectors";
import { groupSectorsWithSubSectors } from "../../helper";
import DropDown from "../Dropdown/DropDown";

const EditFormComponent = () => {
  const [name, setName] = useState("");
  const [terms, setTerms] = useState(false);
  const [dropDownData, setDropDownData] = useState([]);
  const [options, setOptions] = useState([]);
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [sectorsData, setSectorsData] = useState(null);

  const getDataFromDropdown = (data) => {
    setDropDownData([...dropDownData, data]);
    setOptions([...options, { value: data, label: data }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { name, terms, dropDownData };
      if (name.length < 1 || dropDownData.length < 1) {
        return toast.error("All fields are required", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
      await updateUser(user._id, formData);
      toast.success("Success", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.reload();
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

  const loadUsers = async () => {
    const {
      data: { data },
    } = await getAllUsers();
    setUsers(data);
  };

  const handleLoadUserData = (user) => {
    setUser(user);
    setDropDownData(user.sectors);
    setTerms(user.termsAndConditions);
    setName(user.name);
  };

  const loadData = () => {
    getSectors().then((data) => {
      const { sectors, subSectors, subSubSectors, subSubSubSectors } =
        data.data;
      const loadedData = groupSectorsWithSubSectors(
        sectors,
        subSectors,
        subSubSectors,
        subSubSubSectors
      );
      setSectorsData(loadedData);
    });
  };
  useEffect(() => {
    loadUsers();
    loadData();
  }, [dropDownData, user]);

  return (
    <div className="row d-flex justify-content-center py-5 px-2 col-sm-12 ">
      <div className="col-md-4 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => handleLoadUserData(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className=" border col-md-6 col-12 p-4">
        <form className=" p-4">
          <ToastContainer />
          <div className=" mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleFormControlInput1" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control "
              id="name"
              defaultValue={user && user.name}
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
              {dropDownData &&
                dropDownData.map((item) => (
                  <div
                    key={item}
                    className=" position-relative badge bg-primary text-wrap mx-2 my-2 py-2 px-3"
                    style={{ width: "6rem" }}
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
            {sectorsData && (
              <DropDown
                sectorsData={sectorsData}
                getDataFromDropdown={getDataFromDropdown}
              />
            )}
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setTerms(!terms)}
              checked
              readOnly
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
      </div>
    </div>
  );
};
export default EditFormComponent;
