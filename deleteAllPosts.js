function deleteAllPosts() {
  storedData = [];

  const elements = document.getElementsByClassName("post-detail");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
