function sortBy(arrayOfObjects, column) {
  isSortOrderAscending[column] = !isSortOrderAscending[column];

  isSortOrderAscending[column]
    ? arrayOfObjects.sort(
        (a, b) => Number(a.columns[column]) - Number(b.columns[column])
      )
    : arrayOfObjects.sort(
        (a, b) => Number(b.columns[column]) - Number(a.columns[column])
      );

  render();
}
