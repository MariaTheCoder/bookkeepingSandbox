function render() {
  deleteAllPosts();

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("created-posts");
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
    const dataColumns = storedData[i].columns;

    if (dataObject.editable) {
      for (const property in dataColumns) {
        if (Object.hasOwnProperty.call(dataColumns, property)) {
          const value = dataColumns[property];

          if (property === "amount") {
            createAndAppendPostDetails(
              "input",
              value,
              property,
              postContainer,
              dataColumns.documentNumber
            );
          } else if (property === "currency" || property === "debitCredit") {
            createAndAppendPostDetails(
              "select",
              value,
              property,
              postContainer,
              dataColumns.documentNumber
            );
          } else {
            createAndAppendPostDetails(
              "input",
              value,
              property,
              postContainer,
              dataColumns.documentNumber
            );
          }
        }
      }
      createActionButtons("save", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    } else {
      for (const property in dataColumns) {
        if (Object.hasOwnProperty.call(dataColumns, property)) {
          const value = dataColumns[property];

          if (property === "amount") {
            createAndAppendPostDetails(
              "div",
              value,
              property,
              postContainer,
              dataColumns.documentNumber,
              dataObject.selected
            );
          } else {
            createAndAppendPostDetails(
              "div",
              value,
              property,
              postContainer,
              dataColumns.documentNumber,
              dataObject.selected
            );
          }
        }
      }
      createActionButtons("edit", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    }
  }
}
