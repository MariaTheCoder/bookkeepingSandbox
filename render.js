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
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        dataObject.date,
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        dataObject.text,
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        Number(dataObject.amount).toFixed(2),
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        dataObject.currency,
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        dataObject.account,
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createAndAppendPostDetails(
        "div",
        dataObject.offsetAccount,
        postContainer,
        dataObject.documentNumber,
        dataObject.selected
      );
      createActionButtons("edit", postContainer, dataObject);
      createActionButtons("delete", postContainer, dataObject);
    }
  }
}
