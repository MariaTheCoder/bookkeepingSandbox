let storedData = [];

const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");

if (saveButton) saveButton.addEventListener("click", createOnePost);
if (deleteButton) deleteButton.addEventListener("click", clearDB);
