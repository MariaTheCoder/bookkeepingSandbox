function repeatedDocNumber(docNumberInQuestion) {
  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i];

    if (Number(post.documentNumber) === Number(docNumberInQuestion))
      return true;
  }
  return false;
}
