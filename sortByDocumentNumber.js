function sortByDocumentNumber(storedData) {
  storedData.sort(
    (a, b) =>
      Number(a.columns.documentNumber) - Number(b.columns.documentNumber)
  );
}
