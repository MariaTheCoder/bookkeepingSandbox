function validateInput() {
  let inputData = { columns: {} };

  const inputFields = document.getElementsByTagName("input");

  if (!isInputFieldRequiredAndFilledOut(inputFields))
    return alert("All input fields need to be filled out");

  // firstly, we want to save and store the input data in the inputData object
  inputData.columns.documentNumber =
    document.getElementById("documentNumber").value;

  // check if a post exists in the bookkeeping with the same document number, we want to reuse the already stored date
  let postIfRepeated = repeatedDocNumber(
    document.getElementById("documentNumber").value
  );
  postIfRepeated != null
    ? (inputData.columns.date = postIfRepeated.date)
    : (inputData.columns.date = document.getElementById("date").value);

  inputData.columns.text = document.getElementById("text").value;
  inputData.columns.account = document.getElementById("account").value;
  inputData.columns.debitCredit = document.getElementById("debitCredit").value;
  inputData.columns.amount = document.getElementById("amount").value;
  inputData.columns.currency = document.getElementById("currency").value;
  inputData.columns.offsetAccount =
    document.getElementById("offsetAccount").value;
  inputData.editable = false;
  inputData.postId = postId++;

  // insert new data as the first element in stored
  postNewPost2DB(inputData);
}
