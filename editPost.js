function editPost(postId) {
  const found = storedData.find((post) => post.postId == postId);

  if (found) {
    found.editable = true;
  }

  render();
}
