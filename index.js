let inputData = {};

document.getElementById("save-button").addEventListener("click", function () {
  inputData.date = document.getElementById("date").value;
  inputData.text = document.getElementById("text").value;
  inputData.amount = document.getElementById("amount").value;
  inputData.currency = document.getElementById("currency").value;
  inputData.account = document.getElementById("account").value;
  inputData.offsetAccount = document.getElementById("offset-account").value;
  console.log(inputData);
});
