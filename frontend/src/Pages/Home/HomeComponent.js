import React from "react";
import FormComponent from "../../components/Forms/FormComponent";
import MultiSelect from "../../components/MultiSelect";

const HomeComponent = () => {
  return (
    <div>
      <MultiSelect />
      <div className="d-flex justify-content-center py-5 ">
        <FormComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
