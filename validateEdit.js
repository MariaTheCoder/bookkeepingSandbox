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
      inputData.columns[element.getAttribute("data-column")] = element.value;
    } else {
      inputData.columns[element.getAttribute("data-column")] = element.value;
    }
  });
  inputData.editable = false;

  // transfer the index of changed data inside of the storedData array as well as the edit inputData to the next function
  savePost(indexOfFound, inputData);
}
