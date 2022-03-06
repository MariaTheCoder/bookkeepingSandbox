let storedData = [];
let postId = 1;

const inputAccount = document.getElementById("account");
const createNewPostButton = document.getElementById("create-new-post");
const deleteAllPostsButton = document.getElementById("delete-all-posts");

// headers
const documentNumberHeader = document.getElementById("document_number");

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
  documentNumberHeader.addEventListener("click", () =>
    console.log("I was clicked!")
  );
