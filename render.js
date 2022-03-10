function render() {
  deleteAllPosts();

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("created-posts");
  postContainer.classList.add("postContainer");

  const defaultText = createAndAppendDefaultText(
    "p",
    "default-text",
    "There are currently no posts...",
    "default-text-container"
  );

  if (storedData.length === 0) {
    document.getElementById("delete-all-posts").classList.add("hidden");
    defaultText.classList.remove("hidden");

    const postHeadersContainer = document.getElementById(
      "post-header-container"
    );
    postHeadersContainer.classList.add("hidden");
  } else {
    // show table and delete all button and hide default text
    document.getElementById("delete-all-posts").classList.remove("hidden");
    defaultText.classList.add("hidden");

    createAllHeaders();

    // remove hidden class from the post headers container
    const postHeadersContainer = document.getElementById(
      "post-header-container"
    );
    postHeadersContainer.classList.remove("hidden");
  }

  for (let i = 0; i < storedData.length; i++) {
    const dataObject = storedData[i];
    const dataColumns = storedData[i].columns;

    if (dataObject.editable) {
      for (const property in dataColumns) {
        const value = dataColumns[property];

        if (property === "amount") {
          createAndAppendPostDetails(
            "input",
            value,
            dataObject.postId,
            property,
            postContainer,
            dataColumns.documentNumber
          );
        } else if (property === "currency" || property === "debitCredit") {
          createAndAppendPostDetails(
            "select",
            value,
            dataObject.postId,
            property,
            postContainer,
            dataColumns.documentNumber
          );
        } else {
          createAndAppendPostDetails(
            "input",
            value,
            dataObject.postId,
            property,
            postContainer,
            dataColumns.documentNumber
          );
        }
      }
      createActionButtons("save", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    } else {
      for (const property in dataColumns) {
        const value = dataColumns[property];

        if (property === "amount") {
          createAndAppendPostDetails(
            "div",
            value,
            dataObject.postId,
            property,
            postContainer,
            dataColumns.documentNumber,
            dataObject.selected
          );
        } else {
          createAndAppendPostDetails(
            "div",
            value,
            dataObject.postId,
            property,
            postContainer,
            dataColumns.documentNumber,
            dataObject.selected
          );
        }
      }
      createActionButtons("edit", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    }
  }
}
