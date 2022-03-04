function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");
  const documentNumber = dataObject.columns.documentNumber;

  if (action === "edit") {
    newAction.innerText = "✏️";
    newAction.setAttribute("data-rownumber", documentNumber);
    newAction.addEventListener("click", () => {
      editPost(documentNumber);
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.setAttribute("data-rownumber", documentNumber);
    newAction.addEventListener("click", () => {
      removeDataObjectFromDB(documentNumber);
    });
  }

  if (action === "save") {
    newAction.innerText = "💾";
    newAction.setAttribute("data-rownumber", documentNumber);
    newAction.addEventListener("click", () => validateEdit(documentNumber));
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
