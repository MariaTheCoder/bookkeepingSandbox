function render() {
  deleteAllPosts();

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("created-posts");
  postContainer.classList.add("postContainer");

  if (storedData.length === 0) {
    // if no posts are found in the database, create a default text to display in document
    createAndAppendDefaultText(
      "p",
      "default-text",
      "There are currently no posts...",
      "default-text-container"
    );
  } else {
    // if posts are found in the database, create headers and a button to delete all posts upon click
    createAllHeaders();
    createDeleteAllPostsButton();
  }

  for (let i = 0; i < storedData.length; i++) {
    const dataObject = storedData[i];
    const dataColumns = storedData[i].columns;
    const row = document.createElement("div");
    row.classList.add("post-row");

    if (i === storedData.length - 1) {
      dataObject.isLastPost = true;
    } else {
      dataObject.isLastPost = false;
    }

    if (dataObject.editable) {
      for (const property in dataColumns) {
        const value = dataColumns[property];

        if (property === "amount") {
          createAndAppendPostDetails(
            "input",
            value,
            dataObject.postId,
            property,
            row,
            dataObject.isLastPost,
            dataColumns.documentNumber
          );
        } else if (property === "currency" || property === "debitCredit") {
          createAndAppendPostDetails(
            "select",
            value,
            dataObject.postId,
            property,
            row,
            dataObject.isLastPost,
            dataColumns.documentNumber
          );
        } else {
          createAndAppendPostDetails(
            "input",
            value,
            dataObject.postId,
            property,
            row,
            dataObject.isLastPost,
            dataColumns.documentNumber
          );
        }
      }
      createActionButtons("save", row, dataObject);
      createActionButtons("delete", row, dataObject);
    } else {
      for (const property in dataColumns) {
        const value = dataColumns[property];

        createAndAppendPostDetails(
          "div",
          value,
          dataObject.postId,
          property,
          row,
          dataColumns.documentNumber,
          dataObject.isLastPost,
          dataObject.selected
        );
      }
      createActionButtons("edit", row, dataObject);
      createActionButtons("delete", row, dataObject);
    }

    postContainer.appendChild(row);
  }
}
