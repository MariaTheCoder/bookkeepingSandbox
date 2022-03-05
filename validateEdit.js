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
    let returnValue = true;
    const validatorObject = {};
    for (let i = 0; i < inputColumnData.length; i++) {
      const element = inputColumnData[i];

      if (
        element.getAttribute("data-column") === "debitCredit" ||
        element.getAttribute("data-column") === "currency" ||
        element.getAttribute("data-column") === "date"
      ) {
        validatorObject[element.getAttribute("data-column")] = "not checked";
        continue;
      }

      if (
        element.getAttribute("data-column") === "documentNumber" ||
        element.getAttribute("data-column") === "account" ||
        element.getAttribute("data-column") === "amount" ||
        element.getAttribute("data-column") === "offsetAccount"
      ) {
        returnValue = !isNaN(parseFloat(element.value));
        validatorObject[element.getAttribute("data-column")] = returnValue;
      }
      if (element.getAttribute("data-column") === "text") {
        returnValue = typeof element.value === "string";
        validatorObject[element.getAttribute("data-column")] = returnValue;
      }

      // if (returnValue === false) return returnValue;
    }
    console.log(validatorObject);
    // return returnValue;
  }

  if (!isCorrectInputType(collection)) {
    return alert("Incorrect input types");
  }

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
