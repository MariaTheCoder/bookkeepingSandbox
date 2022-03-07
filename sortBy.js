function sortBy(arrayOfObjects, column) {
  const expectedTypes = {
    documentNumber: "number",
    date: "date",
    text: "string",
    account: "number",
    debitCredit: "string",
    amount: "number",
    currency: "string",
    offsetAccount: "number",
  };

  isSortOrderAscending[column] = !isSortOrderAscending[column];

  console.log(storedData[0].columns[column]);

  if (expectedTypes[column] === "date") {
    isSortOrderAscending[column]
      ? arrayOfObjects.sort(
          (a, b) =>
            new Date(a.columns[column]).getTime() -
            new Date(b.columns[column]).getTime()
        )
      : arrayOfObjects.sort(
          (a, b) =>
            new Date(b.columns[column]).getTime() -
            new Date(a.columns[column]).getTime()
        );
  }
  if (expectedTypes[column] === "number") {
    isSortOrderAscending[column]
      ? arrayOfObjects.sort(
          (a, b) => Number(a.columns[column]) - Number(b.columns[column])
        )
      : arrayOfObjects.sort(
          (a, b) => Number(b.columns[column]) - Number(a.columns[column])
        );
  }
  if (expectedTypes[column] === "string") {
    isSortOrderAscending[column]
      ? arrayOfObjects.sort((a, b) =>
          a.columns[column].localeCompare(b.columns[column])
        )
      : arrayOfObjects.sort((a, b) =>
          b.columns[column].localeCompare(a.columns[column])
        );
  }
}
