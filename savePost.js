function savePost(index, updatedData) {
  storedData.splice(index, 1, updatedData);

  // storedData[index].editable = false;

  render();
}
