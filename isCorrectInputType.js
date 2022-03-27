function isCorrectInputType(inputColumnData) {
  const expectedTypes = {
    documentNumber: "number",
    account: "number",
    amount: "number",
    offsetAccount: "number",
    text: "string",
  };
  const validatorObject = {};

  for (let i = 0; i < inputColumnData.length; i++) {
    const element = inputColumnData[i];
    const attribute = element.getAttribute("data-column");
    validatorObject[attribute] = true;

    if (
      (expectedTypes[attribute] === "string" &&
        expectedTypes[attribute] !== typeof element.value) ||
      (expectedTypes[attribute] === "number" &&
        isNaN(parseFloat(element.value)) &&
        attribute === "amount") ||
      (expectedTypes[attribute] === "number" &&
        attribute !== "amount" &&
        !!parseFloat(element.value) &&
        parseFloat(element.value) <= 0)
    )
      validatorObject[attribute] = false;
  }
  return validatorObject;
}
