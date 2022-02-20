function editPost(documentNumber) {
  const found = storedData.find(
    (post) => post.documentNumber === documentNumber
  );

  if (found) {
    found.editable = true;
  }

  render();
}
