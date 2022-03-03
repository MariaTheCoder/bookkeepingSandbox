function validateEdit(documentNumber) {
  let inputData = {};

  const collection = document.querySelectorAll(
    `[data-rownumber="${documentNumber}"]`
  );

  if (!isInputFieldRequiredAndFilledOut(collection))
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  // if (repeatedDocNumber(documentNumber)) {
  //   return alert("Document number is already used");
  // }

  // firstly, we want to save and store the input data in the inputData object
  for (let i = 0; i < [...collection].length - 2; i++) {
    const element = [...collection][i];

    console.log(element.value);
  }

  // insert new data as the first element in storedData array
  // savePost(inputData);
}
