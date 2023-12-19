import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function DropDown({ sectorsData, getDataFromDropdown }) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle type="button">Select</MDBDropdownToggle>
      <MDBDropdownMenu>
        {sectorsData.map((sector) => (
          <div key={sector._id}>
            {sector.subSectors.length > 0 ? (
              <MDBDropdown>
                <MDBDropdownToggle tag="ul" style={{ cursor: "pointer" }}>
                  {sector.title}
                </MDBDropdownToggle>
                <MDBDropdownMenu responsive="lg-end">
                  {sector.subSectors.map((subSector) =>
                    subSector.subSubSectors.length > 0 ? (
                      <MDBDropdown>
                        <MDBDropdownToggle
                          tag="ul"
                          style={{ cursor: "pointer" }}
                        >
                          {subSector.title}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu responsive="lg-end">
                          {subSector.subSubSectors.map((subSubSector) =>
                            subSubSector.subSubSubSectors.length > 0 ? (
                              <MDBDropdown>
                                <MDBDropdownToggle
                                  tag="ul"
                                  style={{ cursor: "pointer" }}
                                >
                                  {subSubSector.title}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu responsive="lg-end">
                                  {subSubSector.subSubSubSectors.map(
                                    (subSubSubSector) => (
                                      <MDBDropdownItem
                                        link
                                        onClick={(e) =>
                                          getDataFromDropdown(
                                            subSubSubSector.title
                                          )
                                        }
                                      >
                                        {subSubSubSector.title}
                                      </MDBDropdownItem>
                                    )
                                  )}
                                </MDBDropdownMenu>
                              </MDBDropdown>
                            ) : (
                              <MDBDropdownItem
                                link
                                onClick={() =>
                                  getDataFromDropdown(subSubSector.title)
                                }
                              >
                                {subSubSector.title}
                              </MDBDropdownItem>
                            )
                          )}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    ) : (
                      <MDBDropdownItem
                        link
                        onClick={() => {
                          getDataFromDropdown(subSector.title);
                        }}
                      >
                        {subSector.title}
                      </MDBDropdownItem>
                    )
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBDropdownItem link>{sector.title}</MDBDropdownItem>
            )}
          </div>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
