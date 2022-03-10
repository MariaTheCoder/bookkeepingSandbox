function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");
  const postId = dataObject.postId;
  const documentNumber = dataObject["columns"]["documentNumber"];

  if (action === "edit") {
    newAction.innerText = "✏️";
    newAction.setAttribute("post-id", postId);
    newAction.addEventListener("click", () => {
      editPost(postId);
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.setAttribute("post-id", postId);
    newAction.addEventListener("click", () =>
      removeDataObjectFromDB(documentNumber)
    );
  }

  if (action === "save") {
    newAction.innerText = "💾";
    newAction.setAttribute("post-id", postId);
    newAction.addEventListener("click", () => validateEdit(postId));
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
