export const groupSectorsWithSubSectors = (
  sectors,
  subSectors,
  subSubSectors,
  subSubSubSectors
) => {
  const groupedSectors = sectors.map((sector) => ({
    ...sector,
    subSectors: subSectors
      .filter((subSector) => subSector.sector._id === sector._id)
      .map((subSector) => ({
        _id: subSector._id,
        title: subSector.title,
        subSubSectors: subSubSectors
          .filter(
            (subSubSector) => subSubSector.subSector._id === subSector._id
          )
          .map((subSubSector) => ({
            _id: subSubSector._id,
            title: subSubSector.title,
            subSubSubSectors: subSubSubSectors
              .filter(
                (subSubSubSector) =>
                  subSubSubSector.subSubSector._id === subSubSector._id
              )
              .map((subSubSubSector) => ({
                _id: subSubSubSector._id,
                title: subSubSubSector.title,
              })),
          })),
      })),
  }));

  return groupedSectors;
};
