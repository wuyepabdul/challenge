import React from "react";
import MenuItems from "../MenuItems/MenuItems";

const Dropdown = ({ submenus, dropdown, depthlevel }) => {
  depthlevel = depthlevel + 1;
  const dropdownClass = depthlevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthlevel} />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;
