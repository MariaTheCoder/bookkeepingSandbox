function isInputFieldRequiredAndFilledOut(HTMLCollection) {
  for (let i = 0; i < HTMLCollection.length; i++) {
    const inputField = HTMLCollection[i];
    if (!inputField.value && inputField.required) return false;
  }
  return true;
}
