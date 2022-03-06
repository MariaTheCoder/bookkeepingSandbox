function sortBy(arrayOfObjects, column) {
  const expectedTypes = {
    documentNumber: "number",
    date: "string",
    text: "string",
    account: "number",
    debitCredit: "string",
    amount: "number",
    currency: "string",
    offsetAccount: "number",
  };

  isSortOrderAscending[column] = !isSortOrderAscending[column];

  console.log(storedData[0].columns[column]);

  if (expectedTypes[column] === "string") {
    isSortOrderAscending[column]
      ? arrayOfObjects.sort((a, b) => a.columns[column] - b.columns[column])
      : arrayOfObjects.sort((a, b) => b.columns[column] - a.columns[column]);
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

  render();
}
