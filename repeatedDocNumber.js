function repeatedDocNumber(documentNumber) {
  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i]["columns"];

    if (Number(post.documentNumber) === Number(documentNumber)) return true;
  }
  return false;
}
