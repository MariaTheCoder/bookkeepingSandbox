function render() {
  deleteAllPosts();

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("display-bookkeeping");
  postContainer.classList.add("postContainer");

  if (storedData.length === 0) {
    document.getElementById("delete-all-posts").classList.add("hidden");
    document.getElementById("default-text").classList.remove("hidden");

    const postHeaders = document.querySelectorAll(".post-headers");
    postHeaders.forEach((element) => {
      element.classList.add("hidden");
    });
  } else {
    // show table and delete all button and hide default text
    document.getElementById("delete-all-posts").classList.remove("hidden");
    document.getElementById("default-text").classList.add("hidden");

    // remove hidden class from all elements in the post-detail class
    const postHeaders = document.querySelectorAll(".post-headers");
    postHeaders.forEach((element) => {
      element.classList.remove("hidden");
    });
  }

  for (let i = 0; i < storedData.length; i++) {
    const dataObject = storedData[i];

    if (dataObject.editable) {
      for (const property in dataObject) {
        if (Object.hasOwnProperty.call(dataObject, property)) {
          const value = dataObject[property];
          if (property === "editable") continue;

          if (property === "amount") {
            createAndAppendPostDetails(
              "input",
              Number(value).toFixed(2),
              property,
              postContainer,
              dataObject.documentNumber
            );
          } else if (property === "currency" || property === "debitCredit") {
            createAndAppendPostDetails(
              "select",
              value,
              property,
              postContainer,
              dataObject.documentNumber
            );
          } else {
            createAndAppendPostDetails(
              "input",
              value,
              property,
              postContainer,
              dataObject.documentNumber
            );
          }
        }
      }
      createActionButtons("save", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    } else {
      for (const property in dataObject) {
        if (Object.hasOwnProperty.call(dataObject, property)) {
          const value = dataObject[property];

          if (property !== "editable") {
            if (property === "amount") {
              createAndAppendPostDetails(
                "div",
                Number(value).toFixed(2),
                property,
                postContainer,
                dataObject.documentNumber,
                dataObject.selected
              );
            } else {
              createAndAppendPostDetails(
                "div",
                value,
                property,
                postContainer,
                dataObject.documentNumber,
                dataObject.selected
              );
            }
          }
        }
      }
      createActionButtons("edit", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    }
  }
}
