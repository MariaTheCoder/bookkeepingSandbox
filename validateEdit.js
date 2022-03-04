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

  collection.forEach((element) => {
    inputData.columns[element.getAttribute("data-column")] = element.value;
  });
  inputData.editable = false;

  // if (!isInputFieldRequiredAndFilledOut(HTMLCollection))
  //   return alert("All input fields need to be filled out");

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
