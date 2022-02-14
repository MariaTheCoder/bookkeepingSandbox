const storedData = [];

document.getElementById("save-button").addEventListener("click", createOnePost);

document
  .getElementById("delete-button")
  .addEventListener("click", deleteAllPosts);

function editOnePost() {
  console.log("edit command clicked!");
}

function deleteOnePost() {
  console.log("delete command clicked!");
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

  // insert new data as the first element in storedData array
  storedData.unshift(inputData);

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("display-bookkeeping");
  postContainer.classList.add("postContainer");

  // use function down below to create new elements, to set inner text and append children to parent element
  createAndAppendPostDetails(
    "div",
    storedData[0].documentNumber,
    postContainer
  );
  createAndAppendPostDetails("div", storedData[0].date, postContainer);
  createAndAppendPostDetails("div", storedData[0].text, postContainer);
  createAndAppendPostDetails(
    "div",
    Number(storedData[0].amount).toFixed(2),
    postContainer
  );
  createAndAppendPostDetails("div", storedData[0].currency, postContainer);
  createAndAppendPostDetails("div", storedData[0].account, postContainer);
  createAndAppendPostDetails("div", storedData[0].offsetAccount, postContainer);
  createActionButtons("edit", postContainer);
  createActionButtons("delete", postContainer);
}

function createActionButtons(action, parent) {
  let newAction = document.createElement("span");

  if (action === "edit") {
    newAction.innerText = "🖉";
    newAction.addEventListener("click", () => {
      console.log("clicked edit");
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.addEventListener("click", () => {
      console.log("clicked close");
    });
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}

function createAndAppendPostDetails(tag, innerText, parent) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");
  post.innerText = innerText;
  parent.appendChild(post);
  return post;
}

function repeatedDocNumber(docNumberInQuestion) {
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
