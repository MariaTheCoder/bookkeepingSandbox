let storedData = [];
const isSortOrderAscending = {
  documentNumber: false,
  date: false,
  text: false,
  account: false,
  debitCredit: false,
  amount: false,
  currency: false,
  offsetAccount: false,
};
let postId = 1;

const inputAccount = document.getElementById("account");
const createNewPostButton = document.getElementById("create-new-post");
const deleteAllPostsButton = document.getElementById("delete-all-posts");

// headers
const documentNumberHeader = document.getElementById("documentNumber-header");
const dateHeader = document.getElementById("date-header");
const textHeader = document.getElementById("text-header");
const accountHeader = document.getElementById("account-header");
const debitCreditHeader = document.getElementById("debitCredit-header");
const amountHeader = document.getElementById("amount-header");
const currencyHeader = document.getElementById("currency-header");
const offsetAccountHeader = document.getElementById("offsetAccount-header");

if (inputAccount)
  inputAccount.addEventListener("keyup", () => {
    isCreditDefault(Number(inputAccount.value))
      ? (document.getElementById("debitCredit").selectedIndex = "1")
      : (document.getElementById("debitCredit").selectedIndex = "0");
  });

if (createNewPostButton)
  createNewPostButton.addEventListener("click", validateInput);
if (deleteAllPostsButton)
  deleteAllPostsButton.addEventListener("click", clearDB);

if (documentNumberHeader)
  documentNumberHeader.addEventListener("click", () => {
    sortBy(storedData, "documentNumber");
    render();
  });

if (dateHeader) {
  dateHeader.addEventListener("click", () => {
    sortBy(storedData, "date");
    render();
  });
}

if (textHeader) {
  textHeader.addEventListener("click", () => {
    sortBy(storedData, "text");
    render();
  });
}

if (accountHeader) {
  accountHeader.addEventListener("click", () => {
    sortBy(storedData, "account");
    render();
  });
}

if (debitCreditHeader) {
  debitCreditHeader.addEventListener("click", () => {
    sortBy(storedData, "debitCredit");
    render();
  });
}

if (amountHeader) {
  amountHeader.addEventListener("click", () => {
    sortBy(storedData, "amount");
    render();
  });
}

if (currencyHeader) {
  currencyHeader.addEventListener("click", () => {
    sortBy(storedData, "currency");
    render();
  });
}

if (offsetAccountHeader) {
  offsetAccountHeader.addEventListener("click", () => {
    sortBy(storedData, "offsetAccount");
    render();
  });
}
