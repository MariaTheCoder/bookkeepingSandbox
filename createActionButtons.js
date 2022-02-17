function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");

  if (action === "edit") {
    newAction.innerText = "🖉";
    newAction.setAttribute("data-rowNumber", dataObject.documentNumber);
    newAction.addEventListener("click", () => {
      console.log("clicked edit");
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.setAttribute("data-rowNumber", dataObject.documentNumber);
    newAction.addEventListener("click", () => {
      storedData = storedData.filter(
        (post) => post.documentNumber !== dataObject.documentNumber
      );
      console.log("post deleted");
    });
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
