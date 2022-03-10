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

if (inputAccount)
  inputAccount.addEventListener("keyup", () => {
    isCreditDefault(Number(inputAccount.value))
      ? (document.getElementById("debitCredit").selectedIndex = "1")
      : (document.getElementById("debitCredit").selectedIndex = "0");
  });

if (createNewPostButton)
  createNewPostButton.addEventListener("click", validateInput);
