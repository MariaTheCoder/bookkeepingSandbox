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
        isNaN(parseFloat(element.value)))
    )
      validatorObject[attribute] = false;
  }
  return validatorObject;
}
