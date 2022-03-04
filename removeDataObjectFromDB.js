function removeDataObjectFromDB(id) {
  for (let i = 0; i < storedData.length; i++) {
    const dataObject = storedData[i]["columns"];

    if (dataObject.documentNumber === id) {
      storedData.splice(i, 1);
    }
  }

  render();
}
