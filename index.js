let inputData = {};
let storedData = [];

document.getElementById("save-button").addEventListener("click", function () {
  // firstly, we want to save and store the input data in the inputData object
  inputData = {
    date: document.getElementById("date").value,
    text: document.getElementById("text").value,
    amount: document.getElementById("amount").value,
    currency: document.getElementById("currency").value,
    account: document.getElementById("account").value,
    offsetAccount: document.getElementById("offset-account").value,
  };

  // print with console.log to ensure that the data looks right
  storedData.unshift(inputData);
  // console.log("inputData", inputData);
  console.log("storedData", storedData);

  // create a new post in the bookkeeping containing the saved information
  // use insertBefore to place the most recently created post on top of existing posts
  let newPost = document.createElement("p");
  newPost.innerText = storedData[0].text;
  document
    .getElementById("date")
    .parentElement.parentElement.children[1].insertBefore(
      newPost,
      document.getElementById("date").parentElement.parentElement.children[1]
        .children[0]
    );
});
