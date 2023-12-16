export const sectorsData = [
  { title: "Manufacturing" },
  { title: "Service" },
  { title: "Other" },
];

export const manufacturingSubSectorData = (id) => {
  return [
    {
      title: "Construction Materials",
      sector: id,
    },
    {
      title: "Electronics and Optics",
      sector: id,
    },
    {
      title: "Food and Beverage",
      sector: id,
    },
    {
      title: "Furniture",
      sector: id,
    },
    {
      title: "Machinery",
      sector: id,
    },
    {
      title: "Metalworking",
      sector: id,
    },
    {
      title: "Plastic and Rubber",
      sector: id,
    },
    {
      title: "Printing",
      sector: id,
    },
    {
      title: "Textile and Clothing",
      sector: id,
    },
    {
      title: "Wood",
      sector: id,
    },
  ];
};

export const serviceSubSectorData = (id) => {
  return [
    {
      title: "Business Service",
      sector: id,
    },
    {
      title: "Engineering",
      sector: id,
    },
    {
      title: "Information Technology and Telecommunications",
      sector: id,
    },
    {
      title: "Tourism",
      sector: id,
    },
    {
      title: "Translation Services",
      sector: id,
    },
    {
      title: "Transport and Logistics",
      sector: id,
    },
  ];
};

export const otherSubSectorData = (id) => {
  return [
    {
      title: "Creative Industries",
      sector: id,
    },
    {
      title: "Energy Technology",
      sector: id,
    },
    {
      title: "Environment",
      sector: id,
    },
  ];
};

export const foodAndBeverageSubSubSectorData = (id) => {
  return [
    { title: "Bakery and Confectionery Products", subSector: id },
    { title: "Beverages", subSector: id },
    { title: "Fish and Fish Products", subSector: id },
    { title: "Meat and Meat Products", subSector: id },
    { title: "Milk and Dairy Products", subSector: id },
    { title: "Sweet and Snack Food", subSector: id },
    { title: "Other", subSector: id },
  ];
};

export const furnitureSubSubSectorData = (id) => {
  return [
    { title: "Bathroom/Sauna", subSector: id },
    { title: "Bedroom", subSector: id },
    { title: "Children's Room", subSector: id },
    { title: "Kitchen", subSector: id },
    { title: "Living Room", subSector: id },
    { title: "Office", subSector: id },
    { title: "Outdoor", subSector: id },
    { title: "Project Furniture", subSector: id },
    { title: "Other (Furniture)", subSector: id },
  ];
};

export const machinerySubSubSectorData = (id) => {
  return [
    { title: "Machinery Components", subSector: id },
    { title: "Machinery Equipments/Tools", subSector: id },
    { title: "Manufacture of Machinery", subSector: id },
    { title: "Maritime", subSector: id },
    { title: "Metal Structures", subSector: id },
    { title: "Repair and Maintenance Service", subSector: id },
    { title: "Other", subSector: id },
  ];
};

export const metalworkingSubSubSectorData = (id) => {
  return [
    { title: "Construction of Metal Structures", subSector: id },
    { title: "Houses and Buildings", subSector: id },
    { title: "Metal Products", subSector: id },
    { title: "Metal Works", subSector: id },
  ];
};

export const plasticAndRubberSubSubSectorData = (id) => {
  return [
    { title: "Packaging", subSector: id },
    { title: "Plastic Goods", subSector: id },
    { title: "Plastic Processing Technology", subSector: id },
    { title: "Plastic Profiles", subSector: id },
  ];
};

export const printingSubSubSectorData = (id) => {
  return [
    { title: "Advertising", subSector: id },
    { title: "Books/Periodicals Printing", subSector: id },
    { title: "Labeling and Packaging Printing", subSector: id },
  ];
};

export const textileAndClothingSubSubSectorData = (id) => {
  return [
    { title: "Clothing", subSector: id },
    { title: "Textile", subSector: id },
  ];
};

export const woodSubSubSectorData = (id) => {
  return [
    { title: "Wooden Building Materials", subSector: id },
    { title: "Wooden Houses", subSector: id },
    { title: "Other (Wood)", subSector: id },
  ];
};

export const InfoTechTelcomSubSubSectorData = (id) => {
  return [
    { title: "Data processing, Web Portals, E-marketing", subSubSector: id },
    { title: "Programming,Consultancy", subSubSector: id },
    { title: "Software, Hardware", subSubSector: id },
    { title: "Telecommunications", subSubSector: id },
  ];
};

export const transportAndLogisticsSubSubSectorData = (id) => {
  return [
    { title: "Air", subSubSector: id },
    { title: "Rail", subSubSector: id },
    { title: "Road", subSubSector: id },
    { title: "Water", subSubSector: id },
  ];
};

export const maritimeSubSubSubSectorData = (id) => {
  return [
    { title: "Aluminium and Steel Workboats", subSubSector: id },
    { title: "Boat/Yacht Building", subSubSector: id },
    { title: "Ship Repair and Conversion", subSubSector: id },
  ];
};

export const metalWorksSubSubSubSectorData = (id) => {
  return [
    { title: "CNC-machining", subSubSector: id },
    { title: "Forgings-Fasteners", subSubSector: id },
    { title: "Gas, Plasma, Laser Cutting", subSubSector: id },
    { title: "MIG,TIG, Aluminium Welding", subSubSector: id },
  ];
};

export const plasticProcessingSubSubSubSectorData = (id) => {
  return [
    { title: "Blowing", subSubSector: id },
    { title: "Moulding", subSubSector: id },
    { title: "Plastics Welding and Processing", subSubSector: id },
  ];
};
