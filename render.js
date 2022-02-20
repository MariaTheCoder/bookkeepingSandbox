function render() {
  deleteAllPosts();

  // create a container for new posts with a fitting id to display in document
  let postContainer = document.getElementById("display-bookkeeping");
  postContainer.classList.add("postContainer");

  for (let i = 0; i < storedData.length; i++) {
    const dataObject = storedData[i];

    if (dataObject.editable) {
      createAndAppendPostDetails(
        "input",
        dataObject.documentNumber,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        dataObject.date,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        dataObject.text,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        Number(dataObject.amount).toFixed(2),
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        dataObject.currency,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        dataObject.account,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "input",
        dataObject.offsetAccount,
        postContainer,
        dataObject.documentNumber
      );

      createActionButtons("save", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    } else {
      createAndAppendPostDetails(
        "div",
        dataObject.documentNumber,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        dataObject.date,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        dataObject.text,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        Number(dataObject.amount).toFixed(2),
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        dataObject.currency,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        dataObject.account,
        postContainer,
        dataObject.documentNumber
      );
      createAndAppendPostDetails(
        "div",
        dataObject.offsetAccount,
        postContainer,
        dataObject.documentNumber
      );
      createActionButtons("edit", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    }
  }
}
