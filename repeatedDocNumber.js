function repeatedDocNumber(documentNumber) {
  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i];

    if (Number(post.documentNumber) === Number(documentNumber)) return true;
  }
  return false;
}
