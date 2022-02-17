function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");

  if (action === "edit") {
    newAction.innerText = "🖉";
    newAction.addEventListener("click", () => {
      console.log("clicked edit");
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.addEventListener("click", () => {
      storedData = storedData.filter(
        (post) => post.documentNumber !== dataObject.documentNumber
      );
    });
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
