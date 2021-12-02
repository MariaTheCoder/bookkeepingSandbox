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

  // create a new post in the bookkeeping containing the saved information
  let newPost = document.createElement("div");
  newPost.className = "post";

  // use function down below to create new elements, to set inner text and append children to parent element
  createAndAppendDivChild("div", storedData[0].date, newPost);
  createAndAppendDivChild("div", storedData[0].text, newPost);
  createAndAppendDivChild("div", storedData[0].amount, newPost);
  createAndAppendDivChild("div", storedData[0].currency, newPost);
  createAndAppendDivChild("div", storedData[0].account, newPost);
  createAndAppendDivChild("div", storedData[0].offsetAccount, newPost);

  console.log("newPost: ", newPost);

  // use insertBefore to append innerText of newPost children to element with id post-container
  document
    .getElementById("post-container")
    .insertBefore(
      newPost,
      document.getElementById("post-container").children[0]
    );
});

function createAndAppendDivChild(tag, innerText, parent) {
  let element = document.createElement(tag);
  element.innerText = innerText;
  parent.appendChild(element);
  return element;
}
