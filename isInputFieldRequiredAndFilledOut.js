function isInputFieldRequiredAndFilledOut() {
  const inputFields = document.getElementsByTagName("input");

  for (let i = 0; i < inputFields.length; i++) {
    const inputField = inputFields[i];
    if (!inputField.value && inputField.required) return false;
  }
  return true;
}
