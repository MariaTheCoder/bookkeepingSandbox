function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");
  const documentNumber = dataObject.documentNumber;

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
      removeDataObjectFromDB(dataObject.documentNumber);
    });
  }

  if (action === "save") {
    newAction.innerText = "💾";
    newAction.setAttribute("data-rownumber", documentNumber);
    newAction.addEventListener("click", () =>
      validateEdit(dataObject.documentNumber)
    );
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
