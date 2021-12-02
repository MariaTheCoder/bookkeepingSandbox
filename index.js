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

  // use function down below to create new elements, to set inner text and append children to parent element
  const newDate = createAndAppendDivChild("div", storedData[0].date, newPost);
  const newText = createAndAppendDivChild("div", storedData[0].text, newPost);
  const newAmount = createAndAppendDivChild(
    "div",
    storedData[0].amount,
    newPost
  );
  const newCurrency = createAndAppendDivChild(
    "div",
    storedData[0].currency,
    newPost
  );
  const newAccount = createAndAppendDivChild(
    "div",
    storedData[0].account,
    newPost
  );
  const newOffsetAccount = createAndAppendDivChild(
    "div",
    storedData[0].offsetAccount,
    newPost
  );

  firstChildOfParentElement =
    document.getElementById("text").parentElement.parentElement.children[1];
  console.log(firstChildOfParentElement);

  // use insertBefore to place the most recently created post on top of existing posts
  // document
  //   .getElementById("date")
  //   .parentElement.parentElement.children[1].insertBefore(
  //     newDate,
  //     document.getElementById("date").parentElement.parentElement.children[1]
  //       .children[0]
  //   );
  // document
  //   .getElementById("text")
  //   .parentElement.parentElement.children[1].insertBefore(
  //     newText,
  //     document.getElementById("text").parentElement.parentElement.children[1]
  //       .children[0]
  //   );

  // document
  //   .getElementById("post-container")
  //   .insertBefore(
  //     newPost.children[0].innerText,
  //     document.getElementById("text").parentElement.parentElement.children[1]
  //       .children[0]
  //   );
});

function createAndAppendDivChild(tag, innerText, parent) {
  let element = document.createElement(tag);
  element.innerText = innerText;
  parent.appendChild(element);
  return element;
}
