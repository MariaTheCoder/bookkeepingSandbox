let inputData = {};
let storedData = [];
let accountPlan = [
  {
    number: 1010,
    name: "sales of goods",
    inclVAT: true,
    currentTotal: 0,
    type: "income",
    default: "credit",
  },
  {
    number: 2040,
    name: "purchase of goods",
    inclVAT: true,
    currentTotal: 0,
    type: "expense",
    default: "debit",
  },
  {
    number: 6750,
    name: "bank account",
    inclVAT: false,
    currentTotal: 0,
    type: "liability",
    default: "debit",
  },
];

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
  if (!isInputFieldRequiredAndFilledOut())
    return alert("All input fields need to be filled out");

  // check if a post exists in the bookkeeping with the same document number, which is not allowed
  if (repeatedDocNumber(document.getElementById("document-number").value)) {
    return alert("Document number is already used");
  }

  // show table and delete all button and hide default text
  document.getElementById("post-container").classList.remove("hidden");
  document.getElementById("delete-button").classList.remove("hidden");
  document.getElementById("default-text").classList.add("hidden");

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
  let newPost = document.createElement("tr");
  newPost.className = "post";

  // use function down below to create new elements, to set inner text and append children to parent element
  createAndAppendPostDetails("td", storedData[0].documentNumber, newPost);
  createAndAppendPostDetails("td", storedData[0].date, newPost);
  createAndAppendPostDetails("td", storedData[0].text, newPost);
  createAndAppendPostDetails(
    "td",
    Number(storedData[0].amount).toFixed(2),
    newPost
  );
  createAndAppendPostDetails("td", storedData[0].currency, newPost);
  createAndAppendPostDetails("td", storedData[0].account, newPost);
  createAndAppendPostDetails("td", storedData[0].offsetAccount, newPost);
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

function sum(accountNumber) {
  let sum = 0;

  storedData.forEach((element) => {
    if (Number(element.account) === accountNumber)
      sum += Number(element.amount);
    if (Number(element.offsetAccount) === accountNumber)
      sum -= Number(element.amount);
  });

  return sum;
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

function isCreditDefault(accountInQuestion) {
  for (let i = 0; i < accountPlan.length; i++) {
    const account = accountPlan[i];

    if (account.number === accountInQuestion && account.default === "credit")
      return true;
  }
  return false;
}
