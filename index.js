let storedData = [];

document.getElementById("save-button").addEventListener("click", createOnePost);

document
  .getElementById("delete-button")
  .addEventListener("click", deleteAllPosts);

function editOnePost() {
  //
}

function deleteOnePost() {
  //
}

function deleteAllPosts() {
  storedData = [];

  const elements = document.getElementsByClassName("post-detail");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

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
    delete: false,
  };

  // print with console.log to ensure that the data looks right
  storedData.unshift(inputData);

  // create a new post in the bookkeeping containing the saved information
  let newPost = document.createElement("div");
  newPost.className = "new-post";

  // use function down below to create new elements, to set inner text and append children to parent element
  createAndAppendPostDetails("div", storedData[0].documentNumber, newPost);
  createAndAppendPostDetails("div", storedData[0].date, newPost);
  createAndAppendPostDetails("div", storedData[0].text, newPost);
  createAndAppendPostDetails(
    "div",
    Number(storedData[0].amount).toFixed(2),
    newPost
  );
  createAndAppendPostDetails("div", storedData[0].currency, newPost);
  createAndAppendPostDetails("div", storedData[0].account, newPost);
  createAndAppendPostDetails("div", storedData[0].offsetAccount, newPost);
  createActionButtons("edit", newPost);
  createActionButtons("delete", newPost);

  // use insertBefore to append innerText of newPost children to element with id post-container
  document.getElementById("post-container").appendChild(newPost);
}

function createActionButtons(action, parent) {
  let newAction = document.createElement("span");

  if (action === "edit") {
    newAction.innerText = "🖉";
  }

  if (action === "delete") {
    newAction.innerText = "❌";
  }

  newAction.className = action + " post-detail";
  parent.appendChild(newAction);
  return newAction;
}

function createAndAppendPostDetails(tag, innerText, parent) {
  let element = document.createElement(tag);
  element.className = "post-detail";
  element.innerText = innerText;
  parent.appendChild(element);
  return element;
}

function repeatedDocNumber(docNumberInQuestion) {
  let storedData = [];

  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i];

    if (Number(post.documentNumber) === Number(docNumberInQuestion))
      return true;
  }
  return false;
}

function isInputFieldRequiredAndFilledOut() {
  const inputFields = document.getElementsByTagName("input");

  for (let i = 0; i < inputFields.length; i++) {
    const inputField = inputFields[i];
    if (!inputField.value && inputField.required) return false;
  }
  return true;
}
