function sortBy(arrayOfObjects, column, order = "ASC") {
  if (order === "DESC") {
    return arrayOfObjects.sort(
      (a, b) => Number(b.columns[column]) - Number(a.columns[column])
    );
  }
  return arrayOfObjects.sort(
    (a, b) => Number(a.columns[column]) - Number(b.columns[column])
  );
}
