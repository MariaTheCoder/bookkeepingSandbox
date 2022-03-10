function createDeleteAllPostsButton() {
  const buttonContainer = document.getElementById("delete-button-container");
  buttonContainer.innerHTML = "";

  const deleteAllPostsButton = document.createElement("button");
  deleteAllPostsButton.innerText = "Delete all posts";
  deleteAllPostsButton.setAttribute("id", "delete-all-posts");
  deleteAllPostsButton.setAttribute("class", "buttons");
  deleteAllPostsButton.addEventListener("click", clearDB);

  buttonContainer.appendChild(deleteAllPostsButton);
  return deleteAllPostsButton;
}
