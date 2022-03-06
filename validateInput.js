function validateInput() {
  let inputData = { columns: {} };

  const inputFields = document.getElementsByTagName("input");

  if (!isInputFieldRequiredAndFilledOut(inputFields))
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  if (repeatedDocNumber(document.getElementById("documentNumber").value)) {
    return alert("Document number is already used");
  }

  // firstly, we want to save and store the input data in the inputData object
  inputData.columns.documentNumber =
    document.getElementById("documentNumber").value;
  inputData.columns.date = document.getElementById("date").value;
  inputData.columns.text = document.getElementById("text").value;
  inputData.columns.account = document.getElementById("account").value;
  inputData.columns.debitCredit = document.getElementById("debitCredit").value;
  inputData.columns.amount = parseFloat(
    document.getElementById("amount").value
  ).toLocaleString("de-DE");
  inputData.columns.currency = document.getElementById("currency").value;
  inputData.columns.offsetAccount =
    document.getElementById("offsetAccount").value;
  inputData.editable = false;
  inputData.postId = postId++;

  // insert new data as the first element in storedData array
  postNewPost2DB(inputData);
}
