function validateEdit(documentNumber) {
  let inputData = {};

  const collection = document.querySelectorAll('[data-rownumber="1"]');

  if (!isInputFieldRequiredAndFilledOut(collection))
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  if (repeatedDocNumber(documentNumber)) {
    return alert("Document number is already used");
  }

  // firstly, we want to save and store the input data in the inputData object
  for (let i = 0; i < [...collection].length; i++) {
    const element = [...collection][i];

    console.log(element.value);
  }

  // insert new data as the first element in storedData array
  postNewPost2DB(inputData);
}
