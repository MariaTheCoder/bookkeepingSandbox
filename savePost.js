function savePost(documentNumber) {
  const found = storedData.find(
    (post) => post.documentNumber === documentNumber
  );

  if (found) {
    found.editable = false;
  }

  render();
}
