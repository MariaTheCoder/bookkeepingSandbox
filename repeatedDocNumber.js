function repeatedDocNumber(documentNumber) {
  let postIfRepeated;

  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i]["columns"];

    Number(post.documentNumber) === Number(documentNumber)
      ? (postIfRepeated = post)
      : (postIfRepeated = null);
  }
  return postIfRepeated;
}
