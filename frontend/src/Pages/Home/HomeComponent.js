import React, { useEffect, useState } from "react";
import FormComponent from "../../components/Forms/FormComponent";
import { getSectors } from "../../api/sectors";
import { groupSectorsWithSubSectors } from "../../helper";

const HomeComponent = () => {
  const [sectorsData, setSectorsData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

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
  return (
    <div className="d-flex justify-content-center py-5 px-2 col-sm-12 ">
      <FormComponent sectorsData={sectorsData} />
    </div>
  );
};

export default HomeComponent;
