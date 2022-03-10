function removeDataObjectFromDB(documentNumber) {
  for (let i = 0; i < storedData.length; i++) {
    const documentNumberOfStoredData = storedData[i].columns["documentNumber"];

    if (documentNumberOfStoredData === documentNumber) {
      storedData.splice(i, 1);
      i--;
    }
  }

  render();
}
