function createOnePost() {
  let inputData = {};

  if (!isInputFieldRequiredAndFilledOut())
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  if (repeatedDocNumber(document.getElementById("document-number").value)) {
    return alert("Document number is already used");
  }

  // show table and delete all button and hide default text
  document.getElementById("delete-button").classList.remove("hidden");
  document.getElementById("default-text").classList.add("hidden");

  // remove hidden class from all elements in the post-detail class
  const postDetails = document.getElementsByClassName("post-detail");
  for (let i = 0; i < postDetails.length; i++) {
    postDetails[i].classList.remove("hidden");
  }

  // firstly, we want to save and store the input data in the inputData object
  inputData = {
    documentNumber: document.getElementById("document-number").value,
    date: document.getElementById("date").value,
    text: document.getElementById("text").value,
    amount: Number(document.getElementById("amount").value).toFixed(2),
    currency: document.getElementById("currency").value,
    account: document.getElementById("account").value,
    offsetAccount: document.getElementById("offset-account").value,
    edit: false,
  };

  // insert new data as the first element in storedData array
  postNewPost2DB(inputData);
}
