let storedData = [];

const createNewPostButton = document.getElementById("create-new-post");
const deleteAllPostsButton = document.getElementById("delete-all-posts");

if (createNewPostButton)
  createNewPostButton.addEventListener("click", validateInput);
if (deleteAllPostsButton)
  deleteAllPostsButton.addEventListener("click", clearDB);
