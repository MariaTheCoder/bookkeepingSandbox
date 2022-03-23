function removeDataObjectFromDB(postId) {
  for (let i = 0; i < storedData.length; i++) {
    const postIdOfStoredData = storedData[i].postId;

    if (postIdOfStoredData === postId) {
      storedData.splice(i, 1);
      i--;
    }
  }

  render();
}
