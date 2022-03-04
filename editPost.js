function editPost(documentNumber) {
  const found = storedData.find(
    (post) => post.columns.documentNumber == documentNumber
  );

  if (found) {
    found.editable = true;
  }

  render();
}
