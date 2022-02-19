function createActionButtons(action, parent, dataObject) {
  let newAction = document.createElement("span");
  const id = dataObject.documentNumber;

  if (action === "edit") {
    newAction.innerText = "🖉";
    newAction.setAttribute("data-rownumber", id);
    newAction.addEventListener("click", () => {
      // const posts = document.getElementsByClassName("post-detail");
      const posts = document.querySelectorAll(`[data-rownumber*="${id}"]`);

      for (let i = 0; i < posts.length; i++) {
        posts[i].remove();
      }
    });
  }

  if (action === "delete") {
    newAction.innerText = "❌";
    newAction.setAttribute("data-rownumber", id);
    newAction.addEventListener("click", () => {
      removeDataObjectFromDB(dataObject.documentNumber);
    });
  }

  newAction.className = action + " post-detail";
  newAction.id = action;
  parent.appendChild(newAction);
  return newAction;
}
