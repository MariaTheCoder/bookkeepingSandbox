let storedData = [];

const inputAccount = document.getElementById("account");
const createNewPostButton = document.getElementById("create-new-post");
const deleteAllPostsButton = document.getElementById("delete-all-posts");

if (inputAccount)
  inputAccount.addEventListener("keyup", () => {
    isCreditDefault(Number(inputAccount.value))
      ? (document.getElementById("credit-debit").selectedIndex = "1")
      : (document.getElementById("credit-debit").selectedIndex = "0");
  });

if (createNewPostButton)
  createNewPostButton.addEventListener("click", validateInput);
if (deleteAllPostsButton)
  deleteAllPostsButton.addEventListener("click", clearDB);
