function validateEdit(documentNumber) {
  let inputData = { columns: {} };

  // find index of row element in storedData

  const found = storedData.find(
    (post) => post.columns.documentNumber == documentNumber
  );
  const indexOfFound = storedData.indexOf(found);

  const HTMLCollection = document.querySelectorAll(
    `[data-rownumber="${documentNumber}"]`
  );

  const collection = [...HTMLCollection].splice(0, HTMLCollection.length - 2);

  // check if inputs are valid

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

  const validatedData = isCorrectInputType(collection);
  let alertMessage = "";
  for (const attribute in validatedData) {
    const element = validatedData[attribute];
    if (element === false) alertMessage += `${attribute} incorrectly set.\n`;
  }
  if (alertMessage.length > 0) alert(alertMessage);

  // add properties and new values to the inputData object
  collection.forEach((element) => {
    if (element.getAttribute("data-column") === "amount") {
      inputData.columns[element.getAttribute("data-column")] = parseFloat(
        element.value
      ).toLocaleString();
    } else {
      inputData.columns[element.getAttribute("data-column")] = element.value;
    }
  });
  inputData.editable = false;

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  // if (repeatedDocNumber(documentNumber)) {
  //   return alert("Document number is already used");
  // }

  // firstly, we want to save and store the input data in the inputData object
  // for (let i = 0; i < [...collection].length - 2; i++) {
  //   const element = [...collection][i];
  // }

  // insert new data as the first element in storedData array
  savePost(indexOfFound, inputData);
}
