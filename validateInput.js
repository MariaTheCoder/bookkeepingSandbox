function validateInput() {
  let inputData = {};

  if (!isInputFieldRequiredAndFilledOut())
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  if (repeatedDocNumber(document.getElementById("documentNumber").value)) {
    return alert("Document number is already used");
  }

  // firstly, we want to save and store the input data in the inputData object
  inputData = {
    documentNumber: document.getElementById("documentNumber").value,
    date: document.getElementById("date").value,
    text: document.getElementById("text").value,
    account: document.getElementById("account").value,
    debitCredit: document.getElementById("debitCredit").value,
    amount: Number(document.getElementById("amount").value).toFixed(2),
    currency: document.getElementById("currency").value,
    offsetAccount: document.getElementById("offsetAccount").value,
    editable: false,
  };

  // insert new data as the first element in storedData array
  postNewPost2DB(inputData);
}
